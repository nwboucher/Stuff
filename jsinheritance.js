// INHERITANCE BICHES


// Constructor
function Person(name) {
  this.name = name;
}

// adding function to constructor
Person.prototype.Hello = function() {
  console.log('hello my name is ' + this.name + '.');
}

// makin peoples
var bob = new Person('Bob');
var alice = new Person('Alice');

// makin 'em say hi
bob.Hello();
alice.Hello();

// changing a function in ya girl
alice.Hello = function() {console.log("Bich I'm " + this.name)};
alice.Hello();


// Inheritance function
function object(o){
	function F() {};
	F.prototype = o;
	return new F();
}

var tom = object(alice);
tom.name = "Tom";
tom.Hello();