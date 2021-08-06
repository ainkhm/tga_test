import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	projects: {
		margin: [size(72), 0, 0, 0],
		[theme.media.sm_]: {
			margin: [size(140), 0, size(140)],
		},
	},
	projectList: {
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		margin: [size(24), 0, 0],
		[theme.media.sm_]: {
			margin: [size(40), 0, 0],
		},
		'& > div': {
			marginBottom: size(16),
		},
	},
	customLink: {
		margin: [size(45), size(28), 0],
		textAlign: 'center',
		'&:hover': {
			backgroundColor: theme.colors.black.string(),
		},
		[theme.media.sm_]: {
			'& > div': {
				marginBottom: 0,
			},
		},
	},
	bottomLink: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: size(24),
	},
}));
