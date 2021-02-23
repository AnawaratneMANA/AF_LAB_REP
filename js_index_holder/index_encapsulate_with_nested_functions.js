//Simple Function
function taxCalculator(percetage){
    return function(amount){
        console.log(percetage*amount);
    }
}
//Calling function
var calculator = taxCalculator(.12);
console.log(calculator(200))

/*
Child function can get access to the attributes and variables
in the parent function.

Encapsulation - if we share this calculator object to consumers they will
never know it contains .12 but they  can still do the calculations.
so the percentage information is always stay hidden.
 */
