import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	item: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		flex: '1 0 50%',
		textAlign: 'center',
		margin: [size(25), 0, size(25)],
		[theme.media.sm_]: {
			textAlign: 'unset',
			flex: '1 0 33.333333%',
		},
	},
	number: {
		fontSize: size(48),
		lineHeight: size(48),
		fontFamily: 'RedHatFontBold',
		[theme.media.sm_]: {
			fontSize: size(96),
			lineHeight: size(96),
		},
	},
	description: {
		margin: [size(8), 0, size(8), 0],
		[theme.media.sm_]: {
			maxWidth: size(180),
			margin: [size(8), 0, size(25), 0],
		},
	},
}));
