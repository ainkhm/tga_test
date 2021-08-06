import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	slideItem: {
		'& logo': {
			filter: 'grayscale(1)',
			transition: 'all .3s ease',
		},
		'&:hover': {
			'& $linkHover': {
				opacity: 1,
				paddingTop: '10px',
				transform: 'translateY(0)',
			},
			'& $logo': {
				filter: 'grayscale(0)',
			},
		},
	},
	linkHover: {
		opacity: 0,
		transform: 'translateY(40px)',
		transition: 'transform .3s ease',
	},
	logo: {
		width: size(130),
		height: size(35),
		backgroundSize: 'contain',
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat',
		filter: 'grayscale(1)',
		transition: 'filter .3s ease',
	},
}));
