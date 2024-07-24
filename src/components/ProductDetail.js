import React from 'react';
import { Button} from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { productCategories } from './ProductCards';
import { FaShoppingCart } from 'react-icons/fa';
import './ProductDetail.css';
import Swal from 'sweetalert2';

const ProductDetail = ({ addToCart }) => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Find the product based on the ID
  const product = productCategories.flatMap(category => category.products).find(p => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  // const handleBuyNow = () => {
  //   Swal.fire({
  //     title: 'Success!',
  //     text: 'Product added to cart!',
  //     icon: 'success',
  //     confirmButtonText: 'Ok'
  //   });
  // };


  // Calculate discount percentage
  const discountPercentage = ((product.mrp - product.price) / product.mrp * 100).toFixed(2);

  return (
    <div className="product-detail">
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="details-container">
        <h1>{product.name}</h1>
        <h2>{product.alternateName}</h2> {/* Display the alternate name */}
        <p className="mrp">MRP: ${product.mrp}</p>
        <p className="discount">Discount: {discountPercentage}%</p>
        <p className="price">Price: ${product.price}</p>
        <div className='productdetails-button'>
          <Button variant="primary" className="btn-add" onClick={() => addToCart(product)}>
            <FaShoppingCart /> Add to Cart
          </Button>
          <button className="btn-back" onClick={() => navigate(-1)} style={{ marginTop: '10px' }}>Back to Products</button>
        </div>
        <div className="about-item">
          <h2>About the item</h2>
          <p>Category: {product.category}</p>
          <p>Features:</p>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p>Warranty: {product.warranty}</p>
        </div>
        {/* <div className="spec-images">
          <h2>Specifications</h2>
          <div className="spec-image-container">
            {product.specImages.map((specImage, index) => (
              <img key={index} src={specImage} alt={`Specification ${index + 1}`} className="spec-image" />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductDetail;