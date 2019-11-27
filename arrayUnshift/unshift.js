'use strict';

// This file will contain a working Array.unshift function, as well as a function that demonstrates how Array.unshift() works. 

// What is Array.unshift()? What does it do?
// Array.unshift() is a lot like push, in that it adds elements to an array. It differs from push however because it adds the elements to the beginning of the array. 

// How does Array.unshift() work...?
// Array.unshift() 

let friends = ['Kate', 'Cole', 'Austin', 'Chewy'];

friends.unshift('Bailey', 'Thomas');
// Should return 6
// Friends becomes ['Bailey', 'Thomas', 'Kate', 'Cole', 'Austin', 'Chewy'];

function unshift(array, ...element) {
  for (let i = 0; i < element.length; i++) {
    array[i + element.length] = array[i];
    array[i] = element[i];
  }
  return array.length;
};


// This function here should be my final draft for unshift. I figured unshift out by working on concatenation. I will dive more into why this functio nworks in a later post. I need to figure out how to handle different types of elements. 