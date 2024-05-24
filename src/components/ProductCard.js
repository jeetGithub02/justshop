// src/components/ProductCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card className="mb-4">
      <Link to={`/product/${product.id}`}>
        <Card.Img variant="top" src={product.image} className="object-fit-contain " style={{height:"200px"}} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
          <Card.Title style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {product.title}
          </Card.Title>
        </Link>
        <Card.Text style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp:1, WebkitBoxOrient: 'vertical' }}>
          {product.description}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Button variant="dark" onClick={() => addToCart(product)}>Add to Cart</Button>
          <span>${product.price}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
