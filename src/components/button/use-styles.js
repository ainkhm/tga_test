import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	button: {
		border: `1px solid ${theme.colors.black.string()}`,
		padding: [size(14), size(32)],
		borderRadius: size(30),
		fontSize: size(16),
		fontFamily: 'RedHatFontBold',
		transition: '.3s ease',
		'&:hover': {
			backgroundColor: theme.colors.black.string(),
			color: theme.colors.white.string(),
		},
	},
	darkButton: {
		backgroundColor: theme.colors.black.string(),
		color: theme.colors.white.string(),
		transition: '.3s ease',
		'&:hover': {
			backgroundColor: theme.colors.primary.string(),
			border: `1px solid ${theme.colors.primary.string()}`,
		},
	},
}));
