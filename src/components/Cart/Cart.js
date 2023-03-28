import React, {useContext} from "react";

import Modal from "../UI/Modal";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import CartContext from "../../Store/cart-context";
// import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-item"]}>
      {" "}
      {[{ id: "c1", name: "T-Shirt", price: 14.99, quantity: 2 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );

  const ctx = useContext(CartContext);
  const TotalAmount = ctx.totalAmount;
  // const product =  ctx.items.map((item) => (
  //   <CartItem
  //     key={item.id}
  //     id={item.id}
  //     title={item.title}
  //     price={item.price}
  //     image={item.image}
  //     quantity={item.quantity}
  //   />
  // ));
  return (
    <Modal>
      {cartItems}
      <Container>
        <Row>
          <Col className={classes.carttext}>Cart</Col>
          <Row>
            <Col className="text-center">
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th>ITEM</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                  </tr>
                </thead>
                <tbody>{}</tbody>
              </Table>
              <div>
                <span>Total</span> <span>${TotalAmount}</span>
              </div>
              <div>
                <Button className={classes.x} variant="warning">X</Button>
              </div>
              <div>
                <Button>PURCHASE</Button>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </Modal>
  );
};
export default Cart;
