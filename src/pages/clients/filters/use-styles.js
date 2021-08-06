import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	filters: {
		paddingTop: size(40),
		[theme.media.sm_]: {
			paddingTop: size(80),
		},
	},
	filtersList: {
		position: 'fixed',
		bottom: 0,
		left: 0,
		zIndex: 5,
		width: '100%',
		backgroundColor: 'white',
		paddingLeft: size(16),
		borderRadius: '16px 16px 0 0',
		'& div:nth-of-type(2)': {
			paddingTop: size(16),
			[theme.media.sm_]: {
				paddingTop: 0,
			},
		},
		'& div:nth-of-type(1)': {
			[theme.media.sm_]: {
				paddingTop: 0,
			},
		},
		[theme.media.sm_]: {
			position: 'static',
			display: 'flex',
			flexWrap: 'wrap',
			marginTop: size(30),
			paddingLeft: 0,
		},
	},
	filtersHeader: {
		height: size(56),
		paddingTop: size(20),
		display: 'flex',
		justifyContent: 'space-between',
		borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
		'& img': {
			width: size(11),
			height: size(7),
			marginTop: size(7),
			marginRight: size(25),
		},
	},
	overlay: {
		position: 'fixed',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
		zIndex: 5,
	},
}));
