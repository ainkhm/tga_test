import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	errorWrap: {
		display: 'flex',
		flexFlow: 'row wrap',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
	},
	errorHeader: {
		fontFamily: 'RedHatFontBold',
		fontWeight: 700,
		fontSize: size(72),
		lineHeight: size(72),
		textTransform: 'uppercase',
	},
	errorCode: {
		marginTop: size(24),
		'& $errorSymbol:last-child': {
			position: 'relative',
			left: '-27px',
		},
	},
	errorSymbol: {
		fontFamily: 'RedHatFontBold',
		fontSize: size(160),
		lineHeight: '100px',
	},
	errorLogo: {
		display: 'inline-block',
		width: size(150),
		height: size(120),
		backgroundImage: `url(${require(`assets/icons/main-logo.svg`)})`,
		backgroundRepeat: 'no-repeat',
		margin: [0, size(16)],
	},
	errorDecription: {
		marginTop: size(30),
	},
}));
