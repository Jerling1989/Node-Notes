var square = x => x * x;
console.log(square(9));

var user = {
	name: 'Jacob',
	sayHi: () => { // doesn't work with arrow function in object method
		console.log(arguments);
		console.log(`Hi. I'm ${this.name}`);
	},
	sayHiAlt () {  // better way to write method inside of object 
		console.log(arguments);
		console.log(`Hi. I'm ${this.name}`);
	}
};

user.sayHi(1, 2, 3);