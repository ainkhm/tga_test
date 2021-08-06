import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import useStyles from './use-styles';
import { Description3, Header4 } from 'components/typography';
import { CustomLink } from 'components/link';
import { baseURL } from 'api';

export function CrewCard({ name, bio, headRole, workedOn, photos, url, bgNo }) {
	const styles = useStyles();
	const [isHover, setHover] = useState(false);
	const [activeCard, setActiveCard] = useState(false);
	const cardToggle = () => {
		setActiveCard(!activeCard);
	};

	const ref = useRef(null);
	const myRef = ref.current;
	if (myRef && myRef.clientHeight > 200) {
		myRef.style.marginBottom = '0';
	}

	const firstPhoto = `${baseURL}/image/${photos && photos[0]}`;
	const secondPhoto = `${baseURL}/image/${photos && photos[1]}`;

	return (
		<div className={styles.crewCard}>
			<div
				className={clsx(styles.cardPhoto, activeCard && styles.cardActive)}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				style={
					bgNo && {
						backgroundImage: `url(${firstPhoto}), url(${require(`../../assets/images/bg${bgNo}.jpg`)})`,
					}
				}
				onClick={cardToggle}>
				<div
					style={
						bgNo && {
							backgroundImage: `url(${secondPhoto}), url(${require(`../../assets/images/bg${bgNo}.jpg`)})`,
						}
					}
					className={styles.hoverPhoto}
				/>

				<div className={styles.cardInfo}>
					<div ref={ref} className={styles.hoverDescription}>
						{bio}
					</div>
					{workedOn &&
						workedOn.map((item) => (
							<p key={item._id} className={styles.textRow}>
								{item.position && (
									<span className={styles.textRowHeader}>
										{item.position}:&nbsp;
									</span>
								)}
								{item.position && !item.clients.length ? (
									<span className={styles.textRowDesctiption}>
										<a href='#'>TGA</a>
									</span>
								) : (
									<span className={styles.textRowDesctiption}>
										{item.clients.map((item) => (
											<a key={item._id} href='#'>
												{item.name}
											</a>
										))}
									</span>
								)}
							</p>
						))}
					<div className={styles.bottom}>
						<CustomLink title={'Explore more'} url={`/team/${url}`} white />
					</div>
				</div>
			</div>

			<div className={styles.cardName}>
				<CustomLink title={name} url={`/team/${url}`} />
			</div>
			<Description3 title={headRole} className={styles.customDescription} />
		</div>
	);
}

export function ProjectCard({ image, icon, description }) {
	const styles = useStyles();
	const imgPath = `${baseURL}/image/${image}`;
	const iconPath = `${baseURL}/image/${icon}`;

	return (
		<div className={styles.projectCard}>
			<div
				className={clsx(styles.cardPhoto, styles.projectPhoto)}
				style={{
					backgroundImage: `url(${imgPath})`,
				}}></div>

			<div className={styles.cardName}>
				<Header4 title={description} className={styles.customDescription} />
			</div>
			<div
				className={styles.cardLogo}
				style={{
					backgroundImage: `url(${iconPath})`,
				}}></div>
		</div>
	);
}

export function InfoCard({ title, requirements, link }) {
	const styles = useStyles();

	return (
		<div className={styles.infoCard}>
			<Header4 title={title} />
			<ul className={styles.requirements}>
				{requirements.map((item, index) => {
					return (
						<li key={`info-card-${index}`}>
							<span>{item}</span>
						</li>
					);
				})}
			</ul>
			<a href={link} className={styles.externalLink} target='_blank'>
				Learn more
			</a>
		</div>
	);
}
