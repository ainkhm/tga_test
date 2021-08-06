import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	reasonsWrap: {
		paddingTop: size(40),
		[theme.media.sm_]: {
			paddingTop: size(80),
		},
	},
	reasons: {
		display: 'flex',
		flexWrap: 'wrap',
		paddingTop: size(28),
		justifyContent: 'center',
		[theme.media.sm_]: {
			paddingTop: size(40),
		},
		[theme.media.md_]: {
			paddingTop: size(80),
		},
		'& > div': {
			width: '100%',
			[theme.media.sm_]: {
				width: 'auto',
				padding: '0 5%',
			},
		},
	},
}));
