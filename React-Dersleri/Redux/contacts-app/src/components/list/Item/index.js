import React from "react";

function Item({ contact }) {
  return (
    <div className="w-full flex items-center justify-between bg-gray-400 my-4 rounded px-1">
      <span className="p-1 text-xl bg-grey-800">{contact.name}</span>
      <span className="p-1 text-xl text-pink-500">{contact.phone_number}</span>
    </div>
  );
}

export default Item;
