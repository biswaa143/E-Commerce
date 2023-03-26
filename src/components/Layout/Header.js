import React, { useContext } from "react";

import {
  Nav,
  Container,
  Navbar,
  Button,
  Badge,
} from "react-bootstrap";
import CartContext from "../../Store/cart-context";
import classes from "./Header.module.css";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);
  return (
    <>
      <Navbar bg="black" expand="lg" variant="dark" style={{ height: "50px" }}>
        <Container>
          <Nav className={classes.home}>
            <Nav.Link href="#home">
              <h5>HOME</h5>
            </Nav.Link>
            <Nav.Link href="#store">
              <h5>STORE</h5>
            </Nav.Link>
            <Nav.Link href="#about">
              <h5>ABOUT</h5>
            </Nav.Link>
          </Nav>
          <Button className={classes.button}>
            Cart
            <Badge>{numberOfCartItem}</Badge>
          </Button>
        </Container>
      </Navbar>

      <form className={classes.head}>
        <p>The Generics</p>
      </form>

      <form className={classes.music}>
        <p>MUSIC</p>
      </form>
    </>
  );
};
export default Header;
