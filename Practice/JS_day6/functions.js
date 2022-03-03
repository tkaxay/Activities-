//-----------------Typecasting-----------------------


//---Implicit type conversion-----

// console.log("1" + 5 === "15" )
// console.log(1 + "5" === "15" )

// console.log(8 - "5" === 3)

// console.log(!0 === true)
// console.log(!1===false)

// if("hello"){
//     console.log("Hello")
// }

// console.log(!"0")
// console.log(!"false")

//--------------Explicit typecasting--------------------

// * Boolean(...) will convert any data type into either true or false.

// console.log(Boolean(""))        //false
// console.log(Boolean(" "))       //true

// console.log(Boolean(0))     //false
// console.log(Boolean(100))       //true
// console.log(Boolean(-100))      //true

// console.log(Boolean([]))    //true(Even array with elements returns true)
// console.log(Boolean({}))        //true

// console.log(Boolean(undefined))      //false
// console.log(Boolean(NaN))        //false
//console.log(Boolean(null))        //false


// console.log("0"==0)      //true
// console.log("0"===0)     //false
 

//-----------Converting string to number-----------
// let a = Number("12.35")
// console.log(typeof(a))   //12

// let str = Number("hello")
// console.log(str)


// let b = Number("13 45 56")
// console.log(b)       //NaN

// let c = parseInt("13 45 56") 
// console.log(c);      //13

// console.log(parseInt('F', 16))       //15

// let a = "34"
// console.log(typeof(+a))  //Number

// console.log(Number([]))     //0
// console.log(Number([3]))    // 3
// console.log(Number([3, 4]))     //NaN


// console.log(Number(['a']))      //NaN
// console.log(Number(['a', 'b']))     //NaN
// console.log(Number(function(){}))       //NaN

// console.log(Number(undefined))      //NaN
// console.log(Number(NaN))        //NaN
// console.log(Number(false))      //0
// console.log(Number(true))       //1
// console.log(Number(null))       //0


//----------------Typecast to string-------------

// let num = 15
// console.log(num.toString(2))    //1111

// //To convert array to strings

// let arr = [1, 2, 3, 4, 5]
// console.log(arr.join("+"))      //1+2+3+4+5

// let arr2 = ["a", "b", "c", "d"]
// console.log(arr2.join("").toUpperCase())    //ABCD
