import styles from '../Index.module.scss';

import { fullImg } from '@/utils/utils';

const Painting = ({ imageUrl, name }) => {
	return (
		<img
			className={styles.img}
			src={fullImg(imageUrl)}
			alt={name}
			loading="lazy"
		/>
	);
};

export default Painting;
