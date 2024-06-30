//it is  syntaaticcal  sugar on top of Async.  It is clear way to write the callback

const { log } = require("console");

// function mySetTimeOut(fn,duration){
//     setTimeout(fn,duration)
// }
// mySetTimeOut(function(){
//     console.log("Hi there")
// },1000);


// function mySetTimeOut(duration){
//        return new Promise(function(resolve){
//         setTimeout(resolve,duration)
//        });
// }

// mySetTimeOut(1000).then(function(){
//     console.log("data")
// })



// const  p = new Promise(function(resolve){
//     resolve("Hi");
//     p.then(function(data){
//         log(data)
//     })
// })


class Promise{
    constructor(fn){
        this.state = "Pending";
        this.value = undefined;

        const resolve = (value) => {
            if(this.state === "Pending"){
                this.state = "fulfilled";
                this.value = value;
            }
        }
        const reject = (reason) => {
            if(this.state === "Pending"){
                this.state = "rejected";
                this.reason = reason;
            }
        } 
        try{
            fn(resolve,reject)
        }catch(error){
            reject(error)
        }
    }
}





