const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getAllBooks);
router.post('/add', bookController.addBook);
router.get('/view/:id', bookController.viewBook);
router.get('/edit/:id', bookController.getEditForm);
router.post('/edit/:id', bookController.updateBook);
router.get('/delete/:id', bookController.deleteBook);

module.exports = router;