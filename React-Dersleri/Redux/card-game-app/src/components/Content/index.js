import React from "react";
import Card from "../Card";

import { useSelector } from "react-redux";

function Content() {
  const { cards } = useSelector((state) => state.cards);

  return (
    <>
      <div className="w-full grid grid-cols-6 gap-2 mx-auto">
        {React.Children.toArray(
          cards.map((pokemon) => <Card pokemon={pokemon} />)
        )}
      </div>
    </>
  );
}

export default Content;
