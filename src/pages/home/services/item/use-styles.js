import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	item: {
		flex: '1 0 100%',
		borderLeft: `1px solid ${theme.colors.navyBlue.string()}`,
		padding: [size(35), size(16)],
		position: 'relative',
		transition: '0.3s ease',
		'&:first-child': {
			borderLeftColor: theme.colors.navyBlue.string(),
			[theme.media.md_]: {
				borderLeftColor: 'transparent',
			},
		},
		[theme.media.sm_]: {
			flex: '1 0 34%',
		},
		[theme.media.md_]: {
			padding: [size(35), size(45)],
			flex: '1 0 21%',
		},
		'&:hover': {
			'& [class^="itemHover"]': {
				opacity: 1,
			},
			'& + div': {
				[theme.media.md_]: {
					borderLeftColor: 'transparent',
				},
			},
			'& [class^="description6"], [class^="header4"]': {
				position: 'relative',
				zIndex: 1,
				color: 'white',
			},
		},
	},
	smallHeader: {
		marginBottom: size(15),
	},
	itemHover: {
		opacity: 0,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundImage: theme.gradients.secondary,
		paddingBottom: size(32),
		transition: '0.3s ease',
		zIndex: 0,
	},
	itemBottom: {
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-end',
		'& [class^="link"]': {
			top: size(20),
		},
	},
	headerOffest: {
		marginBottom: size(15),
	},
}));
