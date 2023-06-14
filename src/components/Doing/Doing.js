import React from "react";
import { NotLogin } from "../NhanVien";
import { isEmployee, isManager } from "../Local";
import Function from "../Home/Function";

const ManagerDoing = () => (
	<div
		className="h-screen fadein"
		id="js-doing-modal">
		<div className="fixed top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-blue-500 to-white z-50 flex items-center fadein hidden h-screen w-screen p-7">
			<TodoItem
				listItem={"ccc"}
				css={"w-1/2"}
			/>
		</div>
	</div>
);

const EmployeeDoing = ({ projectName }) => {
	const exitModal = () =>
		document.getElementById("js-doing-modal").classList.add("hidden");
	return (
		<div
			className="h-screen fadein fixed top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-blue-500 to-white z-50 items-center"
			id="js-doing-modal">
			<p className="ml-[12rem] mb-[-1.5rem]">Tên dự án</p>
			<div className=" p-7 flex justify-between w-[25%]">
				<select className="px-2 py-3 bg-[#ccc]">
					<option value={"default"}>mã dự án</option>
					<option value={"01"}>DA01</option>
					<option value={"02"}>DA02</option>
				</select>
				<div>
					<p className="bg-[#ccc] px-2 py-3">{projectName}</p>
				</div>
			</div>
			<Function
				name={"Thoát"}
				functionRef={exitModal}
			/>
		</div>
	);
};
const FunctionDatabase = ({ item, functionRef, css }) => (
	<div
		onClick={functionRef}
		className={`flex bg-cyan-200 p-3 w-fit ${css} cursor-pointer`}>
		{item}
	</div>
);

export const TodoItem = ({ listItem, css, checkBox }) => (
	<div
		className={`flex items-center align-middle justify-between w-4/6 ml-10 ${css}`}>
		<div className="w-1/2 bg-gray-200 py-4 px-2 ">{listItem}</div>
		{checkBox && (
			<input
				type="checkbox"
				className={`w-14 h-14 `}
			/>
		)}
		{isEmployee && (
			<div className="flex ">
				<FunctionDatabase
					item={"Sửa"}
					css="mx-3"
				/>
				<FunctionDatabase item={"Xoá"} />
			</div>
		)}
	</div>
);

const Doing = () => {
	return isManager ? (
		<ManagerDoing />
	) : isEmployee ? (
		<EmployeeDoing projectName={"Cú ăn ba vãi đị"} />
	) : (
		<NotLogin />
	);
};

export default Doing;
