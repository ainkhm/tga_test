import React, { useState, useEffect, useRef } from 'react';
import useStyles from './use-styles';
import { useMediaQuery } from 'react-responsive';
import { mobileSize } from 'helpers/breakpoints';
import { Description1 } from 'components/typography';
import { selectAll } from 'css-select';

export default function Filters({ title, data }) {
	const ref = useRef(null);
	const styles = useStyles();

	const [checked, setChecked] = useState([]);
	const [showAll, setShowAll] = useState(false);
	const [width, setWidth] = useState(null);

	const isMobile = useMediaQuery(mobileSize);

	const setFilter = (e) => {
		const { index } = e.currentTarget.dataset;
		const clikedItem = Number(index);

		if (showAll) {
			setShowAll(false);
		}
		const filtersToggling = checked.includes(clikedItem)
			? checked.filter((i) => i != clikedItem) // remove item
			: [...checked, Number(index)]; // add item

		setChecked(filtersToggling);
	};

	const all = () => {
		setChecked([]);
		setShowAll(!showAll);
	};

	const computedRowWidth = Boolean(Object.keys(data).length > 4);

	useEffect(() => {
		const blockWidth = ref.current ? ref.current.offsetWidth : 0;
		const computed = blockWidth / 2 + 30;
		setWidth(computed);
	}, []);

	return (
		<div className={styles.filters}>
			<Description1 className={styles.textBolder} title={title} />
			<ul
				className={styles.filtersList}
				style={
					isMobile
						? { width: '100%' }
						: { width: computedRowWidth ? width : 'auto' }
				}
				ref={ref}>
				<li>
					<input
						id='all'
						className={styles.filterItem}
						type='checkbox'
						checked={showAll}
					/>
					<label htmlFor='all' onClick={all}>
						All
					</label>
				</li>
				{data.map((filter, index) => {
					return (
						<Filter
							key={filter}
							item={filter}
							all={showAll}
							index={index}
							status={checked.includes(index)}
							onClick={setFilter}
						/>
					);
				})}
			</ul>
		</div>
	);
}

function Filter({ index, item, status, onClick }) {
	const styles = useStyles();

	return (
		<li key={`filter-${index}`}>
			<input
				id={index}
				className={styles.filterItem}
				type='checkbox'
				checked={status}
			/>
			<label htmlFor={index} onClick={onClick} data-index={index}>
				{item}
			</label>
		</li>
	);
}
