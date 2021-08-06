import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	crewCard: {
		width: size(320),
		'&:hover': {
			'& cardHover': {
				display: 'flex',
			},
		},
	},
	cardName: {
		fontSize: size(28),
		maxWidth: size(460),
		fontFamily: 'RedHatFontBold',
		marginTop: size(15),
		'& a': {
			textDecoration: 'none',
			'&:after': {
				content: 'unset',
			},
		},
	},
	hoverPhoto: {
		opacity: 0,
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundSize: 'cover',
	},
	cardPhoto: {
		backgroundSize: 'cover',
		width: '100%',
		height: size(320),
		overflow: 'hidden',
		position: 'relative',
		'&:after': {
			position: 'absolute',
			content: '""',
			bottom: 0,
			left: 0,
			right: 0,
			top: 0,
			transition: '.4s',
			opacity: 0,
			backgroundImage: theme.gradients.secondary,
			transform: 'translateY(100%)',
			height: size(320),
		},
		'&:hover': {
			'& $hoverPhoto': {
				opacity: 1,
			},
		},
	},
	cardInfo: {
		display: 'flex',
		flexDirection: 'column',
		opacity: 0,
		padding: [size(40), size(16), size(20), size(16)],
		transform: 'translateY(100%)',
		transition: '.4s',
		position: 'relative',
		height: '100%',
		zIndex: 99,
		fontFamily: 'RedHatFont',
	},
	hoverDescription: {
		color: theme.colors.white.string(),
		lineHeight: size(20),
		fontSize: size(16),
		marginBottom: size(30),
	},
	textRow: {
		color: theme.colors.white.string(),
		fontSize: size(16),
		lineHeight: size(18),
		marginTop: size(10),
	},
	textRowDesctiption: {
		'& a': {
			color: theme.colors.white.string(),
			textDecoration: 'underline',
			'&:nth-of-type(n+2):before': {
				content: '", "',
				whiteSpace: 'pre',
			},
		},
	},
	textRowHeader: {
		fontFamily: 'RedHatFontBold',
		letterSpacing: '0.5px',
	},
	cardActive: {
		'&:after': {
			opacity: 1,
			transform: 'translateY(0)',
		},
		'& $cardInfo': {
			opacity: 1,
			transform: 'translateY(0)',
			transitionDelay: '0.4s',
		},
	},
	customDescription: {
		marginTop: size(10),
	},
	bottom: {
		marginTop: 'auto',
	},
	cardLogo: {
		maxWidth: size(105),
		height: size(24),
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		marginTop: size(35),
	},
	projectCard: {
		width: size(264),
		[theme.media.sm_]: {
			width: size(320),
		},
	},
	projectPhoto: {
		height: size(264),
		[theme.media.sm_]: {
			height: size(320),
		},
	},
	infoCard: {
		width: '100%',
		backgroundColor: theme.colors.white.string(),
		boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.05)',
		padding: [size(32), size(45), size(24), size(32)],
		marginBottom: size(24),
		transition: '0.5s ease-in',
		'&:hover': {
			boxShadow: '0px 0px 25px rgba(0, 0, 0, .3)',
		},
		'& a': {
			'&:before': {
				content: '""',
				position: 'absolute',
				left: size(100),
				top: '-12px',
				width: size(16),
				height: size(16),
				backgroundImage: `url(${require(`assets/icons/arrow-right.svg`)})`,
				backgroundSize: 'contain',
				marginTop: size(20),
				[theme.media.sm_]: {
					content: 'none',
				},
			},
		},
		[theme.media.sm_]: {
			width: 'calc(50% - 45px)',
			padding: [size(32), size(45), size(32), size(45)],
			marginBottom: 0,
		},
	},
	requirements: {
		marginTop: size(16),
		marginBottom: size(24),
		listStylePosition: 'inside',
		'& li': {
			fontFamily: 'RedHatFont',
			fontSize: size(16),
			lineHeight: size(24),
			color: theme.colors.black.string(),
			position: 'relative',
			'& span': {
				display: 'block',
				paddingLeft: size(14),
			},
			'&:before': {
				position: 'absolute',
				content: '""',
				top: size(11),
				left: 0,
				width: '4px',
				height: '4px',
				borderRadius: '10px',
				backgroundColor: theme.colors.black.string(),
				[theme.media.sm_]: {
					top: 'calc(50% - 3px)',
				},
			},
		},
	},
	externalLink: {
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
}));
