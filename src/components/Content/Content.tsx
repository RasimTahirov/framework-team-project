import { useState } from 'react';
import { Gallery } from './Gallery/Gallery';
import { TPainting } from './types/types';
import { Pagination } from '../Pagination/Pagination';

export const Content = () => {
	const [paintings, setPaintings] = useState<TPainting[]>([]);

	const [currentPage, setCurrentPage] = useState(1);
	const [countPaintings] = useState(6);

	const lastPageIndex = currentPage * countPaintings;
	const fistPageIndex = lastPageIndex - countPaintings;
	const currentPages = paintings.slice(fistPageIndex, lastPageIndex);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div>
			<Gallery paintings={currentPages} setPaintings={setPaintings} />
			<Pagination
				paginate={paginate}
				totalPaintings={paintings.length}
				countPaintings={countPaintings}
			/>
		</div>
	);
};
