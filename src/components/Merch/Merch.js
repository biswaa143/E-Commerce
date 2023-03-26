import React from "react";

import classes from "./Merch.module.css";
import Shirt from "./Shirt.png";
import Cofee from "./Cofee.png";
const Merch = () => {
    return (
        <>
        <p className={classes.merch}>MERCH</p>

        <p className={classes.shirttext}>T-Shirt</p>
        <img src={Shirt} alt="Shirt" className={classes.shirt} />
        <p className={classes.price}>
        $12.99 <button className={classes.button}>ADD TO CART</button>
        </p>
    
        <p className={classes.cofeetext}>Cofee Cup</p>
        <img src={Cofee} alt="Cofee" className={classes.cofee} />
        <p className={classes.price2}>
        $12.99 <button className={classes.button}>ADD TO CART</button>
        </p>

        </>
    );
};

export default Merch;