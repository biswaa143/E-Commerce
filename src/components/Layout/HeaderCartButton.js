import React, {useContext} from "react";


import CartContext from "../../Store/cart-context";
import { Button, Badge } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
  const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

    return (
        <>
        <Button variant="warning" onClick={props.onClick}>
            Cart
            <AiOutlineShoppingCart>
              color="white" fontSize={"25px"}
            </AiOutlineShoppingCart>
            <Badge>{numberOfCartItem}</Badge>
          </Button>
        </>
    );
};
export default HeaderCartButton