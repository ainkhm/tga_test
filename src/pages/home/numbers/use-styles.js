import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	numbers: {
		padding: [size(72), 0, 0, 0],
		[theme.media.sm_]: {
			padding: [size(140), 0, size(140), 0],
		},
	},
	numbersList: {
		display: 'flex',
		flexDirection: 'column',
		margin: [size(-25), 0, size(-25)],
		[theme.media.sm_]: {
			flexDirection: 'row',
		},
	},
	headerOffest: {
		marginBottom: size(23),
		[theme.media.sm_]: {
			marginBottom: size(30),
		},
	},
}));
