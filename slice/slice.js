// The slice() method returns a shallow copy of a portion of an array into a new array object selected from beginning to end (end not included) where begin and end represent the index of items in that array.

slice.array(1,2);

function slice(array, index1, index2) {
  let array2 = [];
  let count = -1;
  for (let i = index1; i <= index2; i++) {
    count = count + 1;
    array2[count] = array[i]
  }
  console.log(array2);
};

slice(array, 1, 2);