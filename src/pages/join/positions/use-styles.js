import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	positionsWrap: {
		paddingTop: size(72),
		[theme.media.sm_]: {
			paddingTop: size(72),
		},
		[theme.media.md_]: {
			paddingTop: size(90),
		},
	},
	positions: {
		display: 'flex',
		justifyContent: 'space-around',
		paddingTop: size(40),
		flexDirection: 'column',
		[theme.media.sm_]: {
			flexDirection: 'row',
		},
		[theme.media.md_]: {
			justifyContent: 'space-between',
		},
	},
}));
