import React from "react";
import { useSelector } from "react-redux";

function Bill() {
  const { products, totalMoney, currentMoney } = useSelector(
    (state) => state.products
  );

  if (currentMoney === 100000000000) return;
  return (
    <div className=" items-center justify-center bg-white w-full text-center mb-8 mt-8 pb-10 ">
      <h3 className="font-bold text-3xl mt-2 mb-5 ">Your Receipt</h3>

      <div className="flex flex-col max-w-md mx-auto">
        {React.Children.toArray(
          products.map(
            (item) =>
              item.count > 0 && (
                <div className="grid grid-flow-row gap-4 grid-cols-3 text-lg items-center">
                  <span className="text-start text-xl">{item.name}</span>
                  <span className="text-center text-xl">x{item.count}</span>
                  <span className=" text-green-dark text-xl font-bold text-end">
                    {/* ${item.price * item.count} */}
                    {new Intl.NumberFormat("en-GB", {
                      notation: "compact",
                      compactDisplay: "short",
                    }).format(item.count * item.price)}
                  </span>
                </div>
              )
          )
        )}
        <div className="flex justify-between max-w-md mx-auto text-xl border-t-2 border-t-black font-medium text-center w-full mt-2">
          <span className="mt-2">TOTAL :</span>
          <span className="mt-2 text-green-dark text-xl">
            ${" "}
            {(totalMoney - currentMoney)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Bill;
