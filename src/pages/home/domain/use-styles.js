import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	domain: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	headerOffset: {
		marginTop: size(80),
		[theme.media.sm_]: {
			margin: 0,
		},
	},
	descriptionOffset: {
		marginTop: size(16),
		[theme.media.sm_]: {
			marginTop: size(10),
		},
	},
	sectorList: {
		display: 'flex',
		flexWrap: 'wrap',
		marginTop: size(18),
		'& > div:last-child': {
			margin: 0,
		},
		[theme.media.sm_]: {
			marginTop: size(35),
		},
	},
}));
