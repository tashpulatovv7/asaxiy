import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CheckoutForm = () => {
	const [formData, setFormData] = useState({
		phone: '',
		fullName: '',
		region: '',
		city: '',
		address: '',
		landmark: '',
		workAddress: '',
		orderComment: '',
		promoCode: '',
		paymentMethod: 'online',
	});

	const { t, i18n } = useTranslation();

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div className='container mt-4'>
			<div className='row'>
				<div className='col-md-6'>
					<label>{t('tel')} *</label>
					<input
						type='text'
						className='form-control'
						name='phone'
						placeholder='+998(__) ___-__-__'
						onChange={handleChange}
					/>
				</div>
				<div className='col-md-6'>
					<label>{t('fio')} *</label>
					<input
						type='text'
						className='form-control'
						name='fullName'
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className='row mt-3'>
				<div className='col-md-6'>
					<label>{t('viloyat')} *</label>
					<select
						className='form-control'
						name='region'
						onChange={handleChange}
					>
						<option>Tashkent</option>
						<option>Buxoro</option>
						<option>Farg'ona</option>
						<option>Namangan</option>
						<option>Andijon</option>
						<option>Xorazm</option>
					</select>
				</div>
				<div className='col-md-6'>
					<label>{t('shahar')} *</label>
					<select className='form-control' name='city' onChange={handleChange}>
						<option>Yunusobod</option>
						<option>Mirzo Ulug'bek</option>
						<option>Yakkasaroy</option>
						<option>Yashnobod</option>
					</select>
				</div>
			</div>

			<div className='mt-3'>
				<label>{t('punkti')} *</label>
				<input
					type='text'
					className='form-control'
					name='address'
					onChange={handleChange}
				/>
			</div>

			<div className='mt-3'>
				<label>{t('moljal')}</label>
				<input
					type='text'
					className='form-control'
					name='landmark'
					onChange={handleChange}
				/>
			</div>

			<div className='mt-3'>
				<label>{t('ishJoyi')}</label>
				<input
					type='text'
					className='form-control'
					name='workAddress'
					onChange={handleChange}
				/>
			</div>

			<div className='mt-3'>
				<label>{t('buyurtmaIzohi')}</label>
				<textarea
					className='form-control'
					name='orderComment'
					onChange={handleChange}
				></textarea>
			</div>

			<div className='mt-3'>
				<label>{t('promokod')}</label>
				<input
					type='text'
					className='form-control'
					name='promoCode'
					onChange={handleChange}
				/>
			</div>

			<div className='mt-4'>
				<button className='btn btn-primary'>{t('zakazQilish')}</button>
			</div>
		</div>
	);
};

export default CheckoutForm;
