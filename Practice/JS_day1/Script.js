//Chapter 01: Getting Started With JavaScript

// Section 1.1: Using console.log()/////////////////////////////////////////////////////////////////////////

console.log("Hello World");

var a = "Apple";
console.log(a);

var greet = "Hello", who = "World"; 
console.log("%s, %s!", greet, who);

console.log({
    'Email': '',
    'Groups': {},
    'Id': 33,
    'IsHiddenInUI': false,
    'IsSiteAdmin': false,
    'LoginName': 'i:0#.w|virtualdomain\\user2', 
    'PrincipalType': 1,     
    'Title': 'user2'
});


// Section 1.2: Using the DOM API////////////////////////////////////////////////////////////////////////////

var element = document.createElement('p');
element.textContent = "Hello, World";
document.body.appendChild(element);


document.getElementById("paragraph").textContent = "Hello, This is Paragraph";


// Section 1.3: Using window.alert()/////////////////////////////////////////////////////////////////////////

// var message = "Thid is an alert"
// window.alert(message);
// alert(message);
// alert('Alert!!!!!!');


// Section 1.4: Using window.prompt()/////////////////////////////////////////////////////////////////////////

// var name = prompt("What is your Name?");
// console.log(name);

// Section 1.5: Using window.confirm()/////////////////////////////////////////////////////////////////////////  
// if(window.confirm("Are you sure you want to delete this?")) { 
//     console.log("Item Deleted")
// }


//Section 1.6: Using the DOM API (with graphical text: Canvas, SVG, or image file)////////////////////////////

//Using Canvas Elements
var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;

var ctx = canvas.getContext('2d');

ctx.font = '30px Cursive';
ctx.fillText("Hello world!", 50, 50);

document.body.appendChild(canvas);

//Using SVG
var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); 
svg.width = 500;
svg.height = 50;

var text = document.createElementNS('http://www.w3.org/2000/svg', 'text'); 
text.setAttribute('x', '0');
text.setAttribute('y', '50');
text.style.fontFamily = 'Times New Roman';
text.style.fontSize = '50';
text.textContent = 'Hello ALL!';

svg.appendChild(text);
document.body.appendChild(svg);

//Image file
var img = new Image();
img.src = 'https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg';
document.body.appendChild(img);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Chapter 02: JavaScript Variables

//Section 2.1: Defining a Variable/////////////////////////////////////////////////////////////////////////////
var a = "Hello Everyone";

//Section 2.2: Using a Variable///////////////////////////////////////////////////////////////////////////////
var number1 = 5; 
number1 = 3;
console.log(number1);
console.log(number1);

//Section 2.3: Types of Varibales:///////////////////////////////////////////////////////////////////////////
var myInteger = 78; 
var myLong = 1234567890123; 
var myFloat = 5.5; 
var myDouble = 1234567890123.67; 
var myBoolean = true; 
var myNotANumber = NaN;
var NaN_Example = 0/0; 
var notDefined; 
var myNull = null;
console.log(myInteger);
console.log(myLong);
console.log(myFloat);
console.log(myDouble);
console.log(myBoolean);
console.log(myNotANumber);
console.log(NaN_Example);
console.log(notDefined);
console.log(myNull);

//Section 2.4: Arrays and Objects///////////////////////////////////////////////////////////////////////////

//Arrays
// var myArray = []; 

// var favoriteFruits = ["apple", "orange", "strawberry"];
// var carsInParkingLot = ["Toyota", "Ferrari", "Lexus"];
// var employees = ["Billy", "Bob", "Joe"];
// var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
// var randomVariables = [2, "any type works", undefined, null, true, 2.51];
// myArray = ["zero", "one", "two"];
// window.alert(myArray[0]); 
                          
// myArray = ["John Doe", "Billy"];
// elementNumber = 1;
// window.alert(myArray[elementNumber]); 


//Objects
// myObject = {};
// john = {firstname: "John", lastname: "Doe", fullname: "John Doe"};
// billy = {firstname: "Billy", lastname: undefined, fullname: "Billy"};
// window.alert(john.fullname); 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Chapter 03: //Built-in Constants

//Section 3.1: null//////////////////////////////////////////////////////////////////////////////
if(null == undefined){
    console.log("Equals")
}
else{
    console.log("Not Equals");
}

if(null === undefined){
    console.log("Equals");
}
else{
    console.log("Not Equals");
}

var a = null;
if(a === null){
    console.log("Equals")
}
else{
    console.log("Not Equals")
}

//Section 3.2: Testing for NaN using isNaN()//////////////////////////////////////////////////////
Number.isNaN(NaN);

Number.isNaN(1); 
Number.isNaN(-2e-4); 
Number.isNaN(Infinity);

Number.isNaN(true); 
Number.isNaN(false); 
Number.isNaN(null); 
Number.isNaN(""); 
Number.isNaN(" "); 
Number.isNaN("45.3"); 
Number.isNaN("1.2e3"); 
Number.isNaN("Infinity"); 
Number.isNaN(new Date); 
Number.isNaN("10$"); 
Number.isNaN("hello"); 
Number.isNaN(undefined); 
Number.isNaN(); 
Number.isNaN(function(){}); 
Number.isNaN({}); 
Number.isNaN([]); 
Number.isNaN([1]); 
Number.isNaN([1, 2]); 
Number.isNaN([true]);

//Section: 3.3: Null and Undefined////////////////////////////////////////////////////////////////////////
let foo;
console.log('is undefined?', foo === undefined);

function zee(param) {
    console.log('is undefined?', param === undefined);
    }
    zee('a');
    zee();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Chapter 4: Comments

//Section 4.1: Using Comments////////////////////////////////////////////////////////////////////////////

//Single Line Commnet

/*
This is a 
Multiline 
Comment
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Chapter 5: Console

//Section 5.1: Measuring time - console.time()//////////////////////////////////////////////////////////////////////
console.time('response in');

alert('One more time');
console.timeEnd('response in');

console.time('Loop time');
var elms = document.getElementsByTagName('*'); 
for (var i = 0; i < 5000; i++) {
for (var j = 0, length = elms.length; j < length; j++) {
        //code
} }
console.timeEnd('Loop time');

//Section 5.2: Formatting console output:///////////////////////////////////////////////////////////////////////////
console.log('%s has %d points', 'Sam', 100);

//Section 5.3: Printing to a browser's debugging console////////////////////////////////////////////////////////////
var obj = { test: 1 }; 
console.log(['string'], 1, obj, window);

console.log([0, 3, 32, 'a string']);
console.log({ key1: 'value', key2: 'another value'});

//Section 5.4: Including a stack trace when logging - console.trace()///////////////////////////////////////////////
function apl() {
    console.trace('My log statement');
} apl();

//Section 5.5: Tabulating values - console.table()/////////////////////////////////////////////////////////////////
var personArr = [ {
    "personId": 123,
    "name": "Jhon",
    "city": "Melbourne",
    "phoneNo": "1234567890"
}, {
    "personId": 124,
    "name": "Amelia",
    "city": "Sydney",
    "phoneNo": "1234567890"
}, {
    "personId": 125,
    "name": "Emily",
    "city": "Perth",
    "phoneNo": "1234567890"
}, {
    "personId": 126,
    "name": "Abraham",
    "city": "Perth",
    "phoneNo": "1234567890"
}
];
console.table(personArr, ['name', 'personId']);

//Section 5.6: Counting - console.count()////////////////////////////////////////////////////////////////////////////
var o1 = 1, o2 = '2', o3 = ""; 
console.count(o1); 
console.count(o2); 
console.count(o3);
console.count(1);
console.count('2');
console.count('');

console.count(console.constructor); 
console.count(function(){}); 
console.count(Object);
var fn1 = function myfn(){}; 
console.count(fn1); 
console.count(Number);

console.count(42.3);
console.count(Number('42.3'));
console.count('42.3');

//Section 5.7: Clearing the console - console.clear()///////////////////////////////////////////////////////////////
console.clear()

//Section 5.8: Displaying objects and XML interactively - console.dir(), console.dirxml()////////////////////////////////////////
console.log(document);

console.dirxml(document);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Section 06: Datatypes in JavaScript

//Section 6.1: typeof///////////////////////////////////////////////////////////////////

//String
console.log(typeof "String")
console.log(typeof Date(2011,01,01))

//Number
console.log(typeof 42)

//boolean
console.log(typeof true)

//function
console.log(typeof function(){})

//undefined
var var1; 
console.log(typeof var1)

//Section 6.2: Getting object type by constructor name////////////////////////////////////

//String
console.log(Object.prototype.toString.call("String"))

//Number
console.log(Object.prototype.toString.call(42))

//Error
console.log(Object.prototype.toString.call(Error()))

//Array

console.log(Object.prototype.toString.call([]))