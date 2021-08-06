import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	crewCarousel: {
		paddingTop: size(72),
		[theme.media.sm_]: {
			paddingTop: size(110),
		},
		[theme.media.md_]: {
			paddingTop: size(180),
		},
	},
	customCarousel: {
		paddingTop: size(40),
		'& .slick-slider': {
			'& button': {
				backgroundColor: theme.colors.white.string(),
				top: 'calc(50% - 20px)',
				'&:first-child': {
					[theme.media.sm_]: {
						left: size(-5),
					},
					[theme.media.md_]: {
						left: size(20),
					},
				},
				'&:last-child': {
					[theme.media.sm_]: {
						right: size(5),
					},
					[theme.media.md_]: {
						right: size(20),
					},
				},
				'&:hover': {
					color: theme.colors.primary.string(),
				},
			},
			'& .slick-list': {
				margin: '0 -10px',
			},
			'& .slick-slide': {
				'& > div': {
					display: 'flex',
					justifyContent: 'center',
					marginRight: size(16),
				},
			},
		},
	},
}));
