import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { addContact } from "../../redux/contactSlice";

function Form() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    //const names = name.split(",");

    dispatch(addContact({ id: nanoid(), name }));
    // dispatch(addContacts(names.map((name) => ({ id: nanoid(), name }))));

    setName("");
  };
  return (
    <div className="flex max-w-sm mx-auto">
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          placeholder="Enter your Name"
          className="w-full py-2 px-3  border-2 rounded-md text-center font-bold  focus:outline-none cursor-default mt-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Form;
