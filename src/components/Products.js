
// Products.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Dropdown } from 'react-bootstrap';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products${categoryName ? `/category/${categoryName}` : ''}`);
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, [categoryName]);

  const handleSort = (order) => {
    setSortOrder(order);
    const sortedProducts = [...products].sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else if (order === 'desc') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
    setProducts(sortedProducts);
  };

  return (
    <Container>
      <div className="d-flex justify-content-end my-3">
        <Dropdown onSelect={handleSort}>
          <Dropdown.Toggle variant="secondary">
            Sort by Price
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="asc">Ascending</Dropdown.Item>
            <Dropdown.Item eventKey="desc">Descending</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            
              <Card>
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              
                <Card.Img variant="top" src={product.image} style={{height:"200px"}} className="object-fit-contain"/>
                </Link> 
                <Card.Body>
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card.Title className="text-truncate">{product.title}</Card.Title>
                  <Card.Text  style={{ height: '3em', overflow: 'hidden' }}>
                    {product.description}
                  </Card.Text>
                  </Link>
                  <div className=" mt-2 d-flex justify-content-between align-items-center">
                    <Button variant="success" onClick={() => addToCart(product)}>Add to cart</Button>
                    <span className="h4">${product.price}</span>
                  </div>
                </Card.Body>
              </Card>
            
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
