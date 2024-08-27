import styles from './Index.module.scss';

import Logo from './ui/Logo';
import ToggleTheme from './ui/ToggleTheme';

export const Header = () => {
	return (
		<header className={styles.container}>
			<Logo />
			<ToggleTheme />
		</header>
	);
};
