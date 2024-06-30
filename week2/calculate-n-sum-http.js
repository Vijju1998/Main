const express = require('express');
const app = express();
const PORT = 3000;

function calculateSum(n){
    let sum = 0;
    for(let i = 0; i<n; i++){
        sum += i;
    }
    return sum;
}

app.get('/',function(req,res){
    const {n} = req.query;
    const sum = calculateSum(n);
    res.send(sum.toString());
    
});

app.listen(PORT,function(){
    console.log(`Application is running in this port ${PORT}`)
});