import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	advantage: {
		marginTop: size(44),
		textAlign: 'center',
		[theme.media.sm_]: {
			maxWidth: size(240),
			marginRight: size(45),
			textAlign: 'start',
		},
		[theme.media.md_]: {
			'&:last-child': {
				marginRight: 0,
			},
		},
	},
	icon: {
		margin: 0,
		width: size(48),
	},
	header: {
		marginTop: size(8),
		[theme.media.sm_]: {
			marginTop: size(15),
		},
	},
	description: {
		marginTop: size(8),
		[theme.media.sm_]: {
			marginTop: size(13),
		},
	},
}));
