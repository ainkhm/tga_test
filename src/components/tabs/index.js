import React, { Fragment, useState } from 'react';
import useStyles from './use-styles';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';
import { mobileSize } from 'helpers/breakpoints';
import { CustomLink } from 'components/link';

export default function Tabs(props) {
	const styles = useStyles();
	const [active, setActive] = useState(0);
	const data = props.data;

	const isMobile = useMediaQuery(mobileSize);

	return (
		<div className={styles.tabsWrap}>
			<div className={styles.tabsControl}>
				{data.map((item, index) => (
					<TabItem
						key={item.id}
						index={index}
						title={item.title}
						onItemClicked={() => setActive(index)}
						isActive={active === index}
						{...props}
					/>
				))}
			</div>

			{!isMobile && (
				<div className={styles.tabsView}>
					{data.map((item, index) => {
						if (active === index) {
							return (
								<div
									key={item.id}
									className={clsx(styles.tabsViewItem, 'active')}>
									{props.solutions ? (
										<div className='viewRow'>
											<div className={styles.paragraph}>{item.description}</div>
										</div>
									) : (
										item.tech.map((elem, index) => {
											return (
												<div className='viewRow' key={`tabs-${index}`}>
													<span>
														<CustomLink title={item.link} url='/#' />
														<img
															className={styles.icon}
															src={require(`assets/icons/arrow-right.svg`)}
														/>
													</span>
													<p>{elem}</p>
												</div>
											);
										})
									)}
								</div>
							);
						}
					})}
				</div>
			)}
		</div>
	);
}

const TabItem = ({
	index = 0,
	title = '',
	onItemClicked = () => console.error('no action'),
	isActive = false,
	solutions = false,
	data,
}) => {
	const styles = useStyles();
	const iconName = solutions ? 'solutions' : 'tech';
	const isMobile = useMediaQuery(mobileSize);
	return (
		<Fragment>
			<div
				className={clsx(styles.tabsControlItem, isActive && 'active')}
				onClick={onItemClicked}>
				<img src={require(`assets/icons/${iconName}-icon-${index}.svg`)} />
				{title}
				<div className={styles.chevron}>
					<img src={require('assets/icons/chevron.svg')} />
				</div>
			</div>
			{isActive && isMobile && (
				<div className={styles.dropDownMobile}>
					{data.map((item, itemIndex) => {
						if (index === itemIndex) {
							return (
								<div className={clsx(styles.tabsViewItem, 'active')}>
									{solutions ? (
										<div className='viewRow'>
											<div className={styles.paragraph}>{item.description}</div>
										</div>
									) : (
										item.tech.map((elem) => {
											return (
												<div className='viewRow'>
													<span>
														<CustomLink title={item.link} url='/#' />
														<img
															className={styles.icon}
															src={require(`assets/icons/arrow-right.svg`)}
														/>
													</span>
													<p>{elem}</p>
												</div>
											);
										})
									)}
								</div>
							);
						}
					})}
				</div>
			)}
		</Fragment>
	);
};
