//Alternative method for the function and prototype method. (Wrapper usage.)
class Vehicle{
    static VehicleCount = 0;
    constructor(type){
        this.type = type;
        Vehicle.VehicleCount++;
    }

    drive(){
        console.log("Type of the vehicle - " + this.type);
    }
}

//Extending the Vehicle Class using another class Car.
class Car extends Vehicle{
    constructor(type){
        super(type)
    }

    wheelBalance(){
        console.log("Wheel balance - " + this.type);
    }
}
//Creating an object with Vehicle class
let vehicle = new Vehicle("Toyota");
vehicle.drive();
console.log(Vehicle.VehicleCount);
console.log(vehicle);

//Create an object with Car class
let car = new Car("Nissan");
car.drive();
car.wheelBalance();
console.log(Vehicle.VehicleCount);
console.log(car);


/*
* Class keyword is a wrapper for function keyword and
* no need to manually created classes and constructors when using class keyword.
*
* */


