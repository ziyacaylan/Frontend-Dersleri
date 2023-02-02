import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { updateContact } from "../../../redux/contactSlice";

function EditForm({ contact }) {
  const [name, setName] = useState(contact.name ?? "");
  const [number, setNumber] = useState(contact.phone_number ?? "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateContact({
        id: contact.id,
        changes: {
          name,
          phone_number: number,
        },
      })
    );
    navigate("/", { replace: true });
  };

  return (
    <div>
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
          Update
        </button>
      </form>
    </div>
  );
}

export default EditForm;
