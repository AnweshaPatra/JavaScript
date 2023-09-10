var person = { 
    firstName: "Tony", 
    lastName : "Stark", 
    age : 40 , 
    getname: function() { 
        return this.firstName + " " +this.lastName; } }
console.log(person.getname( ))

// this is the person object thatowns the getname function