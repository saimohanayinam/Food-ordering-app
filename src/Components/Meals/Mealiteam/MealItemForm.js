import React, {useRef, useState} from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
  const [amountIsValid, setAmountisvalid]=useState( true)
  const ref =useRef()
  const submitHandlerFuncion=(event)=>{
    event.preventDefault()
    const enteredAmount =ref.current.value
    const enteredAmountNunber = +enteredAmount
    if(enteredAmount.trim().length === 0 || enteredAmountNunber <1 || enteredAmountNunber >5){
      setAmountisvalid(false)
      return;
    }

    props.onAddToCart(enteredAmountNunber)

  }
  return (
    <form className={classes.form} onSubmit={submitHandlerFuncion}>
        <Input 
        ref={ref}
        label='Amount' input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}/>
        <button>+ Add</button>
        {!amountIsValid && <p>please enter amount from 1 to 5</p> }
      
    </form>
  )
}

export default MealItemForm
