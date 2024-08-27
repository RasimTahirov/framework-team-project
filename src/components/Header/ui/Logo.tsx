import styles from '../Index.module.scss';

import logo from '../../../assets/image/logo/logo.svg';

const Logo = () => {
	return (
		<div>
			<img className={styles.logo} src={logo} alt="logo" />
		</div>
	);
};

export default Logo;
