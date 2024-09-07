import styles from './Index.module.scss';

import search from '../../../assets/image/icon/search/search.svg';
import { useState } from 'react';

export const Search = ({ onSearch }) => {
	const [value, setValue] = useState('');

	const handleInputChange = (e) => {
		const searchValue = e.target.value;
		setValue(searchValue);
		onSearch(searchValue);
	};

	return (
		<div className={styles.search}>
			<div className={styles.searchContainer}>
				<img className={styles.searchImg} src={search} alt="" />
				<input
					className={styles.searchInput}
					type="text"
					placeholder="Painting title"
					value={value}
					onChange={handleInputChange}
				/>
			</div>
		</div>
	);
};
