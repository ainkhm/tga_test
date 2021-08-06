import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	crewMan: {
		paddingTop: size(40),
		[theme.media.sm_]: {
			paddingTop: size(80),
		},
	},
	contacts: {
		paddingTop: size(72),
		[theme.media.sm_]: {
			paddingTop: size(130),
		},
		[theme.media.md_]: {
			paddingTop: size(140),
		},
	},
}));
