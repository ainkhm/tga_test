import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	header: {
		fontFamily: 'RedHatFontBold',
		fontSize: size(26),
		lineHeight: size(33),
		color: theme.colors.black.string(),
		[theme.media.sm_]: {
			fontSize: size(48),
			lineHeight: 'initial',
		},
	},
	header2: {
		fontFamily: 'RedHatFontBold',
		fontSize: size(24),
		color: theme.colors.darkGray.string(),
		[theme.media.xs_]: {
			fontSize: size(28),
		},
	},
	header4: {
		fontSize: size(20),
		fontFamily: 'RedHatFontBold',
		color: theme.colors.darkGray.string(),
	},
	header3: {
		fontSize: size(24),
		fontFamily: 'RedHatFontBold',
		color: theme.colors.black.string(),
	},
	description: {
		fontSize: size(18),
		fontWeight: 400,
		lineHeight: '150%',
		[theme.media.sm_]: {
			fontSize: size(20),
			lineHeight: 'initial',
		},
	},
	description3: {
		fontWeight: 400,
		fontSize: size(16),
		[theme.media.sm_]: {
			fontSize: size(18),
		},
	},
	description6: {
		fontSize: size(16),
		fontFamily: 'RedHatFont',
		fontWeight: 400,
		color: theme.colors.darkGray.string(),
		lineHeight: '150%',
	},
	caption: {
		fontSize: size(20),
		color: theme.colors.white.string(),
		fontFamily: 'RedHatFontBold',
	},
}));
