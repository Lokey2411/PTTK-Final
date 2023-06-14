import React from "react";
import Container from "./Container";
import EmployeeAddModal from "./EmployeeAddModal";
import { isManager } from "../Local";
import Doing from "../Doing/Doing";

const Manager = () => (
	<div className="h-screen">
		<Container functions={["Xét duyệt", "Tiến độ", "Hoàn thành"]} />
	</div>
);
const Employee = () => {
	const addFunction = () => {
		document.getElementById("js-EmployeeAddModal").classList.remove("hidden");
	};
	const showReportModal = () => {
		document.getElementById("js-doing-modal").classList.remove("hidden");
	};
	return (
		<div className="h-screen fadein flex">
			<Container
				functions={["Thêm dự án", "Nộp công việc \n dự án"]}
				Function1={addFunction}
				Function3={showReportModal}
				Function2={showReportModal}
			/>
			<EmployeeAddModal />
			<Doing />
		</div>
	);
};

const Home = () => {
	return isManager ? <Manager /> : <Employee />;
};

export default Home;
