import { Route, Routes } from 'react-router-dom';
import Detail from './detail/Detail';
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
			</Routes>
			<Footer />
		</>
	);
};

export default App;
