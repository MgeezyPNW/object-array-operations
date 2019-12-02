// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

testArray1.concat(testArray2);

function concat(array1, array2) {
  let newArray = [...array1, ...array2];
  return newArray;
};

concat(testArra1, testArray2);