import styles from './Index.module.scss';

import { Gallery, Header, Search } from '../index';

const Main = () => {
	return (
		<div className={styles.container}>
			<Header />
			<Search />
			<Gallery />
		</div>
	);
};

export default Main;
