import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	project: {
		margin: '0',
		flex: '0 1 100%',
		width: '100%',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		position: 'relative',
		marginBottom: '8px',
		'&:after': {
			content: '""',
			display: 'block',
			paddingBottom: '100%',
		},
		[theme.media.sm_]: {
			flex: '0 calc(50% - 16px)',
			minHeight: size(200),
			margin: '8px',
		},
		[theme.media.md_]: {
			minHeight: size(495),
			maxHeight: size(604),
		},
		'&:before': {
			content: '""',
			position: 'absolute',
			top: 0,
			right: 0,
			left: 0,
			bottom: 0,
			backgroundImage: theme.gradients.primary,
			transition: 'opacity 0.5s ease-in-out',
			opacity: 0,
		},
		'&:hover': {
			'&:before': {
				opacity: 1,
			},
			'& [class^="projectDescription"], & [class^="projectMiddle"], & [class^="projectBottom"]':
				{
					opacity: 1,
				},
		},
		'&:focus': {
			'& [class^="clientInfo"], & [class^="clientDescription"]': {
				opacity: 1,
				transform: 'translateY(0)',
				transitionDelay: '0.4s',
			},
		},
	},
	projectInfo: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		flexDirection: 'column',
		padding: '24px 24px',
		position: 'relative',
		zIndex: 3,
		height: '100%',
		position: 'absolute',
		width: '100%',
		[theme.media.sm_]: {
			padding: '20px 20px',
		},
	},
	projectTop: {
		display: 'flex',
		alignItems: 'flex',
		justifyContent: 'space-between',
		width: '100%',
	},
	projectTitle: {
		color: theme.colors.white.string(),
		fontSize: size(24),
		maxWidth: size(460),
		fontFamily: 'RedHatFontBold',
		[theme.media.sm_]: {
			fontSize: size(16),
		},
		[theme.media.md_]: {
			fontSize: size(32),
		},
	},
	projectDescription: {
		color: theme.colors.white.string(),
		fontSize: size(14),
		maxWidth: size(460),
		marginTop: size(16),
		opacity: 0,
		[theme.media.sm_]: {
			marginTop: size(0),
		},
		[theme.media.md_]: {
			fontSize: size(20),
			marginTop: size(16),
		},
	},

	projectMiddle: {
		opacity: 0,
		padding: size(16),
		backgroundColor: theme.colors.white.string(),
		borderRadius: size(70),
		cursor: 'pointer',
		position: 'absolute',
		display: 'flex',
		top: '50%',
		left: ' 50%',
		transform: 'translate(-50%, -50%)',
		'& img': {
			width: size(24),
			[theme.media.sm_]: {
				width: size(32),
			},
		},
	},
	projectBottom: {
		marginTop: 'auto',
		opacity: 0,
	},
	projectLogo: {
		marginTop: size(7),
		maxHeight: size(35),
	},
	clientTop: {
		display: 'flex',
		alignItems: 'start',
		justifyContent: 'start',
		width: '100%',
		height: '100%',
	},
	clientTitle: {
		color: theme.colors.white.string(),
		fontSize: size(24),
		maxWidth: size(460),
		fontFamily: 'RedHatFontBold',
		[theme.media.md_]: {
			fontSize: size(48),
		},
	},
	clientInfo: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		overflowY: 'scroll',
		backgroundImage: theme.gradients.secondary,
		opacity: 0,
		top: 0,
		left: 0,
		padding: size(20),
	},
	clientDescription: {
		color: theme.colors.white.string(),
		transform: 'translateY(50%)',
		transition: '.4s',
		textAlign: 'start',
		fontSize: size(20),
		overflowY: 'scroll',
		[theme.media.md_]: {
			fontSize: size(24),
		},
	},
	clientLogo: {
		position: 'absolute',
		bottom: size(20),
		right: size(20),
		maxHeight: size(35),
	},
	text: {
		color: theme.colors.white.string(),
		fontSize: size(12),
		fontFamily: 'RedHatFont',
		marginBottom: size(8),
		[theme.media.sm_]: {
			marginBottom: size(0),
		},
		[theme.media.md_]: {
			fontSize: size(16),
			marginBottom: size(8),
		},
		'&:last-child': {
			marginBottom: 0,
		},
	},
	header: { fontFamily: 'RedHatFontBold' },
}));
