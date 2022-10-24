

// Arrays in javascript



var city0 = "Atlanta";
var city1 = "Baltimore";
var city2 = "Chicago";
var city3 = "Denver";
var city4 = "Los Angeles";
var city5 = "Seattle";

// alert("Welcome to " + city3);


var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

// alert("Welcome to " + cities[4]);


var mixedArray = [1, "Bob", "Now is", true];


// Things to keep in mind:
// The first item always has an index of 0, not 1. This means that if the last item in the list
// has an index of 9, there are 10 items in the list.
// The same naming rules you learned for ordinary variables apply. Only letters, numbers, $
// and _ are legal. The first character can't be a number. No spaces.
// Coders often prefer to make array names plural—cities instead of city, for example—
// since an array is a list of things.
// Like an ordinary variable, you declare an array only once. If you assign new values to an
// array that has already been declared, you drop the var


// Adding and Removing Elements

// first we declare empty array
var pets = [];

// assign values tothis empty array

pets[0] = 'dogs';
pets[1] = 'cat';
pets[2] = 'hen';
pets[3] = 'parrot';
pets[6] = 'horse';

console.log("the new array");
console.log(pets);

// update the array elements
console.log("the updated array");
pets[1] = 'fish';
pets[3] = 'Duck';
console.log(pets);


// arr.pop()
// Using the keyword, pop, you can remove the last element of an array

pets.pop();
// after remove last elements
console.log("Remove last elements");
console.log(pets);

// Using the keyword, push, you can add one or more elements to the end of an array
// arr.push()

pets.push("snake", 'lizards');
// after add elements at the last
console.log("Add elements on last");
console.log(pets);



// Removing, inserting,
// and extracting elements


// Use the shift method to remove an element from the beginning of an array.
pets.shift();

console.log("Remove elements at start");
console.log(pets);


// To add one or more elements to the beginning of an array, use the unshift method.
pets.unshift("lion", "tiger");

console.log("add two elements at start");
console.log(pets);


// The splice() method adds new items to an array.

console.log("the spilce method");
pets.splice(2, 1, "pig", "duck", "emu");
console.log(pets);

console.log("the spilce method to delete elements");
pets.splice(2, 3);
console.log(pets);


// The slice() method slices out a piece of an array.


console.log("the slice methods to copy chunk of one array to another array");
var noPets = pets.slice(0, 2);
console.log(noPets);


/**
 * Note
The slice() method creates a new array.

The slice() method does not remove any elements from the source array.
 */

