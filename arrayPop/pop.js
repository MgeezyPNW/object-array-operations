// This file will contain a working Array.pop(); function, and it will also have a function that describes what is happening behind the scenes when it is run on an array.

// What is pop()? What does it do?
// Pop is a built in JavaScript function that will remove the last element in an array. 

// How does Array.pop() work??
// Pop relies on the length property of an array. It uses it to find the element in the last index position, and stores it as a variable. It then sets the length of the array equal to the length of the array minus one. It then returns the variable that has the last element stored in it. 

const friends = ['Cole', 'Tanner', 'Taylor'];
// Should log ['Cole', 'Tanner', 'Taylor'] in your console.

friends.pop();
// Should now log ['Cole', 'Tanner']

// Lets take a closer look at how that works.

let wonderland = ['Alice', 'Bunny', 'Creepy Twins', 'Mad Hatter'];


function pop(array) {
  // Set a variable to the element in the last index position. This will allow us to "remove it", without losing it before we need to return it. 
  let popped = array[array.length - 1];

  // Then, set the length of the array equal to the length of the array minus one. By doing this, we element the index postion. Setting it equal to zero or null or anything else will only change the element to that value, it wont remove the index position.
  array.length = array.length - 1;

  // it then returns the stored variable we created above. Remember, pop returns the value of the index position that it removes.
  return popped;
};

// Don't let the operations of this one confuse you, on a high level, it removes the last element of an array and returns that element. 

// The Big O Space and Time:
// The Big O for Time here is equal to O(1), in that the time that it takes to run this function will remain relatively constant no matter how big the array is. Like push(), we are just accessing the array at the end of the array. We aren't reindexing any of the other elements. We aren't looping through at all. It is easy for us to find the last element of the array because of array.length.

// The Big O for Space here is O(n). The array gets smaller each time we remove an element. As the array gets smaller, the function will take up less space. 
