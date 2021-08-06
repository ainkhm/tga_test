import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	projectList: {
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		margin: [size(40), 0, 0],
		[theme.media.sm_]: {
			margin: [size(70), 0, 0],
		},
	},
}));
