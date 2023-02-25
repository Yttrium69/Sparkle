const express=require('express');
const app=express();
const path=require('path');

var http=require('http').Server(app);

const port=7000;

app.use("/Sparkle", express.static(__dirname + '/build'));
app.get("/",
    (req, res)=>{
        res.sendFile(path.join(__dirname, "/build/index.html"));
    }
);


http.listen(port, ()=>{
    console.log('lets go...');
})