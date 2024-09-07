import styles from '../Index.module.scss';

import classNames from 'classnames';

type PageNumbersProps = {
	pageNumber: number[];
	paginate: (number: number) => void;
	currentPage: number;
};

const PageNumbers: React.FC<PageNumbersProps> = ({
	pageNumber,
	paginate,
	currentPage,
}) => {
	return (
		<>
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
		</>
	);
};

export default PageNumbers;
