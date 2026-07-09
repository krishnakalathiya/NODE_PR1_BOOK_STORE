# 📚 Book Management System

A simple and user-friendly **Book Management System** built with **Node.js, Express.js, EJS, Axios, and JSON File Storage**. This project allows users to search books online using the **Open Library API** and maintain their own personal book collection with complete CRUD operations.

---

# 📖 Project Overview

The Book Management System is designed to help users search books from the internet and save their favorite books locally.

Instead of using a database like MongoDB or MySQL, this project stores all book data inside a local **JSON file**, making it lightweight and beginner-friendly.

Users can:

- Search books online
- Add books to local collection
- View book details
- Edit book information
- Delete books
- Manage their own digital library

---

# 🎯 Main Aim of the Project

The primary aim of this project is to demonstrate the implementation of complete **CRUD Operations** using **Node.js and Express.js** while integrating an external API.

This project also helps students understand:

- RESTful Routing
- API Integration
- JSON File Handling
- Express Middleware
- Dynamic Pages using EJS
- MVC-like Folder Structure
- Backend Development Basics

---

# 🚀 Features

## 📚 Book Collection

- View all saved books
- Book thumbnail support
- Clean card layout

---

## 🔍 Search Online Books

Search books using the Open Library API.

Example:

Harry Potter

Results include:

- Book Title
- Author Name
- Cover Image
- Publication Information

---

## ➕ Add Book

Users can save any searched book into the local collection.

Stored Information:

- Title
- Authors
- Description
- Thumbnail

---

## 📖 Book Details

View complete information of any saved book.

---

## ✏ Edit Book

Update:

- Title
- Author
- Description
- Thumbnail

---

## ❌ Delete Book

Delete books permanently from local storage.

---

# 🛠 Technologies Used

| Technology | Purpose |
|------------|----------|
| Node.js | Backend Runtime |
| Express.js | Web Framework |
| EJS | Template Engine |
| Axios | API Requests |
| HTML5 | Structure |
| CSS3 | Styling |
| JavaScript | Functionality |
| JSON | Local Database |
| Open Library API | Online Book Search |

---

# 📂 Project Structure

```
Book-Management-System
│
├── data
│   └── books.json
│
├── public
│   ├── css
│   ├── images
│   └── js
│
├── views
│   ├── index.ejs
│   ├── search.ejs
│   ├── details.ejs
│   └── edit.ejs
│
├── app.js
├── package.json
└── README.md
```

---

# ⚙ Installation

## Step 1

Clone Repository

```bash
git clone <repository-url>
```

---

## Step 2

Install Packages

```bash
npm install
```

---

## Step 3

Run Project

```bash
npm start
```

or

```bash
node app.js
```

---

## Step 4

Open Browser

```
http://localhost:3000
```

---

# 📌 Project Flow

```
                User
                  │
                  ▼
         Home Page (All Books)
                  │
      ┌───────────┼───────────┐
      ▼           ▼           ▼
 Search Books   View Book   Add Book
      │             │
      ▼             ▼
Open Library API  Book Details
      │             │
      ▼             ▼
 Search Results  Edit/Delete
      │
      ▼
 Save Book
      │
      ▼
 books.json
```

---

# 🔄 CRUD Flow

### CREATE

User adds a new book.

↓

Book information is stored inside

```
books.json
```

---

### READ

Home page loads all books from

```
books.json
```

---

### UPDATE

User edits a book.

↓

Updated information is written back into

```
books.json
```

---

### DELETE

User deletes a book.

↓

Book is removed from

```
books.json
```

---

# 🌐 API Used

## Open Library Search API

```
https://openlibrary.org/search.json
```

Example

```
https://openlibrary.org/search.json?q=harry+potter
```

---


## Search Page

Save image:

```
public/images/search.png
```

```md
![Search Page](public/images/search.png)
```

---

## Book Details

```
public/images/details.png
```

```md
![Book Details](public/images/details.png)
```

---

## Edit Book

```
public/images/edit.png
```

```md
![Edit Book](public/images/edit.png)
```

---

# 📊 Data Storage

Books are stored locally in

```
data/books.json
```

Example

```json
[
  {
    "id": "174545612345",
    "title": "Harry Potter",
    "authors": "J. K. Rowling",
    "description": "Fantasy Novel",
    "thumbnail": "image-url"
  }
]
```

---

# 🧠 Concepts Covered

- Node.js
- Express.js
- Routing
- Middleware
- REST API
- Axios
- JSON File Handling
- CRUD Operations
- Template Engine (EJS)
- Dynamic Rendering
- File System Module
- Async/Await

---

# 🔮 Future Improvements

The following features can be added in future versions:

✅ MongoDB Database Integration

✅ User Authentication (Login & Signup)

✅ JWT Authentication

✅ Admin Dashboard

✅ User Dashboard

✅ Book Categories

✅ Book Ratings

✅ Review System

✅ Favorite Books

✅ Reading History

✅ Search Filters

✅ Pagination

✅ Dark Mode

✅ Responsive UI Improvements

✅ Cloud Image Upload (Cloudinary)

✅ Book Recommendation System

✅ Export Book List as PDF

✅ Import Books using CSV

✅ Barcode Scanner

✅ Email Notifications

✅ Wishlist

✅ Reading Progress Tracker

✅ Docker Deployment

✅ AWS/Vercel Deployment

---

# 💡 Learning Outcomes

After completing this project, students will understand:

- Building Express Applications
- API Integration
- CRUD Operations
- File System Handling
- EJS Rendering
- Backend Routing
- JSON Data Storage
- Project Structure
- MVC Concepts
- Server-side Development

---

# 👨‍💻 Author

**Krishna Kalathiya**

Backend Developer

Node.js | Express.js | JavaScript

---

# 📄 License

This project is created for learning and educational purposes.

Free to use and modify.