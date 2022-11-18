const container = document.querySelector(".container");

//Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const imageFile = document.createElement("img");
//     imageFile.src = imgPath;

//     imageFile.onerror = () => reject("Bir sorun var, acaba nedir_?");

//     imageFile.onload = () => {
//       resolve(imageFile);
//     };

//     imageFile.setAttribute("class", "images");
//   });
// };
//console.log("selam");

// const imgArr = ["./img/img-1.jpg", "./img/img-2.jpg", "./img/img-3.jpg"];

// for (let i = 0; i < imgArr.length; i++) {
//   createImage(imgArr[i]).then((data) => {
//     console.log("yüklüyor...");
//     wait(2).then(() => {
//       container.append(data);
//       console.log("Yüklendi...");
//     });
//   });
// }

// wait(1)
//   .then(() => {
//     createImage("./img/img-1.jpg").then((data, rej) => {
//       container.append(data);
//     });
//     return wait(1);
//   })
//   .then(() => {
//     const myImg = document.querySelector(".images");

//     myImg.style.display = "none";
//     createImage("./img/img-2.jpg").then((data) => {
//       container.append(data);
//     });
//     return wait(1);
//   })
//   .then(() => {
//     const myImg1 = document.querySelectorAll(".images")[1];

//     myImg1.style.display = "none";
//     createImage("./img/img-3.jpg").then((data) => {
//       container.append(data);
//     });
//     return wait(1);
//   })
//   .catch((error) => {
//     console.log(`Bir sorun var : ${error}`);
//   });

//**********************Challenge 37# Hoca ile*************************** */

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imgPath;
    img.setAttribute("class", "images");
    img.addEventListener("load", function () {
      container.append(img);
      resolve(img);
    });
    img.addEventListener("error", function () {
      reject(new Error("Görüntü bulunamadı."));
    });
  });
};
let mevcutImage;

// createImage("./img/img-1.jpg")
//   .then((img) => {
//     mevcutImage = img;
//     console.log("1. fotoğraf yüklendi...");
//     return wait(2);
//   })
//   .then(() => {
//     mevcutImage.style.display = "none";
//     return createImage("./img/img-2.jpg");
//   })
//   .then((img) => {
//     mevcutImage = img;
//     console.log("2. fotoğraf yüklendi...");
//     return wait(2);
//   })
//   .then(() => {
//     mevcutImage.style.display = "none";
//     return createImage("./img/img-3.jpg");
//   })
//   .catch((err) => console.log(err));
//**********************Challenge 37# Hoca ile bitiş********************* */

//********************** Challenge 38# Hoca ile Başlangıç*********************************

const loadNPause = async function () {
  try {
    // 1. Fotoğrafı yükle
    let img = await createImage("./img/img-1.jpg");
    console.log("1. Fotoğraf yüklendi.");
    await wait(2);
    img.style.display = "none";

    // 2. Fotoğrafı yükle
    img = await createImage("./img/img-2.jpg");
    console.log("2. Fotoğraf yüklendi.");
    await wait(2);
    img.style.display = "none";
    // 2. Fotoğrafı yükle
    img = await createImage("./img/img-3.jpg");
    console.log("3. Fotoğraf yüklendi.");
    await wait(2);
  } catch (error) {
    console.error(error);
  }
};

//loadNPause();

// 2. Bölüm

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    console.log(imgs);
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach((img) => img.classList.add("parallel"));
  } catch (error) {
    console.log(error);
  }
};

loadAll(["./img/img-1.jpg", "./img/img-2.jpg", "./img/img-3.jpg"]);
loadAll(["./img/img-1.jpg", "./img/img-2.jpg", "./img/img-3.jpg"]);
