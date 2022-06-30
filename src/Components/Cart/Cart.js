import React, { useContext } from "react";
import Cartcontext from "../../store/Context";
import Model from "../UI/Model";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cxt = useContext(Cartcontext);

  const totalAmount = `$ ${cxt.totalAmount.toFixed(2)}`;
  const hasitems = cxt.items.length > 0;
  const onRemove = (id) => {cxt.removeItem(id)};
  const onAdd = (item) => {
    cxt.addItem({...item, amount: 1})
  };

  const cartIteams = (
    <ul className={classes["cart-items"]}>
      {cxt.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={onRemove.bind(null, item.id)}
          onAdd={onAdd.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Model closeHandler={props.closeHandler}>
      {cartIteams}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.closeHandler}>
          close
        </button>
        {hasitems && <button className={classes.button}>order</button>}
      </div>
    </Model>
  );
};

export default Cart;
