const express = require("express");
const app = express();

let port = 8080;

app.listen(port, ()=>
{
    console.log(`App listening on port ${port}`);
});

// app.get("/", (req, res) =>{
//     res.send("you contacted root path")
// });

// app.get("/apple", (req, res) =>{
//     res.send("you contacted apple path")
// });

// app.get("/orange", (req, res) =>{
//     res.send("you contacted orange path")
// });

// * is for all path

// app.get("*", (req, res) =>{
//     res.send("this path does not exist");
// });

// same thing with POST

// app.post("/", (req, res) =>{
//     res.send("You send a POST request");
// });

// app.use((req, res) => {
//     console.log("request recevied");
//     let code = "<h1>Fruits</h1> <ul> <li>apple</li> <li>orange</li></ul>"
//     res.send(code);
// });


// path parameters

app.get("/", (req, res) =>{
    res.send("you contacted root path")
});

app.get("/:username/:id", (req, res) =>{
    let {username, id} = req.params;
    let htmlStr = `<h2>username =  ${username} , id = ${id}.</h2>`
    res.send(htmlStr);
});

// Query selector
app.get("/search", (req, res) =>{
    let {q} = req.query;
    if(!q){
        res.send(`<h2>nothing searched</h2>`)
    }
    res.send(`Search results for ${q}`)
});
