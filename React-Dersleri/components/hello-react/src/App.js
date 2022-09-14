import "./App.css";

import Header from "./components/Header";
const myName = "Ziya";
const mySurname = "Çaylan";
const isLoggedIn = true;

function App() {
  return (
    <>
      <h1>
        {isLoggedIn
          ? `Merhaba, Benim Adım ${myName} ${mySurname}`
          : "Giriş yapmadızın..."}
      </h1>
    </>
  );
}

export default App;
