import styles from './Index.module.scss';

import { useState } from 'react';

import search from '../../../assets/image/icon/search/search.svg';

type SearchProps = {
	onSearch: (searchValue: string) => void;
};

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
	const [value, setValue] = useState('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
