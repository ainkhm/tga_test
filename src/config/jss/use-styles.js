import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
	'@global': {
		'*': {
			fontFamily: 'RedHatFont',
			'-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
		},
		html: {
			boxSizing: 'border-box',
			overflowX: 'hidden',
		},
		'*, *:before, *:after': {
			boxSizing: 'inherit',
		},
		body: {
			backgroundColor: theme.colors.white.string(),
			margin: 0,
			padding: 0,
			fontSize: '16px',
			overflowX: 'hidden',
		},
		'ul, ol': {
			paddingLeft: 0,
			margin: 0,
			listStyle: 'none',
		},
		li: {
			padding: 0,
		},
		'p, h1, h2, h3, h4, h5, h6 ': {
			margin: 0,
			padding: 0,
		},
		a: {
			textDecoration: 'none',
			color: theme.colors.black.string(),
		},
		button: {
			backgroundColor: 'transparent',
			outline: 'none',
			border: 'none',
			cursor: 'pointer',
		},
		'.headroom--pinned, .headroom--unfixed': {
			[theme.media._md]: {
				transform: 'unset!important',
			},
		},
	},
}));
