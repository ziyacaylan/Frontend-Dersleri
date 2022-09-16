import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Ziya");
  const [age, setAge] = useState(35);
  const [friends, setFriends] = useState(["Emel", "Temel"]);
  const [address, setAddress] = useState({ city: "İstanbul", zipcode: 34660 });

  return (
    <div className="App">
      <h1>
        Merhaba {name} Yaşım : {age}
      </h1>
      <button onClick={() => setName("Rüya")}>İsmi Değiştir</button>
      <button onClick={() => setAge(39)}>Yaşı Değiştir</button>
      <hr />
      <br />
      <br />
      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <button onClick={() => setFriends([...friends, "Ayşe", "Fatma"])}>
        Yeni Arkadaşları Ekle
      </button>
      <hr />
      <br />
      <br />
      <h2>Address</h2>
      <h3>
        Adress : {address.city} / {address.zipcode}
      </h3>
      <button onClick={() => setAddress({ ...address, city: "Kastamonu" })}>
        Değişiklik Yap
      </button>
    </div>
  );
}

export default App;
