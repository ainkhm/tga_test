import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	form: {
		display: 'flex',
		flexWrap: 'wrap',
		marginTop: size(40),
		'& input': {
			paddingBottom: '8px',
		},
		'& textarea': {
			resize: 'none',
			height: size(133),
			minWidth: '100%',
			marginTop: size(50),
			verticalAlign: 'top',
			[theme.media.sm_]: {
				marginTop: size(-17),
			},
			[theme.media.md_]: {
				marginTop: size(3),
			},
			[theme.media.lg_]: {
				minWidth: size(490),
			},
		},
	},
	row: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		width: '100%',
		flexWrap: 'wrap',
		[theme.media.sm_]: {
			flexWrap: 'nowrap',
		},
	},
	separator: {
		height: '2px',
		position: 'absolute',
		bottom: 0,
		width: 0,
		backgroundColor: theme.colors.primary.string(),
		transition: '0.4s',
		left: 0,
		zIndex: 2,
	},
	inputWrap: {
		position: 'relative',
		marginTop: size(50),
		[theme.media.lg_]: {
			width: size(490),
		},
		[theme.media.md_]: {
			marginTop: size(70),
		},
		'&:first-child': {
			marginTop: 0,
		},
	},
	input: {
		border: 0,
		borderBottom: `2px solid ${theme.colors.black}`,
		outline: 'none',
		fontSize: size(16),
		color: 'rgba(0, 0, 0, 0.54)',
		fontFamily: 'RedHatFont',
		'&:focus ~ $separator': {
			width: '100%',
			transition: '0.4s',
		},
	},
	column: {
		position: 'relative',
		width: '100%',
		[theme.media.sm_]: {
			width: '48%',
		},
		[theme.media.lg_]: {
			width: '50%',
		},
		'& input': {
			minWidth: '100%',
		},
	},
	uploadFile: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		marginTop: size(40),
		[theme.media.sm_]: {
			flexDirection: 'row',
			alignItems: 'center',
			marginTop: size(60),
		},
	},
	excerpt: {
		color: theme.colors.black.string(),
		fontSize: size(12),
		fontFamily: 'RedHatFont',
		marginLeft: 0,
		marginTop: size(18),
		[theme.media.sm_]: {
			marginLeft: size(28),
			marginTop: 0,
		},
	},
	buttonOffset: {
		marginTop: size(48),
	},
	uploadFileField: {
		marginBottom: 0,
		border: 'none',
		color: theme.colors.black.string(),
		backgroundColor: 'transparent',
		cursor: 'pointer',
		minWidth: 'auto',
		display: 'flex',
		alignItems: 'center',
		fontFamily: 'RedHatFont',
		fontSize: size(16),
		padding: 0,
		zIndex: 0,
		cursor: 'pointer',
		'& svg': {
			marginRight: size(13),
		},
		'&:hover': {
			color: theme.colors.primary.string(),
			'& svg': {
				'&	path': {
					fill: theme.colors.primary.string(),
				},
			},
		},
	},
	uploadFileInput: {
		position: 'absolute',
		zIndex: 1,
		opacity: 0,
		cursor: 'pointer',
	},
	mobileButton: {
		display: 'block',
		margin: [size(45), 'auto', 0],
		width: 'calc(100% - 32px)',
	},
}));
