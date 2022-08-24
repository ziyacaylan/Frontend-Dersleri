// butona ulaşarak tıklandığında mesaj verelim

const buton = document.getElementById("btn");
buton.addEventListener("click", () => alert("Butona tıklandı"));

const htmlCollections = document.getElementsByTagName("p");
console.log(htmlCollections); // HTMLCollection(6) [p, p, p, p, p, p]

// Sayfadaki bütün etiketler
console.log(document.getElementsByTagName("*")); // HTMLCollection(16)

// telefon adını taşıyan elemanları getirelim
const tel = document.getElementsByName("telefon");
console.log(tel); // NodeList [input]

//Get Elements By Class Name
const kuslar = document.getElementsByClassName("kusu");
console.log(kuslar); // HTMLCollection(3) [div.baykuş.kusu, div.guvercin.kusu, div.kartal.kusu]
