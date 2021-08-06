import React from 'react';
import { useSelector } from 'react-redux';
import { CustomHashLink } from 'components/link';
import Wrap from 'components/wrap';
import { CrewCard } from 'components/cards';
import Form from 'components/form';
import { Header2 } from 'components/typography';
import calcBgNo from 'helpers/calcBgNo';
import useStyles from './use-styles';

function Team() {
	const styles = useStyles();

	const { team } = useSelector((state) => state.TeamAll);

	const main = ['paul_chudleigh', 'michael_sastry'];
	const bosses = team.filter((item) => main.includes(item.slug));
	const employees = team.filter((item) => !main.includes(item.slug));

	return (
		<section className={styles.teamPage}>
			<Wrap>
				<div className={styles.topWrap}>
					<Header2 className={styles.topHeader} title='Our team' />
					<CustomHashLink
						url={'/join#positions'}
						className={styles.customLink}
						title='Join Us'
					/>
				</div>

				<div className={styles.topRow}>
					{bosses &&
						bosses.map((item, index) => (
							<CrewCard
								key={item._id}
								name={item.name}
								bio={item.roles}
								headRole={item.headRole}
								photos={[item.imageKeys.professional, item.imageKeys.smiley]}
								url={item.slug}
								bgNo={calcBgNo(index, 2)}
							/>
						))}
				</div>
				<div className={styles.teamWrap}>
					{employees &&
						employees.map((item, index) => {
							return (
								<CrewCard
									key={item._id}
									name={item.name}
									bio={item.roles}
									headRole={item.headRole}
									workedOn={item.workedOn}
									photos={[item.imageKeys.professional, item.imageKeys.smiley]}
									url={item.slug}
									bgNo={calcBgNo(index, 6)}
								/>
							);
						})}
				</div>
			</Wrap>
			<ContactForm />
		</section>
	);
}

function ContactForm() {
	const styles = useStyles();
	return (
		<div id='contact' className={styles.contacts}>
			<Wrap>
				<Header2 title='Get in touch' />
				<Form />
			</Wrap>
		</div>
	);
}

export default Team;
