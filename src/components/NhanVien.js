import React from "react";
import Home from "./Home/Home";
import Function from "./Home/Function";

export const NotLogin = () => (
	<div className="h-screen justify-center flex items-center flex-col">
		<div className="  text-6xl uppercase text-center leading-relaxed text-[#f00]">
			Error:
			<br /> Yêu cầu đăng nhập
		</div>
		<Function
			name={"Trở về"}
			css="w-[20%]"
			functionRef={() => (window.location = "./")}
		/>
	</div>
);

const NhanVien = () => {
	return JSON.parse(localStorage.getItem("isLogin")) ? <Home /> : <NotLogin />;
};

export default NhanVien;
