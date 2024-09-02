import styles from '../Index.module.scss';

import { useEffect, useState } from 'react';

import { getAuthors, getLocations, getPaintings } from '@/api/api';

import AuthorAndMuseum from './components/AuthorAndMuseum';
import TitleAndDate from './components/TitleAndDates';
import Painting from './components/Painting';
// import { TPainting } from './types/types';
// import Pagination from '../Pagination/Pagination';

export const Gallery = ({ paintings, setPaintings }) => {
	// const [paintings, setPaintings] = useState<TPainting[]>([]);
	const [authors, setAuthors] = useState<Record<number, string>>([]);
	const [locations, setLocations] = useState<Record<number, string>>([]);

	// const [currentPage, setCurrentPage] = useState(1)
	// const [countPaintings] = useState(6)

	// const lastPageIndex = currentPage * countPaintings 
	// const firstPageIndex = lastPageIndex - countPaintings
	// const currentPages = paintings.slice(firstPageIndex, lastPageIndex)

	useEffect(() => {
		const loadPaintings = async () => {
			const [paintingsData, authorsData, locationsData] = await Promise.all([
				getPaintings(),
				getAuthors(),
				getLocations(),
			]);

			const authorsMap = authorsData.reduce<Record<number, string>>(
				(acc, author) => {
					acc[author.id] = author.name;
					return acc;
				},
				{}
			);

			const locationsMap = locationsData.reduce<Record<number, string>>(
				(acc, location) => {
					acc[location.id] = location.location;
					return acc;
				},
				{}
			);

			setAuthors(authorsMap);
			setPaintings(paintingsData);
			setLocations(locationsMap);
		};

		loadPaintings();
	}, []);

	return (
		<div className={styles.container}>
			{paintings.map(
				({ id, authorId, created, imageUrl, locationId, name }) => (
					<div className={styles.card} key={id} >
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
