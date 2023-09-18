import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import Blog from "./model/Blog.js";

const app = express();
app.set("view engine", "ejs");

mongoose.connect("url");

const blogWhere = await Blog.where("author").equals("Palak")
const titles = blogWhere.map(document => document.title);

console.log(titles[0]);

app.get("/" ,function(req,res){
    res.render("index",{mydata : titles[0]})
});

app.listen(3000,function(){
    console.log("The server is started at port 3000");
})