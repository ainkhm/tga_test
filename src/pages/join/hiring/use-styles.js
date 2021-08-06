import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	hiringWrap: {
		paddingTop: size(75),
		[theme.media.sm_]: {
			paddingTop: size(100),
		},
		[theme.media.md_]: {
			paddingTop: size(140),
		},
	},
	process: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
		marginTop: size(40),
		[theme.media.sm_]: {
			marginTop: size(80),
		},
		[theme.media.md_]: {
			flexDirection: 'row',
			flexWrap: 'wrap',
			paddingTop: size(160),
			marginTop: size(80),
		},
		[theme.media.lg_]: {
			flexWrap: 'no-wrap',
		},
	},
	processStep: {
		width: size(175),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '16px auto 0',
		position: 'relative',
		'&:after': {
			content: '""',
			backgroundImage: `url(${require(`assets/icons/arrow-dashed.svg`)})`,
			width: size(16),
			height: size(56),
			marginTop: size(20),
			[theme.media.md_]: {
				content: 'none',
			},
			'@media (min-width: 1440px)': {
				content: '""',
				transform: 'rotate(-90deg)',
				position: 'absolute',
				top: size(10),
				left: size(190),
			},
		},
		'&:nth-child(1)': {
			marginTop: 0,
			'& $icon': {
				'&:after': {
					content: '""',
					width: '100%',
					height: size(60),
					bottom: 0,
					transform: 'rotate(3deg)',
				},
				'&:before': {
					content: '""',
					width: '100%',
					height: size(60),
					top: '-19px',
					transform: 'rotate(-47deg)',
				},
			},
		},
		'&:nth-child(2)': {
			'& $icon': {
				'&:after': {
					content: '""',
					width: '100%',
					height: size(60),
					bottom: '-33px',
					transform: 'rotate(61deg)',
				},
				'&:before': {
					content: '""',
					width: '100%',
					height: size(70),
					top: '-31px',
					transform: 'rotate(-48deg)',
				},
			},
		},
		'&:nth-child(3)': {
			'& $icon': {
				'&:after': {
					content: '""',
					width: '100%',
					height: size(60),
					top: 0,
					left: '-16px',
					transform: 'rotate(126deg)',
				},
				'&:before': {
					content: '""',
					width: '100%',
					height: size(70),
					top: '-27px',
					transform: 'rotate(-47deg)',
				},
			},
		},
		'&:nth-child(4)': {
			'& $icon': {
				'&:after': {
					content: '""',
					width: '100%',
					height: size(60),
					top: '-55px',
					left: '38px',
					transform: 'rotate(-46deg)',
				},
				'&:before': {
					content: '""',
					width: '100%',
					height: size(70),
					left: '-83px',
					top: '-23px',
					transform: 'rotate(8deg)',
				},
			},
		},
		'&:nth-child(5)': {
			'& $icon': {
				'&:after': {
					content: '""',
					width: 0,
					height: 0,
					borderLeft: ['60px', 'solid', 'transparent'],
					borderRight: ['60px', 'solid', 'transparent'],
					borderTop: ['90px', 'solid', theme.colors.white.string()],
					backgroundColor: 'transparent !important',
					top: '-31px',
					left: '35px',
					transform: 'rotate(8deg)',
				},
			},
		},
		'&:nth-last-child(1)': {
			'&:after': {
				content: 'none',
			},
		},
		[theme.media.md_]: {
			marginTop: 0,
		},
	},

	icon: {
		backgroundImage: `url(${require('assets/icons/tga-icon.svg')})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '14px',
		backgroundSize: '100% 100%',
		width: '100%',
		height: size(120),
		margin: 0,
		position: 'relative',
		overflow: 'hidden',
		'&:after, &:before': {
			position: 'absolute',
			backgroundColor: theme.colors.white.string(),
		},
	},
	counter: {
		backgroundColor: theme.colors.primary.string(),
		color: theme.colors.white.string(),
		width: size(32),
		height: size(32),
		fontSize: size(20),
		fontFamily: 'RedHatFontBold',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '100%',
		margin: [size(16), 0, size(10), 0],
	},
	name: {
		fontFamily: 'RedHatFontBold',
		fontSize: size(20),
		lineHeight: size(22),
		whiteSpace: 'pre-wrap',
		textAlign: 'center',
		color: theme.colors.darkGray.string(),
	},
}));
