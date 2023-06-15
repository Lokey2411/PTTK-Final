import React from "react";
import Home from "./Home/Home";
import Function from "./Home/Function";

const ManagerForm = () => <Home />;

const ManagerLocked = () => (
	<div className="justify-center flex items-center h-screen flex-col">
		<div className=" text-6xl uppercase text-center leading-relaxed text-[#f00]">
			Error:
			<br /> Yêu cầu đăng nhập tài khoản quản lý
		</div>
		<Function
			name={"Trở về"}
			css="w-[20%]"
			functionRef={() => (window.location = "./")}
		/>
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
