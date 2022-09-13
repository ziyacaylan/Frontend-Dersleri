import getData from "./app.js";

//import Topla from "./my-module.js";

await getData(1)
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
