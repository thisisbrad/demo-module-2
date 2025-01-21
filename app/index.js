const express = require("express");
const app = express();
const router = require("./routes")

app.use(express.json());
app.use("/api/v1", router)

app.use("*", (req,res)=>{
    res.status(404).json({"error": "request path not found", "success": false})
})

module.exports = app;