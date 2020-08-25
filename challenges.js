//Leetcode question
/*Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.*/
/*Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
*/



// Comparison logic
/*function logicalOr(val){
    if (val < 10 || val > 20){
        return " Outside the bar";
    }
    return " Inside the bar"
}
logicalOr(15)


//golf code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes == 1){
    return "Hole-in-one!";
  } else if (strokes <= par - 2){
    return "Eagle";
  } else if (strokes == par - 1){
    return "Birdie";
  } else if (strokes === par){
    return "Par and i cant think far";
  } else if (strokes == par + 1){
    return "Bogey";
  } else if(strokes == par + 2){
    return "Double Bogey";
  } else if (strokes >= par + 3){
    return "Go Home!"
  } else{
    return par, strokes
  }
  // Only change code above this line
}

console.log(golfScore(3, 4));*/


// Another switch statement with multiple conditions
function anotherSwitch(name){
   var occupation = [];
  
  switch(name){
    case "Archimedes":
      occupation.push(name, "his a talented programmer");
      break
    case "Jerry":
    case "Alex":
    case "Nelson":
      occupation.push(name, "his a professional teacher");
      break
    default:
      occupation.push("Enter a name");
      break
  }
  return occupation;
}

console.log(anotherSwitch("Alex"))


//anotherSwitch
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
 switch(val){
   case "bob":
   answer = "Marley";
   break;
   case 42:
   answer = "The Answer";
   break;
   case 1:
   answer = "There is no #1";
   break;
   case 99:
   answer = "Missed me by this much!";
   break;
   case 7:
   answer = "Ate Nine";
   break;
 }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);


// returning boolean from function
function isEqual(num, nums){
  return nums > num;
}

console.log(isEqual(90,9))


// returning early pattern for functions
function abTest(a, b) {
  // Only change code below this line
if(a < 0 || b < 0){
  return undefined;
}

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2,5));



// Javascript object
const obj = {
  "kofi": 56,
  "ama": {
    age: 38,
    color: "blue",
    favoriteCar: "V8"},
  "selina": 23,
  "bertha": 39
};

console.log(obj["ama"].favoriteCar);

// accessing object properties using dot notation
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line


// accessing
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line


// accessing using a variable
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber = 16;       // Change this line
var player = testObj[playerNumber];   // Change this line
console.log(player);





// Javascript object
var myDog = {
  // Only change code below this line
  "name": "men",
  legs: 67,
  tails: 6,
  friends: ["kofi", 5, [5, "ama"]]
  
  };
  console.log(myDog.friends)


  // Accessing object using notation
  // Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line

// Accessing using a bracket notation
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line


// Accessing object using variables
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber = 16;       // Change this line
var player = testObj[playerNumber];   // Change this line


// Updating object
// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog["name"] = "Happy Coder";


// updating
var names = {
  "Kofi": 12,
  "Fifii": 34,
  "Yvonne": 30
}
names.Kofi = 253;
console.log(names.Kofi);


names.Wonder = 34;
names.Michael = 45;
console.log(names.Fiifi);
console.log(names);

//Delete properties from object
delete names.Michael;
console.log(names);


// Using objects for lookups
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
  result = lookup[val]

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");


// Manipulating complex objects
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
  
    "gold": true
  },


  {
  // Add a record here
      artist: "Archimedes Sena",
      title: "Lover Boy",
      release_year: 2002,
      formats: [
        "CD",
        "8T",
        "LP"
      ],
      gold: true
    }
];

console.log(myMusic[0].formats)



// Accessing nested objects
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
var acccess = myStorage.car.inside["passenger seat"]
console.log(acccess)
var anotherAccess = myStorage.car.outside.trunk
console.log(anotherAccess)// Change this line


// Accessing nested array
// Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line

var nestedArray = myPlants[1].list;;
console.log(nestedArray);// Change


// Record collection
// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert  Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
  if(value === "") delete collection[id][prop];
 else if(prop === "tracks"){
collection[id][prop] = collection[id][prop] || [];
collection[id][prop].push(value);
 }else
 collection[id][prop] = value;


  return collection;
}

updateRecords(5439, "artist", "ABBA");

