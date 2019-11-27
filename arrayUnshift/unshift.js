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

// This function here should be my final draft for unshift. This is the best and most efficient version of unshift(); I could come up with. 
// Further thoughts would be about application. Array.unshift(); does not type check. For example, if an array were added in as an element, then that would count as one element. What about an application where this unshift function were to type check, so that if an array were passed in as an argument, it would return an the length of an array if each element of said array were made as separate elements of the greater array? (Remind me to refactor what I just said into actual english)