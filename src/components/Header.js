// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';

const Header = ({ cartItemCount, handleShow }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="h3">JustShop.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">All</Nav.Link>
            <Nav.Link as={Link} to="/category/electronics">Electronics</Nav.Link>
            <Nav.Link as={Link} to="/category/jewelery">Jewelery</Nav.Link>
            <Nav.Link as={Link} to="/category/men's clothing">Men's Clothing</Nav.Link>
            <Nav.Link as={Link} to="/category/women's clothing">Women's Clothing</Nav.Link>
            <Nav.Link onClick={handleShow} style={{ cursor: 'pointer' }}>
              <BsCart /> <span className="cart-count">{cartItemCount}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
