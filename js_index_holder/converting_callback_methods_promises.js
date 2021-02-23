/*----------------------------*/
//AF Lab 2 - Complete Answer.
/*----------------------------*/

//Defining a promise
let promise = new Promise(function (resolve, reject){
    resolve();
    reject();
});

function getValue(){
    let value = 0;
    setTimeout(function(){
        value = 10;
    }, 1000);
    return value;
}

//Updated program to print the value 10
function getValue(){
    let value = 0;
    // resolve is for success scenarios.
    // reject is for errors.
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            value = 10;
            resolve(value);
        }, 1000);
    })
}

//Second method getNewValue
function getNewValue(value){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            resolve(value * 100)
        }, 1000)
    })
}

//Calling first method and using the return value calling the second method
getValue().then(function (value){
    return getNewValue(value)
}).then(function (value){
    console.log("Printing value by calling nested promises - " + value);
});

//Calling the second function with the Promises object.
getNewValue(10).then(function (value){
    console.log("Printing from the second promise (Hardcode) - " + value);
})



//returns the value 0
console.log("Normal function calling - " + getValue());


/*
---Note---
Why the value is 0 instead of 10
Because of the time out it will print the 0 because after 4th line
It will execute the return value.

Time can be greater than or equal 1 second.

call back function (Always a function) we don't have to change the code each time
it is kind of opening the code for make changers.
We are passing a function pointer.

Callback hell code are expanding horizontally, and make it hard to read and
Navigate through the code. Solution is promises.

*/