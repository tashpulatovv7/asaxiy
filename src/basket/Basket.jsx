import axios from 'axios';
import { useEffect, useState } from 'react';
import { useStateValue } from '../context';

const Basket = () => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState(null);
	const { basket, setBasket } = useStateValue();

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

	return (
		<>
			<ul className='cards'>
				{filteredProducts?.length > 0 ? (
					basket?.map(product => (
						<li className='card' key={product.id}>
							<div className='basketPage'>
								<img
									className='card-img'
									src={product.thumbnail}
									alt={product.title}
								/>

								<b>{product.title}</b>
							</div>
						</li>
					))
				) : (
					<p>No products found</p>
				)}
			</ul>
			<button className='wishToHome'>
				<a href='/'>Orqaga</a>
			</button>
		</>
	);
};

export default Basket;
