/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. 
Return the good values in the order they are given.
*/


// Solution

let noOdds = values => values.filter(x => !(x % 2));

// or

function noOdds(values) {
  function isEven(number) {
    return number%2 == 0;
  }
  return values.filter(isEven);
}

// or

function noOdds(values) {
  let goodies = [];
  for(let i=0; i<values.length;i++) {
    if(values[i]%2 == 0) {
      goodies.push(values[i]);
    }
  }
  return goodies;
}