import React, { useReducer } from "react";
import Cartcontext from "./Context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const reducerfun = (state, action) => {
  if (action.type === "add") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

      const existingcartindex =state.items.findIndex(item => item.id === action.item.id)

      const existingcartitem = state.items[existingcartindex]

      let updateditems;

      if(existingcartitem){
        const updatedItem ={
          ...existingcartitem, amount: existingcartitem.amount + action.item.amount
        }
        updateditems =[...state.items]
      updateditems[existingcartindex] = updatedItem
      }else{
        updateditems = state.items.concat(action.item);

      }
      
    return {
      items: updateditems,
      totalAmount: updatedTotalAmount,
    };
  }
  if(action.type === 'remove'){
    const existingcartindex =state.items.findIndex(item => item.id === action.id)
    const existingcartitem = state.items[existingcartindex]
    const  updatedTotalAmount =  state.totalAmount - existingcartitem.price
    let updateditems;

    if(existingcartitem.amount === 1){
     
      updateditems =state.items.filter(item => item.id !== action.id)
    }else{
      const updateditem = {...existingcartitem, amount: existingcartitem.amount -1}
      updateditems=[...state.items]
      updateditems[existingcartindex]=updateditem

    }
    return{
      items: updateditems,
      totalAmount: updatedTotalAmount
    }



  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [state, dispatchfn] = useReducer(reducerfun, defaultCartState);
  const addItem = (item) => {
    dispatchfn({ type: "add", item: item });
  };
  const removeItem = (id) => {
    dispatchfn({ type: "remove", id: id });
  };
  const cardContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
  };
  return (
    <Cartcontext.Provider value={cardContext}>
      {props.children}
    </Cartcontext.Provider>
  );
};

export default CartProvider;
