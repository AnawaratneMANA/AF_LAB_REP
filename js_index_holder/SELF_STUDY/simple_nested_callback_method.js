//Original Method
function first_method(callback){
    value = 10;
    callback(value)
}

//Second method
function multi_by_10(value, callback){
    new_value = value * 10;
    callback(new_value);
}

//Calling both functions
first_method(function(value){
    multi_by_10(value, function(new_value){
        console.log("New Value After Modified: " + new_value)
    })
})

/**
 * Method that call the other method will grow in a > shape. Function parameters will come inside another parameter
 **/
