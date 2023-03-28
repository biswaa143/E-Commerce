import React from "react";

import classes from './CartButton.module.css';

const CartButton = (props) => {
    return (
        <>
        <button className={classes.cart}>See the cart</button>
        </>
    );
};
export default CartButton;