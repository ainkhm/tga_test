import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	contacts: {
		paddingTop: size(72),
		[theme.media.sm_]: {
			paddingTop: size(120),
		},
		[theme.media.md_]: {
			paddingTop: size(140),
		},
	},
}));
