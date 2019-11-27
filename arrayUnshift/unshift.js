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

function push(array, element) {
  array[array.length] = element;
  return array;
}

function unshift(array, ...element) {
  let prepenned = [];
  for (let i = 0; i < element.length; i++) {
    push(prepenned, element[i]);
  }
  array = [...prepenned, ...array];
  console.log(array);
  return array.length;
}

// above is a working solution for an input of an array and one element. Many more edge cases to tackle. 