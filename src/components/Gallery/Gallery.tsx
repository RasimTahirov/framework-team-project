import styles from './Index.module.scss';

import { useEffect, useState } from 'react';

import { getAuthors, getLocations, getPaintings } from '@/api/api';

import AuthorAndMuseum from './ui/AuthorAndMuseum';
import TitleAndDate from './ui/TitleAndDates';
import Painting from './ui/Painting';

export const Gallery = () => {
	const [paintings, setPaintings] = useState([]);
	const [authors, setAuthors] = useState([]);
	const [locations, setLocations] = useState([]);

	useEffect(() => {
		const loadPaintings = async () => {
			const [paintingsData, authorsData, locationsData] = await Promise.all([
				getPaintings(),
				getAuthors(),
				getLocations(),
			]);

			const authorsMap = authorsData.reduce((acc, author) => {
				acc[author.id] = author.name;
				return acc;
			}, {});

			const locationsMap = locationsData.reduce((acc, location) => {
				acc[location.id] = location.location;
				return acc;
			}, {});

			setAuthors(authorsMap);
			setPaintings(paintingsData);
			setLocations(locationsMap);
		};

		loadPaintings();
	}, []);

	return (
		<div className={styles.container}>
			{paintings.map(
				({ authorId, created, id, imageUrl, locationId, name }) => (
					<div className={styles.card} key={id}>
						<Painting imageUrl={imageUrl} name={name} />
						<div className={styles.info}>
							<TitleAndDate name={name} created={created} />
							<AuthorAndMuseum
								authors={authors}
								authorId={authorId}
								locations={locations}
								locationId={locationId}
							/>
							<div className={styles.decorativeLine} />
						</div>
					</div>
				)
			)}
		</div>
	);
};
