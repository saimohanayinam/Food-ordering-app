import React, { useContext } from "react";
import Cartcontext from "../../../store/Context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const Mealiteam = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const cxtcon = useContext(Cartcontext)
  const onAddToCart =(amount)=>{
    cxtcon.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    })

  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.discription}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={onAddToCart} />
      </div>
    </li>
  );
};

export default Mealiteam;
