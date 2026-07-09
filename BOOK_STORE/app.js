import express from 'express';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, 'data', 'books.json');

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


const readBooksFromFile = () => {
    if (!fs.existsSync(DATA_FILE)) return [];
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    return data ? JSON.parse(data) : [];
};

const writeBooksToFile = (books) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(books, null, 2), 'utf-8');
};

// 1. READ ALL BOOKS (Home Page)
app.get('/', (req, res) => {
    const books = readBooksFromFile();
    res.render('index', { books });
});

// 2. SEARCH ONLINE BOOKS (Open Library API નો ઉપયોગ)
app.get('/search-online', async (req, res) => {
    const query = req.query.q || '';
    let results = [];
    
    if (query) {
        try {
            // Open Library API માંથી ડેટા ફેચ કરીએ છીએ (આમાં 429 ની એરર બહુ ઓછી આવે છે)
            const apiUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=6`;
            const response = await axios.get(apiUrl);
            
            if (response.data && response.data.docs) {
                results = response.data.docs.map(item => {
                    // કવર ઈમેજ મેળવવા માટે ID ચેક કરીએ
                    const coverId = item.cover_i;
                    const thumbnail = coverId 
                        ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` 
                        : 'https://via.placeholder.com/128x192?text=No+Cover';

                    return {
                        title: item.title || 'Unknown Title',
                        authors: item.author_name ? item.author_name.join(', ') : 'Unknown Author',
                        description: item.first_publish_year 
                            ? `First published in ${item.first_publish_year}. Edition count: ${item.edition_count || 1}`
                            : 'No description available.',
                        thumbnail: thumbnail
                    };
                });
            }
        } catch (error) {
            console.error("Error fetching from online API:", error.message);
        }
    }
    
    res.render('search', { query, results });
});

// 3. CREATE BOOK
app.post('/books/add', (req, res) => {
    const { title, authors, description, thumbnail } = req.body;
    const books = readBooksFromFile();
    
    const newBook = {
        id: Date.now().toString(), 
        title,
        authors,
        description,
        thumbnail: thumbnail || 'https://via.placeholder.com/128x192?text=No+Cover'
    };
    
    books.push(newBook);
    writeBooksToFile(books);
    res.redirect('/');
});

// 4. READ SINGLE BOOK DETAILS
app.get('/books/:id', (req, res) => {
    const books = readBooksFromFile();
    const book = books.find(b => b.id === req.params.id);
    
    if (!book) return res.status(404).send('Book not found!');
    res.render('details', { book });
});

// 5. EDIT BOOK FORM
app.get('/books/edit/:id', (req, res) => {
    const books = readBooksFromFile();
    const book = books.find(b => b.id === req.params.id);
    
    if (!book) return res.status(404).send('Book not found!');
    res.render('edit', { book });
});

// 6. UPDATE BOOK
app.post('/books/update/:id', (req, res) => {
    const { title, authors, description, thumbnail } = req.body;
    let books = readBooksFromFile();
    
    books = books.map(b => {
        if (b.id === req.params.id) {
            return { ...b, title, authors, description, thumbnail };
        }
        return b;
    });
    
    writeBooksToFile(books);
    res.redirect(`/books/${req.params.id}`);
});

// 7. DELETE BOOK
app.post('/books/delete/:id', (req, res) => {
    let books = readBooksFromFile();
    books = books.filter(b => b.id !== req.params.id);
    writeBooksToFile(books);
    res.redirect('/');
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});