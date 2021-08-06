import color from 'color';

export const sizes = {
	xs: 320,
	sm: 600,
	md: 960,
	lg: 1280,
	xl: 1920,
};

function media(min, max) {
	min = sizes[min] || min;
	max = sizes[max] || max;
	min = min && `(min-width: ${min}px)`;
	max = max && `(max-width: ${max}px)`;

	return `@media ${[min, max].filter(Boolean).join(' and ')}`;
}

export default {
	media: {
		xs_: media('xs'),
		sm_: media('sm'),
		md_: media('md'),
		lg_: media('lg'),
		xl_: media('xl'),
		_xs: media(null, 'xs'),
		_sm: media(null, 'sm'),
		_md: media(null, 'md'),
		_lg: media(null, 'lg'),
		_xl: media(null, 'xl'),
		xs_sm: media('xs', 'sm'),
		sm_md: media('sm', 'md'),
		md_lg: media('md', 'lg'),
		lg_xl: media('lg', 'xl'),
		custom: media,
		...sizes,
	},

	colors: {
		white: color('#FFFFFF'),
		black: color('#000000'),
		primary: color('#118ae0'),
		navyBlue: color('#1e2f78'),
		darkGray: color('#202124'),
		lightGray: color('#d9d9d9'),
	},
	gradients: {
		primary: `linear-gradient(270deg, rgba(17, 138, 224, 0.1) 0%, #1e2f78 100%)`,
		secondary: `linear-gradient(90.33deg, #1e2f78 0.27%, #118ae0 96.55%)`,
		white: `linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%)`,
		gray: `rgba(32, 33, 36, 0.04)`,
	},
};
