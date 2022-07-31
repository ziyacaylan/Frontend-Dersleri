//****************** let ve const ile Değişken tanımlama****************** */

// var ile değişken tanımlamak:
//*********Bu eski yöntemdir ve yeni yöntemde atık kullanılmamaktadır.********************************* */
// var fullName = "Ziya ÇAYLAN";
// console.log(fisrtName);

// let ile değişkeni boş tanımlamak.
let fullName;
console.log(fullName);

// let ile değişkene bilgi atamak:
fullName = "Ziya ÇAYLAN";
console.log(fullName);

// let ile değişkene bilgi atayarak tanımlamak:
let password = "1234";
console.log(password);

// değişken ataması yapmadan önce kullanmaya çalışmak:
/* HATALI KULLANIM
 console.log(firstName);
 let firstName = "Ziya";
 */

// let ile tanımlanan değişken içerisindeki veriyi değiştirmek
fullName = "Frontend Developer";
console.log(fullName);

// birleştirme veya ekleme işlemi
fullName = "Ziya ÇAYLAN " + fullName;
console.log(fullName);

// const ile değişkeni boş tanımlamaya çalışmak || const ile değişken tanımlamak.
/* HATALI KULLANIM
const userName; // değişken tanımlandı ancak içi boş tanımlandı
*/
/*Doğru kullanım*/
const USER_NAME = "ziya"; // tanımlana değişken içerisindeki bilgi değiştirilemez.
console.log(USER_NAME);
/*
USER_NAME = "deneme"; // error
console.log(USER_NAME);
*/

let x = 3; // integer ancak number
let y = 3.14; // float ancak number

console.log(typeof x);
console.log(typeof y);

let sayac = 1;
let arttir_sayac = ++sayac;
console.log(arttir_sayac); // 2

let counter = 1;
let a = counter++;
let eleman;
console.log(a); // 1console.log(counter); // 2 değerini verir.

console.log(Boolean(sayac));
console.log(Boolean(a));
console.log(Boolean(eleman));

console.log(Boolean(10 < 11));
console.log(Boolean(10 < 9));

console.log(true + false);

const value = parseInt("123");

console.log(typeof value);
console.log(value);
