// Concatenating text strings


//  process to join one or more string
var username = "Ayesha";
alert("Thanks " + username + " !")

/*Using the plus operator, the code combines—concatenates—three elements into the
message: the string "Thanks, " plus the string represented by the variable userName plus the
string "!
" */


var message = "Thanks, ";
var userName = "Susan";
var banger = "!";
var customMess = message + userName + banger;
alert(customMess);

// If you put numbers in quotes, JavaScript concatenates them as strings rather than adding
// them. This code...
alert("2" + "2");

// If you mix strings and numbers...
alert("2 plus 2 equals " + 2 + 2);

// ...JavaScript automatically converts the numbers to strings, and displays the message "2
// plus 2 equals 22".