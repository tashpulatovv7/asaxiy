import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useStateValue } from '../context';
import './basket.css';

const Basket = () => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState(null);
	const { basket, setBasket } = useStateValue();
	const [counts, setCounts] = useState({});
	const { t, i18n } = useTranslation();

	useEffect(() => {
		axios.get('https://dummyjson.com/products')
			.then(res => {
				setProducts(res.data.products);
				setFilteredProducts(res.data.products);
			})
			.catch(err => console.error(err));
	}, []);

	const addBasket = product => {
		const isSome = basket.some(item => item.id === product.id);

		if (isSome) {
			setBasket(basket.filter(item => item.id !== product.id));
		} else {
			setBasket([...basket, product]);
		}
	};
	const handleIncrement = id => {
		setCounts(prev => {
			const newCount = prev[id] + 1;
			return { ...prev, [id]: newCount };
		});
	};

	const handleDecrement = id => {
		setCounts(prev => {
			const newCount = Math.max(prev[id] - 1, 1);
			return { ...prev, [id]: newCount };
		});
	};

	return (
		<>
			<ul className='Basketcards'>
				{filteredProducts?.length > 0 ? (
					basket?.map(product => (
						<li className=' basketCard' key={product.id}>
							<div className='basketPage'>
								<img
									className='basketCard-img'
									src={product.thumbnail}
									alt={product.title}
								/>

								<b>{product.title}</b>

								<div className='pro-count'>
									<button
										className='minus'
										onClick={() =>
											handleDecrement(
												product.id,
												product.price
											)
										}
									>
										-
									</button>
									<p>{counts[product.id]}</p>
									<button
										className='plus'
										onClick={() =>
											handleIncrement(
												product.id,
												product.price
											)
										}
									>
										+
									</button>
								</div>
							</div>
						</li>
					))
				) : (
					<p>No products found</p>
				)}
			</ul>

			<div className='basketBtns'>
				<button className='basketToHome'>
					<a href='/'>{t('gohome')}</a>
				</button>
				<NavLink to={'/checkout'}>
					<button className='toCheckout'>{t('buyurtma')}</button>
				</NavLink>
			</div>
		</>
	);
};

export default Basket;
