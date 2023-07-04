const express = require("express");
const router = express.Router();

const addBookController = require("./addBook");
const getBookController = require("./getBook");
const getBooksController = require("./getBooks");
const deleteBookController = require("./deleteBook");

router.get("/", (req, res, next) => {
    res.status(200).json({ message: "Hello from the server" });
    next();
});

router.post("/add-book", addBookController.addBook);

router.get("/get-book/:id", getBookController.getBook);

router.get("/get-books", getBooksController.getBooks);

router.delete("/delete-book/:id", deleteBookController.deleteBook);

module.exports = router;