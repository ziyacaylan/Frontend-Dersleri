const showTime = () => {
  let zaman = document.querySelector("#myClock");
  const tarih = new Date();
  let gun = tarih.getDay();
  let gunler = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let saat = tarih.getHours();
  let dakika = tarih.getMinutes();
  let saniye = tarih.getSeconds();
  let goster = `<strong>${saat}:${dakika}:${saniye} ${gunler[gun]}</strong>`;
  zaman.innerHTML = `${goster}`;
  setInterval(showTime, 1000);
};

const userName = prompt("İsminizi Giriniz:");

let myName = document.querySelector("#myName");
const text1 = document.querySelector(".text1");

myName.innerHTML = userName.toLocaleUpperCase();

if (userName) {
  myName.innerHTML = `Merhaba, ${userName.toUpperCase()}! Hoşgeldin!`;
  showTime();
} else {
  alert("İsminizi giriniz");
  //window.location = "./index.html";
  text1.innerHTML = "İsminizi girmek için sayfayı yenileyiniz";
}
