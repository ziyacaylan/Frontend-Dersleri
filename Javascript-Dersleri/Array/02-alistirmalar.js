let dizi = [2, 5, 8, 11, 15, 17];

// Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)

const result_1 = [];
dizi.filter((sayi) => {
  if (sayi > 10) {
    result_1.push(sayi * 5);
  }
});
console.log(result_1);

console.log("********************************************");
// SORU 2
let dizi_1 = [3, 6, 9, 14, 16];

// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

function myFunction(dizi_1) {
  let counter = 0;
  dizi_1.forEach((element) => {
    element > 5 ? ++counter : counter;
  });
  return `Beşten büyük ${counter} tane eleman var`;
}

console.log(myFunction(dizi_1));

console.log("********************************************");
// SORU 3
let dizi_2 = [2, 3, 4];

// Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.

const result_2 = dizi_2.reduce((carp, sayi) => {
  return carp * sayi;
});
console.log(`Dizi elemanlarının çarpımlarının sonucu : ${result_2}`);
