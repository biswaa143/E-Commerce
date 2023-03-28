import React from "react";

import { Nav, Container, Navbar } from "react-bootstrap";
// import Cart from "../Cart/Cart";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
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
          <HeaderCartButton onClick={props.onShowCart} />
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
