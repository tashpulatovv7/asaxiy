import Rating from '@mui/material/Rating';
import axios from 'axios';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import './detail.css';

const Details = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const { t, i18n } = useTranslation();

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
						<a href='/'>{t('gohome')}</a>
					</button>
				</div>
			</div>
		</>
	);
};

export default memo(Details);
