import styles from "./App.module.scss";
import Step from "../components/Step";
import contractIcon from "../assets/contract.svg";
import Contract from "../components/Contract";
function App() {
	const data = [
		[
			"قيام الطرف الأول بتقديم خدمات ضريبة القيمة المضافة للطرف الثاني وتقديمها عن طريق الموقع الإلكتروني لمنصة إقرار المربوط بتقديم الخدمة",
			" المضافة للطرف الثاني وتقديمها عن طريق الموقع الإلكتروني لمنصة إقرار",
			" المضافة للطرف الثاني وتقديمها عن طريق الموقع الإلكتروني لمنصة إقرار",
		],
		[
			"تحديد أسعار الخدمات في حالة الإشتراك في الباقات حسب ما يلي:",
			" أسعار الخدمات التي يقدمها الطرف الأول للطرف التاني حسب الباقة التي يحددها الطرف الثاني عند التعاقد",
			" الخدمات اللاحقه التي يتقدم طلبها الطرف الثاني تكون خاضعة لإمتيازات الباقة المحتارة عند التعاقد حسب ما هو موضح في البند الثالث, ويتم إصدار فاتورة مستقلة بالخدمة.",
		],
		[
			"ينتهي هذا العقد بالإنتهاء من تنفيذ الخدمات المحددة من الطرف الثاني",
			" المضافة للطرف الثاني وتقديمها عن طريق الموقع الإلكتروني لمنصة إقرار",
			" الخدمات اللاحقه التي يتقدم طلبها الطرف الثاني تكون خاضعة لإمتيازات الباقة المحتارة عند التعاقد حسب ما هو موضح في البند الثالث, ويتم إصدار فاتورة مستقلة بالخدمة.",
		],
		[
			"تحديد أسعار الخدمات في حالة الإشتراك في الباقات حسب ما يلي:",
			" أسعار الخدمات التي يقدمها الطرف الأول للطرف التاني حسب الباقة التي يحددها الطرف الثاني عند التعاقد",
			" الخدمات اللاحقه التي يتقدم طلبها الطرف الثاني تكون خاضعة لإمتيازات الباقة المحتارة عند التعاقد حسب ما هو موضح في البند الثالث, ويتم إصدار فاتورة مستقلة بالخدمة.",
		],
	];
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
						{data.map((contract, i) => (
							<Contract content={contract} key={`${contract} ${i}`} />
						))}
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;