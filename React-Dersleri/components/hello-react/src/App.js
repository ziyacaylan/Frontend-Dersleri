import "./App.css";
import User from "./components/User";
import Header from "./components/Header";

const friends = [
  { id: 1, fname: "Metin" },
  { id: 2, fname: "Ali" },
  { id: 3, fname: "Veli" },
  { id: 4, fname: "Emel" },
  { id: 5, fname: "Temel" },
  { id: 6, fname: "Kazım" },
];

function App() {
  return (
    <>
      <User
        fname={1231}
        surname="ÇAYLAN"
        isLoggedIn={true}
        age={39}
        friends={friends}
        address={{ title: "Çekmeköy/İSTABUL", zipcode: 34660 }}
      />
      <Header />
      <button type="button" class="btn btn-primary ms-3 p-2 px-5 mt-5">
        Primary
      </button>
      <button type="button" class="btn btn-secondary ms-3 p-2 px-5 mt-5">
        Secondary
      </button>
      <button type="button" class="btn btn-success ms-3 p-2 px-5 mt-5">
        Success
      </button>
      <button type="button" class="btn btn-danger ms-3 p-2 px-5 mt-5">
        Danger
      </button>
      <button type="button" class="btn btn-warning ms-3 p-2 px-5 mt-5">
        Warning
      </button>
      <button type="button" class="btn btn-info ms-3 p-2 px-5 mt-5">
        Info
      </button>
      <button type="button" class="btn btn-light ms-3 p-2 px-5 mt-5">
        Light
      </button>
      <button type="button" class="btn btn-dark ms-3 p-2 px-5 mt-5">
        Dark
      </button>
    </>
  );
}

export default App;
