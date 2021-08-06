import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	mainForm: {
		marginTop: size(80),
		[theme.media.sm_]: {
			marginTop: 0,
		},
	},
}));
