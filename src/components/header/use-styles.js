import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	header: {
		backgroundColor: theme.colors.white.string(),
		boxShadow: `0px 1px 0px rgba(0, 0, 0, 0.12)`,
	},
	headline: {
		display: 'flex',
		alignItems: 'center',
		padding: [size(10), 0],
		[theme.media.md_]: {
			padding: 0,
		},
	},
	headlineAction: {
		marginLeft: 'auto',
	},
	contactUs: {
		[theme.media._sm]: {
			padding: [size(8), size(24)],
		},
	},
	customLink: {
		backgroundColor: 'black',
		color: 'white',
		'&:hover': {
			backgroundColor: theme.colors.primary.string(),
			border: `1px solid ${theme.colors.primary}`,
		},
	},
}));
