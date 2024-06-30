//All async operation will have the callback function
const fs = require('fs');
console.log("Start!");//1
setTimeout(function(){
    console.log("Hi execute after 4 sec");
    setTimeout(function(){
        console.log("Hi execute after 9 sec")
    },9000);
},4000);//5

setTimeout(function(){
    console.log("Hi execute after 7 sec");
},7000);//4

fs.readFile("index.txt","utf-8",function(err,data){
    console.log("reading file...")
    if(data){
        data = data + "Thank you";
        fs.writeFile("index.txt",data, (err) => {
            console.log("Writting");
            console.log(data)
        })
    }else{
        console.log("Error while reading")
    }
});//3

console.log("End!");//2
// console.log("Start!");
// const allDone = function(){
//     console.log("Hi")
// }
// setTimeout(allDone,2000);
// console.log("End!");

