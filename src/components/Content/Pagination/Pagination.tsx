import styles from './Index.module.scss';

import nextButton from '../../../assets/image/icon/nextButton/nextButton.svg';
import previousButton from '../../../assets/image/icon/previousButton/previousButton.svg';

import PaginationButton from './components/PaginationButton';
import PageNumbers from './components/PageNumbers';

type PaginationProps = {
	next: () => void;
	prev: () => void;
	paginate: (pageNumber: number) => void;
	totalPaintings: number;
	countPaintings: number;
	currentPage: number;
};

export const Pagination: React.FC<PaginationProps> = ({
	totalPaintings,
	countPaintings,
	currentPage,
	paginate,
	next,
	prev,
}) => {
	const pageNumber = [];
	const totalPages = Math.ceil(totalPaintings / countPaintings);

	for (let i = 1; i <= totalPages; i++) {
		pageNumber.push(i);
	}

	return (
		<div className={styles.container}>
			<PaginationButton
				imgSrc={previousButton}
				onClick={prev}
				disabled={currentPage === 1}
				altText="previous button"
			/>
			<PageNumbers
				pageNumber={pageNumber}
				currentPage={currentPage}
				paginate={paginate}
			/>
			<PaginationButton
				imgSrc={nextButton}
				onClick={next}
				disabled={currentPage === totalPages}
				altText="next button"
			/>
		</div>
	);
};
