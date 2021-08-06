import { createUseStyles } from 'react-jss';
import size from 'helpers/size';

export default createUseStyles((theme) => ({
	customCarousel: {
		paddingTop: size(40),
		'& .slick-slider': {
			'& button': {
				backgroundColor: theme.colors.white.string(),
				top: 'calc(50%)',
				'&:first-child': {
					left: size(20),
				},
				'&:last-child': {
					right: size(20),
				},
			},
		},
	},
}));
