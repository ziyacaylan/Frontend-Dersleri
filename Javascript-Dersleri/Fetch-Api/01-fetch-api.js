// JSON Dosyasından (lokalden) veri çektik
fetch("./settings.json")
  .then((response) => response.json())
  .then((responseJson) => console.log(responseJson));

// Api den veri çekt ik
const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then((response) => response.json())
  .then((json) =>
    json.forEach((item) => {
      console.log(item);
    })
  );

const url_1 = "https://jsonplaceholder.typicode.com/todos";

fetch(url_1)
  .then((response) => response.json()) //parse json data
  .then(function (todos) {
    todos.forEach((todo) => {
      console.log(todo.title); // başlıklarkonsola yazdırılıyor.
    });
  });
console.log(
  "***********************************************************************"
);
//  💭 POST isteği ile verimizi servera gönderelim
let payload = {
  title: "Blog Title",
  body: "lorem ipsum",
  userId: 1,
};
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(payload),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

console.log(
  "***********************************************************************"
);

let isError = false;
function getCategory() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isError) {
        resolve("phone");
      } else {
        reject("error");
      }
    }, 1500);
  });
}

function getProducts(category) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`5 products in ${category}`);
    }, 1500);
  });
}

getCategory()
  .then(getProducts)
  .then((res) => console.log(res));

async function getProduct() {
  try {
    let category = await getCategory();
    let result = await getProducts(category);

    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
