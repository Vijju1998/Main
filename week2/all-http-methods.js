const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
app.use(bodyParser.json());
//dummay object

const users = [{
    id: 1,
    name: 'john',
    kidney: [{
        healthy: true
    }]
}]

//POST method
app.post('/',(req,res) => {
    const healthy = req.body.kidney;
    console.log(users[0].kidney)
    users[0].kidney.push({
        healthy
    });

    res.send({
        msg:"Kidney added successfully!",
        users
    })
});
//GET method
app.get('/',(req,res) => {
    const numOfKidneys =  users[0].kidney.length;
    let numOfhealthyKidney = 0;
    users[0].kidney.forEach(ele =>{
        if(ele.healthy){
            numOfhealthyKidney += 1;
        }
    });
    const numofUnhealtyKidney = numOfKidneys - numOfhealthyKidney;
    res.send({
        numOfKidneys,
        numOfhealthyKidney,
        numofUnhealtyKidney
    });
});
//put method
app.put('/',(req,res)=> {
    if(calculateUnhealthyKideny()){
        users[0].kidney.forEach(ele => {
            ele.healthy = true;
        });
        res.send({
            msg:"Kidney hase been replaced",
            users
        })
    }else{
        res.status(411).json({
            msg : "No Unhealthy kidney"
        });
        
    }
});
//delete method
app.delete('/',(req,res) => {
    const newKidneys = [];
    if(calculateUnhealthyKideny()){
        users[0].kidney.forEach(ele =>{
            if(ele.healthy){
                newKidneys.push(ele.kidney.healthy)
            }
        })
        users[0].kidney = newKidneys;
        res.send({
            msg:"Kidney hase been deleted",
            users
        })
    }else{
        res.status(411).json({
            msg : "No Unhealthy kidney"
        });
        
    }
    

});

function calculateUnhealthyKideny(){
    let unhealtyKindney = false;
    users[0].kidney.forEach(ele => {
        if(!ele.healthy){
            unhealtyKindney = true;
        }
    });
    return unhealtyKindney;
}


app.listen(PORT,function(){
    console.log(`Application is running in this port ${PORT}`)
});