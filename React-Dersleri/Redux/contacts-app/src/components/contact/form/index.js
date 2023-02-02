import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { addContact } from "../../../redux/contactSlice";

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    //const names = name.split(",");

    dispatch(addContact({ id: nanoid(), name, phone_number: number }));
    // dispatch(addContacts(names.map((name) => ({ id: nanoid(), name }))));

    setName("");
    setNumber("");
  };
  return (
    <div className="flex max-w-sm mx-auto ">
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          placeholder="Enter your Name"
          className="w-full py-2 px-3  border-2 border-grey-custom rounded-md text-center font-bold  focus:outline-none cursor-default mt-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Enter your Phone Number"
          className="w-full py-2 px-2  border-2 border-grey-custom rounded-md  text-center font-bold  focus:outline-none cursor-default mt-4"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <button className="w-full p-2 my-4 bg-violet-light rounded-xl text-xl text-white uppercase">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
