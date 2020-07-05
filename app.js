'use strict';

// Return some sorted arrays

// Sort list of Words
// write a method sortWords that takes in an array of strings
// and return an array with those strings
// sorted alphabetically 

let superStrings = ['fireworks', 'jupiter', 'mexico', 'apples', 'grapes', 'guns', 'zebra', 'extra-sauce'];

const animals = [
  {
    name: 'tiger',
    weight: 340
  },
  {
    name: 'bear',
    weight: 624
  },
  {
    name: 'otter',
    weight: 40
  },
  {
    name: 'hippopotamus',
    weight: 990
  },
  {
    name: 'squirrel',
    weight: 6
  },
];

// How to sort with an olf fashioned for loop

// sort the animals by weight, lightest first
let sorted = [];
for (let i = 0; i < animals.length; i++) {
  let added = false;
  // step through the list of sorted animals one by one
  for (let j = 0; j < sorted.length && !added; j++) {
    if (animals[i].weight < sorted[j].weight) {
      // add the animal in the right spot in the sorted array
      sorted.splice(j, 0, animals[i]);
      added = true;
    }
  }
  if (!added) {
    sorted.push(animals[i]);
  }
}
console.log(sorted);

animals.sort(function(firstAnimal, secondAnimal){
  if(firstAnimal.weight < secondAnimal.weight){
    return -1;
  } else {
    return 1;
  }
});

console.log(animals);

// sort strings: Take in an array of strings
// returns the strings sorted alphabetically 

let alphabetizeThisString = array => {
  array.sort();
  return array;
};

console.log(alphabetizeThisString(superStrings));

// sort numbers: Take in an array of numbers
// returns the numbers sorted least to greatest

let arrayOfNumbers = [32, 13, 900, 24, 10, 3, 51, 3, 12, 2, 1];

let sortNumbers = array => {
  array.sort((firstNumber, secondNumber) => {
    if(firstNumber < secondNumber){
      return -1;
    } else {
      return 1;
    }
  });
  return array;
};


console.log(sortNumbers(arrayOfNumbers));

// Now sort the numbers in reverse order

let largestFirst = array => {
  array.sort((firstNumber, secondNumber)=>{
    if (firstNumber > secondNumber){
      return -1;
    } else {
      return 1;
    }
  });
  return array;
};

console.log(largestFirst(arrayOfNumbers));

// Use sort to sort objects by a property
// Write a function sortFlowersByZone
// that takes in an array of flower objects
//sorts them by their hardinessZone

let flowers = [
  {
    name: 'Pink Coneflower',
    zone: 6
  },
  {
    name: 'Scarlet Phlox',
    zone: 3
  },
  {
    name: 'Carnations',
    zone: 4
  },
  {
    name: 'Hyacinths',
    zone: 3
  },
  {
    name: 'Hydrangeas',
    zone: 5
  }
];

let sortFlowersByZone = flowers => {
  let sortedFlowers = flowers.slice().sort((firstFlower, secondFlower) =>{
    if(firstFlower.zone < secondFlower.zone) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedFlowers;
};

console.table(sortFlowersByZone(flowers));
console.table(flowers);

// sort strings by length

let flowerNames = [];
flowers.forEach( flower => {
  flowerNames.push(flower.name);
});

console.log(flowerNames);

const myFlowers = ['Pink Coneflower', 'Scarlet Phlox', 'Carnations', 'Hyacinths', 'Hydrangeas'];
console.log(flowerNames === myFlowers);

let sortByLength = flowers => {
  flowers.sort((firstFlower, secondFlower) => {
    if(firstFlower.length < secondFlower.length) {
      return -1;
    } else {
      return 1;
    }
  });
  return flowers;
};

console.log(sortByLength(myFlowers));