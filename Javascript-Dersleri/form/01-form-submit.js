var password;
function handleSubmit(e) {
  e.preventDefault();
  console.log("username:" + username + "-" + "password:" + password);
}
function handleChange(e) {
  if (e.target.name === "username") {
    username = e.target.value;
  }
  if (e.target.name === "password") {
    password = e.target.value;
  }
}

/*id si myDiv olan div içerisine bir input birde botun ekleyelim ve sonra butona tıklandığında değerini alarak bir alt satırda yazdıralım */

let myDiv = document.querySelector("#myDiv");

let myInput = document.createElement("input");
myInput.setAttribute("type", "text");
myInput.setAttribute("id", "myInput");
myInput.setAttribute("placeholder", "İnput a değer giriniz.");
myInput.setAttribute("class", "mt-5 p-2");

let myButton = document.createElement("button");
myButton.setAttribute("id", "myButton");
myButton.setAttribute("name", "myButton");
myButton.innerText = "Değeri YAZDIR";
myButton.setAttribute("class", "btn btn-success m-2 p-2");

myDiv.appendChild(myInput);
myDiv.appendChild(myButton);

const degerYazdir = () => {
  let secondDiv = document.createElement("div");
  secondDiv.setAttribute("id", "secondDiv");
  document.body.appendChild(secondDiv);

  let myP = document.createElement("p");
  myP.setAttribute("id", "myP");
  myP.setAttribute("class", "display-3 text-center");
  myP.innerHTML = myInput.value;

  console.log(myInput.value);

  secondDiv.appendChild(myP);
};

myButton.onclick = degerYazdir;

function sampleFunction() {
  var at = document.getElementById("email").value.indexOf("@");
  var age = document.getElementById("age").value;
  var fname = document.getElementById("fname").value;
  submitOK = "true";

  if (fname.length > 10) {
    alert("The name may have no more than 10 characters");
    submitOK = "false";
  }

  if (isNaN(age) || age < 1 || age > 100) {
    alert("The age must be a number between 1 and 100");
    submitOK = "false";
  }

  if (at == -1) {
    alert("Not a valid e-mail!");
    submitOK = "false";
  }

  if (submitOK == "false") {
    return false;
  }
}
