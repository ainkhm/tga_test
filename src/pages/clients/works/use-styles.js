import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	projects: {
		//	margin: [size(240), 0, size(128)],
	},
	projectsList: {
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		margin: [size(40), 0, 0],
	},
}));
