'use strict';

// This file will contain a working Array.unshift function, as well as a function that demonstrates how Array.unshift() works. 

// What is Array.unshift()? What does it do?
// Array.unshift() is a lot like push, in that it adds elements to an array. It differs from push however because it adds the elements to the beginning of the array. 

// How does Array.unshift() work...?
// Array.unshift() 

let friends = ['Kate', 'Cole', 'Austin', 'Chewy'];

// friends.unshift('Bailey', 'Thomas');
// Should return 6
// Friends becomes ['Bailey', 'Thomas', 'Kate', 'Cole', 'Austin', 'Chewy'];

function unshift(array, ...element) {
  let array3 = [...element, ...array];
  for (let i = 0; i < array3.length; i++) {
    array[i] = array3[i];
  }
  return array.length;
};

// So, I learned that I way over thought this problem. I had tried to solve it originally with the spread operator, but I scrapped that route because I learned that spread operators are immutable, meaning they wont mutate the original array. After a couple nights of trying to figure out my way around this, I came to a realization: I can create aninstance of the combined array using spread operators within the scope of the function, and then assign each index location along the original array equal to the combined array. Try it out! It is late and I am tired. I will do my normal walkthrough and clean up the grammar tomorrow. 