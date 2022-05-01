// var http = require('http')
// var fs = require('fs');
// const localhost = '127.0.0.1';
// const { listen } = require('express/lib/application');
// const res = require('express/lib/response');
// const home = fs.readFileSync('./home.html')
// const about = fs.readFileSync('./about.html')
// const contact = fs.readFileSync('./contactus.html')
// const team = fs.readFileSync('./team.html')
// const server = http.createServer((req,res)=>{
//   console.log(req.url);
//   res.statusCode = 200;
//   res.setHeader('Content-Type','text/html');
//   res.end(home)
// }).listen(8080)





const path = require('path')
const express = require('express');
const { join, dirname } = require('path');
const app = express();

//serve the static files
app.use('/static',express.static('static'))


app.get("/", (req, res) => {
    res
        .status(200)
        .sendFile(path.join(__dirname, "public", "home.html"));
});

app.get("/home", (req, res) => {
    res
        .status(200)
        .sendFile(path.join(__dirname, "public", "home.html"));
});

app.get("/about", (req, res) => {
    res
        .status(200)
        .sendFile(path.join(__dirname, "public", "about.html"));
});


app.get("/team", (req, res) => {
    res
        .status(200)
        .sendFile(path.join(__dirname, "public", "team.html"));
});

app.get("/contactus", (req, res) => {
    res
        .status(200)
        .sendFile(path.join(__dirname, "public", "contactus.html"));
});




const localhost = "127.0.0.1"
const port = 8080;
app.listen(port, () => { console.log(`The code is running at http://${localhost}:${port}`) })







