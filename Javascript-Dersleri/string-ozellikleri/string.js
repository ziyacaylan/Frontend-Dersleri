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
