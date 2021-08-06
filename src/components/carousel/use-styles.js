import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	slideArrow: {
		position: 'absolute',
		top: 'calc(50% - 7px)',
		transform: 'translate(0, -50%)',
		backgroundColor: theme.gradients.gray,
		color: 'black',
		width: size(40),
		height: size(40),
		opacity: 1,
		zIndex: 3,
		borderRadius: size(40),
		display: 'none',
		justifyContent: 'center',
		alignItems: 'center',
		transition: 'background-color .3s ease',
		'& svg path': {
			fill: 'currentcolor',
		},
		'&:hover': {
			backgroundColor: 'black',
			color: 'white',
		},
		[theme.media.sm_]: {
			display: 'flex',
		},
	},
	slideArrowPrev: {
		left: 0,
	},
	slideArrowNext: {
		right: 0,
	},
	dots: {
		'& li button:before': {
			fontSize: size(8),
		},
		'& > li.slick-active button::before': {
			fontSize: size(10),
			color: theme.colors.primary.string(),
		},
	},
}));
