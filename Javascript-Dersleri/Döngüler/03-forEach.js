const names = [
  "ziya",
  "ali",
  "veli",
  "hasan",
  "eda",
  "meda",
  "seda",
  "ecrin",
  "mecrin",
];

names.forEach((value, index, arr) => {
  console.log("value: ", value); // names lerin o andi değerini ekrana yazdırır
  console.log("value parametresinin aldığı index :", index); // döndüğü esnadaki index değeri yazdırılır.
  console.log("arr:", arr); // bütün arr her seferinde yazdırılır
});
console.log(
  "*******************--------------------*****************************"
);

// names leri büyük fark olarak ekrana yazdıralım.
names.forEach((name) => console.log(name.toUpperCase()));
console.log(names); // dikkat edilir ise orjinal arrayimizde bir değişiklik olmamıştır.

const myResult = names.forEach((name) => console.log(name.toLocaleLowerCase()));
console.log(myResult); // undefined geriye bir değer dönmediği gözlemlenmiştir.

const numbers = [4, 11, 9];
const newArray = [];

numbers.forEach(function (numbers) {
  newArray.push(numbers * 3);
});
console.log(newArray);

// output = [12, 33, 27]
