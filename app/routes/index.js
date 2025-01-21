const express = require("express")
const router = express.Router();
const authorsRoutes = require("./authorRoutes")
const booksRoutes = require("./bookRoutes")

// localhost:3000/api/v1/
router.get("/", (req,res)=>{
    res.status(200).json({"success":true})
})

router.use("/authors", authorsRoutes)
router.use("/books", booksRoutes)

module.exports = router;