import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import clsx from 'clsx';

import useStyles from './use-styles';

const NextArrow = ({ onClick }) => {
	const styles = useStyles();
	return (
		<button
			className={clsx(styles.slideArrow, styles.slideArrowNext)}
			onClick={onClick}>
			<svg
				width='20'
				height='20'
				viewBox='0 0 20 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M11 0.980469L21.0195 11L11 21.0195L9.24219 19.2617L16.2148 12.2305H0.980469V9.76953H16.2148L9.24219 2.73828L11 0.980469Z' />
			</svg>
		</button>
	);
};

const PrevArrow = ({ onClick }) => {
	const styles = useStyles();
	return (
		<button
			className={clsx(styles.slideArrow, styles.slideArrowPrev)}
			onClick={onClick}>
			<svg
				width='20'
				height='20'
				viewBox='0 0 20 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M11 0.980469L0.980469 11L11 21.0195L12.7578 19.2617L5.78516 12.2305H21.0195V9.76953H5.78516L12.7578 2.73828L11 0.980469Z' />
			</svg>
		</button>
	);
};
const Carousel = ({
	children,
	slidesToShow,
	slidesToScroll,
	variableWidth,
	dots,
	autoPlay,
	className,
}) => {
	const styles = useStyles();

	const settings = {
		infinite: true,
		speed: 500,
		autoplay: autoPlay,
		slidesToShow: slidesToShow,
		slidesToScroll: slidesToScroll,
		variableWidth: variableWidth,
		dots: dots,
		dotsClass: `slick-dots ${styles.dots}`,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	return (
		<div className={clsx(styles.slider, className)}>
			{<Slider {...settings}>{children}</Slider>}
		</div>
	);
};

export default Carousel;
