// SingleProduct.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const SingleProduct = ({ addToCart }) => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <Col md={6}>
          <img src={product.image} alt={product.title} className="img-fluid" />
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
