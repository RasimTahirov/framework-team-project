import styles from './Index.module.scss';

import { Content, Header, Search } from '../index';

const Main = () => {
	return (
		<div className={styles.container}>
			<Header />
			<Search />
			<Content />
		</div>
	);
};

export default Main;
