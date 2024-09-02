import styles from '../Index.module.scss';

import { fullImg } from '@/utils/utils';

type PaintingProps = {
	imageUrl: string;
	name: string;
};

const Painting: React.FC<PaintingProps> = ({ imageUrl, name }) => {
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
