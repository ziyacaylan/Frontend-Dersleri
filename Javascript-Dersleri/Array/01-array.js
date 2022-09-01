const arr = [];

arr.push("zero");
arr.push("one");
arr.push("two");
arr.push("three");

//console.log(arr);

arr.unshift(3);
arr.unshift(2);
arr.unshift(1);
arr.unshift(0);

console.log(arr);

// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();

// console.log(arr);

arr.shift();
arr.shift();
arr.shift();
arr.shift();

console.log(arr); // [ 0, 1, 2, 3 ]

let nums = [1, 4];
console.log(nums); // [ 1, 4 ]

nums.splice(1, 0, 2, 3);
console.log(nums); // [ 1, 2, 3, 4 ]

let myNums = [1, 2, 3, 4];
myNums[1] = "iki";
myNums[2] = "üç";
console.log(myNums);

const arr1 = [0, 1, 2, 3, "zero", "one", "two", "three"];
// let decNum = arr1.pop();
let decNum = arr1.shift();
console.log("Silinen Eleman :", decNum); // "three"

// .includes()
const meyveler = ["elma", "armut", "kavun", "karpuz"];

const kavunvar = meyveler.includes("kavun");
console.log("Kavun var mı : ", kavunvar);

/* .slice() methodu */

// const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newArray = someNumbers.slice(2, 5);
// console.log(".slice() ile oluşan yeni Array :", newArray);
// console.log(someNumbers); //

// .join()

// const str = someNumbers.join();
// const str = someNumbers.join("-");
// const str = someNumbers.join("");
// // console.log(str); // 1,2,3,4,5,6,7,8,9
// // console.log(str); // 1-2-3-4-5-6-7-8-9
// console.log(str); // 123456789
// console.log(someNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// .concat() Methodu

const numbers = [1, 2, 3, 4, 5, 6];
const strNums = ["bir", "iki", "üç", "dört", "beş"];

const newNumbers = numbers.concat(strNums);

console.log(newNumbers);

// .forEach() Methodu

const gunler = [
  "pazar",
  "pazartesi",
  "salı",
  "çarşamba",
  "perşembe",
  "cuma",
  "cumartesi",
];

gunler.forEach((gun) => {
  console.log("Günler Büyük Harfle :", gun.toUpperCase());
});

const malzemeler = ["yumurta", "un", "süt"];

malzemeler.forEach(function (malzeme, malzemeIndeksi) {
  console.log(malzemeIndeksi, malzeme);
});

// .map() methodu

const newDays = gunler.map((gun) => gun.toUpperCase());
console.log(newDays);

// .some() methodu

const sayilar = [2, 4, 6, 8, 9, 10];

const tekSayiVarmi = sayilar.some((sayi) => sayi % 2 !== 0);
console.log(tekSayiVarmi); //true

// .every() methodu

const result = sayilar.every((sayi) => sayi >= 2);
console.log(result);

// .filter() methodu

// const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const tekSayilar = someNumbers.filter((sayi) => sayi % 2 !== 0);
// console.log(tekSayilar); // [ 1, 3, 5, 7, 9 ]

// .find() methodu

// const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const sonuc = someNumbers.find((sayi) => sayi > 4);
// console.log(sonuc);

// .sort() methodu
const someNumbers = [1, 3, 2, 6, 4, 9, 5, 8, 7];
someNumbers.sort((a, b) => a - b);
console.log("Dizinin küçükten büyüğe sıralanması : ", someNumbers); //Dizinin küçükten büyüğe sıralanması : [1, 2, 3, 4, 5, 6, 7, 8, 9]

someNumbers.sort((a, b) => b - a);
console.log("Dizinin büyükten küçüğe sıralanması : ", someNumbers); //Dizinin küçükten büyüğe sıralanması : [1, 2, 3, 4, 5, 6, 7, 8, 9]

// dizi içerisinde dizi tanımlama

const ogrenciler = [
  ["ziya", "caylan"],
  ["ali", "veli"],
  ["hasan", "hüseyin"],
  ["salim", "malim"],
];
