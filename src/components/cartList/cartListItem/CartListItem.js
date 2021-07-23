import React from "react";
import { CartItemStyled } from "./CartListItemStyled";
import sprite from "../../../icons/cart/cart-sprite.svg";
import { darkColors } from "../../../styles/colors";

const CartListItem = ({
  name,
  price,
  id,
  removeFromCart,
  quantity,
  addItem,
  removeItem,
}) => {
  const removeCart = () => {
    removeFromCart(id);
  };

  const add = () => {
    addItem(id);
  };

  const remove = () => {
    removeItem(id);
  };

  return (
    <CartItemStyled key={id} colors={darkColors}>
      <h3 className="cartItemTitle">{name}</h3>
      <p className="cartItemPrice">{price}</p>
      <div className="options">
        <button type="button" onClick={add}>
          <svg className="buttonIcon">
            <use href={sprite + "#icon-plus"} />
          </svg>
        </button>
        <p className="cartItemQuantity">{quantity}</p>
        <button type="button" disabled={quantity === 1} onClick={remove}>
          <svg className="buttonIcon">
            <use href={sprite + "#icon-minus"} />
          </svg>
        </button>
        <button type="button" onClick={removeCart}>
          <svg className="buttonIcon">
            <use href={sprite + "#icon-cross"} />
          </svg>
        </button>
      </div>
    </CartItemStyled>
  );
};

export default CartListItem;
