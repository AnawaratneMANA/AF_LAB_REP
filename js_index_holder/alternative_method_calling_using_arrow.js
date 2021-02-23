// Multiple line calling example, Use parenthesis.
function getNewValue(value){
    return new Promise((resolve, reject)=> {
        setTimeout(function (){
            resolve(value * 100)
        }, 1000)
    })
}
// Single line calling example
print().then(value => console.log(value));


//Method
async function print(){
    let value = await getValue();
    value = await getNewValue(value);
    value = setValue(value);
    console.log("Value printed in the async function - " + value)
    return value;
}

//calling chain with another feature of arrow function
print()
    .then(value => setValue(value))
    .then(value => console.log(value));
//if the return value is comming it will automatically return it we don't need to manually do that.

