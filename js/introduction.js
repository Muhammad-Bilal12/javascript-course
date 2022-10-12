
// Introduction
/*
alert("Hello World!");
alert("Program run Succesfully");
*/

// Variables var
// variable is just like container used to store values
/*
var a = 56;
var b = 24;
var name = "bilal"
var cal = 14;

console.log(a, b, name, cal);
*/

// var v/s let v/s const
// var is globally scoped we access is where we want

// var is old version
//var a = 24;  //we declare same identifier at multiple time
//var a = 56;
// console.log(a);

// we used let insted of var

// let has a blocked scoped means its only access on the block
// {
//     let num = 23;
//     let name1 = "hello";
//     console.log(num, name1);
// }
// console.log(name1, num);  // we got an error


// const we define only one time
// we are not able to update this value

// const pi = 3.174
// pi = 24; // get an error
// console.log(pi);


// primitive vs non-primitive data type

// primitive data type which is already define by language
// nn ss bb u

// let n1 = null; let n2 = 3;
// let s1 = Symbol("Hello World"); let s2 = "This is Bilal";
// let b1 = true; let b2 = BigInt("234");
// let u = undefined

// console.log(n1, n2, s1, s2, b1, b2, u);

// non primitive data types

// objects array
/*
const arr = [1, 2, 3, 45, 6, 5];
console.log(arr);
console.log(arr[1]);

const data = {
    name: "Bilal",
    marks: 234,
    roll: "csc22s115"
}

console.log(data['marks']);
console.log(data.roll);
*/


// chapter 1 Practice set 1

// Q1

let mystr = "hello"
console.log(mystr + 5);  //hello5

// Q2
// typeof to find the type of data
console.log(typeof (mystr + 5)); // string

// Q3
const obj = {
    name: "hello",
    marks: 234,
};

// obj = 55; // uncaught type error .

// Q4
obj['add'] = "Q4 value added"
console.log(obj); //true

const words = {
    buy: "obtain in exchange for payment",
    sell: "give or hand over (something) in exchange for money",
    purchase: 'acquire (something) by paying for it',
    market: "a regular gathering of people for the purchase and sale of provisions, livestock, and other commodities.",
    metaverse: "a virtual-reality space in which users can interact with a computer-generated environment and other users."

}

console.log(words['buy']);
console.log(words.market);
console.log(words.purchase);
console.log(words['sell']);
console.log(words['metaverse']);
