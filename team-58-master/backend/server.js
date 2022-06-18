var express = require("express");
var cors = require('cors')
var app = express();
app.use(cors())
var mongoose = require("mongoose");
const HttpStatusCodeOK = 200;
const HttpStatusCodeBADREQUEST = 400;
// var mongoose = require("mongoose");
const r = {
    rest: (resObj, s = false, m, d = null) => {
        resObj.status(HttpStatusCodeOK).send({
            status: s,
            message: m,
            data: d,
            error: s ? null : HttpStatusCodeBADREQUEST
        });
    }
};

var Article = require("./models/article.js")
app.get("/",function(req,res){
    res.send("Working fine");
})

app.get('/explore',function(req,res){
    Article.find({},function(err,foundArticle){
        if(!err){
            console.log(foundArticle)
            r.rest(res,true,"Articles",foundArticle)
            // res.render("Explore.js",{foundArticleinexplore:foundArticle});
        }
        else{
            console.log(err);
        }
    })
});

app.get("/article",function(req,res){
    Article.findById(req.query.id,function(err,foundedArticle){
        if(!err){
            r.rest(res,true,foundedArticle)
            //res.render("article.js",{data:foundedArticle});
        }
        else{
            console.log("error");
        }
    })
})
app.listen(7000,function(){
    console.log("Server started on port 3000");
})