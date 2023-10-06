"use strict";

// Data needed for a later exercise

// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
//
// // Data needed for first part of the section
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//
//   openingHours,
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your pasta with ${ing1} , ${ing2} and ${ing3}`);
//   },
// };

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`on ${key} we open from ${open} to ${close}`);
// }
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
//nullish
//nullish values is null and undefined
// restaurant.newGuests = 0;
// const guests = restaurant.newGuests ?? 10;
// console.log(guests);

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals: function (...players) {
//     console.log(`goals scored number is ${players.length}`);
//     for (let i = 0; i < players.length; i++) console.log(players[i]);
//   },
// };

// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1} : ${player}`);
// }

// let sum = 0;
// for (const [key, value] of Object.entries(game.odds)) sum += value;
// console.log(sum / game.odds.length);

// for (const [key, value] of Object.entries(game.odds)) {
//   console.log(
//     `Odd of ${game[key] ? "victory" : "draw"} ${game[key] ?? ""}: ${value}`
//   );
// }
// const frq = new Map();
// for (const player of game.scored) frq.set(player, 0);

// for (const player of game.scored) frq.set(player, frq.get(player) + 1);

// console.log(frq);
// const scorers = {};
// for (const [key, value] of frq) {
//   scorers[key] = value;
// }
// console.log(scorers);

// const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = players1;
// const allPlayers = [...players1, ...players2];
// const players1Final = [...players1, "thiago", "cotinho", "perisic"];
// const { team1:team1, x:draw, team2:team2 } = game.odds;
// console.log(team1, draw, team2);
// game.printGoals("davis", "muler");
// game.printGoals(...game.scored);

// team1 < team2 && console.log("team1");
// team2 < team1 && console.log("team2");

//for of
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// console.log(menu);
// for (const item of menu) console.log(item);

//OPTIONAL CHAINING

// console.log(restaurant.openingHours?.man?.open);
// const days = ["sat", "sun", "mon", "tue", "wed", "thu", "fri"];
// for (const day of days) {
//   console.log(
//     `${day} , we open at ${restaurant.openingHours?.[day]?.open ?? "closed"}`
//   );
// }
// console.log(restaurant.orderRissato?.(0, 1) ?? "method dosnt exist");

//SETS
// const staff = ["waiter", "chef", "waiter", "manager"];
// const ordSet = new Set(staff);
// console.log(ordSet.size);
// console.log(ordSet.has("waiter"));
// ordSet.add("xxxxx");
// ordSet.delete("waiter");
// console.log(ordSet.has("waiter"));

// const uniqueStaff = [...ordSet];
// console.log(uniqueStaff);
// console.log(ordSet);
//set itrables and ... work this itreables

// MAPS
// const hashMap = new Map();
// hashMap.set("resturant", 2);
// hashMap.set("hospital", 5);
// console.log(hashMap);
// hashMap.get("resturant");

// const questions = new Map([
//   ["question", "what is the best programming language in the world now ?"],
//   [1, "C++"],
//   [2, "Java"],
//   [3, "Javascript"],
//   ["correct", 3],
// ]);

// console.log(questions);
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap.get("thu"));
// for (const [key, value] of hoursMap) {
//   console.log(key, value);
// }
// for (const key of hashMap.keys()) console.log(key);

//challenge #3
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
let avg = 90,
  last = 0;
avg /= gameEvents.size;
console.log(`An event happened,on average, every ${Math.trunc(avg)} minutes`);
for (const [key, value] of gameEvents) {
  console.log(`[${key <= 45 ? "FIRST" : "SECOND"} HALF]${key}:${value}`);
}
