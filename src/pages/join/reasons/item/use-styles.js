import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	reason: {
		textAlign: 'center',
		'& img': {
			maxWidth: size(48),
			marginTop: size(20),
		},
		[theme.media.sm_]: {
			textAlign: 'start',
		},
	},
	customHeader: {
		marginBottom: size(15),
	},
	infoWrap: {
		paddingBottom: size(45),
		[theme.media.sm_]: {
			maxWidth: size(270),
		},
	},
	customDesc: {
		whiteSpace: 'pre-wrap',
	},
}));
