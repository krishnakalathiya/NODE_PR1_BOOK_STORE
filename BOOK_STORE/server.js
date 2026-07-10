require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');

const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();

// Database Connection
connectDB();

// Middlewares
app.use(express.urlencoded({ extended: true })); 
app.set('view engine', 'ejs');

// Routes
app.use('/', bookRoutes);

// Server Port
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});