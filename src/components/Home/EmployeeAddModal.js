import React from "react";
import Function from "./Function";
import "../../App.css";
import { addProject, exitModal } from "../Local";

const EmployeeAddModal = () => {
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
								{`DA${Number(localStorage.getItem("currentID"))}`}
							</div>
						</div>
						<div className="w-[50%]">
							<p>Tên dự án: </p>
							<input
								type="text"
								className="bg-gray-300 border border-white border-solid rounded-3xl px-3 py-2 "
								id="name"
							/>
						</div>
					</div>
					<p>Mô tả dự án: </p>
					<input
						type="text"
						className="bg-gray-300 border border-white border-solid rounded-3xl px-3 py-10 w-[100%]"
						id="description"
					/>
				</div>
				<div>
					<Function
						css="text-center w-[100%]"
						name={"Thêm"}
						functionRef={() => {
							const name = document.getElementById("name").value;
							const description = document.getElementById("description").value;
							if (name && description) {
								alert(
									"Thêm thành công!\nVui lòng liên hệ lại với quản lý để được xét duyệt"
								);
								window.location.reload();
								addProject(name, description);
								exitModal("js-EmployeeAddModal");
							} else alert("Nhập đi cu");
						}}
					/>
					<Function
						css="text-center w-[100%]"
						name={"Thoát"}
						functionRef={() => exitModal("js-EmployeeAddModal")}
					/>
				</div>
			</div>
		</div>
	);
};

export default EmployeeAddModal;
