import styles from '../Index.module.scss';

import classNames from 'classnames';
import { useEffect, useState } from 'react';

import { getPaintings } from '@/api/api';
import { fullImg } from '@/utils/utils';

const Paintings = () => {
	const [paintings, setPaintings] = useState([]);

	useEffect(() => {
		const loadPaintings = async () => {
			const data = await getPaintings();
			setPaintings(data);
		};

		loadPaintings();
	}, []);

	return (
		<div className={styles.container}>
			{paintings.map(
				({ authorId, created, id, imageUrl, locationId, name }) => (
					<div className={styles.card} key={id}>
						<img className={styles.img} src={fullImg(imageUrl)} alt={name} loading='lazy'/>
						<div className={styles.info}>
							<div
								className={classNames(
									styles.paintingInfo,
									styles.titleAndDates
								)}
							>
								<p className={styles.title}>{name}</p>
								<p className={styles.date}>{created}</p>
							</div>
							<div
								className={classNames(
									styles.paintingInfo,
									styles.AuthorAndMuseum
								)}
							>
								<p className={styles.title}>Автор</p>
								<p className={styles.date}>Музей</p>
							</div>
							<div className={styles.decorativeLine} />
						</div>
					</div>
				)
			)}
		</div>
	);
};

export default Paintings;
