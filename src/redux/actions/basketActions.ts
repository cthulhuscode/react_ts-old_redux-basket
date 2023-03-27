import { Product } from "../../IProduct";

export const addProduct = (product: Partial<Product>) => ({
  type: "ADD_PRODUCT_TO_BASKET",
  payload: product,
});

export const removeProduct = (id: string) => ({
  type: "REMOVE_PRODUCT_FROM_BASKET",
  payload: id,
});
