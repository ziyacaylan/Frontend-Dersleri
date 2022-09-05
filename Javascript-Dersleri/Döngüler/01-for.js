const users = ["ziya", "ali", "veli", "hasan", "eda", "meda"];

for (let i = 0; i < users.length; ++i) {
  if (users[i] === "veli") {
    break;
  }
  //...
  console.log(`break ifadesi : ${users[i]}`); // ekranda "ziya", "ali", "hasan", "eda", "meda" yazacak "veli" ise yazılmayacaktır.
}

for (let i = 0; i < users.length; ++i) {
  if (users[i] === "veli") {
    continue;
  }
  //...
  console.log(`continue ifadesi : ${users[i]}`); // ekranda "ziya", "ali", "hasan", "eda", "meda" yazacak "veli" ise yazılmayacaktır.
}

// sonsuz döngü ve çıkılması örnek
let idx = 0;
for (;;) {
  console.log(`idx = ${idx}`);
  if (idx === 25) {
    break;
  }
  ++idx;
}
