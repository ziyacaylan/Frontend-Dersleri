const number = document.querySelector("#counter");
const arrtir = document.querySelector("#increase");
const azalt = document.querySelector("#decrease");

arrtir.addEventListener("click", arttiriliyor);
azalt.addEventListener("click", azaltiliyor);

function arttiriliyor() {
  let num = Number(number.innerHTML);
  number.innerHTML = num + 1;
}

function azaltiliyor() {
  let num = Number(number.innerHTML);
  number.innerHTML = num - 1;
}
