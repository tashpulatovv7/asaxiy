import Rating from '@mui/material/Rating';
import axios from 'axios';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import IndividualIntervalsExample from '../carousel/Carousel';
import { useStateValue } from '../context';
import './home.css';

const Home = () => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [sortBy, setSortBy] = useState('');
	const [sortOrder, setSortOrder] = useState('');
	const { setWishlist, wishlist } = useStateValue();
	const { basket, setBasket } = useStateValue();
	const { t, i18n } = useTranslation();

	useEffect(() => {
		axios.get('https://dummyjson.com/products')
			.then(res => {
				setProducts(res.data.products);
				setFilteredProducts(res.data.products);
			})
			.catch(err => console.error(err));
	}, []);

	const handleSearch = event => {
		setSearchTerm(event.target.value);
	};

	useEffect(() => {
		let updatedProducts = [...products];

		if (searchTerm) {
			updatedProducts = updatedProducts.filter(product =>
				product.title.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}

		if (sortBy) {
			updatedProducts = updatedProducts.sort((a, b) => {
				if (sortBy === 'name') {
					return sortOrder === 'asc'
						? a.title.localeCompare(b.title)
						: b.title.localeCompare(a.title);
				} else if (sortBy === 'price') {
					return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
				} else if (sortBy === 'rating') {
					return sortOrder === 'asc'
						? a.rating - b.rating
						: b.rating - a.rating;
				}
				return 0;
			});
		}

		setFilteredProducts(updatedProducts);
	}, [searchTerm, sortBy, sortOrder, products]);

	const addWishlist = product => {
		const isSome = wishlist.some(item => item.id === product.id);

		if (isSome) {
			setWishlist(wishlist.filter(item => item.id !== product.id));
		} else {
			setWishlist([...wishlist, product]);
		}
	};

	const addBasket = product => {
		const isSome = basket.some(item => item.id === product.id);

		if (isSome) {
			setBasket(basket.filter(item => item.id !== product.id));
		} else {
			setBasket([...basket, product]);
		}
	};

	return (
		<main id='home'>
			<div className='filters'>
				<select onChange={e => setSortBy(e.target.value)} value={sortBy}>
					<option value=''>{t('saralash')}</option>
					<option value='name'>{t('nomiBoyicha')}</option>
					<option value='price'>{t('narxiBoyicha')}</option>
					<option value='rating'>{t('ratingBoyicha')}</option>
				</select>
			</div>
			<IndividualIntervalsExample />
			<ul className='cards'>
				{filteredProducts.length > 0 ? (
					filteredProducts.map(product => (
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

									<button
										className='karzina'
										onClick={e => {
											e.stopPropagation();
											addBasket(product);
										}}
									>
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
		</main>
	);
};

export default memo(Home);
