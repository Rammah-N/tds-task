import { useState, useRef } from "react";
import styles from "../styles/contract.module.scss";
import { ReactComponent as MoreIcon } from "../assets/more.svg";
import { useDrag, useDrop } from "react-dnd";

const Contract = ({ item, index, moveListItem }) => {
	const [checked, setChecked] = useState(false);
	const [more, setMore] = useState(false);

	// Adding the drag functionality of the Contract component
	const [{ isDragging }, dragRef] = useDrag({
		type: "contract",
		item: { index },
		collect: (monitor) => ({ isDragging: monitor.isDragging() }),
	});

	// Adding the drop functionality of the component
	const [spec, dropRef] = useDrop({
		accept: "contract",
		hover: (item, monitor) => {
			const dragIndex = item.index;
			const hoverIndex = index;
			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

			if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;

			if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

			moveListItem(dragIndex, hoverIndex);
			item.index = hoverIndex;
		},
	});

	const ref = useRef(null);
	const dragDropRef = dragRef(dropRef(ref));
	const opacity = isDragging ? 0 : 1;
	return (
		<div className={styles.container} ref={dragDropRef} style={{ opacity }}>
			<div className={styles.contract}>
				<button
					disabled={!checked}
					className={`${styles.contract_more} ${
						checked && styles.contract_more_checked
					}`}
					onClick={() => {
						setMore(!more);
					}}>
					<MoreIcon />
				</button>
				<ul
					className={`${styles.contract_content} ${
						checked && styles.contract_content_checked
					}
          ${more && styles.contract_content_toggled}`}>
					{item.content.map((item, i) => (
						<li key={`${item} ${i}`}>{item}</li>
					))}
				</ul>
				<div className={`${styles.toggle} ${checked && styles.toggle_checked}`}>
					<label className={styles.switch}>
						<input type="checkbox" onClick={() => setChecked(!checked)} />
						<span className={`${styles.slider} ${styles.round}`}></span>
					</label>
				</div>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Contract;
