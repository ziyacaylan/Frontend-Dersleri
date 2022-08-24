// length özelliği
/*toplam 11 karakter (boşluk dahil) */
const str = "Ziya çaylan";

console.log(str.length); // ekranda 11 görüntülenecektir.

/*indexOf Özelliği */
// 'ya' nın başladığı index numarasını geri döner yani 2
console.log(str.indexOf("ya"));

/*lastIndexOf Özelliği */
// 'a' nın en son görüldüğü index numarasını geri döner yani 9
console.log(str.lastIndexOf("a"));

/*Search - Metin İçerisinde Arama Yapma */

console.log(
  `Search ile "ya" yı aradığımızda geri dönen değer ${str.search("ya")}`
);

/*Slice ile metinden parça alma */

console.log(str.slice(2, 4)); // 2. ndex numarasından başlar ve 4. index numarasına kadar alır ancak 4. index dahil değildir.

console.log(str.slice(2)); // 2. index numarasından başlar ve sona kadar alır

/*Respace metodu */

console.log(str.replace("çaylan", "ÇAYLAN"));

/*toUpperCase ve toLowerCase */

console.log(str.toUpperCase()); // ZIYA ÇAYLAN
console.log(str.toLocaleLowerCase()); // ziya çaylan
console.log("************************************");
/*Concat - Metin Birleştirme */

const myName = "ziya";
const surname = "çaylan";

console.log(myName.concat(" ", surname)); //myName den sonra belirttiğimiz gibi " " (bir boşluk bırakır ve surname i ekler) konsolda : ziya çaylan

/*charAt- İndex Numarasına Göre Karakter Bulma */

console.log(str.charAt(2)); // y
console.log(str.charAt(3)); // a

/*charCodeAt – İndex Numarasına Göre Karakterin Unicode Değerini Bulma */

console.log(str.charCodeAt(2)); // 121

/*Split – Metni Diziye Çevirme */

const isimler = str.split(" ");
console.log(isimler); // [ 'Ziya', 'çaylan' ]

const metin = "ziya-ali-veli-hasan-hüseyin-mehmet-mahmut-canan-caner-eda-seda";
console.log(metin.split("-")); // ['ziya','ali','veli','hasan','hüseyin','mehmet','mahmut','canan','caner','eda','seda']

/* Bazı Örnekler */

// İlk Harfi Büyük Kalan Harfleri Küçük Yapma
const isim = "ziya";
const newIsim = `${isim.charAt(0).toUpperCase()}${isim.slice(1)}`;
console.log(newIsim);

//Bir dizideki kelimelerin ilk harflerini büyük yapma

const names = [
  "ziya",
  "ali",
  "veli",
  "hasan",
  "hüseyin",
  "mehmet",
  "mahmut",
  "canan",
  "caner",
  "eda",
  "seda",
];

const newNames = names.map(
  (isim) =>
    `${isim.charAt(0).toUpperCase()}${isim.slice(1).toLocaleLowerCase()}`
);

console.log(newNames);

// istenilen karakterden sonrasını alma
// Örnek --> ziyacaylan@gmail.com
// '@' işaretinden sonraki karakterleri alma

const email = "ziyacaylan@gmail.com";

const domain = email.slice(email.search("@") + 1);
console.log(domain);

const userName = email.slice(0, email.search("@"));
console.log(userName);
