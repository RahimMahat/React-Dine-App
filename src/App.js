import React, { Fragment } from "react";
// Importing header
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
// Importing cart
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
