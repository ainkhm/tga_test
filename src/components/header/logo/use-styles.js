import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	logo: {
		display: 'flex',
		width: size(95),
		marginLeft: size(19),
		[theme.media.md_]: {
			marginLeft: 0,
		},
		[theme.media.sm_]: {
			width: '100%',
		},
	},
}));
