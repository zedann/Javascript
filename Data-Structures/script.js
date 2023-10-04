"use strict";

// Data needed for a later exercise

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1} , ${ing2} and ${ing3}`);
  },
};

// const arr = [1, 2, 3];

// const [a, b, c] = arr;
// console.log(a, b, c);

// let [first, , second] = restaurant.categories;
// [first, second] = [second, first];
// console.log(first, second);

// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//Default Values

// const [a = 1, b = 1, c = 1] = [10, 11];

//Destructuring Objects {}
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { name: restName, openingHours: hours, categories: tags } = restaurant;
// console.log(restName, tags, hours);
// const { menu = [], starterMenu = [] } = restaurant; //default value
// console.log(menu, starterMenu);

// let a = 111;
// let b = 999;

// const obj = { a: 10, b: 20 };
// ({ a, b } = obj);

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr, 3];
// console.log(newArr);

// const mainMenuCopy = [...restaurant.mainMenu];

// mainMenuCopy.push("hello");
// console.log(mainMenuCopy);
// console.log(restaurant.mainMenu);
//join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

//iterables : arrays , strings , maps , sets , NOT object
//objects

// const newResturant = {
//   ...restaurant,
//   founder: "Zedan",
// };
// console.log(newResturant);
// //copy object

// const restCopy = { ...restaurant };
// console.log(restCopy);

//Rest Pattern left hand side "compress"

// const [a, b, ...others] = [1, 2, 3, 4, 5];

// const [pizza, , rissoto, ...otherfood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, rissoto, otherfood);
