"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const ulkeyiGoster = function (data, className = "") {
  const languages = Object.values(data.languages);
  const currencies = Object.values(data.currencies);
  //console.log(languages);
  //console.log(currencies);
  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${languages[0]}</p>
            <p class="country__row"><span>💰</span>${currencies[0].name}</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  //   countriesContainer.style.opacity = 1;
};

const hatayiGoster = function (msg) {
  countriesContainer.insertAdjacentText("afterbegin", msg);
  //   countriesContainer.style.opacity = 1;
};
const getJson = function (url, hataMsj = "Birşeyler Ters Gitti...") {
  return fetch(url).then((response) => {
    if (!response.ok)
      throw new Error(`${hataMsj} Hata Kodu : ${response.status}`);
    return response.json();
  });
};

const ulkeBilgisiniAl = function (ulke) {
  getJson(`https://restcountries.com/v3.1/name/${ulke}`, "Ülke bulunamadı...! ")
    .then((data) => {
      ulkeyiGoster(data[0]);
      if (!data[0].borders) throw new Error("Komşusu olmayan ülke...!");
      const komsu = data[0].borders[0];
      //   const komsu = 'qwqwqw';
      if (!komsu) return;
      // Komşu üşle
      return getJson(
        `https://restcountries.com/v3.1/alpha/${komsu}`,
        "Ülke bulunamadı...! "
      );
    })
    .then((data) => ulkeyiGoster(data[0], "neighbour"))
    .catch((err) => {
      console.log(err);
      hatayiGoster(`Birşeyler ters gitti ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", () => ulkeBilgisiniAl("turkey"));

//ulkeBilgisiniAl('turkesdsd');
