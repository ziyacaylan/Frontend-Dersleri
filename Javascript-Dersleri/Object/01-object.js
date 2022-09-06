let cars = {
  model: "auris",
  brand: "toyota",
  release_year: 1998,
  users: { user1: "ziya", user2: "eda" },
};

// new keyword'ü ile oluşturma
let student = new Object();
student.name = "ziya";
student.lastname = "çaylan";
student.age = 39;

console.log(student); // { name: 'ziya', lastname: 'çaylan', age: 39 }

// Süslü parantezler kullanılarak oluşturma
let phone = {
  brand: "samsung",
  model: "S7-edge",
  capacity: "32GB",
  ram: "4GB",
};

console.log(phone); // { brand: 'samsung', model: 'S7-edge', capacity: '32GB', ram: '4GB' }

// Object.create yöntemi
/*Herhanbi bir yerden kalıtım almayacaksa _null_ parametresi atamamız gerekecektir.  */
let noInheritence = Object.create(null); //herhangi bir kalıtım(inheritence) almaz

/*standartObject isimli obje örneği, object literal ve new object keyword ile oluşturulan objelerin prototiplerini parametre olarak aldığı için, onlar gibi çalışır.*/
let standartObject = Object.create(Object.prototype); //standart obje kalıtımı alır.

let myPhone = Object.create(phone);
myPhone.brand = "Samsung";
myPhone.model = "S7";
myPhone.capacity = "96GB";
myPhone.ram = "4GB";

console.log(myPhone); // { brand: 'Samsung', model: 'S7', capacity: '96GB', ram: '4GB' }

// Computed property

let updateObj = (key_1, value_1, key_2, value_2, key_3, value_3) => {
  return { [key_1]: value_1, [key_2]: value_2, [key_3]: value_3 };
};

let myCar = updateObj(
  "brand",
  "qashqai",
  "model",
  "qashqai",
  "release year",
  2016
);

console.log(myCar); //{ brand: 'qashqai', model: 'qashqai', 'release year': 2016 }

// Kompleks Obje Kullanımı

let state = {
  users: [
    { name: "Brock", age: 25, favoriteColor: "red" },
    { name: "Jessie", age: 17, favoriteColor: "yellow" },
    { name: "James", age: 41, favoriteColor: "blue" },
    { name: "Winnie", age: 18, favoriteColor: "purple" },
  ],
  settings: {
    version: "1.0.5",
    DNS: "105.xx.xx.xx",
    website: "https://www.example.com/",
  },
  banList: ["Ash", "Angelica", "Tom", "Jerry"],
};

console.log(state);

console.log(state.users[1].name); // state objesinin users property'sinin (ki bu property bir dizidir) 1. index'teki elemanının ( buda bir objedir.) name property'si

console.log(state.settings.website); // https://www.example.com/

let person = {
  name: "Jack",
  age: 20,
};

console.log(Object.keys(person)); //["name", "age"]
console.log(Object.values(person)); //["Jack", 20]
console.log(Object.entries(person)); //[ ["name","Jack"], ["age",20] ]

//JSON Methodları

let human = {
  name: "ziya",
  lastName: "çaylan",
  age: 39,
};
let stringObject = JSON.stringify(human); // JSON tipine dönüştürüldü
console.log(stringObject); // {"name":"ziya","lastName":"çaylan","age":39}

let newHuman = JSON.parse(stringObject); // JSON tipinden obje tipine dönüştürüldü.

console.log(newHuman); // { name: 'ziya', lastName: 'çaylan', age: 39 }

/*Nesneye fonksiyon ekleme */
let developer = {
  name: "Ziya",
  surname: "ÇAYLAN",
  age: 39,
  city: "İstanbul",
  introduce: function () {
    console.log(
      `My name is ${this.name} ${this.surname}, I'm ${this.age} years old.`
    );
  },
};

console.log(developer);
console.log(developer.introduce());

// Constructor
function ogrenci(isim, yas) {
  this.isim = isim;
  this.yas = yas;
}

const ali = new ogrenci("ali", 21);
console.log(ali.yas); // 21
console.log(ali); // ogrenci { isim: 'ali', yas: 21 }

ali.yeniOzellik = "Sonradan eklenmiş bir özellik";
console.log(ali.yeniOzellik); // "Sonradan eklenmiş bir özellik"

console.log(ali.yas); // 21
console.log(ali); // ogrenci { isim: 'ali', yas: 21 }

//Sınıfa Prototype yardımıyla fonksiyon eklemek :
ogrenci.prototype.yeniFonksiyon = () => {
  console.log("Merhaba Kodluyoruz");
};
const ayse = new ogrenci("ayşe", 22);
ayse.yeniFonksiyon(); // "Merhaba Kodluyoruz"

ayse.__proto__.enYeniFonksiyon = () => {
  console.log("Tekrar Merhaba Kodluyoruz!");
};

ayse.enYeniFonksiyon();
// Output : "Tekrar Merhaba Kodluyoruz!"

var birey = {
  isim: "Ali",
  soyisim: "Veli",
  dogumYili: 1989,
  merhabaDe: (age) =>
    `Merhaba, ben ${birey.isim} ${birey.soyisim}, ${age} yaşındayım`,
};
birey.yasHesapla = function () {
  return 2021 - this.dogumYili;
};
console.log(birey.merhabaDe(birey.yasHesapla()));
