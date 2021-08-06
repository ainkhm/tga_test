import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	link: {
		display: 'inline-block',
		position: 'relative',
		lineHeight: size(30),
		fontFamily: 'RedHatFontBold',
		'&:after': {
			content: '""',
			position: 'absolute',
			width: '100%',
			height: '2px',
			bottom: 0,
			left: 0,
			backgroundColor: theme.colors.primary.string(),
			transform: 'scaleX(0.5)',
			transformOrigin: 'bottom left',
			transition: 'transform 0.3s',
		},
		'&:hover': {
			'&:after': {
				transform: 'scaleX(1)',
				transformOrigin: 'bottom left',
			},
			'&:before': {
				animation: '1.2s fadeIn',
				animationFillMode: 'forwards',
			},
		},
	},
	linkWhite: {
		color: theme.colors.white.string(),
		'&:after': {
			backgroundColor: theme.colors.white.string(),
		},
		'&:before': {
			position: 'absolute',
			content: '""',
			right: size(-30),
			top: '50%',
			maskImage: `url(${require(`assets/icons/arrow-right.svg`)})`,
			maskSize: 'cover',
			backgroundColor: theme.colors.white.string(),
			width: size(16),
			height: size(16),
			transform: 'translate(0, -50%)',
		},
	},
	hashLink: {
		display: 'block',
		border: `1px solid ${theme.colors.black.string()}`,
		padding: [size(14), size(32)],
		borderRadius: size(30),
		fontSize: size(16),
		fontFamily: 'RedHatFontBold',
		cursor: 'pointer',
		transition: '.3s ease',
		'&:hover': {
			color: theme.colors.white.string(),
		},
	},
}));
