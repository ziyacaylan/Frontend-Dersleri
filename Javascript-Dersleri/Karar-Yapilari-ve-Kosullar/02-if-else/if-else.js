/*ÖRNEK : Bilgisayar tarafından belirlenen 0-10 arası bir sayıyı tahmin edelim*/

const ramdomSayi = Math.floor(Math.random() * 10);

const randomTahmin = prompt("1-10 arası bir sayı giriniz.");

const tahmin = document.querySelector("#tahmin");

tahmin.innerHTML = `${tahmin.innerHTML} ${randomTahmin}`;

const random = document.querySelector("#random");
random.innerHTML = `${random.innerHTML} ${ramdomSayi}`;

const container = document.querySelector(".main-div");

const newItem = document.createElement("h4");

if (ramdomSayi === Number(randomTahmin)) {
  newItem.innerHTML = "Tebrikler Tahmininiz DOĞRU...";
} else {
  newItem.innerHTML = "Üzgünüm tahminin YANLIŞ...";
}
container.prepend(newItem);
