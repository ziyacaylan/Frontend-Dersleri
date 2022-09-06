// Object Destructuring
let settings = {
  userName: "ziya",
  password: "123456a",
  isActive: true,
  ip: "127.0.0.1",
  serverName: "kodluyoru.org",
};

const userName = settings.serverName;
console.log(userName);

let { userName: user, password: sifre, ...otherSettings } = settings;

console.log(user, sifre, otherSettings);
console.log(user);
console.log(sifre);
console.log(otherSettings);

const cikarma = ({ sayi1, sayi2 }) => {
  // Bu satira dikkat
  return sayi1 - sayi2;
};
const sayilar = {
  sayi2: 3,
  sayi1: 5,
};
console.log("Çıkartma Sonucu:", cikarma(sayilar));
// sonuc 2

const bolme = ({ sayi1, sayi2 = 1 }) => {
  // default deger atadik
  return sayi1 / sayi2;
};
const numbers = {
  sayi1: 8,
  // yine ikinci sayiyi unuttuk
};
console.log(bolme(numbers));
// ama bu sefer sonuc 8, NaN degil

//************************************************************** */
// const toplama = ({ sayi1, sayi2 }) => {
//   // dikkat sadece 2 sayi
//   return sayi1 + sayi2 + sayi3 + sayi4 + sayi5; // error
// };
// const numaralar = {
//   sayi1: 8,
//   sayi2: 4,
//   sayi3: 7,
//   sayi4: 9,
//   sayi5: 11,
// };
// toplama(numaralar); //ReferenceError: sayi3 is not defined

const toplama = ({ sayi1, sayi2, ...args }) => {
  let sonuc = sayi1 + sayi2;
  for (let sayi in args) {
    sonuc += args[sayi];
  }
  return sonuc;
};
const someNumbers = {
  sayi1: 8,
  sayi2: 4,
  sayi3: 7,
  sayi4: 9,
  sayi5: 11,
};
console.log("Sayıların Toplamı :", toplama(someNumbers)); // 39 doner

// Array Destructuring

const someStudents = ["ali", "veli", "hasan", "hüseyin", "mehmet", "ahmet"];

const [ali, veli, hasan, ...otherStudents] = someStudents;

console.log(ali);
console.log(otherStudents);
