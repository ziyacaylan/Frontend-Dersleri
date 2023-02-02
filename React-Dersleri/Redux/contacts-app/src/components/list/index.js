import React from "react";

import { contactSelectors, removeAllContacts } from "../../redux/contactSlice";

import { useSelector, useDispatch } from "react-redux";

import Item from "./Item";

function List() {
  const contacts = useSelector(contactSelectors.selectAll);
  const dispatch = useDispatch();

  const handleRemoveAll = () => {
    if (window.confirm("Are you sure ?")) {
      dispatch(removeAllContacts());
    }
  };

  //console.log(contacts);
  return (
    <div>
      {contacts.length > 0 && (
        <div className="text-center">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded "
            onClick={handleRemoveAll}
          >
            Delete All
          </button>
        </div>
      )}
      {React.Children.toArray(contacts.map((item) => <Item contact={item} />))}
    </div>
  );
}

export default List;
