import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	tabsWrap: {
		marginTop: size(48),
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'stretch',
		justifyContent: 'center',
		[theme.media.sm_]: {
			marginTop: size(70),
		},
	},
	tabsControl: {
		width: size(430),
		[theme.media.sm_]: {
			paddingRight: size(140),
		},
	},
	tabsControlItem: {
		display: 'flex',
		alignItems: 'center',
		fontSize: size(20),
		cursor: 'pointer',
		position: 'relative',
		marginBottom: 0,
		padding: [size(23), size(19), size(23), size(23)],

		[theme.media.sm_]: {
			marginBottom: size(70),
			padding: 0,
			fontSize: size(22),
		},
		'&:last-of-type': {
			marginBottom: 0,
		},
		'& > img': {
			marginRight: size(15),
			width: size(38),
			height: size(38),
			[theme.media.sm_]: {
				marginRight: size(15),
				width: size(48),
				height: size(48),
			},
		},
		'&.active': {
			fontFamily: 'RedHatFontBold',
			backgroundColor: theme.gradients.gray,
			'& $chevron': {
				transform: 'rotate(0deg)',
			},
			[theme.media.sm_]: {
				backgroundColor: 'transparent',
			},

			'&:before': {
				position: 'absolute',
				content: 'unset',
				top: '50%',
				left: '-45px',
				height: '4px',
				width: '30px',
				transform: 'translate(-50%, -50%)',
				backgroundColor: theme.colors.primary.string(),
				[theme.media.sm_]: {
					content: '""',
				},
			},
		},
	},
	tabsView: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		padding: [0, 0, 0, size(90)],
		width: size(450),
		borderLeft: `1px solid ${theme.colors.black.string()}`,
	},
	paragraph: {
		fontSize: size(18),
		fontWeight: 400,
		fontFamily: 'RedHatFont',
		lineHeight: size(22),
	},
	chevron: {
		width: size(20),
		transform: 'rotate(180deg)',
		marginLeft: 'auto',
		display: 'block',
		[theme.media.sm_]: {
			display: 'none',
		},
		'& > img': {
			width: size(18),
		},
	},
	tabsViewItem: {
		display: 'none',
		fontFamily: 'RedHatFontBold',
		fontSize: size(16),
		marginBottom: size(30),
		alignItems: 'flex-start',
		flexDirection: 'column',
		[theme.media.sm_]: {
			fontSize: size(20),
		},
		'& .viewRow': {
			display: 'flex',
			flexDirection: 'row',
			marginBottom: size(24),
			position: 'relative',
			'& span': {
				display: 'none',
			},
			[theme.media.sm_]: {
				marginBottom: size(35),
				'&:before': {
					content: '""',
					position: 'absolute',
					top: '50%',
					right: '-28px',
					transform: 'translate(-0%, -50%)',
					backgroundImage: `url(${require('assets/icons/arrow-right.svg')})`,
					backgroundSize: 'cover',
					width: size(16),
					height: size(16),
					[theme.media.sm_]: {
						content: 'unset',
					},
				},
				'& span': {
					width: 0,
					overflow: 'hidden',
					transition: 'width 1s',
					whiteSpace: 'nowrap',
					fontSize: size(16),
					fontFamily: 'RedHatFontBold',
					display: 'flex',
				},
				'&:hover': {
					'& span': {
						width: size(190),
					},
				},
			},
			'& p': {
				fontFamily: 'RedHatFontBold',
			},
		},
		'&.active': {
			display: 'flex',
		},
		'&:last-of-type': {
			marginBottom: 0,
		},
	},
	tabsViewItemMobile: {
		'&.active': {
			backgroundColor: theme.gradients.gray,
		},
	},
	dropDownMobile: {
		backgroundColor: theme.gradients.gray,
		padding: [0, size(16), size(23)],
		[theme.media.sm_]: {
			backgroundColor: 'transparent',
			padding: 0,
		},
	},

	icon: {
		marginLeft: size(15),
		width: size(20),
	},
}));
