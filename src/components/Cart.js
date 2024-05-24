// src/components/Cart.js
import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';

const Cart = ({ cartItems, show, handleClose, removeFromCart }) => {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="d-flex mb-3 align-items-center">
              <img src={item.image} alt={item.title} style={{ width: '50px', marginRight: '10px' }} />
              <div className="flex-grow-1">
                <h5>{item.title}</h5>
                <p>${item.price} x {item.quantity}</p>
              </div>
              <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                <BsTrash />
              </Button>
            </div>
          ))
        )}
        <h3>Total: ${totalAmount.toFixed(2)}</h3>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
