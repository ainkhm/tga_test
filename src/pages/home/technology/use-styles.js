import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	tech: {
		margin: [size(80), 0, 0, 0],
		[theme.media.sm_]: {
			margin: [size(140), 0, 0, 0],
		},
		// [theme.media.md_]: {
		// 	margin: [size(280), 0, 0, 0],
		// },
	},
	descriptionOffset: {
		marginTop: size(16),
		[theme.media.sm_]: {
			marginTop: size(10),
		},
	},
}));
