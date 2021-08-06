import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	wrap: {
		maxWidth: '1440px',
		width: '100%',
		margin: [0, 'auto'],
		padding: [0, size(16)],
		[theme.media.md_]: {
			padding: [0, size(90)],
		},
	},
}));
