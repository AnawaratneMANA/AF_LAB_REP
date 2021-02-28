//setters and getters
class Square{
    area = 0;
    constructor(length) {
        this.height = length;
        this.width = length;
    }

    get area1(){
        this.area = this.width * this.height;
        return this.area;
    }

    set area1(a){
        this.height = Math.sqrt(a);
        this.width = Math.sqrt(a);
    }
}

//creating an object
let square = new Square(4);
square.area1 = 25;
console.log(square.area1);
console.log(square);

/**
 *
 * This getters and setters are not method instead they are properties.
 * we can't call properties with parameters but we have to assign value to the properties.
 * square.area(25); this is wrong syntax for getters and setters.
 * private variables in JavaScript can be define with #variable_name.
 **/

