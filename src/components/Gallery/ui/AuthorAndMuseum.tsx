import styles from '../Index.module.scss';

import classNames from 'classnames';

const AuthorAndMuseum = ({ authorId, authors, locations, locationId }) => {
	return (
		<div className={classNames(styles.paintingInfo, styles.authorAndMuseum)}>
			<p className={styles.title}>{authors[authorId]}</p>
			<p className={styles.date}>{locations[locationId]}</p>
		</div>
	);
};

export default AuthorAndMuseum;
