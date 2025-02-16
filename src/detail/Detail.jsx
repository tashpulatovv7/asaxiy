import Rating from '@mui/material/Rating';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './detail.css';

const Details = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		axios.get(`https://dummyjson.com/products/${id}`)
			.then(res => {
				setProduct(res.data);
			})
			.catch(err => console.error(err));
	}, [id]);

	if (!product) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<div className='product-details'>
				<img src={product.thumbnail} alt={product.title} />
				<div>
					<h2>{product.title}</h2>
					<p>{product.description}</p>
					<p>
						<strong>Price:</strong> ${product.price}
					</p>
					<p>
						<Rating
							name='read-only'
							className='rating'
							value={product.rating}
							readOnly
						/>
					</p>
					<button>Harid qilish</button>

					<button>
						<a href='/'>Orqaga</a>
					</button>
				</div>
			</div>
		</>
	);
};

export default Details;
