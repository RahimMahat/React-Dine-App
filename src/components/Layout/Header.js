import React, { Fragment } from "react";
// importing HeaderCartButton
import HeaderCartButton from "./HeaderCartButton";
// importing image
import dineImage from "../../assets/meals.jpg";
// importing css
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React-Dine</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={dineImage} alt="Dining Table" />
      </div>
    </Fragment>
  );
};

export default Header;
