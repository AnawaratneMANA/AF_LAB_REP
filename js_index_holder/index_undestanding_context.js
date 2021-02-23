//Variable
var vehicleName = "Toyota"
//simple function
function printVehicleName(){
    document.getElementById
    ("paragraph1").innerHTML
        = this.vehicleName
}

//Variable inside object.
var car = {
    vehicleName: "BMW",
    printName: printVehicleName
}

printVehicleName()
car.printName()
/*
Right now this is the most outer object
AKA window object. It will print the vehicle name because it is defined in the
Global JS context.

With the car object we are nesting into one step
inside the window object.
*/
