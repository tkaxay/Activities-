//Chapter: Class

//Section Class Constructor:
class MyClass {
    constructor(option) {
        console.log(`Creating instance using ${option} option.`);
        this.option = option; 
    }
}
const foo = new MyClass('speedy');
console.log(foo);

//Section Class Inheritance:
class SuperClass {
    constructor() {
        this.logger = console.log;
    }
    log() {
        this.logger(`Hello ${this.name}`);
    } 
}
class SubClass extends SuperClass {
    constructor() {
        super();
        this.name = 'subclass'; 
    }
}
const subClass = new SubClass(); 
subClass.log();

//Section Static methods
class My{
    static myStaticMethod() {
        return 'Hello'; 
    }
    static get myStaticProperty() { 
        return 'Goodbye';
    }
}
console.log(My.myStaticMethod());
console.log(My.myStaticProperty);

//Section Getters and Setters
class My_Class {
    constructor() {
        this.names_ = []; 
    }
    set name(value) { 
        this.names_.push(value);
    }
    get name() {
    return this.names_[this.names_.length - 1];
    } 
}
const myClassInstance = new MyClass(); 
myClassInstance.name = 'Joe'; 
myClassInstance.name = 'Bob';
console.log(myClassInstance.name);

//Section: Methods
class Something {
    constructor(data) {
        this.data = data 
    }
    doSomething(text) { 
        return {
            data: this.data,text
        } 
    }
}
var s = new Something({})
s.doSomething("hi")

//Section Class Name binding
class A {
    foo() {
        A = null; 
    }
}
  A = null;

//Section Context(this)
var person = { 
    name: 'John Doe', 
    age: 42,
    gender: 'male', 
    bio: function() {
        console.log('My name is ' + this.name); 
    }
};
person.bio(); 
var bio = person.bio;
bio();

//Section Binding function context
var monitor = {
    threshold: 5,
    check: function(value) {
        if (value > this.threshold) 
        { 
            this.display("Value is too high!");
        } 
    },
    display(message) {
        alert(message);
    } 
};
monitor.check(7); 
var badCheck = monitor.check;
badCheck(15); 

var check = monitor.check.bind(monitor);
check(15); 
var check8 = monitor.check.bind(monitor, 8);
check8();

//Section this in constructor functions
function Cat(name) { 
    this.name = name; this.sound = "Meow";
}
var cat = new Cat("Tom"); 
cat.sound; 
var cat2 = Cat("Tom"); 
window.name;
cat2.name;

//Events
//Section Page, DOM and Browser loading
document.addEventListener("DOMContentLoaded", function(event) { 
    console.log("Hello! I am loaded");
});

//Chapter Intervals and Timeouts

//Section Recursive setTimeout
function repeatingFunc() {
    console.log("It's been 5 seconds. Execute the function again."); setTimeout(repeatingFunc, 5000);
    }
setTimeout(repeatingFunc, 5000);

//Section Intervals
function waitFunc(){
    console.log("This will be logged every 5 seconds");
    }
window.setInterval(waitFunc,5000);

//Section Removing intervals
function waitFunc(){
    console.log("This will be logged every 5 seconds");
}
var interval = window.setInterval(waitFunc,5000);
window.setTimeout(function(){ 
    clearInterval(interval);
},32000);

//Section Removing timeouts
function waitFunc(){
    console.log("This will not be logged after 5 seconds");
}
function stopFunc(){
    clearTimeout(timeout);
}
var timeout = window.setTimeout(waitFunc,5000); window.setTimeout(stopFunc,3000);

//Chapter Maps

//Section Clearing a Map
const map = new Map([[1, 2], [3, 4]]); 
console.log(map.size);
map.clear();
console.log(map.size);
console.log(map.get(1)); 

//Section Removing an element from a Map
const map = new Map([[1, 2], [3, 4]]); 
console.log(map.get(3));
map.delete(3); 
console.log(map.get(3));
const map = new Map([[1, 2], [3, 4]]); 
console.log(map.delete(1));
console.log(map.delete(7));

//Section Getting the number of elements of a Map
const map = new Map([[1, 2], [3, 4]]); 
console.log(map.size);