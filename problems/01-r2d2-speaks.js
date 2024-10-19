/*
    Write a function r2d2Speaks that takes in a series of 0s and 1s.
    The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.
    
    let code = [0, 1, 1, 0];
    r2d2Speaks(code);
        print 'beep'
        pause for 400ms
        print 'boop'
        pause for 800ms
        print 'boop'
        pause for 800ms
        print 'beep'
        pause for 400ms
*/
//we dont need to return anything
//we should iterate through the code parameter
//and on each element see if it a 0 or a 1
//on 0's we should add a setTimeout() with a console.log and a delay of 400ms
//on 1's do the same but with 800ms
// function r2d2Speaks(code) {
//     //lets make a time variable to represent doing a beep or boop immediately
//    let time = 0;
//     //lets make a for loop to iterate throught the 'code' param
//     for (let i = 0; i <= code.length; i++) {
//         //now lets make a variable to represent each number
//         let num = code[i];
//         //lets use a boolean to see if its a 0 or 1
//         if (num === 0) {
//             beep();
//             wait(400);
//         }//and if it returns false lets make the other settimeout
//         else if (num === 1) {
//             boop();
//             wait(800);
//         }
        
//     }
// }


//ray's code----------------------
// function r2d2Speaks(arr) {
//     let time = 0; // Initialize a time counter

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             // Use setTimeout to log 'beep' after 'time' milliseconds
//             setTimeout(() => {
//                 console.log("beep");
//             }, time);
//             // Increase time by 400ms for the pause
//             console.log('400 ms')
//             time = 400;
//         } else if (arr[i] === 1) {
//             // Use setTimeout to log 'boop' after 'time' milliseconds
//             setTimeout(() => {
//                 console.log("boop");
//             }, time);
//             // Increase time by 800ms for the pause
//             console.log('800 ms')
//             time = 800;
//         }
//     }
// }

//rays code pt 2
function r2d2Speaks(code) {
    //!!START
    // Base case: check if array is empty then return 
    if (code.length === 0) {
        return
    }
    // Recursive step: Get the first element in the array maybe use Array#slice or Array#pop or Array#shift, or destructing the array
    let firstElement = code.shift()
    // Check if first element is a 0 or 1
    if (firstElement === 0) {
        // print beep and use a setTimeout of 400ms
        console.log('beep')
        setTimeout(function () { r2d2Speaks(code) }, 400)
    } else {
        // print boop and use a setTimeout of 800ms
        console.log('boop')
        setTimeout(function () { r2d2Speaks(code) }, 800)
    }
    //!!END
}

let code = [0, 1, 1, 0];
r2d2Speaks(code);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = r2d2Speaks;
} catch (e) {
    module.exports = null;
}

