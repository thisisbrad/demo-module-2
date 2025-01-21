const Book = require("../models/Book")
const Author = require("../models/Authors")

const createBook = async (req,res) => {
    // console.log(req.body.book)
    const {book} = req.body
    const author = await Author.findById(book.author) // find the author
    console.log(">>>", author)
    const newBook = await Book.create(book) // make use a new book
    // console.log(">>>", newBook)
    author.books.push(newBook._id)
    await author.save()
    console.log(">>>", author)
    res.status(200).json({data: newBook,"success":true})
}

const getBookById = async (req,res)=>{
    console.log(req.params.id)
    try {
        const book = await Book.findById(req.params.id).populate("author")
    res.status(200).json({"data": book,"success":true})
    } catch (error) {
        // look for mongoose errors
        console.log(">>>",error)
    }
}

// const updateAuthor = (req,res)=>{
//     console.log(req.params.id)
//     res.status(200).json({"author":req.method,"id":req.params.id,"success":true})
// }

// const deleteAuthor = (req,res)=>{
//     console.log(req.params.id)
//     res.status(200).json({"author":req.method,"id":req.params.id,"success":true})
// }

const getAllBooks = async (req,res)=>{
    const books = await Book.find({})
    res.status(200).json({"data": books,"success":true})
}

module.exports = {createBook, getAllBooks,getBookById}