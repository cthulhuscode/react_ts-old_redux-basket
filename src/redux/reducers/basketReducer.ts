import { AnyAction } from "redux";
import type { Product } from "../../IProduct";

interface BasketState {
  products: Product[];
}

const initialState: BasketState = {
  products: [],
};

export const basketReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_BASKET":
      return {
        ...state,
        products: [...state.products, { ...action.payload, id: uid() }],
      };
    case "REMOVE_PRODUCT_FROM_BASKET":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

function uid() {
  return String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    ""
  );
}
