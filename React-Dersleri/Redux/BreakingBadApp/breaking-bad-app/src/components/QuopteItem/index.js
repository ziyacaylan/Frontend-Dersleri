import React from "react";

import { useNavigate } from "react-router-dom";

function QuoteItem({ item }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/quotes/detail/${id}`, { replace: true });
  };
  //console.log(item);
  return (
    <div style={{ margin: "20px 0" }}>
      <q style={{ cursor: "pointer" }} onClick={() => handleClick(item.id)}>
        {item.quote}
      </q>
      <p style={{ fontWeight: "bold" }}>{item.author}</p>
    </div>
  );
}

export default QuoteItem;
