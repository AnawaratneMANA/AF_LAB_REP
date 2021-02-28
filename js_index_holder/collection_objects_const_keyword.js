/*----------------------------*/
//AF Lab 2 - Complete Answer.
/*----------------------------*/

//Defining a promise.
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

//Updated program to print the value 10.
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

//Second method getNewValue.
function getNewValue(value){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            resolve(value * 100)
        }, 1000)
    })
}

//Decoy method
function setValue(value){
    return value + 1999;
}

//This is a async function supposed to return a promise object.
async function print(){
    let value = await getValue();
    value = await getNewValue(value);
    value = setValue(value);
    console.log("Value printed in the async function - " + value)
    return value;
}

//When we call the aync method we can use the .then we used with
//Promises.
print().then(function (value){
    console.log("Promise attachment to promise calling statement - " + value);
})




//Calling first method and using the return value calling the second method.
// modified the method to call a another method within promise chain
getValue().then(function (value){
    return getNewValue(value)
}).then(function (value){
    return setValue(value);
}).then(function (value){
    console.log("Printing value by Promise (external method called.) - " + value);
});

//Calling the second function with the Promises object.
getNewValue(10).then(function (value){
    console.log("Printing from the second promise (Hardcode) - " + value);
})



//returns the value 0
console.log("Normal function calling - " + getValue());

//Creating constant collection values.
const person = {
    organization: 'Science',
    people: ['John', 'Jane'],
    print: function (){
        this.people.forEach(value => {
            console.log("For Each Printing: " + value, this.organization)
        })
    }
}

person.print()


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

we can't pass multiple value as parameters to resolve method
But we can do that with the callbacks.
*/
