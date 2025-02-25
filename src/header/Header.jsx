import React, { memo, useState } from 'react';
import { Button } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useStateValue } from '../context';
import AuthModal from '../loginModal/LoginModal';
import './header.css';

const Header = () => {
	const [showModal, setShowModal] = useState(false);

	const { wishlist, basket } = useStateValue();

	const { t, i18n } = useTranslation();

	return (
		<header>
			<h1>asaxiy</h1>
			<button className='header-btn'>{t('bolimlar')}</button>
			<form>
				<input type='text' placeholder="t('qidirish')}" />
				<button>{t('qidirish')}</button>
			</form>
			<NavLink>
				<div>
					<img
						src='https://asaxiy.uz/custom-assets/images/icons/header/compare_header.svg'
						alt=''
					/>
					<p>{t('taqqos')}</p>
				</div>
			</NavLink>

			<NavLink>
				<div>
					<img
						src='https://asaxiy.uz/custom-assets/images/icons/header/payment.svg'
						alt=''
					/>
					<p>{t('tolash')}</p>
				</div>
			</NavLink>

			<NavLink>
				<div>
					<img
						src='https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg'
						alt=''
					/>
					<p>{t('trek')}</p>
				</div>
			</NavLink>

			<NavLink to={'/basket'}>
				<div>
					<img
						src='https://asaxiy.uz/custom-assets/images/icons/header/cart.svg'
						alt=''
					/>
					<p>{t('savat')}</p>
					{/* <div className='basketCounter'>{basket.length}</div> */}
				</div>
			</NavLink>

			<NavLink to={'/favourites'}>
				<div>
					<img
						src='https://asaxiy.uz/custom-assets/images/icons/header/heart.svg'
						alt=''
					/>
					<p>{t('wish')}</p>
					<div className='wishlistCounter'>{wishlist.length}</div>
				</div>
			</NavLink>

			<NavLink>
				<div
					onClick={() => {
						i18n.changeLanguage('ru');
					}}
				>
					<img
						src='https://asaxiy.uz/custom-assets/images/icons/header/language-ru.svg'
						alt=''
					/>
					<p>{t('til')}</p>
				</div>
			</NavLink>

			<div className='d-flex justify-content-center align-items-center '>
				<Button onClick={() => setShowModal(true)}>{t('kirish')}</Button>
				<AuthModal show={showModal} handleClose={() => setShowModal(false)} />
			</div>
			<h6 className='karzina-counter'>0</h6>
		</header>
	);
};

export default memo(Header);
