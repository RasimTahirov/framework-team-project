import styles from './Index.module.scss';

import { Header, Search } from '../index';

const Main = () => {
	return (
		<div className={styles.container}>
			<Header />
			<Search />
		</div>
	);
};

export default Main;
