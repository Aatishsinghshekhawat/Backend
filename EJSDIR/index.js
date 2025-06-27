// Learning about EJS

const express = require("express");
const app = express();
const path = require("path");


const port = 8080;

app.set("view engine" , "ejs");

app.set("views", path.join(__dirname, "/views"));

app.get('/', (req , res)  => {
   res.render("home.ejs");
});

app.get('/ig/:username', (req,res) =>{
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    res.render("insta.ejs", { data});
})

app.get('/rolldice', (req, res) =>{
    let dicVal = Math.floor(Math.random() * 6) + 1 ; // let assume this data is coming from database
    res.render("rolldice.ejs" , { dicVal})
});
app.listen( port, () =>{
    console.log(`app is listening on port ${port}`);
});
