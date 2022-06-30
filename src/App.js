import Cart from "./Components/Cart/Cart";
import Header from "./Components/layout/Header";
import Meals from "./Components/Meals/Meals";
import React, { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [state, setState] = useState(false);

  const showHandler = () => {
    setState(true);
  };
  const closeHandler = () => {
    setState(false);
  };
  return (
    <>
      <CartProvider>
        {state && <Cart closeHandler={closeHandler} />}
        <Header showHandler={showHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </>
  );
}

export default App;
