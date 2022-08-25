/*Listeye ulaşmak ve eleman eklemek veya elemanı değiştirmek */

let lastItem = document.querySelector("ul#list>li:last-child");

//console.log(lastItem);

lastItem.innerHTML = "Son öğeye ulaşıldı ve değiştirildi";

// ilk öğeye ulaşmak
let firstItem = document.querySelector("ul#list>li:first-child");

firstItem.innerHTML = "İlk öğeye ulaşıldı ve değiştirildi.";

// listeye yeni bir öğe eklemek

let ulList = document.querySelector("ul#list");

let newItem = document.createElement("li");

newItem.innerHTML = "Yeni eleman eklendi";

ulList.append(newItem); // son eleman olarak ekleme yapar

ulList.prepend(newItem); // ilk eleman olarak ekler
