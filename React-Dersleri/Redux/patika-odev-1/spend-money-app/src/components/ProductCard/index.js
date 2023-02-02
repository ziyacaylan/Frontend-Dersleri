import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addBasket } from "../../redux/productsSclice";

function ProductCard({ product }) {
  const [qty, setQty] = useState(0);
  const { currentMoney } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleClick = (qty) => {
    setQty((qty) => ++qty);
    dispatch(addBasket({ product, qty }));
  };
  const handleReduceClick = (qty) => {
    setQty((qty) => --qty);
    dispatch(addBasket({ product, qty }));
  };

  //console.log(products);
  return (
    <div className="flex flex-col items-center justify-center p-5 bg-white">
      <img src={product.link} alt={product.name} className="w-auto max-h-32" />
      <p className="font-bold p-3 text-2xl">{product.name}</p>
      <p className="font-bold p-3 text-xl text-green-500">
        $ {product.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
      </p>
      <div className="w-full flex items-center justify-between mt-4">
        <button
          disabled={qty >= 1 ? false : true}
          className="bg-gradient-to-t from-pink-dark to-pink-light text-white disabled:from-grey-custom disabled:to-grey-custom disabled:text-black font-bold text-xl py-4 px-3 rounded duration-500   w-full mr-4"
          onClick={() => handleReduceClick(qty - 1)}
        >
          Sell
        </button>
        <input
          type="text"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          // className="w-full py-4 px-8  border-2 rounded-md text-center font-bold text-xl text-black  focus:outline-none cursor-default"
          className="w-full py-4 px-3  border-2 rounded-md text-center font-bold  focus:outline-none cursor-default"
        />
        <button
          disabled={product.price > currentMoney ? true : false}
          className="bg-gradient-to-t from-green-dark to-green-light text-white disabled:from-grey-custom disabled:to-grey-custom disabled:text-black text-xl font-bold py-4 px-3 rounded duration-500  w-full ml-4"
          onClick={() => handleClick(qty + 1)}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
