import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import Mealiteam from "./Mealiteam/Mealiteam";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvaliableMEals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meals) => (
            <Mealiteam key={meals.id} id={meals.id} name={meals.name} description={meals.description} price={meals.price}/>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvaliableMEals;
