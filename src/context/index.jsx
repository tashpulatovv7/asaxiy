import { createContext, useContext, useState } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
	// const [count, setCount] = useState(JSON.parse(sessionStorage.getItem('count') || 1));

	// useEffect(() => {
	// 	sessionStorage.setItem('count', JSON.stringify(count));
	// }, [count]);

	const [wishlist, setWishlist] = useState([]);
	const [basket, setBasket] = useState([]);

	return (
		<Context.Provider
			value={{
				wishlist,
				setWishlist,
				basket,
				setBasket,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default Provider;

export const useStateValue = () => {
	return useContext(Context);
};
