const container = document.querySelector(".container");

//Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const imageFile = document.createElement("img");
    imageFile.src = imgPath;

    imageFile.onload = () => {
      resolve(imageFile);
    };

    imageFile.onerror = () => {
      reject("Bir sorun var, acaba nedir_?");
    };
    imageFile.setAttribute("class", "images");
  });
};
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

wait(1)
  .then(() => {
    createImage("./img/img-1.jpg").then((data, rej) => {
      console.log(data);
      console.log("rej buu:", rej);
      container.append(data);
    });
    return wait(1);
  })
  .then(() => {
    const myImg = document.querySelector(".images");

    myImg.style.display = "none";
    createImage("./img/img-2.jpg").then((data) => {
      container.append(data);
    });
    return wait(1);
  })
  .then(() => {
    const myImg1 = document.querySelectorAll(".images")[1];

    myImg1.style.display = "none";
    createImage("./img/img-3.jpg").then((data) => {
      container.append(data);
    });
    return wait(1);
  })
  .catch((error) => {
    console.log(`Bir sorun var : ${error}`);
  });

//********************** */ Challenge 2*********************************

// const loadNPause = async function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// function loadAll(imgArr){
//     imgArr.map(image=>{
//         await loadNPause
//     })
// }
