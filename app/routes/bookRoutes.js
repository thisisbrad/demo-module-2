const express = require("express")
const router = express.Router();

const {createBook, getAllBooks,getBookById} = require("../controllers/bookController")

// localhost:3000/api/v1/authors
router.get("/", getAllBooks)

router.post("/", createBook)

router.get("/:id", getBookById)

module.exports = router;