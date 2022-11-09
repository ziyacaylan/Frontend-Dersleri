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

//ulkeBilgisiniAl('turkesdsd');

/* CHALLENGE 2 BURADAN BAŞLIYOR */
let checkedOption = 0;
// burada hangi seçenek seçildiği bulunuyor.
let handleChange = function (radioButton) {
  checkedOption = Number(radioButton.value);
  //console.log(checkedOption);
};

function verileriCek(option) {
  if (option === 0) {
    alert("Bir seçim yapmalısınız...!");
    return;
  }
  option && option === 1 && benNeredeyim("52.508", "13.381");
  option && option === 2 && benNeredeyim("19.037", "72.873");
  option && option === 3 && benNeredeyim("-33.933", "18.474");
}
function benNeredeyim(lat, lng) {
  const apiKey = "22195313621880416279x84334";

  fetch(`https://geocode.xyz/${lat},${lng}?json=1&auth=${apiKey}`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Bir sorun var, Hata Kodu : ${response.status}`);
      return response.json();
    })
    .then((data) => {
      if (data.msg) {
        throw new Error(`Bir sorun var, Hata Kodu : ${data.msg}`);
        return;
      }

      console.log(data);

      let country = "";
      let city = "";

      country = data.country;
      city = data.city;

      const popup = document.querySelector(".popup");
      const popupTitle = document.querySelector(".popup-title");

      if (country) {
        popupTitle.innerHTML = `${country}, ${city}'desiniz...`;
        popup.style.display = "block";
        ulkeBilgisiniAl(country);
        document.querySelector(".btn-country").style.display = "none";
      }
    })
    .catch((err) => {
      console.log(err);
      alert(`Birşeyler ters gitti ${err.message}`);
    });
}

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});

btn.addEventListener("click", () => verileriCek(checkedOption));
