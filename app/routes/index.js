const express = require("express")
const router = express.Router();
const authorsRoutes = require("./authorRoutes")

// localhost:3000/api/v1/
router.get("/", (req,res)=>{
    res.status(200).json({"success":true})
})

router.use("/authors", authorsRoutes)

module.exports = router;