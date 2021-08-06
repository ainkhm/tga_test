import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	topWrap: {
		display: 'flex',
		flexDirection: 'column',
		padding: [size(40), 0, size(64), 0],
		'& > button': {
			width: size(296),
			alignSelf: 'center',
		},
		[theme.media.md_]: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			padding: [size(80), 0, size(128), 0],
			'& > button': {
				width: size(138),
				alignSelf: 'flex-start',
				padding: [size(16)],
			},
		},
	},
	topHeader: {
		marginBottom: [size(32)],
	},
	topRow: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		'& > div': {
			marginRight: 0,
			marginBottom: size(38),
		},
		[theme.media.md_]: {
			flexDirection: 'row',
			justifyContent: 'space-evenly',
		},
		[theme.media.lg_]: {
			flexDirection: 'row',
			justifyContent: 'center',
			'& > div': {
				marginRight: size(60),
				marginBottom: size(100),
				'&:last-child': {
					marginRight: 0,
				},
			},
		},
	},
	teamWrap: {
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'center',
		'& > div': {
			marginBottom: size(38),
		},
		[theme.media.sm_]: {
			justifyContent: 'space-between',
		},
		[theme.media.lg_]: {
			'& > div': {
				marginBottom: size(100),
				'&:nth-last-child(-n+4)': {
					marginBottom: size(100),
				},
			},
		},
	},
	contacts: {
		paddingTop: size(72),
		[theme.media.lg_]: {
			paddingTop: size(140),
		},
	},
	customLink: {
		width: '100%',
		textAlign: 'center',
		height: size(56),
		padding: [size(16), size(16), 0, size(40)],
		'&:hover': {
			backgroundColor: theme.colors.black.string(),
		},
		[theme.media.sm_]: {
			width: size(138),
			textAlign: 'start',
		},
	},
}));
