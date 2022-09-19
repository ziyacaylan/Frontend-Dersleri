// Nesne Tabanlı Programla
/*Object içerisindeki değişkenlere "property" denir. */
let soru = {
  soruMetni: "Hangisi javascript paket yönetim uygulamasıdır?",
  cevapSeçenekleri: {
    a: "Node.js",
    b: "Typescript",
    c: "Npm",
  },
  cevap: "c",
  cevabıKontrolEt: function (cevap) {
    return cevap === this.cevap;
  },
};
let sor2 = {
  soruMetni: "Hangisi .net paket yönetim uygulamasıdır?",
  cevapSeçenekleri: {
    a: "Node.js",
    b: "nuget",
    c: "Npm",
  },
  cevap: "b",
  cevabıKontrolEt: function (cevap) {
    return cevap === this.cevap;
  },
};

// Constructor : Nesne (object) özelliklerini başlatmak için kullanılır. Yeni bir nesne oluşturulduğunda eğer içerisinde bir constructor metodu var ise otomatik olarak çalıştırılır.Javascript, eğer bir constructor tanımlamazsak kendisi boş bir constructor tanımlar ve çalıştırır.

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  (this.soruMetni = soruMetni),
    (this.cevapSecenekleri = cevapSecenekleri),
    (this.dogruCevap = dogruCevap),
    (this.cevabıKontrolEt = function (cevap) {
      return cevap === this.dogruCevap;
    });
}

let soru1 = new Soru(
  "Hangisi javascript paket yönetim uygulamasıdır?",
  {
    a: "Node.js",
    b: "Typescript",
    c: "Npm",
  },
  "c"
);
let soru2 = new Soru(
  "Hangisi .net paket yönetim uygulamasıdır?",
  {
    a: "Node.js",
    b: "nuget",
    c: "Npm",
  },
  "b"
);

let sorular = [
  new Soru(
    "Hangisi javascript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Soru(
    "Hangisi .net paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "nuget", c: "Npm" },
    "b"
  ),
  new Soru(
    "Hangisi .net paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "nuget", c: "Npm" },
    "b"
  ),
  new Soru(
    "Hangisi .net paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "nuget", c: "Npm" },
    "b"
  ),
];

// console.log(soru1.soruMetni);
// console.log(soru1.cevapSecenekleri);
// console.log(soru1.dogruCevap);

console.log(sorular[0].soruMetni); // Hangisi javascript paket yönetim uygulamasıdır?
console.log(sorular[0].cevapSecenekleri); // { a: 'Node.js', b: 'Typescript', c: 'Npm' }
console.log(sorular[0].cevabıKontrolEt("c")); // true
console.log(sorular[0].dogruCevap); // c
