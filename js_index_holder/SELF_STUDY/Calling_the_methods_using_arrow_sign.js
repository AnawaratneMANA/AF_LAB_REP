//Original Method
function first_method(){
    value = 10;
    //Create a Promise object and return it.
    return new Promise(function (resolve, reject){
        value = 10;
        resolve(value);
    })
}

//Second method modified with promises.
function multi_by_11(value){
    return new Promise(function (resolve, reject){
        new_value = value * 10;
        resolve(new_value);
    }, 1000);

}

function incrementing11(value){
    value = value + 11;
    return value;
}

//Calling both functions
async function print(){
    let value = await first_method(); //first get the initial value.
    value = await multi_by_11(value);
    console.log(value);
    return value;
}


//execute the print method
print().then(value => incrementing11(value)).then(
    value => console.log(value)
);

/**
 * Method that call the other method will grow in a > shape. Function parameters will come inside another parameter
 *
 * In the Fully Promise method.
 * Here the thing is .then can be used only with return statement that    * returns a Promise object. then -> function(){} this the nesting pattern.
 *
 * Asynch await method. Similar what we have done with promises and callbacks
 * statements in the method will execute in the order we have given
 *
 * A different method to call methods using the => symbol
 * This can be replace the previous promise chain calling method using functions, this is much more simplified version of it. yet the same thing.
 *
 * function(value){
 *
 * }
 *
 * In the alternative method calling method below and following Is same thing as
 *
 * value => {
 *
 * }
 *
 **/
