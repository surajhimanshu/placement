const express = require("express");
const mongoose = require("mongoose");
const app = express();
const connect = require("./configs/db");
const ShortUrl = require("./models/url.model")
const custom = "suraj";
require("dotenv").config();

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.get("/", async (req,res) => {
    const shortUrls = await ShortUrl.find()
    res.render('index', {shortUrls:shortUrls})
})

app.post("/shortUrls", async (req, res) => {
    try{
        await ShortUrl.create({full:req.body.fullUrl })
        res.redirect('/')
    }catch(e){
        //
    }
})

app.get("/:shortUrl", async(req,res)=> {
   const shortURL = await ShortUrl.findOne({short:req.params.shortUrl});
   if(!shortURL){
       return res.status(400).json({})
   }
    shortURL.clicks++;
    shortURL.save();
   res.redirect(shortURL.full)
})

app.listen(process.env.PORT, async() => {
    try{
        await connect();
        console.log("running on 5000");
    }catch(e){
        console.log(e.message);
    }
})