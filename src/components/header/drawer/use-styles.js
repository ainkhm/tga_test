import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	drawerContainer: {
		position: 'fixed',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		background: theme.colors.white.string(),
		padding: [size(23), 0, size(23), 0],
		zIndex: 10,
		overflowY: 'scroll',
	},
	drawer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		height: '90%',
		marginTop: size(64),
	},
	menuItemLink: {
		display: 'block',
		borderLeft: `4px solid transparent`,
		paddingLeft: size(28),
		fontSize: size(20),
		width: '100%',
		'&.active': {
			color: theme.colors.primary.string(),
			fontFamily: 'RedHatFontBold',
			borderColor: theme.colors.primary.string(),
		},
	},
	menuItem: {
		marginBottom: size(34),
		'&:last-child': {
			marginBottom: 0,
		},
	},
	onClose: {
		marginLeft: size(30),
		cursor: 'pointer',
		display: 'inline-flex',
	},
	socials: {
		padding: [size(0), size(32)],
		marginTop: size(45),
		'& $socialsRow:first-child': {
			marginTop: 0,
		},
	},
	label: {
		color: theme.colors.black.string(),
		fontFamily: 'RedHatFontBold',
		fontSize: size(16),
		lineHeight: size(23),
	},
	phone: {
		fontFamily: 'RedHatFont',
		lineHeight: size(23),
	},
	socialIcon: {
		'& a': {
			backgroundColor: theme.colors.black.string(),
			display: 'inline-flex',
			width: size(32),
			height: size(32),
			borderRadius: '50%',
			padding: size(4),
		},
	},
	socialsRow: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: size(16),
	},
	cta: {
		padding: [size(28), size(32), 0],
	},
	contactButton: {
		display: 'block',
		margin: '0 auto',
		width: '100%',
	},
}));
