/*
TASK:
- Bootstrap kütüphanesini kullanarak bir form tasarlayalım.
- Form içerisinde username, email, age ve password olsun.
- Forma girilen bilgilerin doğru formatta olup olmaması kontrol edilecek.
- Girilen inputlar doğru ise bir liste içerisinde yazdırılacak.
- Listeyi bootstrap kütüphanesini kullanarak yapınız.
- Form doldurulduğunda ve listeye bilgiler eklendiğinde form inputlar sıfırlanacak.
- Form istenir ise sıfırlansın.
- Girilen bilgiler yanlış formatta yada eksik ise kullanıcı uyarılacak.
- Uyaı mesajı bootstrap kullanılarak yapılacak.
*/

let userFormDom = document.querySelector("#userForm");

const alertFunction = (
  title,
  message,
  message_status_class = "warning"
) => `<div class="alert alert-${message_status_class} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`;

const USER_NAME = document.querySelector("#user-name");
const USER_EMAIL = document.querySelector("#user-email");
const USER_AGE = document.querySelector("#user-age");
const USER_PASSWORD = document.querySelector("#user-password");
const alertDOM = document.querySelector("#alert");
const userList = document.querySelector("#user-list");

const formContainer = document.querySelector("#container");

let counter = 0;

const formHandler = (event) => {
  event.preventDefault();
  USER_NAME.value.trim().length > 0
    ? console.log(USER_NAME.value.trim())
    : (alertDOM.innerHTML = alertFunction(
        "Hata :   ",
        "Kullanıcı Adını boş geçemezsiniz...",
        "danger"
      ));

  USER_NAME.value.trim().length <= 15
    ? ""
    : (alertDOM.innerHTML += alertFunction(
        "Hata :   ",
        "Kullanıcı Adını 15 karakterden uzun olamaz..."
      ));
  USER_EMAIL.value.trim().length > 0
    ? console.log(USER_EMAIL.value)
    : (alertDOM.innerHTML += alertFunction(
        "Hata :   ",
        "Email adresi boş bırakılamaz..."
      ));
  Number(USER_AGE.value)
    ? console.log(USER_AGE.value)
    : (alertDOM.innerHTML += alertFunction(
        "Hata :   ",
        "Sayısal Bir değer Giriniz..."
      ));
  Number(USER_AGE.value) >= 0 && Number(USER_AGE.value) <= 99
    ? console.log(USER_AGE.value)
    : (alertDOM.innerHTML += alertFunction(
        "Hata :   ",
        "Sayı aralığı 0-99 arasında olmalıdır..."
      ));
  !USER_PASSWORD.value.length < 6
    ? ""
    : (alertDOM.innerHTML += alertFunction(
        "Hata :   ",
        "Şifresinz 6 karakterden küçük olamaz..."
      ));
  if (
    USER_NAME.value.trim().length > 0 &&
    USER_NAME.value.trim().length <= 15 &&
    USER_EMAIL.value.trim().length > 0 &&
    Number(USER_AGE.value) &&
    Number(USER_AGE.value) >= 0 &&
    Number(USER_AGE.value) <= 99 &&
    !USER_PASSWORD.value.length < 6
  ) {
    userListCard(
      USER_NAME.value.toUpperCase(),
      USER_EMAIL.value.toUpperCase(),
      USER_AGE.value,
      USER_PASSWORD.value,
      ++counter
    );
    USER_NAME.value = "";
    USER_EMAIL.value = "";
    USER_AGE.value = "";
    USER_PASSWORD.value = "";
  }
};

userFormDom.addEventListener("submit", formHandler);

const userListCard = (
  userName,
  userEmail,
  userAge = 0,
  userPassword,
  counter
) => {
  let liDomElement = document.createElement("li");
  liDomElement.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  let someDiv = document.createElement("div");
  let childDiv_1 = document.createElement("div");
  childDiv_1.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  let childDiv_2 = document.createElement("div");
  childDiv_2.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  let childDiv_3 = document.createElement("div");
  childDiv_3.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  let childDiv_4 = document.createElement("div");
  childDiv_4.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  let userTitle = document.createElement("h5");
  let userInfo = document.createElement("h5");
  userInfo.setAttribute("id", "user-name");
  userTitle.innerHTML = "Kullanıcı Adı :";
  userInfo.innerHTML = USER_NAME.value.trim();
  childDiv_1.append(userTitle, userInfo);

  let user_email_title = document.createElement("h5");
  let user_email = document.createElement("h5");
  user_email.setAttribute("id", "user-email");
  user_email_title.innerHTML = "Email Adresi :";
  user_email.innerHTML = USER_EMAIL.value.trim();
  childDiv_2.append(user_email_title, user_email);

  let user_age_title = document.createElement("h5");
  let user_age = document.createElement("h5");
  user_age.setAttribute("id", "user_age");
  user_age_title.innerHTML = "Age";
  user_age.innerHTML = USER_AGE.value;
  childDiv_3.append(user_age_title, user_age);

  let user_password_title = document.createElement("h5");
  let user_password = document.createElement("h5");
  user_password.setAttribute("id", "user-password");
  user_password_title.innerHTML = "Password :";
  user_password.innerHTML = USER_PASSWORD.value;
  childDiv_4.append(user_password_title, user_password);

  let counterSpan = document.createElement("span");
  counterSpan.classList.add("badge", "bg-primary", "rounded-pill");
  counterSpan.innerHTML = counter;
  someDiv.append(childDiv_1, childDiv_2, childDiv_3, childDiv_4);
  liDomElement.append(someDiv, counterSpan);
  userList.append(liDomElement);
};
