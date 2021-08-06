import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	top: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'column',
		minHeight: 'calc(100vh - 59px)',
		backgroundSize: 'cover',
		backgroundImage: `url(${require('./main-bg.svg')})`,
		backgroundPosition: 'center',
		padding: [0, size(28)],
		[theme.media.sm_]: {
			justifyContent: 'center',
			padding: 0,
			minHeight: 'calc(100vh - 73px)',
		},
	},
	topHeader: {
		textAlign: 'center',
		marginTop: size(60),
		maxWidth: size(810),
		[theme.media.sm_]: {
			marginTop: 0,
		},
	},
	topDescription: {
		textAlign: 'center',
		marginTop: size(43),
		maxWidth: size(500),
		[theme.media.sm_]: {
			marginTop: size(20),
		},
	},
	action: {
		marginTop: size(45),
		width: '100%',
		[theme.media.sm_]: {
			width: 'unset',
			marginTop: size(40),
		},
	},
	customButton: {
		width: '100%',
		[theme.media.sm_]: {
			width: 'auto',
		},
	},
	bottom: {
		width: size(40),
		height: size(40),
		position: 'relative',
		top: 0,
		margin: [size(64), 0],
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer',
		padding: size(2),
		[theme.media.sm_]: {
			top: size(100),
			marginTop: 0,
			width: size(64),
			height: size(64),
			padding: 0,
		},
		'& img': {
			width: '65%',
		},
		'&:after': {
			position: 'absolute',
			top: '50%',
			left: '50%',
			content: '""',
			width: '100%',
			height: '100%',
			border: `1px solid ${theme.colors.black.string()}`,
			transform: `translate(-50%, -50%)`,
			borderRadius: size(64),
		},
	},
}));
