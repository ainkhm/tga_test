import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './use-styles';
import typeToString from 'helpers/type';
import { baseURL } from 'api';

export default function Project(props) {
	const styles = useStyles();

	const typeToStr = typeToString(props.type);
	const stackToString =
		props.stack && props.stack.map(({ name }) => name).join(', ');
	const teamToString =
		props.team && props.team.map(({ shortName }) => shortName).join(', ');

	return (
		<div
			className={styles.project}
			tabIndex='0'
			style={{
				backgroundImage:
					props.img &&
					`linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .1)), url(${baseURL}/image/${props.img})`,
			}}>
			{props.stack ? (
				<Link to={`/projects/${props.path}`}>
					<div className={styles.projectInfo}>
						<div className={styles.projectTop}>
							<div className={styles.projectTitle}>{props.title}</div>
							<img
								src={`${baseURL}/image/${props.logo}`}
								className={styles.projectLogo}
							/>
						</div>
						<div className={styles.projectDescription}>{props.description}</div>

						<div className={styles.projectMiddle}>
							<img src={require(`assets/icons/arrow-right.svg`)} />
						</div>
						<div className={styles.projectBottom}>
							<p className={styles.text}>
								<span className={styles.header}>Client:&nbsp;</span>
								{props.client}
							</p>
							<p className={styles.text}>
								<span className={styles.header}>Sector:&nbsp;</span>
								{props.sector}
							</p>
							<p className={styles.text}>
								<span className={styles.header}>Type:&nbsp;</span>
								{typeToStr}
							</p>
							<p className={styles.text}>
								<span className={styles.header}>Tech stack:&nbsp;</span>
								{stackToString}
							</p>
							<p className={styles.text}>
								<span className={styles.header}>Team:&nbsp;</span>
								{teamToString}
							</p>
						</div>
					</div>
				</Link>
			) : (
				<div className={styles.projectInfo}>
					<div className={styles.clientTop}>
						<div className={styles.clientTitle}>{props.title}</div>
						<img
							src={`${baseURL}/image/${props.logo}`}
							className={styles.clientLogo}
						/>
					</div>
					<div className={styles.clientInfo}>
						<div className={styles.clientDescription}>{props.description}</div>
					</div>
				</div>
			)}
		</div>
	);
}
