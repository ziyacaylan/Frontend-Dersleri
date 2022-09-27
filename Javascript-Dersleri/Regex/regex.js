// let metin = "Merhaba ben YuSuF";
// let sonuc = metin.search(/yusuf/i); // ---> yusuf->aranacak kelime, metin-> içerisinde arama yapılan metin, i-> büyük-küçük harf duyarsızlığı
// console.log(sonuc);

// test fonksiyonu düzenli ifade ile arama yapar.
const ifade = /yusuf/g;
const result = ifade.test("Merhaba ben YuSuF");
console.log(result);

// test fonksiyonu düzenli ifade ile arama yapar.
const ifade_1 = /yusuf/gi;
const result_1 = ifade_1.test("Merhaba ben YuSuF");
console.log(result_1);

// JavaScript exec fonksiyonu düzenli ifade ile arama yapar.
// Aranan ifade varsa bulunan kelimeyi yoksa null değerini verir.
const ifade_2 = /yusuf/i;
const sonuc = ifade_2.exec("Merhaba ben YuSuF");
console.log(sonuc);

// Örnekte aranan ifade bulunamadığı için null değerini verecektir.
const ifade_3 = /sefa/i;
const sonuc_1 = ifade_3.exec("Merhaba ben YuSuF");
console.log(sonuc_1);
