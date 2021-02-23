/*----------------------------*/
//AF Lab 2 - Complete Answer.
/*----------------------------*/

function getValue(){
    let value = 0;
    setTimeout(function(){
        value = 10;
    }, 1000);
    return value;
}

//Updated program to print the value 10
function getValue(callback){
    let value = 0;
    setTimeout(function(){
        value = 10;
        callback(value);
    }, 1000);
    return value;
}

//Second method getNewValue
function getNewValue(value, callback){
    setTimeout(function (){
        callback(value * 100);
    }, 1000)
}

//This method is get called from the updated program above.
getValue(function(value){
    console.log("Call back function - " + value);
});

//Calling first method and using the return value calling the second method
getValue(function(value){
    getNewValue(value, function (newValue){
        console.log("Nested callback function calling - " + newValue);
    })
});



//returns the value 0
console.log("Normal function calling - " + getValue());

//return the value 10




/*
---Note---
Why the value is 0 instead of 10
Because of the time out it will print the 0 because after 4th line
It will execute the return value.

Time can be greater than or equal 1 second.

call back function (Always a function) we don't have to change the code each time
it is kind of opening the code for make changers.
We are passing a function pointer.

*/