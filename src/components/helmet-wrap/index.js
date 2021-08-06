import React from 'react';
import { Helmet } from 'react-helmet';

export const HelmetWrap = (props) => {
	return (
		<Helmet
			title={props.title}
			meta={[
				{
					property: 'title',
					content: props.title,
				},
				{
					property: 'description',
					content: props.description,
				},
				{
					property: 'og:title',
					content: props.title,
				},
				{
					property: 'og:description',
					content: props.description,
				},
				{
					property: 'og:image',
					content: null,
				},
				{
					property: 'og:image:width',
					content: '578',
				},
				{
					property: 'og:image:height',
					content: '325',
				},
				{
					property: 'twitter:title',
					content: props.title,
				},
				{
					property: 'twitter:description',
					content: props.description,
				},
				{
					property: 'twitter:image',
					content: null,
				},
				{
					property: 'twitter:image:width',
					content: '578',
				},
				{
					property: 'twitter:image:height',
					content: '325',
				},
			]}
		/>
	);
};
