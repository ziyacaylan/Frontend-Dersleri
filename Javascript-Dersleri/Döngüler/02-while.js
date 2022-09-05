const users = ["ziya", "ali", "veli", "hasan", "eda", "meda"];

let i = 0;
while (users[i]) {
  console.log(users[i]); // "ziya", "ali", "veli", "hasan", "eda", "meda"
  ++i;
}

// while sonsuz döngü
let idx = 0;
while (true) {
  console.log(`idx = ${idx}`);
  if (idx === 25) {
    break;
  }
  ++idx;
}
