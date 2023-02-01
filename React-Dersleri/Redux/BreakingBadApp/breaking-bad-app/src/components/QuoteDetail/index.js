import React from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function QuteDetail() {
  const { id } = useParams();
  const { items } = useSelector((state) => state.quotes);

  const quote = items.find((item) => item.id === Number(id));

  // console.log(items);
  //console.log(quote);
  return (
    <div>
      <h1>Quote Detail</h1>
      <pre>{JSON.stringify(quote, null, 2)}</pre>
    </div>
  );
}

export default QuteDetail;
