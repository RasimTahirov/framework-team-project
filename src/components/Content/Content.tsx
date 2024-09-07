import { useEffect, useState } from 'react';

import { TPainting } from './types/types';

import { Gallery } from './Gallery/Gallery';
import { Pagination } from './Pagination/Pagination';
import { Search } from './Search/Search';

export const Content = () => {
	const [paintings, setPaintings] = useState<TPainting[]>([]);
	const [filtredPaintings, setFiltredPaintings] = useState<TPainting[]>([]);

	const [currentPage, setCurrentPage] = useState<number>(1);
	const countPaintings: number = 6;

	const lastPageIndex = currentPage * countPaintings;
	const firstPageIndex = lastPageIndex - countPaintings;
	const currentPages = filtredPaintings.slice(firstPageIndex, lastPageIndex);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	const next = () => setCurrentPage((prev) => prev + 1);
	const prev = () => setCurrentPage((prev) => prev - 1);

	const handleSearch = (searchValue: string) => {
		const filtered = paintings.filter((paint) =>
			paint.name.toLowerCase().includes(searchValue.toLowerCase())
		);
		setFiltredPaintings(filtered);
	};

	useEffect(() => {
		setFiltredPaintings(paintings);
	}, [paintings]);

	return (
		<div>
			<Search onSearch={handleSearch} />
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
