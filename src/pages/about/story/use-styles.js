import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	story: {
		paddingTop: size(90),
		[theme.media.sm_]: {
			paddingTop: size(140),
		},
		// [theme.media.md_]: {
		// 	paddingTop: size(250),
		// },
	},
	timelineWrap: {
		[theme.media.sm_]: {
			position: 'relative',
			'&:after': {
				position: 'absolute',
				content: '""',
				height: '100%',
				width: '50px',
				background: theme.gradients.white,
				right: 0,
				top: 0,
			},
		},
	},
	timeline: {
		marginTop: size(32),
		paddingTop: size(30),
		whiteSpace: 'nowrap',
		overflowX: 'hidden',
		'&::-webkit-scrollbar-thumb': {
			display: 'none',
		},
		'&::-webkit-scrollbar': {
			display: 'none',
			width: '0px',
			background: 'transparent',
		},
		'scrollbar-width': 'none',
		[theme.media.md_]: {
			height: size(200),
			display: 'flex',
			alignItems: 'flex-start',
			marginTop: size(60),
			overflowX: 'scroll',
			overflowY: 'hidden',
		},
		'& > ol': {
			fontSize: 0,
			position: 'relative',
			[theme.media.md_]: {
				position: 'static',
				width: '100vw',
				transition: 'all 1s',
			},
			'&:before': {
				content: "''",
				borderLeft: `1px solid ${theme.colors.black.string()}`,
				position: 'absolute',
				top: size(16),
				left: size(10),
				height: '100%',
				[theme.media.md_]: {
					content: 'none',
				},
			},
			'& > li': {
				position: 'relative',
				display: 'block',
				listStyleType: 'none',
				marginLeft: size(10),
				'&:last-child': {
					float: 'inline-end',
				},
				[theme.media.md_]: {
					display: 'inline-block',
					width: size(434),
					height: '1px',
					marginLeft: 0,
					background: theme.colors.black.string(),
					'&:last-child': {
						float: 'none',
						background: 'transparent',
						'& $info': {
							left: 0,
						},
					},
				},
				'& $circle': {
					content: "''",
					cursor: 'pointer',
					position: 'absolute',
					top: size(-7),
					left: 0,
					bottom: 0,
					width: size(16),
					height: size(16),
					marginTop: size(16),
					marginLeft: size(-7),
					borderRadius: '50%',
					background: theme.colors.primary.string(),
					zIndex: 8,
					'&:first-child': {
						left: 0,
					},
					[theme.media.md_]: {
						top: '50%',
						marginTop: 0,
						marginLeft: 0,
						transform: 'translatey(-50%)',
					},
				},
				'& $info': {
					marginLeft: size(23),
					paddingBottom: size(44),
					width: `calc(100% - ${size(23)})`,
					[theme.media.md_]: {
						position: 'absolute',
						marginLeft: 0,
						paddingBottom: 0,
						width: size(405),
						left: 0,
						top: '25px',
					},
				},
			},
		},
	},
	circle: {
		height: size(16),
		width: size(16),
		display: 'flex',
		'&:hover:before, &:hover:after': {
			content: '""',
			display: 'block',
			position: 'absolute',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			borderRadius: '50%',
			border: `1px solid ${theme.colors.primary.string()}`,
		},
		'&:hover': {
			animation: '.25s ease, width .25s ease',
		},
		'&:hover:before': {
			animation: 'ripple 1s linear infinite',
		},
		'&:hover:after': { animation: 'ripple 1s linear 0.5s infinite' },
		'&:before, &:after': {
			animation: 'none',
		},
	},
	text: {
		fontFamily: 'RedHatFont',
		fontSize: size(16),
		color: theme.colors.black.string(),
		marginTop: size(16),
		paddingRight: size(16),
		lineHeight: size(24),
		[theme.media.md_]: {
			paddingRight: 0,
		},
	},
	info: {
		whiteSpace: 'normal',
	},
	year: {
		fontSize: size(24),
		fontFamily: 'RedHatFontBold',
		color: theme.colors.black.string(),
	},
	'@keyframes ripple': {
		'0%': { transform: 'scale(1)' },
		'75%': { transform: 'scale(2.75)', opacity: 1 },
		'100%': { transform: 'scale(4)', opacity: 0 },
	},
}));
