const Book = require('../models/bookModel');

// 1. view books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.render('index', { books });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// 2. add book
exports.addBook = async (req, res) => {
    try {
        const { name, author, price } = req.body;
        const newBook = new Book({ name, author, price });
        await newBook.save();
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// 3. View book
exports.viewBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.render('view', { book });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// 4. Edit form
exports.getEditForm = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.render('edit', { book });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// 5. Update Book
exports.updateBook = async (req, res) => {
    try {
        const { name, author, price } = req.body;
        await Book.findByIdAndUpdate(req.params.id, { name, author, price });
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// 6. Delete Book
exports.deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err.message);
    }
};