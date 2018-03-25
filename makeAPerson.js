// Fill in the object constructor with the following methods below:

//     getFirstName()
//     getLastName()
//     getFullName()
//     setFirstName(first)
//     setLastName(last)
//     setFullName(firstAndLast)

// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it has to be a string.

// These methods must be the only available means of interacting with the object.

var Person = function(firstAndLast){
  let name = firstAndLast;

  this.getFullName = function(){
    return name;
  };

  this.getFirstName = function(){
    return name.split(' ')[0];
  }

  this.getLastName = function(){
    return name.split(' ')[1];
  }

  this.setFirstName = function(first){
    name = `${first} ${this.getLastName()}`;
  } 

  this.setLastName = function(last){
    name = `${this.getFirstName()} ${last}`;
  }

  this.setFullName = function(newFirstAndLast){
    name = newFirstAndLast;
  }
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());

console.log(bob.getFirstName());
console.log("Expected: Bob");
console.log(bob.getLastName());
console.log("Expected: Ross");
console.log(bob.getFullName());
console.log("Expected: Bob Ross");
bob.setFirstName("Haskell");
console.log(bob.getFullName());
console.log("Expected: Haskell Ross");
bob.setLastName("Curry");
console.log(bob.getFullName());
console.log("Expected: Haskell Curry");
bob.setFullName("Nate Dawg");
console.log(bob.getFullName());
console.log("Expected: Nate Dawg");
bob.setFullName("Haskell Curry");
console.log(bob.getFirstName());
console.log("Expected: Haskell");
bob.setFullName("Haskell Curry");
console.log(bob.getLastName());
console.log("Expected: Curry"); 
