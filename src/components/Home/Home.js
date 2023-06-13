import React from "react";
import NavbarItem from "../NavbarItem";
import SignOutButton from "../SignOutButton";
import Container from "./Container";
import EmployeeAddModal from "./EmployeeAddModal";

const Manager = () => (
	<div className="h-screen">
		<div className="flex justify-end max-h-1/50">
			<div className="flex justify-evenly w-1/2 mt-1 h-fit z-10 mb-6 relative right-0">
				<div className="flex  w-2/3 h-fit">
					<NavbarItem content="Chờ duyệt" />
					<NavbarItem content="Đang làm" />
					<NavbarItem content="Hoàn thành" />
				</div>
				<SignOutButton />
			</div>
		</div>
		<Container functions={["Xét duyệt", "Tiến độ"]} />
	</div>
);
const Employee = () => {
	const addFunction = () => {
		document.getElementById("js-EmployeeAddModal").classList.remove("hidden");
	};
	return (
		<div className="h-screen fadein">
			<div className="flex justify-end max-h-1/50">
				<div className="flex justify-evenly w-1/2 mt-1 h-fit z-10 mb-6 relative right-0">
					<div className="flex  w-1/2 h-fit">
						<NavbarItem
							content="Đang làm"
							Navigate={() => (window.location = "./DangLam")}
						/>
						<NavbarItem content="Hoàn thành" />
					</div>
					<SignOutButton />
				</div>
			</div>
			<Container
				functions={["Thêm", "Nộp"]}
				Function1={addFunction}
			/>
			<EmployeeAddModal />
		</div>
	);
};

const Home = () => {
	return JSON.parse(localStorage.getItem("isManager")) ? (
		<Manager />
	) : (
		<Employee />
	);
};

export default Home;
