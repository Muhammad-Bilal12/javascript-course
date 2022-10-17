console.log("Javascript Refreshment");


// varialbles


// obj
// let obj = {
//  as : this,
//     a :" hello",
//     b : 123,
//     func : myfun=>{
//         console.log("object function "+ this);
//     }
// }
// console.log(obj.as);
// console.log(obj.func());


// event listner

function show() {
    alert("HELLO")
}

document.getElementById("head").addEventListener('click',show)


document.querySelector('h1').addEventListener('mouseenter',function() {
    console.log("hover");
});


// Function

// callbackFunction

// setTimeout(() => {
//     console.log("Call back function")
// }, 3000);
  
// console.log("this run first");



