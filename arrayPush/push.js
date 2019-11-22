// This file will contain a working push function, as well as a function that demonstrates how push() works. 

// What is push()? What does it do?
// Push is a built in JavaScript method that will append values or elements to an array. In other words, it will take a given value and add it to the end of an array.

// How does push() work...?
// push() relies on the length property of an array. As we know from the definition of arrays, the values or elements in an array are indexed, starting at zero. Using the length, it adds the new value to the last index + 1. This 'mutates' the original array. In otherwords, it changes to the original array and does not make a new one.



const friends = ['Cole', 'Tanner', 'Taylor'];
// Should log ['Cole', 'Tanner', 'Taylor'] in your console.

friends.push('Michael');
// Should now log ['Cole', 'Tanner', 'Taylor', 'Michael'] in your console.

// How does it do that? What is happening behind the scenes? (Code this time).

const animals = ['lions', 'tigers', 'bears'];

function push(animal) {
  // First, we must retrieve the length of the array. 
  lastIndex = animals.length;
  console.log(lastIndex);
  // If you look at the console.log above, you will see that it returns a number equal to the length of the array. Now that our function knows the length of the array as a numerical value, we can actually use that number to represent that array's last index + 1. Does that make sense? Remember, the index of the first value in line is zero... 

  // Next, we must tell our function that the number we just found (last index of array + 1) is equal to the argument passed in to our function. We do this by accessing the array at that value and setting it equal to the argument.
  animals[lastIndex] = animal;
  // return animals...
  return animals;
  // Go to your console, plug your favorite animal into the function call, and see it in action! 
}; 

// Simplified....  
function simplifiedPush(animal) {
  animals[animals.length] = animal;
  return animals;
}




// What is it's Big O for time and space? 
// The Big O here is O(1) for time. This is because we are just accessing the array when we append something to it. This is constant time. We aren't reindexing (moving values already in the array) any values. We are just creating a new index and placing a value there.
// The Big O for space is O(n). In our push() function, the array grows larger each time we add a new element. As the array grows larger, it will take up more space in the memory.  