import React from 'react';
import './Product.css'; // Make sure to create a corresponding CSS file for styling

function Product({ name, description, price, image }) {
	return (
		<div className='product'>
			<img src={image} alt={name} className='product-image' />
			<div className='product-info'>
				<h2 className='product-name'>{name}</h2>
				<p className='product-description'>{description}</p>
				<p className='product-price'>${price}</p>
			</div>
		</div>
	);
}

export default Product;
