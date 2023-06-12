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
		}
		if (username === "manager01@test.ru" && password === "manager01") {
			loginManager();
			localStorage.setItem("isManager", true);
			localStorage.setItem("isLogin", true);
		}
	};
	useEffect(() => {
		localStorage.setItem("isManager", false);
		localStorage.setItem("isLogin", false);
	});

	return (
		<div className="form">
			<label className="label">Username</label>
			<input
				type="text"
				id="username"
			/>
			<br />
			<br />
			<label className="label">Password</label>
			<input
				type="password"
				id="password"
			/>
			<br />
			<br />
			<button onClick={onValidateButtonClick}>Log in</button>
		</div>
	);
};

export default LoginForm;
