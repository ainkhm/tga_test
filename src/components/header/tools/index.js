import React, { useState, useEffect } from 'react';
import Drawer from '../drawer';
import { menu } from '../menu';
import useStyles from './use-styles';

export default function Tools() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const styles = useStyles();

	const toggleDrawer = (e) => {
		e.preventDefault();
		setIsDrawerOpen(true);
	};
	const rootTag = document.body.parentNode;

	useEffect(() => {
		isDrawerOpen
			? (rootTag.style.overflow = 'hidden')
			: (rootTag.style.overflow = 'unset');
	}, [isDrawerOpen]);

	return (
		<div>
			<a onClick={toggleDrawer} href='/'>
				<img src={require('./hamburger.svg')} />
			</a>

			<Drawer
				onDrawerClose={() => setIsDrawerOpen(false)}
				isOpen={isDrawerOpen}
				menu={menu}
			/>
		</div>
	);
}
