import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	clients: {
		marginTop: size(100),
		[theme.media.sm_]: {
			marginTop: size(140),
		},
	},
	topHeader: {
		marginBottom: size(16),
		[theme.media.sm_]: {
			marginBottom: size(10),
		},
	},
	clientsWrap: {
		display: 'flex',
		alignItems: 'center',
	},
	action: {
		marginLeft: 'auto',
		display: 'none',
		[theme.media.sm_]: {
			display: 'flex',
		},
	},
	clientsSlider: {
		'& .slick-list': {
			margin: [size(34), 'auto', size(34)],
			width: '100%',
			[theme.media.sm_]: {
				margin: [size(150), 'auto', 0],
				width: 'calc(100% - 80px)',
			},
			'& .slick-slide': {
				height: size(80),
				width: size(130),
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'flex-end',
			},
		},
	},
	customLink: {
		margin: [size(45), 'auto', 0],
		textAlign: 'center',
		'&:hover': {
			backgroundColor: theme.colors.black.string(),
		},
		[theme.media.sm_]: {
			margin: '0 auto',
		},
	},
}));
