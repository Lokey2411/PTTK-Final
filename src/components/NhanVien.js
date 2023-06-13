import React from "react";
import Home from "./Home/Home";

export const NotLogin = () => (
	<div className="justify-center flex items-center h-screen text-6xl uppercase text-center leading-relaxed text-[#f00]">
		Error:
		<br /> Yêu cầu đăng nhập
	</div>
);

const NhanVien = () => {
	return JSON.parse(localStorage.getItem("isLogin")) ? <Home /> : <NotLogin />;
};

export default NhanVien;
