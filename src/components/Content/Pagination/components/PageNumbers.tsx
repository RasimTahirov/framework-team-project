import classNames from 'classnames';
import styles from '../Index.module.scss';

const PageNumbers = ({ pageNumber, paginate, currentPage }) => {
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
