import React from 'react';
import { useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import { mobileSize } from 'helpers/breakpoints';
import Button from 'components/button';

import useStyles from './use-styles';

export default function Form() {
	const styles = useStyles();
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};

	const isMobile = useMediaQuery(mobileSize);

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.row}>
				<div className={styles.column}>
					<div className={styles.inputWrap}>
						<input
							className={styles.input}
							type='text'
							placeholder='Name'
							name='firstname'
							ref={register}
						/>
						<div className={styles.separator} />
					</div>
					<div className={styles.inputWrap}>
						<input
							className={styles.input}
							type='email'
							name='email'
							placeholder='Email'
						/>
						<div className={styles.separator} />
					</div>
					{!isMobile && (
						<Button className={styles.buttonOffset} title='Send message' dark />
					)}
				</div>
				<div className={styles.column}>
					<div className={styles.inputWrap}>
						<textarea
							className={styles.input}
							name='message'
							placeholder='Message'></textarea>
						<div className={styles.separator} />
					</div>
					<div className={styles.uploadFile}>
						<input type='file' className={styles.uploadFileInput} />
						<button type='submit' className={styles.uploadFileField}>
							<svg
								width='23'
								height='12'
								viewBox='0 0 23 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M16.2539 10H5.67393C3.58393 10 1.72393 8.47 1.52393 6.39C1.29393 4.01 3.16393 2 5.50393 2H17.8639C19.1739 2 20.3639 2.94 20.4939 4.24C20.6439 5.74 19.4739 7 18.0039 7H7.50393C6.95393 7 6.50393 6.55 6.50393 6C6.50393 5.45 6.95393 5 7.50393 5H16.2539C16.6639 5 17.0039 4.66 17.0039 4.25C17.0039 3.84 16.6639 3.5 16.2539 3.5H7.64393C6.33393 3.5 5.14393 4.44 5.01393 5.74C4.86393 7.24 6.03393 8.5 7.50393 8.5H17.8339C19.9239 8.5 21.7839 6.97 21.9839 4.89C22.2139 2.5 20.3439 0.5 18.0039 0.5H5.73393C2.86393 0.5 0.293929 2.6 0.0239288 5.46C-0.276071 8.75 2.28393 11.5 5.50393 11.5H16.2539C16.6639 11.5 17.0039 11.16 17.0039 10.75C17.0039 10.34 16.6639 10 16.2539 10Z'
									fill='black'
								/>
							</svg>
							Upload file
						</button>
						<p className={styles.excerpt}>
							(File requirements: pdf, doc, docx, rtf, ppt, pptx)
						</p>
					</div>
				</div>

				{isMobile && (
					<Button className={styles.mobileButton} title='Send message' dark />
				)}
			</div>
		</form>
	);
}
