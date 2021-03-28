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

//Calling both functions -> this method will execute in a synchronized manner.
async function print(){
    let value = await first_method(); //first get the initial value.
    value = await multi_by_11(value); //then multiply the number by 100 in the second method.
    console.log(value); //print the output to the console.
}


//execute the print method
print();

/**
 * Method that call the other method will grow in a > shape. Function parameters will come inside another parameter
 *
 * In the Fully Promise method.
 * Here the thing is .then can be used only with return statement that    * returns a Promise object. then -> function(){} this the nesting pattern.
 *
 * Asynch await method. Similar what we have done with promises and callbacks
 * statements in the method will execute in the order we have given
 *
 * Await keyword will stay there until the statement is completed the operation.
 **/
