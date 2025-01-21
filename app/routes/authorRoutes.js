const express = require("express")
const router = express.Router();

const {createAuthor, getAllAuthors, getAuthorById, updateAuthor, deleteAuthor} = require("../controllers/authorController")

// localhost:3000/api/v1/authors
router.get("/", getAllAuthors)

router.post("/", createAuthor)

router.get("/:id", getAuthorById)

router.put("/:id", updateAuthor)

router.delete("/:id", deleteAuthor)

module.exports = router;