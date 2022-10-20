

// Comparision Operator

// * When you're comparing strings, the equality operator is case-sensitive. "Rose" does no equal "rose."

/*
> is greater than
< is less than
>= is greater than or equal to
<= is less than or equal to

** Just as the double equal sign can usually be used instead of the triple equal sign, != can
usually be used instead of !==. In the exercises, I'll ask you to stick to !==. **

*/


var check = ("bilal" === "Bilal");  //false : case sensitive
console.log("bilal === Bilal " + check);

check = ("22" === 22); //false : type are change
console.log(`"22" === 22 ` + check);

check = (22 === 22); //true : type and value are same
console.log(check);

check = ("234" == 234); //true : value  same
console.log(check);


// !== not equal and type also change

check = (2 != 3);   // true
console.log(check);
check = (2 !== "2");   // true : value same type different and not equal
console.log(check);

// 

check = 2 > 3;
console.log(check);


check = 2 < 3;
console.log(check);


check = 2 >= 3;
console.log(check);


check = 2 <= 3;
console.log(check);
