import styles from './Index.module.scss';

import classNames from 'classnames';

import nextButton from '../../assets/image/icon/nextButton/nextButton.svg';
import previousButton from '../../assets/image/icon/previousButton/previousButton.svg';

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
			<button
				className={classNames(styles.paginationButton, styles.arrow)}
				onClick={prev}
				disabled={currentPage === 1}
			>
				<img src={previousButton} alt="previous button" />
			</button>
			<ul className={styles.pagination}>
				{pageNumber.map((number, index) => (
					<li className={styles.paginationItem} key={index}>
						<button
							className={classNames(styles.paginationButton, {
								[styles.paintingsButtonActive]: number === currentPage,
							})}
							onClick={(e) => {
								e.preventDefault();
								paginate(number);
							}}
						>
							{number}
						</button>
					</li>
				))}
			</ul>
			<button
				className={classNames(styles.paginationButton, styles.arrow)}
				onClick={next}
				disabled={currentPage === totalPages}
			>
				<img src={nextButton} alt="next button" />
			</button>
		</div>
	);
};
