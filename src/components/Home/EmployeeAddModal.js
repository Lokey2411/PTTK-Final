import React from "react";
import Function from "./Function";
import "../../App.css";

const EmployeeAddModal = () => {
	const exitModal = () => {
		document.getElementById("js-EmployeeAddModal").classList.add("hidden");
	};
	return (
		<div
			id="js-EmployeeAddModal"
			className="fixed top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500 z-50 flex items-center hidden fadein">
			<div className="flex bg-gray-100 p-7 justify-around  w-1/2 m-auto items-center ">
				<div className="p-10 border border-cyan-400 ">
					<p>Tên dự án: </p>
					<input
						type="text"
						className="bg-gray-300 border border-white border-solid rounded-3xl px-3 py-2 "
					/>
					<p>Mô tả dự án: </p>
					<input
						type="text"
						className="bg-gray-300 border border-white border-solid rounded-3xl px-3 py-10 "
					/>
				</div>
				<div>
					<Function name={"Thêm"} />
					<Function name={"Nộp"} />
					<Function
						name={"Thoát"}
						functionRef={exitModal}
					/>
				</div>
			</div>
		</div>
	);
};

export default EmployeeAddModal;
