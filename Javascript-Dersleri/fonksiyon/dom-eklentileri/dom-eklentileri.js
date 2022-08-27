// Başlığımıza ulaşarak üzerine tıklandığında rengini değiştirelim.
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("mouseover", clicked);

function clicked() {
  this.style.color == "red"
    ? (this.style.color = "blue")
    : (this.style.color = "red");
}

function clickON() {
  myTitle.innerHTML = "Üzerine tıklayarak Yazıyı DEĞİŞTİRDİK";
}

myTitle.addEventListener("click", clickON);

const color = document.querySelector("#select");

color.addEventListener("change", selectBox);

function selectBox(event) {
  console.log("Etkinlik tipi : " + event.type);
  console.log("deger : " + event.target.value);
}
