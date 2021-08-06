import React from 'react';
import Wrap from 'components/wrap';
import { Header1, Header4, Description1 } from 'components/typography';
import typeToString from 'helpers/type';

import useStyles from './use-styles';

export function Specification({ title, heading, description, details }) {
	const styles = useStyles();

	return (
		<Wrap>
			<div className={styles.specification}>
				<Header1 title={heading} className={styles.customHead} />
				<div className={styles.infoWrap}>
					<Description1 title={description} className={styles.topDescription} />
					<div className={styles.workInfoWrap}>
						<Header4 title={title} className={styles.customHeading} />
						{details &&
							details.map((item) => {
								return (
									<div key={item._id} className={styles.workDescription}>
										<span className={styles.workHeading}>
											{item.position}:{' '}
										</span>
										{item.position && !item.clients.length ? (
											<span className={styles.workText}>TGA</span>
										) : (
											<span className={styles.workText}>
												{item.clients.map((client) => client.name).join(', ')}
											</span>
										)}
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</Wrap>
	);
}

export const SpecificationProject = (props) => {
	const styles = useStyles();

	const typeToStr = typeToString(props.type);
	let technologiesToString, teamToString;
	if (props.technologies) {
		technologiesToString = props.technologies
			.map((item) => item.name)
			.join(', ');
	}
	if (props.team) {
		teamToString = props.team.map((item) => item.shortName).join(', ');
	}

	return (
		<Wrap>
			<div className={styles.specification}>
				<Header1 title={props.title} className={styles.customHead} />
				<div className={styles.infoWrap}>
					<Description1
						title={props.description}
						className={styles.topDescription}
					/>
					<div className={styles.workInfoWrap}>
						<div className={styles.workDescription}>
							<span className={styles.workHeading}>Sector: </span>
							{props.sector && (
								<span className={styles.workText}>{props.sector.name}</span>
							)}
						</div>
						<div className={styles.workDescription}>
							<span className={styles.workHeading}>Type: </span>
							<span className={styles.workText}>{typeToStr}</span>
						</div>
						<div className={styles.workDescription}>
							<span className={styles.workHeading}>Tech stack: </span>
							{props.technologies && (
								<span className={styles.workText}>{technologiesToString}</span>
							)}
						</div>
						<div className={styles.workDescription}>
							<span className={styles.workHeading}>Team: </span>
							{props.team && (
								<span className={styles.workText}>{teamToString}</span>
							)}
						</div>
					</div>
				</div>
			</div>
		</Wrap>
	);
};
