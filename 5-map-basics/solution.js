const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Your code below

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers);

const halfedNumbers = numbers.map((number) => {
  return number / 2;
});

console.log(halfedNumbers);

const multipliedNumbers = numbers.map((number) => {
  return number * number;
});

console.log(multipliedNumbers);
