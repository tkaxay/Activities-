// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)
    
//       myResolve(); // when successful
//       myReject();  // when error
//     });
    
//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     );


// function myDisplayer(some) {
//     console.log(some);
// }
  
// let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 5;
  
//   // The producing code (this may take some time)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );

// let myFirstPromise = new Promise((resolve, reject) => {
//     setTimeout( function() {
//       resolve("Success!")
//     }, 250)
//   })


// promise all method

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

// promise allsettled
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));


  
//   myFirstPromise.then((successMessage) => {
//     console.log("Yay! " + successMessage)
//   });

// function resolve(value, milliseconds) {
//     return new Promise(resolve => setTimeout(() => resolve(value), milliseconds));
//     }
//     // wait "millis" ms, then reject with "reason"
//     function reject(reason, milliseconds) {
//     return new Promise((_, reject) => setTimeout(() => reject(reason), milliseconds));
//     }
// Promise.all([
//         resolve(1, 5000),
//         resolve(2, 6000),
//         resolve(3, 7000)
// ]).then(values => console.log(values)); // outputs "[1, 2, 3]" after 7 seconds.
// Promise.all([
//         resolve(1, 5000),
//         reject('Error!', 6000),
//         resolve(2, 7000)
// ]).then(values => console.log(values)) // does not output anything
//     .catch(reason => console.log(reason)); // outputs "Error!" after 6 seconds. Non-promise values in the iterable are "promisified".
// Promise.all([
//     resolve(1, 5000),
//     resolve(2, 6000),
//     { hello: 3 }
// ])
// .then(values => console.log(values)); // outputs "[1, 2, { hello: 3 }]" after 6 seconds