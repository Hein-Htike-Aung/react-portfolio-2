import React from 'react';
import './product.scss';

const Product = ({ product }) => {
	return (
		<div className='card'>
			<div className='card-browser'>
				<div className='card-circle'></div>
				<div className='card-circle'></div>
				<div className='card-circle'></div>
			</div>
			<a href='https://google.com' target='_blank' rel='noreferrer'>
				<img src={product.img} className='card-img' alt='' />
			</a>
		</div>
	);
};

export default Product;
