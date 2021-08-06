import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	filters: {
		marginRight: size(30),
		paddingBottom: size(16),
		[theme.media.sm_]: {
			paddingBottom: 0,
		},
	},
	filtersList: {
		display: 'inline-flex',
		flexWrap: 'wrap',
		marginTop: size(7),
		'& li': {
			padding: [size(8), 0],
			margin: [size(4), size(8), size(4), 0],
			'&:last-child': {
				marginRight: 0,
			},
		},
	},

	filterItem: {
		display: 'none',
		'&~label': {
			border: `1px solid ${theme.colors.black.string()}`,
			borderRadius: size(50),
			fontFamily: 'RedHatFont',
			fontSize: size(14),
			fontWeight: 400,
			cursor: 'pointer',
			padding: [size(8), size(12)],
		},
		'&:checked~label': {
			borderColor: theme.colors.primary.string(),
			backgroundColor: `rgba(17, 138, 224, 0.12)`,
			color: theme.colors.primary.string(),
		},
	},
	textBolder: {
		fontFamily: 'RedHatFontBold',
	},
}));
