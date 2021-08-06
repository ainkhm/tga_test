import React from 'react';
import { useSelector } from 'react-redux';
import Wrap from 'components/wrap';
import BlogRow from './row';
import { baseURL } from 'api';
import useStyles from './use-styles';

function Blog() {
	const styles = useStyles();
	const { project } = useSelector((state) => state.Project);

	const { imageKeys } = project;

	const firstImg = `${baseURL}/image/${imageKeys && imageKeys.main}`;
	const secondImg = `${baseURL}/image/${imageKeys && imageKeys.second}`;

	const imgArr = [firstImg, secondImg];

	return (
		<div className={styles.blogWrap}>
			<Wrap>
				{project.texts &&
					project.texts.map((item, index) => {
						return (
							<BlogRow
								title={item}
								image={imgArr[index]}
								key={`blog-row-${index}`}
							/>
						);
					})}
			</Wrap>
		</div>
	);
}

export default Blog;
