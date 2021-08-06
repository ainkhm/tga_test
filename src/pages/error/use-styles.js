import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	errorPage: {
		height: 'calc(100vh - 198px)',
		marginBottom: size(-135),
	},
}));
