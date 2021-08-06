import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	contacts: {
		paddingTop: size(100),
		[theme.media.sm_]: {
			paddingTop: size(140),
		},
	},
}));
