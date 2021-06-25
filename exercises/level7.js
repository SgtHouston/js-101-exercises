// Write a function that takes a number as an input.
// Have it create an empty array and then push a string 
// into the array as many times as the input number
// Name the function "finalFunction"

function finalFunction(inputNum){
    const arr = [];
    const string = 'string';
    

    while (inputNum > 0) {
        arr.push(string);
        inputNum --   ;
    }
    return arr
}



