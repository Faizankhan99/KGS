const express = require("express")
const Course = require("../model/Coures")
const jwt = require("jsonwebtoken")
const app = express.Router();

app.get("/", async (req, res) => {
    const user = await Course.find({})
    res.send(user)
})


app.post("/", async (req, res) => { 
    const { title,price,description,duration,date} = req.body;
    try {
        const course = await Course.create({ title,price, description,duration,date,imgUrl:"https://picsum.photos/200/300.jpg" })
        // blog.save()
        res.send({message:"Course Added succesfully"})
    } catch (err) { 
        res.send(err.message)
    }
})


app.delete("/:id", async(req, res) => { 
    const { id } = req.params
    try {
        const course = await Course.deleteOne({ _id:id })
        res.send("course Deleted Succesfull")
    } catch (err) {
        res.send(err.message)
}

})

module.exports = app

