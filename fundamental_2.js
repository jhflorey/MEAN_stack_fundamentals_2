// Create functions that take variable inputs:

// stept 1: Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.

var x = 3;
var y = 8;
function sumXY(x, y){
	var sum = 0;
	for (var i =x; i < y + 1; i ++){
		sum += i
	}
	console.log(sum);
}
sumXY(x, y);           // output : 33



// Stept 2: Write a loop that will go through an array, find the minimum value, and then return it

var arr = [1,-2,8,9,22,48,17]
function findMin(arr){
	var min = arr[0];
	for (var i = 1; i < arr.length; i++){
		if (arr[i] < min){
			min = arr[i];
		}
	}
	console.log(min);
}
findMin(arr);


// stept 3: Write a loop that will go through an array, find the average of all of the values, and then return it

var arr = [2,4,8,36,14];
function findAvg(arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i ++){
		sum += arr[i];
	}
	console.log(sum/arr.length);
}
findAvg(arr);



// step 4: Rewrite these 3 as anonymous functions assigned to variables.

var sumXY = function(x, y){
	var sum = 0;
	for (var i = x; i < y +1; i++){
		sum += i;
	}
	console.log(sum);
};


var findAvg = function(arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	console.log(sum/arr.length);
};


var findMin = function(arr){
	var min = arr[0];
	for (var i = 1; i < arr.length, i++){
		if (min < arr[i]){
			arr[i] = min;
		}
	}
	console.log(min);
};


// // step 5: Rewrite these as methods of an object

var myObject = {
	sumXY: function(x, y){
		var sum = 0;
		for (var i = x; i < y + 1; i++){
			sum += i;
		}
		console.log(sum);
	},
	

	findAvf: function(arr){
		var sum = 0;
		for (var i = 0; i < arr.length; i++){
			sum += arr[i];
		}
		console.log(sum/arr.length);
	},
	

	findMin = function(arr){
		var min = arr[o];
		for (var i = 1; i < arr.length; i++){
			if (arr[i] < min){
				min = arr[i];
			}
			console.log(min);
		}
		
	}

}



// step 6: Create a JavaScript object called person with the following properties/methods
// Properties:
// name - set this as your own namedistance_traveled - set this initially as zero

// Methods:
// say_name - should alert the object’s name property
//say_something - have it accept a parameter. This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
// walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
//run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
//crawl - have it alert for example “{{your name}} is crawling” and increase distance_travele by 1

var person = {
	name: "Jessica",
	distance_traveled: 0,
	say_name: function(){
		console.log(person.name);
	},
	say_something: function(){
		console.log('${peson.name} says I am cool');
	},
	walk: function(){
		console.log('${person.name}is walking!');
		person.distance_traveled += 3;
		console.log(person);
	},
	run: function(){
		console.log('${person.name} is running');
		person.distance_traveled += 10;
		console.log(person);
	},
	crawl: function(){
		console.log('${person.name} is crawling');
		person.distance_traveled += 1;
		console.log(person);
	},
	chewGum: function(){
		console.log("I can walk and chew gum, but I can't chew gum and walk....");
		
	}
}

// person.walk();
person.walk();
















































































