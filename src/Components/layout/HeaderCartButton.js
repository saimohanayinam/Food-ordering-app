import React, { useContext, useEffect, useState } from 'react'
import Cartcontext from '../../store/Context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const newValue = useContext(Cartcontext)
  const numberOfCartItems = newValue.items.reduce((current, item)=>{
    return current + item.amount
  },0)

  const [state, setState]=useState(false)
  const {items}= newValue


  const btnClass = `${classes.button} ${state ? classes.bump : ''}`

  useEffect(()=>{
    
    if(items.length === 0){
      return;
    }
    setState(true)
    const timer = setTimeout(() => {
      setState(false)

      
    }, 300);

    return()=>{
      clearTimeout(timer)
    }


  }, [items])
  return (
    <div>
        <button className={btnClass} onClick={props.showHandler}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
                </span>
                <span className={classes.badge}>
                {numberOfCartItems}
                </span>

        </button>
      
    </div>
  )
}

export default HeaderCartButton
