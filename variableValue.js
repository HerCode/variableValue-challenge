// In this assignment, you will need to work through each of the steps and figure out what the value of the variable equals each
// step of the way. Once you have worked out what the value is at each step, send an email to your instructor letting us
// know what you think the answers are.

//variable created:
var x = 3;
var aVariable = x;
console.log(aVariable);


//step 1, what is x after the changes in the code below?
var x = 3;
var aSum = (x + x);
console.log(aSum);


//step 2, what is x after the changes in the code below?
var x = 3;
var loops = x + 1;
var loop = function() {
    for (var i = 0; i < 4; i++) {
        console.log("It's a loop!");
    }
};
loop();

//step 3, what is x after the changes in the code below?
var x = 3;

if(x > 10){
    console.log("Wrong, x = 2.");
} else {
    console.log("Correct, x = 3!");
}

//step 4, what is x after the changes in the code below?
var x = 3;
console.log(doubleIt(x));
/* return value * 2 */
function doubleIt(value){
    return value * 2;
}

//step 5, what is x after the changes in the code below?
var x = 3;
var array = [1];
for (var i = 0; i < array.length; i++) {
    console.log(i + " = " + array[i]);
}
var x = 3;
var array = [2];
for (var i = 0; i < array.length; i++) {
    console.log(i + " = " + array[i]);
}
var x = 3;
var array = [3];
for (var i = 0; i < array.length; i++) {
    console.log(i + " = " + array[i]);
}
