import React from "react";
import Home from "./Home";

const ManagerForm = () => <Home />;

const ManagerLocked = () => (
	<div className="justify-center flex items-center h-screen text-6xl uppercase text-center leading-relaxed text-[#f00]">
		Error:
		<br /> Yêu cầu đăng nhập tài khoản quản lý
	</div>
);

const QuanLy = () => {
	return JSON.parse(localStorage.getItem("isManager")) ? (
		<ManagerForm />
	) : (
		<ManagerLocked />
	);
};

export default QuanLy;
