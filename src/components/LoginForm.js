import React, { useEffect } from "react";
import "../Login.css";

const LoginForm = () => {
	const loginEmployee = () => (window.location = "./NhanVien");
	const loginManager = () => (window.location = "./QuanLy");
	const onValidateButtonClick = () => {
		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;
		if (username === "employee99@test.ru" && password === "employee99") {
			loginEmployee();
			localStorage.setItem("isManager", false);
			localStorage.setItem("isLogin", true);
		} else if (username === "manager01@test.ru" && password === "manager01") {
			loginManager();
			localStorage.setItem("isManager", true);
			localStorage.setItem("isLogin", true);
		} else {
			alert("Nhập sai thông tin");
		}
	};
	useEffect(() => {
		localStorage.setItem("isManager", false);
		localStorage.setItem("isLogin", false);
	});

	return (
		<div className="h-screen bg-gradient-to-r from-red-500 to-sky-500">
			<div className="form fadein">
				<label className="label">Username</label>
				<input
					type="text"
					id="username"
					className="text"
				/>
				<br />
				<br />
				<label className="label">Password</label>
				<input
					type="password"
					id="password"
					className="password"
				/>
				<br />
				<br />
				<button onClick={onValidateButtonClick}>Log in</button>
			</div>
		</div>
	);
};

export default LoginForm;
