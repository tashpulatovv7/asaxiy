import './header.css';

const Header = () => {
	return (
		<header>
			<h1>asaxiy</h1>
			<button className='header-btn'>Bo'limlar</button>
			<form>
				<input type='text' placeholder='Qidirish...' />
				<button>Qidirish</button>
			</form>
			<div>
				<img
					src='https://asaxiy.uz/custom-assets/images/icons/header/compare_header.svg'
					alt=''
				/>
				<p>Taqqoslash</p>
			</div>
			<div>
				<img
					src='https://asaxiy.uz/custom-assets/images/icons/header/payment.svg'
					alt=''
				/>
				<p>To'lov</p>
			</div>
			<div>
				<img
					src='https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg'
					alt=''
				/>
				<p>Trek</p>
			</div>
			<div>
				<img
					src='https://asaxiy.uz/custom-assets/images/icons/header/cart.svg'
					alt=''
				/>
				<p>Savatcha</p>
			</div>
			<div>
				<img
					src='https://asaxiy.uz/custom-assets/images/icons/header/heart.svg'
					alt=''
				/>
				<p>Sevimlilar</p>
			</div>
			<div>
				<img
					src='https://asaxiy.uz/custom-assets/images/icons/header/language-ru.svg'
					alt=''
				/>
				<p>Russian</p>
			</div>
			<div>
				<img
					src='https://asaxiy.uz/custom-assets/images/icons/header/avatar.svg'
					alt=''
				/>
				<p>Kirish</p>
			</div>
		</header>
	);
};

export default Header;
