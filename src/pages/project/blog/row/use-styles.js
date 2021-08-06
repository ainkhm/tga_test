import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	blogRow: {
		display: 'flex',
		flexDirection: 'column-reverse',
		marginTop: size(64),
		'&:nth-of-type(even)': {
			marginTop: size(41),
			[theme.media.sm_]: {
				flexDirection: 'row-reverse',
			},
		},
		[theme.media.sm_]: {
			flexDirection: 'row',
			flexWrap: 'wrap',
			marginTop: size(80),
		},
	},
	blogBlock: {
		display: 'flex',
		flex: '50%',
		maxHeight: size(300),
		height: '100%',
		'&:after': {
			content: '""',
			display: 'block',
			paddingBottom: '100%',
		},
		[theme.media.sm_]: {
			maxHeight: size(630),
		},
	},
	text: {
		justifyContent: 'center',
		paddingTop: size(24),
		[theme.media.sm_]: {
			alignItems: 'center',
			padding: [0, size(45)],
		},
	},

	customText: {
		fontSize: size(16),
		maxWidth: size(540),
		whiteSpace: 'pre-wrap',
		[theme.media.md_]: {
			fontSize: size(20),
		},
	},
	image: {
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
}));
