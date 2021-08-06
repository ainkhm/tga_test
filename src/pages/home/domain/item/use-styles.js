import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	item: {
		margin: [0, 0, size(16), 0],
		flex: '0 1 100%',
		height: 'auto',
		backgroundSize: 'cover',
		position: 'relative',
		zIndex: 9,
		transition: '0.3s ease',
		'&:after': {
			content: '""',
			display: 'block',
			paddingBottom: '100%',
		},
		[theme.media.sm_]: {
			flex: '1 0 30%',
			margin: '1px',
			height: size(350),
		},
		[theme.media.md_]: {
			flex: '0 1 calc(20% - 2px)',
		},
		'&:hover': {
			'& [class^="itemHover"]': {
				opacity: 1,
			},
		},
	},
	innerWrap: {
		position: 'absolute',
		width: '100%',
		height: '100%',
	},
	itemHover: {
		opacity: 0,
		transition: '0.3s ease',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'&:before': {
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			content: '""',
			backgroundImage: theme.gradients.secondary,
			opacity: 0.8,
			zIndex: -1,
		},
	},

	itemHoverText: {
		display: 'flex',
		alignItems: 'center',
		fontFamily: 'RedHatFontBold',
		fontSize: size(16),
		color: theme.colors.white.string(),
		cursor: 'pointer',
		'& img': {
			backgroundColor: theme.colors.white.string(),
			padding: size(8),
			borderRadius: '30px',
			marginLeft: size(12),
			width: size(35),
		},
	},
	captionStyle: {
		position: 'absolute',
		bottom: size(30),
		left: size(12),
		zIndex: 2,
	},
}));
