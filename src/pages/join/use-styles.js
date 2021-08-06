import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	joinUs: {},
	contacts: {
		paddingTop: size(72),
		[theme.media.sm_]: {
			paddingTop: size(140),
		},
		// [theme.media.md_]: {
		// 	paddingTop: size(220),
		// },
	},
}));
