import styles from '../Index.module.scss';

import classNames from 'classnames';

type TitleAndDateProps = {
	name: string;
	created: string
}

const TitleAndDate: React.FC<TitleAndDateProps> = ({ name, created }) => {
	return (
		<div className={classNames(styles.paintingInfo, styles.titleAndDates)}>
			<p className={styles.title}>{name}</p>
			<p className={styles.date}>{created}</p>
		</div>
	);
};

export default TitleAndDate;
