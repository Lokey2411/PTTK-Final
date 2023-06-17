import React from "react";
import Container from "./Container";
import EmployeeAddModal from "./EmployeeAddModal";
import { isManager, openModal } from "../Local";
import Doing from "../Doing/Doing";
import Looking from "../Manager/Looking";
import ConfirmProject from "../Manager/ConfirmProject";
import Completed from "../Completed/Completed";

const Manager = () => (
	<div className="h-screen">
		<Container
			functions={[
				"Xét duyệt dự án",
				"Xác nhận hoàn thành dự án",
				"Danh sách các dự án hoàn thành",
			]}
			Function1={() => openModal("js-Looking-modal")}
			Function2={() => openModal("js-confirm-modal")}
			Function3={() => openModal("js-completed-info-modal")}
		/>
		<Looking />
		<ConfirmProject />
		<Completed />
	</div>
);
const Employee = () => {
	return (
		<div className="h-screen fadein flex">
			<Container
				functions={["Thêm dự án", "Nộp công việc \n dự án"]}
				Function1={() => openModal("js-EmployeeAddModal")}
				Function3={() => openModal("js-doing-modal")}
				Function2={() => openModal("js-doing-modal")}
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
