import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	specification: {},
	infoWrap: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
		[theme.media.md_]: {
			flexDirection: 'row',
		},
	},
	workInfoWrap: {
		paddingTop: size(24),
		[theme.media.md_]: {
			paddingTop: 0,
		},
	},
	topDescription: {
		whiteSpace: 'pre-wrap',
		maxWidth: size(600),
		marginTop: size(16),
		fontSize: size(16),
		[theme.media.sm_]: {
			marginTop: size(20),
			fontSize: size(20),
			maxWidth: size(480),
		},
	},
	customHeading: {
		marginBottom: size(10),
		marginTop: size(8),
	},
	workDescription: {
		color: theme.colors.darkGray.string(),
		fontFamily: 'RedHatFont',
		fontSize: size(16),
		marginBottom: size(5),
	},
	workHeading: {
		fontFamily: 'RedHatFontBold',
	},
	workText: {
		color: theme.colors.primary.string(),
	},
	customHead: {
		whiteSpace: 'pre-wrap',
		fontSize: size(24),
		lineHeight: '100%',
		[theme.media.sm_]: {
			lineHeight: size(50),
			whiteSpace: 'nowrap',
		},
		[theme.media.md_]: {
			whiteSpace: 'pre-wrap',
			maxWidth: size(320),
		},
	},
}));
