import { createSlice } from "@reduxjs/toolkit";
import { products } from "../mock/products";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: products,
    basket: [],
    totalMoney: 100000000000,
    currentMoney: 100000000000,
  },
  reducers: {
    addBasket: (state, action) => {
      const { product, qty } = action.payload;

      const findProduct = state.products.find(
        (item) => item.name === product.name
      );
      findProduct.count = qty;
      let money = 0;

      state.products.map((item) =>
        item.count > 0 ? (money += item.count * item.price) : ""
      );
      state.currentMoney = Number(state.totalMoney) - money;
    },
  },
});

export const { addBasket } = productsSlice.actions;
export default productsSlice.reducer;
