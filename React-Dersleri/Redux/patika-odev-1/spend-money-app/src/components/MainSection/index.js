import React from "react";
import ProductCard from "../ProductCard";

import { products } from "../../mock/products";

function MainSection() {
  return (
    <div className="w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 my-4 ">
      {React.Children.toArray(
        products.map((item) => <ProductCard product={item} />)
      )}
    </div>
  );
}

export default MainSection;
