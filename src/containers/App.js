import styles from "./App.module.scss";
import Step from "../components/Step";
import contractIcon from "../assets/contract.svg";
import Contracts from "../components/Contracts";

function App() {
	return (
		<div className={styles.App}>
			<main>
				<div className={styles.package_steps}>
					<Step title="تفاصيل الباقة" done={true} />
					<Step title="خدمات الباقة" done={true} />
					<Step title="عقد الباقة" icon={contractIcon} last />
				</div>
				<div className={styles.package_contracts}>
					<div className={styles.info}>
						<div>
							<h1 className={styles.info_title}>عقد الباقة</h1>
							<h2 className={styles.info_subtitle}>
								من فضلك فعل ورتب عقود الباقة
							</h2>
						</div>
						<button className={styles.add}>
							<span>+</span>
							<span>إضافة بند جديد</span>
						</button>
					</div>
					<div className={styles.contracts}>
						<Contracts />
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
