import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import './footer.css';

const Footer = () => {
	const { t, i18n } = useTranslation();

	return (
		<footer>
			<div>
				<b>{t('malumot')}</b>
				<p>{t('malumot1')}</p>
				<p>{t('malumot2')}</p>
				<p>{t('malumot3')}</p>
				<p>{t('malumot4')}</p>
				<p>{t('malumot5')}</p>
				<p>{t('malumot6')}</p>
				<p>{t('malumot7')}</p>
				<p>{t('malumot8')}</p>
				<p>{t('malumot9')}</p>
			</div>

			<div>
				<div>
					<b>{t('aloqa')}</b>
					<p>+998 71 200 01 05</p>
					<p>{t('aloqa1')}</p>
					<p>{t('aloqa2')}</p>
					<p>{t('aloqa3')}</p>
				</div>

				<div>
					<b>{t('sodiqlik')}</b>
					<p>{t('sodiqlik1')}</p>
					<p>{t('sodiqlik2')}</p>
					<p>{t('sodiqlik3')}</p>
				</div>
			</div>

			<div>
				<b>{t('yetkazish')}</b>
				<div className='yetkazib-berish'>
					<img
						className='yetkazib-berish-img'
						src='https://asaxiy.uz/custom-assets/images/icons/store.svg'
						alt=''
					/>
					<h4>{t('yetkazish1')}</h4>
				</div>

				<div className='yetkazib-berish'>
					<img
						className='yetkazib-berish-img'
						src='https://asaxiy.uz/custom-assets/images/icons/delivery-point.svg'
						alt=''
					/>
					<h4>{t('yetkazish2')}</h4>
				</div>

				<div className='yetkazib-berish'>
					<img
						className='yetkazib-berish-img'
						src='https://asaxiy.uz/custom-assets/images/icons/delivery-footer.svg'
						alt=''
					/>
					<h4>{t('yetkazish3')}</h4>
				</div>
			</div>

			<div className='links'>
				<b>{t('tolovTuri')}</b>
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

export default memo(Footer);
