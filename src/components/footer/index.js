import React from 'react';
import Wrap from 'components/wrap';
import useStyles from './use-styles';

export default function Footer() {
	const styles = useStyles();

	return (
		<footer className={styles.footer}>
			<Wrap>
				<div className={styles.footerContent}>
					<div className={styles.footerInfo}>
						<div className={styles.footerHead}>Company</div>
						<div className={styles.footerText}>
							TGA Digital LTD
							<br />
							10671403
						</div>
					</div>

					<div className={styles.footerInfo}>
						<div className={styles.footerHead}>Address</div>
						<div className={styles.footerText}>
							15 Pheasant Walk <br /> Gerrards Cross, Bucks, SL9 0PW <br />{' '}
							United Kingdom
						</div>
					</div>

					<div className={styles.footerInfo}>
						<div className={styles.footerHead}>Email</div>
						<div className={styles.footerText}>contact@tgadigital.com</div>
					</div>

					<div className={styles.footerInfo}>
						<div className={styles.footerHead}>VAT</div>
						<div className={styles.footerText}>265263204</div>
					</div>

					<div className={styles.footerSocials}>
						<a href='https://www.facebook.com/TGADigitalIT' target='_blank'>
							<img src={require('assets/icons/facebook-icon.svg')} />
						</a>
						<a
							href='https://www.linkedin.com/company/tga-digital-ltd/'
							target='_blank'>
							<img src={require('assets/icons/linkedin-icon.svg')} />
						</a>
					</div>
				</div>
			</Wrap>
		</footer>
	);
}
