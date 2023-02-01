import React from "react";

function QuoteItem({ item }) {
  //  console.log(item);
  return (
    <div style={{ margin: "20px 0" }}>
      <q>{item.quote}</q>
      <p style={{ fontWeight: "bold" }}>{item.author}</p>
    </div>
  );
}

export default QuoteItem;
