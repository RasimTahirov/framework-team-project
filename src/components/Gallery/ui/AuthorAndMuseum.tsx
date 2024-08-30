import styles from '../Index.module.scss';

import classNames from 'classnames';

type AuthorAndMuseumProps = {
	authorId: number;
	authors: Record<number, string>;
	locations: Record<number, string>;
	locationId: number;
};

const AuthorAndMuseum: React.FC<AuthorAndMuseumProps> = ({
	authorId,
	authors,
	locations,
	locationId,
}) => {
	return (
		<div className={classNames(styles.paintingInfo, styles.authorAndMuseum)}>
			<p className={styles.title}>{authors[authorId]}</p>
			<p className={styles.date}>{locations[locationId]}</p>
		</div>
	);
};

export default AuthorAndMuseum;
