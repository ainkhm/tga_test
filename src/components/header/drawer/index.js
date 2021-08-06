import React, { Fragment, useState } from 'react';
import clsx from 'clsx';
import { NavLink, Link } from 'react-router-dom';
import Button from 'components/button';
import useStyles from './use-styles';

export default function Drawer({ menu, isOpen, onDrawerClose }) {
	const [active, setACtive] = useState(null);
	const styles = useStyles();

	const contacts = [
		{
			label: 'Phone',
			text: '020 3633 4842',
			icon: 'facebook',
		},
		{
			label: 'Email',
			text: 'contact@tgadigital.com',
			icon: 'linkedin',
		},
	];

	if (!isOpen) {
		return null;
	}

	return (
		<Fragment>
			<div className={styles.drawerContainer}>
				<div onClick={onDrawerClose} className={styles.onClose}>
					<img src={require('./close.svg')} />
				</div>

				<div className={styles.drawer}>
					<ul className={styles.menu}>
						{menu.map((item) => (
							<li
								key={item.title}
								className={clsx(styles.menuItem, active === item && 'active')}
								onClick={onDrawerClose}
							>
								<CustomLink
									{...item}
									className={styles.menuItemLink}
									onClick={onDrawerClose}
								/>
							</li>
						))}
					</ul>
					<div className={styles.socials}>
						{contacts.map((item) => {
							return (
								<div className={styles.socialsRow}>
									<div className={styles.socialInfo}>
										<div className={styles.label}>{item.label}</div>
										<div className={styles.phone}>{item.text}</div>
									</div>
									<div className={styles.socialIcon}>
										<Link to='/'>
											<img
												src={require(`assets/icons/${item.icon}-icon.svg`)}
											/>
										</Link>
									</div>
								</div>
							);
						})}
					</div>
					<div className={styles.cta}>
						<Button title='Contact us' className={styles.contactButton} dark />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

function CustomLink(props) {
	if (props.route) {
		return (
			<NavLink
				to={props.route.getPath(props.routeParams || {})}
				className={props.className}
				exact={props.hasOwnProperty('exact') ? props.exact : props.route.exact}
				onClick={props.onClick}
			>
				{props.title}
			</NavLink>
		);
	} else {
		return (
			<a href={props.link} className={props.className} onClick={props.onClick}>
				{props.title}
			</a>
		);
	}
}
