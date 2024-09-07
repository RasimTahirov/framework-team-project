import styles from '../Index.module.scss';
import classNames from 'classnames';

const PaginationButton = ({ onClick, imgSrc, disabled, altText }) => {
	return (
		<>
			<button
				className={classNames(styles.paginationButton, styles.arrow)}
				onClick={onClick}
				disabled={disabled}
			>
				<img src={imgSrc} alt={altText} />
			</button>
		</>
	);
};

export default PaginationButton;
