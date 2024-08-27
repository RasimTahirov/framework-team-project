import styles from '../Index.module.scss';

import themeButtonDark from '../../../assets/image/icon/themeButton/themeButtonDark.svg';

const ToggleTheme = () => {
	return (
		<div className={styles.containerButton}>
			<img
				className={styles.themeButtonDark}
				src={themeButtonDark}
				alt="themeButtonDark"
			/>
		</div>
	);
};

export default ToggleTheme;
