import styles from './Index.module.scss';

import { Content, Header } from '../index';

const Main = () => {
	return (
		<div className={styles.container}>
			<Header />
			<Content />
		</div>
	);
};

export default Main;
