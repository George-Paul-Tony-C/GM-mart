import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ProductCards.css';
import { AppCombo, Designlap, macbookair, tufgaming, Stv, Swashing, Sfridge, Svacuum, Fan, Sbuds, SonyHeadphone, washingmech, Lgfridge, windowAC,
  /* product spec images */  fanspec1,fanspec2,
} from './images.js';

export const productCategories = [
  {
    title: 'General 1',
    products: [
      {
        id: 'Fan',
        name: 'Fan',
        alternateName: 'Cooling Fan | Crompton', // New property
        mrp: '1000',
        price: 920,
        image: Fan,
        category: 'Electronics',
        features: ['High speed', 'Energy efficient', 'Durable'],
        warranty: '1 year',
        specImages: [fanspec1, fanspec2], // New property
      },
      {
        id: 'Samsung Buds Headphone',
        name: 'Samsung Buds',
        mrp: '8000',
        price: 7000,
        image: Sbuds,
        category: 'Audio',
        features: ['Noise cancellation', 'Bluetooth 5.0', 'Long battery life'],
        warranty: '2 years',
      },
      {
        id: 'Lg Window Ac',
        name: 'Lg Window Ac',
        mrp: '100000',
        price: 80000,
        image: windowAC,
        category: 'Appliances',
        features: ['Fast cooling', 'Energy efficient', 'Remote control'],
        warranty: '3 years',
      },
      {
        id: 'Sony OvertheEar Headphone',
        name: 'Sony Headphone',
        mrp: '100000',
        price: 80000,
        image: SonyHeadphone,
        category: 'Audio',
        features: ['Noise cancellation', 'Comfort fit', 'High resolution audio'],
        warranty: '2 years',
      },
    ],
  },
  {
    title: 'General 2',
    products: [
      {
        id: 'Refrigerator',
        name: 'Refrigerator',
        description: 'Double Door Refrigerator',
        image: Lgfridge,
        price: 50000,
        mrp: 60000,
        category: 'Appliances',
        features: ['Frost free', 'Large capacity', 'Energy efficient'],
        warranty: '5 years',
      },
      {
        id: 'Washing Machine',
        name: 'Washing Machine',
        description: 'Washing Machine',
        image: washingmech,
        price: 15000,
        mrp: 20000,
        category: 'Appliances',
        features: ['Fully automatic', 'Low water consumption', 'Quiet operation'],
        warranty: '3 years',
      },
      {
        id: 'Home Combo',
        name: 'Home Combo',
        mrp: '100000',
        price: 80000,
        image: AppCombo,
        category: 'Combo',
        features: ['Complete home solution', 'Affordable', 'High quality'],
        warranty: '5 years',
      },
      {
        id: 'Samsung Fridge',
        name: 'Samsung Fridge',
        mrp: '100000',
        price: 80000,
        image: Sfridge,
        category: 'Appliances',
        features: ['Digital inverter technology', 'Large capacity', 'Energy efficient'],
        warranty: '5 years',
      },
    ],
  },
  {
    title: 'General 3',
    products: [
      {
        id: 'Home Combo',
        name: 'Home Combo',
        mrp: '100000',
        price: 80000,
        image: AppCombo,
        category: 'Combo',
        features: ['Complete home solution', 'Affordable', 'High quality'],
        warranty: '5 years',
      },
      {
        id: 'Designer lap',
        name: 'Designer Lap',
        mrp: '100000',
        price: 80000,
        image: Designlap,
        category: 'Laptops',
        features: ['High performance', 'Lightweight', 'Stylish design'],
        warranty: '2 years',
      },
      {
        id: 'macbookair',
        name: 'Macbook AIr',
        mrp: '100000',
        price: 80000,
        image: macbookair,
        category: 'Laptops',
        features: ['Retina display', 'M1 chip', 'Long battery life'],
        warranty: '2 years',
      },
      {
        id: 'tufgaming',
        name: 'Tuf Gaming',
        mrp: '100000',
        price: 80000,
        image: tufgaming,
        category: 'Laptops',
        features: ['High performance', 'RGB keyboard', 'Durable build'],
        warranty: '2 years',
      },
    ],
  },
  {
    title: 'Samsung Products',
    products: [
      {
        id: 'Samsung Fridge',
        name: 'Samsung Fridge',
        mrp: '100000',
        price: 80000,
        image: Sfridge,
        category: 'Appliances',
        features: ['Digital inverter technology', 'Large capacity', 'Energy efficient'],
        warranty: '5 years',
      },
      {
        id: 'Samsung Washing',
        name: 'Samsung Washing',
        mrp: '20000',
        price: 16000,
        image: Swashing,
        category: 'Appliances',
        features: ['Fully automatic', 'Low water consumption', 'Quiet operation'],
        warranty: '3 years',
      },
      {
        id: 'Samsung tv',
        name: 'Samsung tv',
        mrp: '300000',
        price: 240000,
        image: Stv,
        category: 'Electronics',
        features: ['4K resolution', 'Smart TV', 'High dynamic range'],
        warranty: '3 years',
      },
      {
        id: 'Samsung vacuum',
        name: 'Samsung Vacuum',
        mrp: '400',
        price: 320,
        image: Svacuum,
        category: 'Home',
        features: ['Lightweight', 'High suction power', 'Bagless'],
        warranty: '1 year',
      },
    ],
  },
];

function ProductCards({ addToCart }) {
  return (
    <Container className="product-cards">
      {productCategories.map((category, index) => (
        <div key={index} className="product-category">
          <h2 className="product-category-title">{category.title}</h2>
          <Row className="justify-content-center">
            {category.products.map(product => (
              <Col md={3} className="d-flex align-items-stretch" key={product.id}>
                <Card className="product-card">
                  <Link to={`/product/${product.id}`}>
                    <div className="product-card-image-container">
                      <Card.Img variant="top" src={product.image} className="product-card-image" />
                    </div>
                  </Link>
                  <Card.Body className="product-card-body">
                    <Card.Title className="product-card-name">{product.name}</Card.Title>
                    <Card.Text className="product-card-description">{product.description}</Card.Text>
                    <div className="product-card-price-section">
                      <Card.Text className="product-card-mrp">${product.mrp}</Card.Text>
                      <Card.Text className="product-card-price">${product.price}</Card.Text>
                    </div>
                    <Button variant="primary" className="product-card-add-to-cart-button" onClick={() => addToCart(product)}>
                      <FaShoppingCart /> Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default ProductCards;
