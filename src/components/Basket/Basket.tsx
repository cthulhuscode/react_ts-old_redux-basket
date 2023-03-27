import { FormEvent, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { addProduct, removeProduct, RootState } from "../../redux";
import { Product } from "../Product/Product";
import "./Basket.scss";

const BasketComponent = ({
  products,
  addProduct,
  removeProduct,
}: BasketProps) => {
  const [productName, setProductName] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addProduct({ name: productName });
    setProductName("");
  };

  return (
    <div className="basket">
      <h1 className="basket__title">Basket</h1>

      <form action="submit" className="basket__form" onSubmit={handleSubmit}>
        <label className="basket__label" htmlFor="product">
          Product name
        </label>
        <input
          className="basket__input"
          type="text"
          name="product"
          id="product"
          placeholder="apples"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <input className="basket__btn" type="submit" value="Add product" />
      </form>

      <ul className="basket__list">
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                remove={removeProduct}
              />
            );
          })
        ) : (
          <p>No products yet</p>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({ products: state.products });
const mapDispatchToProps = {
  addProduct,
  removeProduct,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type BasketProps = ConnectedProps<typeof connector>;

export const Basket = connector(BasketComponent);
