const ulList = document.querySelector("#list");
const inputTask = document.querySelector("#task");
const myButton = document.querySelector("#liveToastBtn");
const li = document.querySelector("#list li");
const liveToastEl = document.querySelector("#liveToast");

const alertMessage = document.querySelector("#alert");

myButton.addEventListener("onclick", newElement);
document.addEventListener("DomContentLoaded", displayLocalStorage());

function finishToDo() {
  this.classList.toggle("checked");
}

function removeList() {
  this.parentElement.remove();
  deleteLocal(this.previousSibling.textContent);
}

function createList(todo) {
  const liDOM = document.createElement("li");
  if (alertMessage.innerHTML.trim !== "") {
    alertMessage.innerHTML = "";
  }
  liDOM.innerHTML = todo;
  ulList.appendChild(liDOM);

  const closeBtn = document.createElement("span");
  closeBtn.classList.add("close");
  closeBtn.textContent = "\u00D7";
  liDOM.append(closeBtn);

  closeBtn.onclick = removeList;
  $(".success").toast("show");
  liDOM.onclick = finishToDo;
}

function getLocalStorage() {
  let todo;
  if (localStorage.getItem("todos") === null) {
    todo = [];
  } else {
    todo = JSON.parse(localStorage.getItem("todos"));
  }
  return todo;
}

function createLocal(todo) {
  let todos = getLocalStorage();
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function newElement() {
  if (inputTask.value) {
    createList(inputTask.value);
    createLocal(inputTask.value);
    inputTask.value = "";
  } else {
    addAlert();
  }
}

function addAlert() {
  if (alertMessage.innerHTML.trim() === "") {
    alertMessage.classList.add(
      "alert-warning",
      "alert-dismissible",
      "fade",
      "show",
      "text-danger"
    );
    alertMessage.setAttribute("role", "alert");
    const mySpan = document.createElement("span");
    mySpan.innerHTML = " Yapılacak kısmını boş bıraktınız. DOLDURUNUZ....";

    const myStrong = document.createElement("strong");
    myStrong.classList.add("text-danger");
    myStrong.innerHTML = "Hata :";

    alertMessage.append(mySpan);
    alertMessage.prepend(myStrong);
  } else {
    alertMessage.innerHTML = "";
  }
}

function displayLocalStorage() {
  const todos = getLocalStorage();
  todos.forEach((todo) => {
    createList(todo);
  });
}

function deleteLocal(text) {
  let todos = getLocalStorage();
  todos.forEach((todo, index) => {
    if (todo === text) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
