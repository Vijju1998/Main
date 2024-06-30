const express = require("express");
const app = express();
const path = require('path');

const port = 3000;//port where my application listen

app.get('/',function(req,res){
        res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port,function(){
    console.log(`Example app listening on this port ${port}`)
});