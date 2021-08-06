import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	vision: {
		paddingTop: size(40),
		[theme.media.md_]: {
			paddingTop: size(80),
		},
	},
	goalsList: {
		display: 'flex',
		flexDirection: 'column',
		[theme.media.sm_]: {
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
		},
		[theme.media.md_]: {
			flexWrap: 'nowrap',
			justifyContent: 'space-between',
			marginTop: size(80),
		},
	},
}));
