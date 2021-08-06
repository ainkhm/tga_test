import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	item: {
		backgroundSize: 'cover',
		height: size(170),
		[theme.media.sm_]: {
			height: size(400),
		},
		[theme.media.md_]: {
			height: size(680),
		},
	},
}));
