console.log("Merhaba Dünya");

// function repeatStringNumTimes(str, num) {
//   if (str === "" || typeof str !== "string") {
//     return "";
//   }
//   let newStr = "";
//   for (let i = 0; i < num; i++) {
//     newStr += str;
//   }
//   return newStr;
// }

// console.log(repeatStringNumTimes("abc", 3));

// function truncateString(str, num) {
//   if (str.length === num || str.length < num) {
//     return str;
//   } else {
//     let newStr = str.slice(0, num);
//     return newStr + "...";
//   }
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// console.log(
//   truncateString(
//     "A-tisket a-tasket A green and yellow basket",
//     "A-tisket a-tasket A green and yellow basket".length
//   )
// );

// function findElement(arr, func) {
//   let num = 0;

//   if (arr.length === 0) {
//     return undefined;
//   } else {
//     numr = func((arr) => {
//       arr.map((item) => item % 2 === 0);
//     });
//   }
//   return num;

//   //return num;
// }

// console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

// function titleCase(str) {
//   let arr = str.split(" ");
//   console.log(arr);
//   let newArr = arr.map(
//     (item) =>
//       item.substr(0, 1).toUpperCase() +
//       item.substr(1, item.length).toLowerCase()
//   );
//   console.log(newArr);
//   return newArr.join(" ");
// }

// console.log(titleCase("I'm a little tea pot"));
// console.log(titleCase("sHoRt AnD sToUt"));

// function frankenSplice(arr1, arr2, n) {
//   let newArr = [...arr1];
//   if (arr2.legth === 0) {
//     return arr1;
//   } else {
//     let a = arr2.slice(0, Number(n));
//     let b = arr2.slice(n, arr2.legth);
//     newArr.splice(0, 0, ...a);
//     newArr.splice(newArr.length, 0, ...b);
//   }
//   return newArr;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// function bouncer(arr) {
//   arr = arr.filter((item) => {
//     return (
//       item !== undefined &&
//       item !== null &&
//       item !== false &&
//       item !== 0 &&
//       item !== "" &&
//       isNaN() !== NaN
//     );
//   });
//   return arr;
// }

// //console.log(bouncer([7, "ate", "", false, 9]));
// console.log(bouncer([false, null, 0, NaN, undefined, ""]));

// function bouncer(arr) {
//   // Don't show a false ID to this bouncer.

//   var falsy;
//   var trueArr = [];

//   for (i = 0; i < arr.length; i++) {
//     falsy = Boolean(arr[i]);

//     if (falsy === true) {
//       trueArr.push(arr[i]);
//     }
//   }

//   return trueArr;
// }

// function bouncer(arr) {
//   return arr.filter(function (value) {
//     return value ? true : false;
//   });
// }

// console.log(bouncer([7, "ate", "", NaN, false, 9]));
// console.log(bouncer([false, null, 0, NaN, undefined, ""]));

// function getIndexToIns(arr, num) {
//     let newArray = arr[0];
//     console.log([newArray]);
//   let newNum = 0;
//   arr.forEach((element) => {
//     if (element < num) {
//       newNum++;
//     }
//   });
//   return newNum;
// }

// console.log(getIndexToIns([40, 60], 50));
// console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

// function mutation(arr) {
//   let newArray_1 = arr[0].split("");
//   newArray_1 = newArray_1.map((item) => item.toLowerCase());
//   console.log(newArray_1);
//   let newArray_2 = arr[1].split("");
//   newArray_2 = newArray_2.map((item) => item.toLowerCase());
//   console.log(newArray_2);

//   return newArray_2.every((item) => newArray_1.includes(item));
// }

// console.log(mutation(["heLLo", "hey"]));

// function chunkArrayInGroups(arr, size) {
//   var results = [];
//   while (arr.length) {
//     results.push(arr.splice(0, size));
//   }
//   return results;
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));

/*JavaScript Algorithms and Data Structures */

// The global variable
// const watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     Metascore: "82",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     Metascore: "70",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True",
//   },
// ];

// let filteredList = [];
// let putTitleRatings = (x) => {
//   return { title: x["Title"], rating: x["imdbRating"] };
// };

// let filterRatings = (x) => {
//   return parseFloat(x.imdbRating) >= 8;
// };

// filteredList = watchList.filter(filterRatings).map(putTitleRatings);

// console.log(filteredList);

// The global variable
// const s = [23, 65, 98, 5];

// Array.prototype.myFilter = function (callback) {
//   // Only change code below this line
//   const newArray = [];
//   s.forEach((num) => {
//     if (callback(num)) newArray.push(num);
//   });
//   // Only change code above this line
//   return newArray;
// };

// const new_s = s.myFilter(function (item) {
//   return item % 2 === 1;
// });

// console.log(new_s);

// const sum = (...args) => {
//   return args.reduce((a, b) => a + b, 0);
// };
// console.log(sum(1, 2, 3, 4));

// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 },
// };

// // Only change code below this line

// const {
//   today: { low: lowToday, high: highToday },
// } = LOCAL_FORECAST;

// const [a, b] = [1, 2, 3, 4, 5, 6];
// console.log(a, b);

// const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c);

// let a = 8,
//   b = 6;
// // Only change code below this line
// [b, a] = [a, b];

// console.log(a, b);

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function removeFirstTwo(list) {
//   // Only change code below this line
//   //const arr = list;
//   const [a, b, ...arr] = list;
//   // Only change code above this line
//   return arr;
// }
// const arr = removeFirstTwo(source);

// console.log(arr);

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"],
// };
// function makeList(arr) {
//   // Only change code below this line
//   const failureItems = result.failure.map(
//     (element) => `<li class="text-warning">${element}</li>`
//   );
//   // Only change code above this line

//   return failureItems;
// }

// const failuresList = makeList(result.failure);

// console.log(failuresList);

// class carrot {
//   constructor(name) {
//     this.name = name;
//   }
// }

// //const carrot = new carrot("carrot");

// console.log(carrot.name); // Should display 'carrot'

// // Only change code below this line
// class Thermostat {
//   constructor(temperature) {
//     this._temperature = temperature;
//   }
//   // getter
//   get temperature() {
//     return this._temperature;
//   }
//   // setter
//   set temperature(updateTemperature) {
//     this._temperature = updateTemperature;
//   }
// }
// // Only change code above this line

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius

// console.log(temp);

// const myPromise = new Promise((resolve, reject) => {
//   let responseFromServer = true;
//   if (Boolean(responseFromServer)) {
//     resolve("true");
//   } else {
//     reject("false");
//   }
// });

// console.log(myPromise);
