import React from "react";

function Item({ contact }) {
  return (
    <div>
      <p className="p-1 text-xl">{contact.name}</p>
    </div>
  );
}

export default Item;
