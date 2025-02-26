import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Basket from './basket/Basket';
import CheckoutForm from './checkout/Checkout';
import Detail from './detail/Detail';
import Favourites from './favourites/Favourites';
import Footer from './footer/Footer';
import Header from './header/Header';
import Home from './home/Home';

const App = () => {
	return (
		<>
			<Header />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/product/:id' element={<Detail />} />
				<Route path='/favourites' element={<Favourites />} />
				<Route path='/basket' element={<Basket />} />
			</Routes>
			<CheckoutForm />
			<Footer />
		</>
	);
};

export default memo(App);
