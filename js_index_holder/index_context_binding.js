//Variable
var vehicleName = "Toyota"
//simple function
function printVehicleName(){
    // document.getElementById
    // ("paragraph1").innerHTML
    //     = this.vehicleName
}

//Variable inside object.
var car = {
    vehicleName: "BMW",
    printName: function (){
        return function (){
            console.log(this.vehicleName)
        }
    }
}

printVehicleName()
var execute = car.printName()
execute = execute.bind(car) //Don't add this.car here
execute();
/*
Right now this is the most outer object
AKA window object. It will print the vehicle name because it is defined in the
Global JS context.

With the car object we are nesting into one step
inside the window object.

execute variable contains a function and it is running on
window object context.

we can hard bound the execute and we can still print `BMW`
we can use bind() function with any function in Javascript to
Hard bind them with a specific context.
*/
