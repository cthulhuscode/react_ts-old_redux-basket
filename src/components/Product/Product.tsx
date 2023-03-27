import type { Product as IProduct } from "../../IProduct";
import { removeProduct } from "../../redux";
import "./Product.scss";

interface ProductProps {
  product: IProduct;
  remove: typeof removeProduct;
}

export const Product = ({ product, remove }: ProductProps) => {
  const { id, name } = product;

  return (
    <li className="product">
      <span className="product__name">{name}</span>
      <button
        className="product__remove"
        onClick={() => {
          remove(id);
        }}
      >
        x
      </button>
    </li>
  );
};
