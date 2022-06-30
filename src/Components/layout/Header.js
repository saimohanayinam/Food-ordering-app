import React from "react";
import meals from '../../asserts/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
    <header className={classes.header}>
        <h1>Mohan meals</h1>
        <HeaderCartButton showHandler={props.showHandler}/>
    </header>
      <div className={classes['main-image']}>
        <img src={meals} alt='food'/>
      </div>
    </>
  );
};

export default Header;
