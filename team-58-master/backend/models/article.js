var mongoose = require("mongoose");

mongoose.connect("mongodb+srv://payas-admin1:R5Eye1NugFp8syjp@cluster0.uuikj.mongodb.net/CodeForGood2022");

mongoose.connection
    .once('open',()=> console.log("connected"))
    .on('error',(error)=>{
        console.log(error)
    });

const ArticleSchema = mongoose.Schema({
    name : String,
    title: String,
    content : String,
    link : String,
    image : String,
    wikipedia_summary : String,
    summarized_article : String,
});

ArticleSchema.method("toJSON",function(){
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
});

var Article = mongoose.model("Article",ArticleSchema,'CodeForGood2022');

module.exports = Article;