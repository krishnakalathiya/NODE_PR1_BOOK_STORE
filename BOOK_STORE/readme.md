# 📚 Book Management Project 

This is a simple and beginner-friendly **Book Management** web application built using **Node.js, Express, MongoDB (Mongoose), and EJS**. The project uses **MongoDB Atlas (Cloud)** as its database. To prevent connection or network resolution errors, Google DNS is configured directly within the code.

---

## 🚀 Features
* **Add Book:** Users can input the Book Name, Author Name, and Price to add a new book.
* **View All Books:** All added books are displayed together on the home page in a clean table format.
* **View Details (Card Design):** Clicking the "View" button opens the specific book's details in a simple card layout.
* **Edit Book:** Clicking "Edit" populates the book's existing data back into the form for easy updating.
* **Delete Book:** Users can remove a book from the list, complete with a JavaScript confirmation alert box before deletion.

---

## 📂 Folder Structure
This project follows the **MVC (Model-View-Controller)** architecture pattern to keep the code organized:
```text
book-project/
├── config/
│   └── db.js            # MongoDB connection configuration
├── controllers/
│   └── bookController.js# Core logic for CRUD operations
├── models/
│   └── bookModel.js     # MongoDB Schema (Data Structure)
├── routes/
│   └── bookRoutes.js    # Express URL path routing
├── views/               # EJS template files (HTML/CSS)
│   ├── index.ejs        # Main page containing the Form and Table
│   ├── edit.ejs         # Edit form page
│   └── view.ejs         # Detailed book information card
├── .env                 # Environment variables for sensitive keys
├── package.json         # Project dependencies and details
└── server.js            # Main entry point and server startup file

---
