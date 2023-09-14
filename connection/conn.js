const mongoose= require("mongoose");

mongoose.connect("mongodb+srv://mayushar8434:Monumayush99@cluster0.98l1tpv.mongodb.net/LMS",
{useNewUrlParser:true},{useUnifiedTopology:true})
.then(()=>{
    console.log(`Connection successful`);
}).catch((e)=>{
    console.log(`no connection`);
});