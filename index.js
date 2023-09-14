const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
require("./connection/conn");
const Register = require("./model/register");
const Contact = require("./model/contact");

const static_path = path.join(__dirname,"./");
app.use(express.static(static_path));
// app.set("view engine", "html");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/register ", (req, res)=>{
    res.render("register");
});
app.get("/contact ", (req, res)=>{
    res.render("contact");
});

app.post("/register",(req, res)=>{
    try {
        const password=req.body.password;
        const cnfpassword=req.body.cnfpassword;

        if(password===cnfpassword){
            const registerUser = new Register({
                name : req.body.name, 
                email : req.body.email, 
                mobno : req.body.mobile, 
                password : password, 
                cnfpassword : cnfpassword, 
                dob : req.body.dob, 
                city : req.body.city 
            })

            registerUser.save();
            return res.redirect('home.html');
        }else{
            res.send("password and confirm password should be same");
        }
    } catch (error) {
        res.status(400).send(error); 
    }
})

app.post("/login", async (req, res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({email:email});

        if(useremail.password === password){
            return res.redirect('home.html')
        }else{
            res.send("Invalid user or password");
        }

    } catch (error) {
        res.send("Invalid email or username");
    }

});

app.post("/contact", (req,res)=>{
    const contactForm = new Contact({
        name : req.body.name,
        email : req.body.email,
        message : req.body.message
    })
    contactForm.save();
    res.send("Thank you for your concern.")
})

app.listen(3000,function(){
    console.log("Server is running on 3000");
})