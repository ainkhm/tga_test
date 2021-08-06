import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	crewCarousel: {
		paddingTop: size(42),
		[theme.media.sm_]: {
			paddingTop: size(110),
		},
		[theme.media.md_]: {
			paddingTop: size(180),
		},
	},
	customCarousel: {
		paddingTop: size(24),
		maxHeight: size(500),
		'& .slick-slider': {
			'& button': {
				backgroundColor: theme.colors.white.string(),
				top: 'calc(50% - 50px)',
				[theme.media.sm_]: {
					display: 'none',
				},
				[theme.media.md_]: {
					display: 'flex',
				},
				'&:first-child': {
					left: size(20),
				},
				'&:last-child': {
					right: size(20),
				},
			},

			'& .slick-slide': {
				margin: size(20),
			},
		},
		[theme.media.sm_]: {
			paddingTop: size(40),
		},
	},
}));
