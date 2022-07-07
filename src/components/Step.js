import React from "react";
import styles from "../styles/step.module.scss";
import { ReactComponent as DoneIcon } from "../assets/done.svg";
const Step = ({ icon, done, last, title }) => {
	return (
		<>
			<div className={`${styles.step}`}>
				<div className={`${styles.icon} ${done && styles.done}`}>
					{done ? <DoneIcon /> : <img src={icon} />}
				</div>
				<span>{title}</span>
			</div>
			{!last ? <div className={styles.divider}></div> : null}
		</>
	);
};

export default Step;
