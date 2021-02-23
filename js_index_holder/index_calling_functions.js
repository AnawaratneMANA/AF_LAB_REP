//Function
function helloFunction() {
    //Inside here we can also create a anonymous function and return a value
    return function(){
        document.getElementById
        ("paragraph1").innerHTML = "Hello world!"
    }

}

//Another Function which accept `function` as parameter.
function printer(func){
    var execute = func();
    execute();
}
//Passing the variable. Variable should be a function.
printer(helloFunction);
