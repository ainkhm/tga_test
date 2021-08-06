import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	navigation: {
		display: 'none',
		marginLeft: size(72),
		'& li:last-child': {
			'& $navigationItem': {
				marginRight: 0,
			},
		},
		[theme.media.md_]: {
			display: 'flex',
		},
	},
	navigationItem: {
		display: 'inline-block',
		padding: [size(24), 0],
		marginRight: size(48),
		position: 'relative',
		transition: 'color .3s ease',
		'&:hover': {
			color: theme.colors.primary.string(),
		},
		'&.active': {
			color: theme.colors.primary.string(),
			fontFamily: 'RedHatFontBold',
			borderColor: theme.colors.primary.string(),
			'&:after': {
				content: '""',
				position: 'absolute',
				left: 0,
				bottom: 0,
				width: '100%',
				border: `2px solid ${theme.colors.primary}`,
			},
		},
	},
}));
