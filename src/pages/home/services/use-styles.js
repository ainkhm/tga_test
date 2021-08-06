import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	services: {
		paddingTop: 0,
		[theme.media.lg_]: {
			paddingTop: size(130),
		},
	},
	servicesList: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	headerOffset: {
		marginBottom: size(24),
		[theme.media.sm_]: {
			marginBottom: size(40),
		},
	},
}));
