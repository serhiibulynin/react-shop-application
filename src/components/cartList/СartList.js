import React from "react";
import { darkColors } from "../../styles/colors";
import CartListItem from "./cartListItem/CartListItem";
import { CartListStyled } from "./CartListStyled";

const СartList = ({
  cart,
  removeFromCart,
  removeAllFromCart,
  removeItem,
  addItem,
}) => {
  return (
    <>
      {cart.length ? (
        <CartListStyled colors={darkColors}>
          <ul className="cartList">
            {cart.map((product) => (
              <CartListItem
                {...product}
                key={product.id}
                removeFromCart={removeFromCart}
                removeItem={removeItem}
                addItem={addItem}
              />
            ))}
          </ul>
          <button type="button" onClick={removeAllFromCart}>
            Оформить заказ
          </button>
          <hr />
          <p className="totalCount">
            Total:{cart.reduce((acc, product) => (acc += product.price), 0)}
          </p>
        </CartListStyled>
      ) : (
        <p>Добавьте товар</p>
      )}
    </>
  );
};

export default СartList;
