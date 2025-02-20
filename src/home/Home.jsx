import Rating from '@mui/material/Rating';
import axios from 'axios';
import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IndividualIntervalsExample from '../carousel/Carousel';
import './home.css';

const Home = () => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [sortBy, setSortBy] = useState('');
	const [sortOrder, setSortOrder] = useState('');

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

	return (
		<main id='home'>
			<div className='filters'>
				<select onChange={e => setSortBy(e.target.value)} value={sortBy}>
					<option value=''>Saralash</option>
					<option value='name'>Nomi bo'yicha</option>
					<option value='price'>Narx bo'yicha</option>
					<option value='rating'>Rating bo'yicha</option>
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
								<b>{product.title}</b>
								<Rating
									name='read-only'
									className='rating'
									value={product.rating}
									readOnly
								/>
								<p>Price: {product.price}$</p>

								<Link
									to={`/product/${product.id}`}
									className='home-btn'
								>
									Hoziroq harid qilish
								</Link>
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
