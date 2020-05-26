var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var note = [
    {
        title: "Example",
        text: "Note content here",
        id: "Example"
    }
]

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "./public/index.html"))
});

app.get("/notes", function(req,res){
    res.sendFile(path.join(__dirname, "/public/notes.html"))
});

app.get("/api/notes", function(req, res){
    return res.json(note);
});

app.delete("/api/notes/:id", function(req, res) {
    return res.json(note)
})

app.post("/api/notes", function(req, res) {
    var request = req.body;
    note.push(request);
    res.json(true);
})

// listening
app.listen(PORT,function(){
    console.log("App listening on PORT " + PORT);
});