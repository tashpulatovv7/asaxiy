import { Rating } from '@mui/material';
import axios from 'axios';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context';

const Favourites = () => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const { wishlist, setWishlist } = useStateValue();
	const { t, i18n } = useTranslation();

	useEffect(() => {
		axios.get('https://dummyjson.com/products')
			.then(res => {
				setProducts(res.data.products);
				setFilteredProducts(res.data.products);
			})
			.catch(err => console.error(err));
	}, []);

	const addWishlist = product => {
		const isSome = wishlist.some(item => item.id === product.id);

		if (isSome) {
			setWishlist(wishlist.filter(item => item.id !== product.id));
		} else {
			setWishlist([...wishlist, product]);
		}
	};

	return (
		<>
			<ul className='cards'>
				{filteredProducts.length > 0 ? (
					wishlist.map(product => (
						<li className='card' key={product.id}>
							<img
								className='card-img'
								src={product.thumbnail}
								alt={product.title}
							/>
							<div className='card-content'>
								<button
									className='heartBtn'
									onClick={e => {
										e.stopPropagation();
										addWishlist(product);
									}}
								>
									<img
										className='heart'
										src='https://asaxiy.uz/custom-assets/images/icons/heart.svg'
										alt=''
									/>
								</button>

								<img
									className='taqqoslash-icon'
									src='https://asaxiy.uz/custom-assets/images/icons/compare_gray.svg'
									alt=''
								/>

								<b>{product.title}</b>

								<Rating
									name='read-only'
									className='rating'
									value={product.rating}
									readOnly
								/>

								<p>Price: {product.price}$</p>

								<div className='haridQilish-karzina'>
									<Link
										to={`/product/${product.id}`}
										className='home-btn'
									>
										Hoziroq harid qilish
									</Link>

									<button className='karzina'>
										<img
											src='https://asaxiy.uz/custom-assets/images/icons/cart-single.svg'
											alt=''
										/>
									</button>
								</div>
							</div>
						</li>
					))
				) : (
					<p>No products found</p>
				)}
			</ul>
			<button className='wishToHome'>
				<a href='/'>{t('gohome')}</a>
			</button>
		</>
	);
};

export default memo(Favourites);
