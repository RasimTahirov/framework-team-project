import { useState } from 'react';

import { TPainting } from './types/types';

import { Gallery } from './Gallery/Gallery';
import { Pagination } from '../Pagination/Pagination';

export const Content = () => {
	const [paintings, setPaintings] = useState<TPainting[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const countPaintings = 6;

	const lastPageIndex = currentPage * countPaintings;
	const firstPageIndex = lastPageIndex - countPaintings;
	const currentPages = paintings.slice(firstPageIndex, lastPageIndex);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	const next = () => setCurrentPage((prev) => prev + 1);
	const prev = () => setCurrentPage((prev) => prev - 1);

	return (
		<div>
			<Gallery paintings={currentPages} setPaintings={setPaintings} />
			<Pagination
				totalPaintings={paintings.length}
				countPaintings={countPaintings}
				currentPage={currentPage}
				paginate={paginate}
				next={next}
				prev={prev}
			/>
		</div>
	);
};
