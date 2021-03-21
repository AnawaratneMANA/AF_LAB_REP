console.log('Course Follow up JS with Node.');
//Using the class template created in another JS file.
function classUsage(){
    const Person = require('./person');
    //import Person from './person'; --> This will give us error.
    const person1 = new Person('John Doe', 30);
    person1.greeting();
}

//Module Wrapper Functions
function moduleWrapper(){
    console.log("File Direction only - " + __dirname +
        " full filedirection" + __filename);
}




classUsage();
//moduleWrapper();

