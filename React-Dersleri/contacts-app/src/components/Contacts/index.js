import { useState, useEffect } from "react";
import "./styles.css";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Ziya CAYLAN",
      phone_number: "0123 456 78 90",
    },
    {
      fullname: "Ali DEDEDİ",
      phone_number: "0982 632 54 56",
    },
    { fullname: "Veli KARA", phone_number: "0789 866 78 69" },
    { fullname: "Emel TEMEL", phone_number: "0874 456 23 23" },
    { fullname: "Rasim MORON", phone_number: "0132 423 87 99" },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1 className="main-title">Contacts</h1>

      <List contacts={contacts} />
      <Form addList={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
