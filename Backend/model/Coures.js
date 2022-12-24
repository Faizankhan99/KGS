const { mongoose, model, Schema } =require("mongoose")

const CourseData = new Schema({
    title: { type: "String", required: true },
    imgUrl: { type:"String", required: true },
    price:{type:"String",require:true},
    description: { type: "String", require: true },
    duration:{type:"String",require:true},
    date: { type: "String" }
})

const Course = model("course",CourseData)
module.exports = Course