// //function

// function toplama(a = 0, b = 0) {
//   return a + b;
// }

// let result = toplama(10 + 20);
// console.log("işlemin sonucu : ", result); // işlemin sonucu :  30

// // arrow function

// const topla = (a = 0, b = 0) => a + b;

// console.log("Toplama işleminin Sonucu : ", topla(10 + 20)); // Toplama işleminin Sonucu :  30

// // setTimeout
// setTimeout(() => {
//   console.log("Merhaba"); // 2 sn sonra bu komut çalıştırılır.
// }, 2000);

// // setInterval
// setInterval(() => {
//   console.log("Ben her 2 saniyede bir çalışacağım");
// }, 2000);

// //callback function

// const sayilariTopla = (sumNumbers) => {
//   return sumNumbers(10, 20);
// };

// console.log(
//   "İşlem sonucu : ",
//   sayilariTopla((a = 0, b = 0) => a + b)
// ); // İşlem sonucu :  30

// fetch

// const url = "https://jsonplaceholder.typicode.com/users";
// fetch(url)
//   .then((data) => data.json())
//   .then((users) => console.log(...users)); // users objelerini ekrana yazdıracaktır.

// const url = "https://jsonplaceholder.typicode.com/users";
// fetch(url)
//   .then((data) => data.json())
//   .then((users) => users.map((user) => console.log(user.name))); // users bjelerinin içerisindeki her bir userin name'ini ekrana  yazdırır.

// const url = "https://jsonplaceholder.typicode.com/users";
// fetch(url)
//   .then((data) => data.json())
//   .then((users) => {
//     users.map((user) => console.log(user.name));
//     fetch("https://jsonplaceholder.typicode.com/posts").then((data) =>
//       data.json().then((posts) => console.log(posts))
//     );
//   });

// const url = "https://jsonplaceholder.typicode.com/users";
// fetch(url)
//   .then((data) => data.json())
//   .then((users) => users.map((user) => console.log(user.name)));
// const url1 = "https://jsonplaceholder.typicode.com/posts";
// fetch(url1).then((data) => data.json().then((posts) => console.log(posts)));

// const getData = async () => {
//   const users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();

//   const post1 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();

//   const post2 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/2")
//   ).json();

//   const post3 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/3")
//   ).json();

//   console.log(users);
//   console.log(post1);
//   console.log(post2);
//   console.log(post3);
// };

// getData();

// anonim fonksiyon

// (async () => {
//   console.log("selam");
// })();

// (async () => {
//   const users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();

//   const post1 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();

//   const post2 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/2")
//   ).json();

//   const post3 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/3")
//   ).json();

//   console.log(users);
//   console.log(post1);
//   console.log(post2);
//   console.log(post3);
// })();

//Promise

// const getCommnets = (number) => {
//   return new Promise((resolve, reject) => {
//     if (number === 1) {
//       resolve({ name: "Ziya", lastName: "caylan" });
//     } else if (number === 0) {
//       reject("Bir problem oluştu");
//     }
//   });
// };

// getCommnets(1)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

// getCommnets(0)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    await (await fetch("https://jsonplaceholder.typicode.com/users"))
      .json()
      .then((data) => resolve(data));
  });
};

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    await (await fetch("https://jsonplaceholder.typicode.com/posts/" + post_id))
      .json()
      .then((data) => resolve(data));
  });
};

(async () => {
  await getUsers().then((users) => console.log(users));
  await getPost(1).then((post) => console.log(post));
  await getPost(2).then((post) => console.log(post));
  await getPost(3).then((post) => console.log(post));
  await getPost(4).then((post) => console.log(post));
})();
