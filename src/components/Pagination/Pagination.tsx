import styles from './Index.module.scss';

import test from '../../assets/image/icon/previous/next.svg';
import test2 from '../../assets/image/icon/previous/previous.svg';

export const Pagination = ({ paginate, totalPaintings, countPaintings }) => {
	const pageNumber = [];

	const totalPages = Math.ceil(totalPaintings / countPaintings);

	for (let i = 1; i <= totalPages; i++) {
		pageNumber.push(i);
	}

	return (
		<div className={styles.container}>
			<ul className={styles.pagination}>
				<a href="">
					<img src={test2} alt="" />
				</a>
				{pageNumber.map((number, index) => (
					<li className={styles.pageLink} key={index}>
						<a
							className={styles.test}
							href="!#"
							onClick={(e) => {
								e.preventDefault();
								paginate(number);
							}}
						>
							{number}
						</a>
					</li>
				))}
				<a href="">
					<img src={test} alt="" />
				</a>
			</ul>
		</div>
	);
};
