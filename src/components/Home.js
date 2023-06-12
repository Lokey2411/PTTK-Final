import React from "react";
import NavbarItem from "./NavbarItem";
import SignOutButton from "./SignOutButton";
import Container from "./Container";

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
const Employee = () => (
	<div className="h-screen">
		<div className="flex justify-end max-h-1/50">
			<div className="flex justify-evenly w-1/2 mt-1 h-fit z-10 mb-6 relative right-0">
				<div className="flex  w-1/2 h-fit">
					<NavbarItem content="Đang làm" />
					<NavbarItem content="Hoàn thành" />
				</div>
				<SignOutButton />
			</div>
		</div>
		<Container functions={["Thêm", "Nộp"]} />
	</div>
);

const Home = () => {
	return JSON.parse(localStorage.getItem("isManager")) ? (
		<Manager />
	) : (
		<Employee />
	);
};

export default Home;
