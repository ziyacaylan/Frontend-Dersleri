const products = [
  "Mikrofon",
  "Kablo",
  "Telefon",
  "Bilgisayar",
  "Mouse",
  "Klavye",
  "Ekran",
];

const newProducts = products.filter((product) => product.length > 5); // string uzunluğu 5 ten büyük olanları yeni dizi olarak döner
console.log(newProducts); // [ 'Mikrofon', 'Telefon', 'Bilgisayar', 'Klavye' ]

// Aşağıdaki users dizisindeki nesneler içerisinden isActive'i true olanları almak istiyorum.
const users = [
  { fullName: "Mehmet Veli", isActive: false },
  { fullName: "Ali Duran", isActive: true },
  { fullName: "Ahmet Yılmaz", isActive: true },
  { fullName: "Oğuz Şahin", isActive: false },
];

const isActiveUsers = users.filter((user) => user.isActive === true);
console.log(isActiveUsers); // [{ fullName: 'Ali Duran', isActive: true },  { fullName: 'Ahmet Yılmaz', isActive: true }]

// ALIŞTIRMA SORULARI

const person = [
  {
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
  },
];

// Soru 1: Yukarıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.

const bigToThirty = person.filter((human) => human.age > 30);
console.log("Yaşı 30 dan büyük olanlar : ", bigToThirty); // [ { name: 'Oğuz', age: 33, languages: [ 'Java', 'HTML' ] } ]

// Soru 2: Yukarıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.

const knowsJavascript = person.filter((human) =>
  human.languages.includes("JavaScript")
);
console.log("javascript bilenler :", knowsJavascript);
