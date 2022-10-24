// LOOPS
// repetation of the program


// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

// var cityToCheck = prompt("Which city you live?");


// if (cityToCheck === cleanestCities[0]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[1]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[2]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[3]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[4]) {
//     alert("It's one of the cleanest cities");
// } else {
//     alert("It's not on the list");
// }

// For loop
// a for loop that accomplishes most of what the verbose code in the example above accomplishes.

// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }

// Let me break down the first line for you.
// The first line begins with the keyword for.
// The three specifications that define the loop are inside the parentheses.



// Chapter 2

// Flags, Booleans, array length,
// and loopus interruptus

var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

var cityToCheck = prompt("Which city you live?");


// var matchFound = false;

// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck == cleanestCities[i]) {
//         matchFound = true;
//         alert("It's one of the cleanest cities");
//     }
// }
// if (matchFound == false) {
//     alert("It's not on the list");
// }


// we find no of elements in an array by using .length() method
var numElements = cleanestCities.length;

var matchFound = false;

for (var i = 0; i <= 4; i++) {
    if (cityToCheck == cleanestCities[i]) {
        matchFound = true;
        alert("It's one of the cleanest cities");
    }
}
if (matchFound == false) {
    alert("It's not on the list");
}



// The next problem with our example is that it potentially wastes computing cycles.
// Suppose on the second loop a match is found and the alert displays. The way the loop is
// coded, the loop goes on looping all the way to the end. This is unnecessary, since we got our
// answer in the second loop. The problem is solved with the keyword break.

var matchFound = false;
for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        matchFound = true;
        alert("It's one of the cleanest cities");
        break;  //for stop our computational time
    }
}

if (matchFound === false) {
    alert("It's noot on the list");
}



