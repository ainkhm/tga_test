import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	solutions: {
		paddingTop: size(72),
		[theme.media.sm_]: {
			paddingTop: size(140),
		},
		captionOffset: {
			marginTop: size(16),
			[theme.media.sm_]: {
				marginTop: size(8),
			},
		},
	},
}));
