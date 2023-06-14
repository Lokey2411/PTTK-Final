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
			className="fixed top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-blue-500 to-white z-50 flex items-center fadein justify-between hidden ">
			<div className="flex bg-gray-100 p-7 justify-around  w-4/5 m-auto items-center ">
				<div className="p-10 w-[75%]">
					<div className="flex justify-around w-[100%]">
						<div className="w-[50%]">
							<p>Mã dự án: </p>
							<div className="bg-gray-300 border border-white border-solid rounded-3xl px-3 py-2 ">
								ccc
							</div>
						</div>
						<div className="w-[50%]">
							<p>Tên dự án: </p>
							<input
								type="text"
								className="bg-gray-300 border border-white border-solid rounded-3xl px-3 py-2 "
							/>
						</div>
					</div>
					<p>Mô tả dự án: </p>
					<input
						type="text"
						className="bg-gray-300 border border-white border-solid rounded-3xl px-3 py-10 w-[100%]"
					/>
				</div>
				<div>
					<Function name={"Thêm"} />
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
