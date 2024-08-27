import styles from './Index.module.scss';

import search from '../../assets/image/icon/search/search.svg';

export const Search = () => {
	return (
		<div className={styles.container}>
			<div className={styles.searchContainer}>
				<img className={styles.searchImg} src={search} alt="" />
				<input
					className={styles.search}
					type="text"
					placeholder="Painting title"
				/>
			</div>
		</div>
	);
};
