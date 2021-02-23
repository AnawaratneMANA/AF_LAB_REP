const person = {
    organization: 'Science',
    prople: ['John', 'Jane'],
    print: function (){
        this.people.forEach(value => {
            console.log("For Each Printing: " + value, this.organization)
        })
    }
}
//Calling the print method.
person.print()