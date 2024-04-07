import styles from './button.module.css';
import add from '../../assets/add.svg';
import remove from '../../assets/delete.svg';
import edit from '../../assets/edit.svg';
import sort from '../../assets/sort.svg';

const IMG = {
	add,
	remove,
	edit,
	sort,
};

export const Button = ({ onClick, type }) => {
	return (
		<button className={`${styles.button} ${styles[type]}`} onClick={onClick}>
			<img src={IMG[type]} alt={type} />
		</button>
	);
};
