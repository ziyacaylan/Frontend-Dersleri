import React from "react";
import photo from "../../assets/billgates.jpg";
import { useSelector } from "react-redux";

function Header() {
  const currentMoney = useSelector((state) => state.products.currentMoney);

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white w-full mb-4 ">
        <img src={photo} alt="Bill Gates" className="rounded-full p-5" />
        <h2 className="font-bold text-[32px] my-[10px] py-[20px]">
          Spend Bill Gates' Money
        </h2>
      </div>
      <div className=" flex items-center justify-center bg-gradient-to-t from-green-dark to-green-light w-full sticky top-0  py-4">
        <span className="flex items-center justify-center text-white font-bold text-4xl">
          $ {currentMoney.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
        </span>
      </div>
    </>
  );
}

export default Header;
