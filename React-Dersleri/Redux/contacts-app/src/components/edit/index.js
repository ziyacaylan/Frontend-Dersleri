import React from "react";
import EditForm from "./edit_form";

import { useParams } from "react-router-dom";

import { contactSelectors } from "../../redux/contactSlice";
import { useSelector } from "react-redux";

function EditPage() {
  const { id } = useParams();

  const deneme = useSelector((state) => contactSelectors.selectById(state, id));

  return (
    <div>
      <h1 className="font-bold text-3xl text-center">Edit</h1>
      <EditForm contact={deneme} />
    </div>
  );
}

export default EditPage;
