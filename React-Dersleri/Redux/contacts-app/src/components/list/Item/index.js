import React from "react";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contactSlice";

import { useNavigate } from "react-router-dom";

function Item({ contact }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure ?")) {
      dispatch(deleteContact(id));
    }
  };
  const handleEdit = (id) => {
    navigate(`/edit/${id}`, { replace: true });
  };

  return (
    <div className="w-full flex items-center justify-between bg-gray-400 my-4 rounded px-1">
      <span className="p-1 text-xl bg-grey-800">{contact.name}</span>
      <span className="p-1 text-xl text-pink-500 ">{contact.phone_number}</span>
      <div>
        <button
          className="bg-transparent  text-blue-700 font-semibold hover:text-white  px-1 hover:border-b hover:border-blue-700 mr-2 "
          onClick={() => handleEdit(contact.id)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold px-2 "
          onClick={() => handleDelete(contact.id)}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Item;
