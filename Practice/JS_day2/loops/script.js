//basic forloop
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }


//for used for array
// var array = ['a', 'b', 'c'];
// for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }


//for of use
// const iterable = [0, 1, 2]; 
// for (i of iterable) {
//     console.log(i);
// }


//for of usend for strings
// const string = "abc";
// for (let chr of string) {
//   console.log(chr);
// }


//for of for list
const names = ['bob', 'alejandro', 'zandra', 'anna', 'bob'];
// for (const nam of names) {
//     console.log(nam);
// }

// const uniqueNames = new Set(names);
// for (let name of uniqueNames) { console.log(name);
// }




// const map = new Map() 
//     .set('abc', 1) 
//     .set('def', 2)

// for (const iteration of map) {
//     console.log(iteration) //will log ['abc', 1] and then ['def', 2]
// }

// for (const [key, value] of map) { 
//     console.log(key + ' is mapped to ' + value)
// }



const someObject = { name: 'Mike', age: 50, lname: "duke" };
// for (let a of Object.keys(someObject)) { 
//     console.log(a + ": " + someObject[a]);
// }
// for (const key in someObject) {
//     if (Object.hasOwnProperty.call(someObject, key)) {
//         console.log(key+": "+someObject[key]);
//     }
//     // console.log(key+": "+someObject[key]);
// }

//why for in is not used for array index
Array.prototype.foo = 1;

// Now you have no idea what the below code will do.
var a = [1, 2, 3, 4, 5];
// for (var x in a){
//     // Now foo is a part of EVERY array and 
//     // will show up here as a value of 'x'.
//     console.log(a[x]);
// }
// for (let x of a) { 
//     console.log(x);
// }




// var object = {"a":"foo", "b":"bar", "c":"baz"}; 
// // `a` is inaccessible 
// Object.defineProperty(object , 'a', {enumerable: false});
// for (var key in object) {
//     if (object.hasOwnProperty(key)) { 
//         console.log('object.' + key + ', ' + object[key]);
//     }
// }


 
for (var i = 0; i < 3; i++) { 
    if (i === 1) {
    continue; }
        console.log(i);
    }