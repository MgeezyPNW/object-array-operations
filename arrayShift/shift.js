let wonderland = ['Alice', 'Bunny', 'Creepy Twins'];

let shift = wonderland.shift();

let friends = ['Big Show', 'Kate', 'Chewy', 'Green Shorts', 'Cole'];

function shiftFunc(array) {
  let firstPosition = array[0];
  for(let i=0; i<array.length; i++) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
  return firstPosition;
};