// Challenge 1
// Changing Case


// what if she enters "cheyenne" instead of "Cheyenne"—as some users inevitably will?
// When that happens, there will be no match. JavaScript is literal-minded.


var checkCity = prompt("Where you Live?");
var cleanestCities = ["Karachi", "Lahore", "Queta", "Islamabad"];

for (let i = 0; i < cleanestCities.length; i++) {
    if (cleanestCities[i].toLowerCase() === checkCity.toLowerCase()) {
        alert(checkCity + " is one of the cleanest city! ");
        break;
    }
}





