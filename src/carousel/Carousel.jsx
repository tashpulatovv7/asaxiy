import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';

function IndividualIntervalsExample() {
	return (
		<Carousel>
			<Carousel.Item interval={1000}>
				<div className='carousel'>
					<img
						src='https://cdn.asaxiy.uz/asaxiy-content/uploads/banner/desktop/664c6f08cd87d.jpg.webp'
						alt=''
					/>
					<img
						src='https://cdn.asaxiy.uz/asaxiy-content/uploads/banner/desktop/664c7054a9973.jpg.webp'
						alt=''
					/>
					<img
						src='https://cdn.asaxiy.uz/asaxiy-content/uploads/banner/desktop/664c55d82dc95.jpg.webp'
						alt=''
					/>
				</div>
			</Carousel.Item>
			<Carousel.Item interval={1000}>
				<div className='carousel'>
					<img
						src='https://cdn.asaxiy.uz/asaxiy-content/uploads/banner/desktop/664c6f08cd87d.jpg.webp'
						alt=''
					/>
					<img
						src='https://cdn.asaxiy.uz/asaxiy-content/uploads/banner/desktop/664c7054a9973.jpg.webp'
						alt=''
					/>
					<img
						src='https://cdn.asaxiy.uz/asaxiy-content/uploads/banner/desktop/664c55d82dc95.jpg.webp'
						alt=''
					/>
				</div>
			</Carousel.Item>
			<Carousel.Item interval={1000}>
				<div className='carousel'>
					<img
						src='https://cdn.asaxiy.uz/asaxiy-content/uploads/banner/desktop/664c6f08cd87d.jpg.webp'
						alt=''
					/>
					<img
						src='https://cdn.asaxiy.uz/asaxiy-content/uploads/banner/desktop/664c7054a9973.jpg.webp'
						alt=''
					/>

					<img
						src='https://cdn.asaxiy.uz/asaxiy-content/uploads/banner/desktop/664c55d82dc95.jpg.webp'
						alt=''
					/>
				</div>
			</Carousel.Item>
		</Carousel>
	);
}

export default IndividualIntervalsExample;
