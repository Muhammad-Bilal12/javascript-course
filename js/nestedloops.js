// 20 for loops nested

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

var fullNames = [];

for (var i = 0; i < firstNames.length; i++) {
    for (var j = 0; j < lastNames.length; j++) {
        fullNames.push(firstNames[i] + lastNames[j]);
    }
}


for (let i = 0; i < fullNames.length; i++) {
    console.log(fullNames[i]);
}




