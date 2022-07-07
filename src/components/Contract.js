import { useState } from "react";
import styles from "../styles/contract.module.scss";
import { ReactComponent as MoreIcon } from "../assets/more.svg";
const Contract = ({ content }) => {
	const [checked, setChecked] = useState(false);
	const [more, setMore] = useState(false);

	const toggleContent = () => {
		console.log("hello");
	};
	return (
		<div className={styles.container}>
			<div className={styles.contract}>
				<button
					disabled={!checked}
					className={`${styles.contract_more} ${
						checked && styles.contract_more_checked
					}`}
					onClick={() => {
						setMore(!more);
						toggleContent();
					}}>
					<MoreIcon />
				</button>
				<ul
					className={`${styles.contract_content} ${
						checked && styles.contract_content_checked
					}
          ${more && styles.contract_content_toggled}`}>
					{content.map((item) => (
						<li>{item}</li>
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
