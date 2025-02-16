import './footer.css';

const Footer = () => {
	return (
		<footer>
			<div>
				<b>Ma'lumot</b>
				<p>Ko'p so'raladigan savollar</p>
				<p>Yangiliklar</p>
				<p>Blog</p>
				<p>Bizning brendimiz</p>
				<p>Asaxiydagi karyerasi</p>
				<p>Muddatli to'lov ofertasi</p>
				<p>Ommaviy oferta</p>
				<p>Bi haqimizda</p>
				<p>Sayt xaritasi</p>
			</div>

			<div>
				<div>
					<b>Biz bilan aloqa</b>
					<p>+998 71 200 01 05</p>
					<p>info@asaxiy.uz</p>
					<p>Telegram bot</p>
					<p>Chilonzor ko'chasi, 45/2, Toshkent</p>
				</div>

				<div>
					<b>Sodiqlik dasturlari</b>
					<p>"El-yurt ishonchi" statusi</p>
					<p>«Asaxiy Plus»</p>
					<p>«Asaxiy Plus» ofertasi</p>
				</div>
			</div>

			<div>
				<b>Yetkazib berish va do'konlar</b>
				<div className='yetkazib-berish'>
					<img
						className='yetkazib-berish-img'
						src='https://asaxiy.uz/custom-assets/images/icons/store.svg'
						alt=''
					/>
					<h4>Bizning do'konlar</h4>
				</div>

				<div className='yetkazib-berish'>
					<img
						className='yetkazib-berish-img'
						src='https://asaxiy.uz/custom-assets/images/icons/delivery-point.svg'
						alt=''
					/>
					<h4>Olib ketish punktlari</h4>
				</div>

				<div className='yetkazib-berish'>
					<img
						className='yetkazib-berish-img'
						src='https://asaxiy.uz/custom-assets/images/icons/delivery-footer.svg'
						alt=''
					/>
					<h4>Yetkazib berish</h4>
				</div>
			</div>

			<div className='links'>
				<b>To'lov turlari</b>
				<div className='payments'>
					<span>
						<img
							src='https://asaxiy.uz/custom-assets/images/uzum.svg'
							alt=''
						/>
					</span>
					<span>
						<img
							src='https://asaxiy.uz/custom-assets/images/payme.svg'
							alt=''
						/>
					</span>
				</div>
				<div className='payments'>
					<span>
						<img
							src='https://asaxiy.uz/custom-assets/images/visa.svg'
							alt=''
						/>
					</span>
					<span>
						<img
							src='https://asaxiy.uz/custom-assets/images/mastercard.svg'
							alt=''
						/>
					</span>
				</div>
				<div className='payments'>
					<span>
						<img
							src='https://asaxiy.uz/custom-assets/images/humo.svg'
							alt=''
						/>
					</span>
					<span>
						<img
							src='https://asaxiy.uz/custom-assets/images/uzcard.svg'
							alt=''
						/>
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
