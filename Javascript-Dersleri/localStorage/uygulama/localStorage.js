const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
let counter = document.querySelector("#counter");

let numCounter = localStorage.getItem("numCounter")
  ? Number(localStorage.getItem("numCounter"))
  : 0;

counter.innerHTML = numCounter;

const eventClick = () => {
  console.log(this.id);
  this.id == increase ? numCounter++ : numCounter++;
  counter.innerHTML = numCounter;
  localStorage.setItem("numCounter", numCounter);
};

increase.addEventListener("click", eventClick);
decrease.addEventListener("click", eventClick);
