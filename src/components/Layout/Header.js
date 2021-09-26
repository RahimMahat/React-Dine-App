import React, { Fragment } from "react";

// importing image
import dineImage from "../../assets/meals.jpg";
// importing css
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React-Dine</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={dineImage} alt="Dining Table" />
      </div>
    </Fragment>
  );
};

export default Header;
