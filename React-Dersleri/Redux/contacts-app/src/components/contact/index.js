import React from "react";
import Form from "./form";

import { useSelector } from "react-redux";

import { contactSelectors } from "../../redux/contactSlice";

function Contacts() {
  const total = useSelector(contactSelectors.selectTotal);
  return (
    <div>
      <h1 className="font-bold text-3xl text-center">Contacts ({total})</h1>
      <Form />
    </div>
  );
}

export default Contacts;
