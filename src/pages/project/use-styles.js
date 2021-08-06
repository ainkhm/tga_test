import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	projectPage: {
		padding: [size(40), 0, 0, 0],
		[theme.media.sm_]: {
			paddingTop: size(80),
		},
	},
	contacts: {
		paddingTop: size(84),
		[theme.media.sm_]: {
			paddingTop: size(110),
		},
		[theme.media.md_]: {
			paddingTop: size(140),
		},
	},
}));
