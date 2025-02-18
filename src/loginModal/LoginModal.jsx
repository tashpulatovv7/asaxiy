import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import './LoginModal.css';

const AuthModal = ({ show, handleClose }) => {
	const [phone, setPhone] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		alert(`Telefon raqami: ${phone}`);
	};

	return (
		<Modal show={show} onHide={handleClose} centered>
			<Modal.Body className='text-center p-4'>
				<h5 className='fw-bold'>Kirish yoki shaxsiy kabinet yaratish</h5>
				<Form onSubmit={handleSubmit} className='mt-3'>
					<Form.Group className='mb-3'>
						<div className='input-group'>
							<span className='input-group-text'>
								<img
									src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/30px-Flag_of_Uzbekistan.svg.png'
									alt='UZB'
									width='20'
								/>
							</span>
							<Form.Control
								type='tel'
								placeholder='+998'
								value={phone}
								onChange={e => setPhone(e.target.value)}
								required
							/>
						</div>
					</Form.Group>
					<Button type='submit' className='w-100 btn btn-primary'>
						Faollashtirish kodini oling
					</Button>
				</Form>
				<div className='text-muted my-3'>Yoki</div>
				<div className='d-flex justify-content-center gap-3'>
					<Button variant='light' className='border'>
						<img
							className='login-social'
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png'
							alt='Google'
						/>
					</Button>
					<Button variant='light' className='border'>
						<img
							className='login-social'
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png'
							alt='Facebook'
						/>
					</Button>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default AuthModal;
