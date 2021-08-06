import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	footer: {
		backgroundColor: theme.colors.black.string(),
		padding: [size(24), 0, size(28), 0],
		marginTop: size(64),
		[theme.media.sm_]: {
			marginTop: size(135),
			padding: [size(20), 0],
		},
		'& [class^=wrap]': {
			padding: [size(24), size(16), 0],
			[theme.media.md_]: {
				padding: [size(24), size(16), 0],
			},
		},
	},
	footerContent: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > div:nth-child(1n+2)': {
			marginBottom: size(24),
		},
		[theme.media.sm_]: {
			flexWrap: 'nowrap',
		},
	},
	footerInfo: {
		color: theme.colors.white.string(),
		lineHeight: size(20),
		fontSize: size(15),
		flex: '0 1 50%',
		[theme.media.sm_]: {
			flex: 'unset',
			marginRight: size(64),
		},
		[theme.media.md_]: {
			marginRight: size(96),
		},
	},
	footerHead: {
		fontFamily: 'RedHatFontBold',
		marginBottom: size(5),
	},
	footerText: {
		fontFamily: 'RedHatFont',
	},
	footerSocials: {
		marginTop: size(28),
		[theme.media.sm_]: {
			marginLeft: 'auto',
			marginTop: 0,
		},
		'& a': {
			display: 'inline-block',
			marginRight: size(40),
			borderBottom: '4px solid transparent',
			transition: '.3s ease',
			[theme.media.sm_]: {
				marginRight: size(10),
			},
			'&:hover': {
				borderBottom: `4px solid ${theme.colors.primary.string()}`,
			},
			'&:last-child': {
				margin: 0,
			},
			'& img': {
				width: size(30),
			},
		},
	},
}));
