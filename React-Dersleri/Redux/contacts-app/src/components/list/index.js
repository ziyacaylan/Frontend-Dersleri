import React from "react";

import { contactSelectors } from "../../redux/contactSlice";

import { useSelector } from "react-redux";

import Item from "./Item";

function List() {
  const contacts = useSelector(contactSelectors.selectAll);

  console.log(contacts);
  return (
    <div>
      {React.Children.toArray(contacts.map((item) => <Item contact={item} />))}
    </div>
  );
}

export default List;
