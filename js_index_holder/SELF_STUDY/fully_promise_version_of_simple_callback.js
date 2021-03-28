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

//Calling both functions
first_method().then(
    function(value){
        return multi_by_11(value).then(
            function(value){
                console.log("This is the modified value - " + value);
            }
        )
    });


/**
 * Method that call the other method will grow in a > shape. Function parameters will come inside another parameter
 *
 * In the Fully Promise method.
 * Here the thing is .then can be used only with return statement that    * returns a Promise object. then -> function(){} this the nesting pattern.
 *
 * This kind of promise chaining are used to add parameters to request URLs in synchronize manner.
 **/
