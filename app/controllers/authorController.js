const Author = require("../models/Authors")

const createAuthor = async (req,res) => {
    console.log(req.body.author)
    const {author} = req.body
    // const author = req.body.author
    const newAuthor = await Author.create(author)
    res.status(200).json({data: newAuthor,"success":true})
}

const getAuthorById = async (req,res)=>{
    console.log(req.params.id)
    try {
        const author = await Author.findById(req.params.id).populate("books")
    res.status(200).json({"data": author,"success":true})
    } catch (error) {
        // look for mongoose errors
    }
    
}

const updateAuthor = (req,res)=>{
    console.log(req.params.id)
    res.status(200).json({"author":req.method,"id":req.params.id,"success":true})
}

const deleteAuthor = (req,res)=>{
    console.log(req.params.id)
    res.status(200).json({"author":req.method,"id":req.params.id,"success":true})
}

const getAllAuthors = async (req,res)=>{
    const authors = await Author.find({})
    res.status(200).json({"data": authors,"success":true})
}

module.exports = {createAuthor, getAllAuthors, getAuthorById, updateAuthor, deleteAuthor}