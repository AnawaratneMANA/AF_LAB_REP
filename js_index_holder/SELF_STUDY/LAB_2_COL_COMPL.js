//LAB - 2

/** 1 **/
function firstFunction (callback){
    var name = 'TANEESHA';
    setTimeout(() => {
        name = "SALITHA"
        callback(name);
    }, 1000);
    return name;
}

function secondFunction(){

}

//Calling Function
console.log(firstFunction(function (value){
    console.log(value);
}));

console.log("---------------------");

//Only Callback
firstFunction(function (value){
    console.log(value);
});


//Promise version.
function firstPromiseFunctionOne(){
    var name = 'TANEESHA'
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            name = 'SALITHA'// asign new value after 1sec
            resolve(name); // 1st return the value inside a promise object
        }, 1000);
    });
    return myPromise;
}

function secondPromiseFunctionOne(value){
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value + " IS A PRO");// return the value inside a promise object after 1 sec
        }, 1000);
    });
    return myPromise;
}

//Calling promises.
firstPromiseFunctionOne().then(
    function (value){
        //this calls first method inside this anonymous function will become reslove(name)
        return secondPromiseFunctionOne(value);// call 2nd method and the return value is passed
    }).then(function(value){ //this calls first method inside this anonymous function will become reslove(name) in 2nd function
    console.log(value);
});

//Testing Promise object.
var new_pr = firstPromiseFunctionOne();
console.log(new_pr);
//-------------------------------------------------------------------

//Async await version.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
async function print(){//to call the await async function is used.
    var value1 = await firstPromiseFunctionOne(); // wait until this function execute.
    value1 = await secondPromiseFunctionOne(value1); // wait until this function execute.
    console.log(value1);
}
print();

//--------------------------------------------------------------------

/** 2 **/

//Legacy method of implementing class. -------------------------------------------//
// 1. Create constructor function
function Vehicle(type) {
    this.type = type;
    Vehicle.VehicleCount++;
}
// a function prototype has "constructor" property by default,
// so we don't need to create it.

// 2. Add the method to prototype
Vehicle.prototype.drive = function() {
    console.log("Vehicle type is " + this.type);
};

//Create Object
let vehicle1 = new Vehicle("Rolls Royce");
vehicle1.drive();

//Extending classes from the prototype object.
function Car(type){
    Vehicle.call(this, type);
}

//Get the inheritance by assigning the parent constructor. (This is only creating the child class.)
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

//Create a method. (Child method)
Car.prototype.wheelBalance = function(){
    console.log(this.type);
}

//Creating Car object from blueprint.
let car = new Car('Ghost');

//Calling methods
car.drive();
car.wheelBalance();
console.log(Vehicle.VehicleCount);


//Modern class method.  --------------------------------------------------//
class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

//Extending classes form the parent class.
class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

//Creating an object.
mycar = new Model("Ford", "Mustang");
