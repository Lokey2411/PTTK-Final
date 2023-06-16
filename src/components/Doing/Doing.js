import React, { useEffect, useState } from "react";
import {
	BackButtons,
	ProjectInfo,
	databaseConfirmedProject,
	isEmployee,
} from "../Local";
import Function from "../Home/Function";

const EmployeeDoing = () => {
	const [name, setName] = useState("Tên dự án");

	useEffect(() => {
		const select = document.getElementById("select-doing");
		const length = JSON.parse(localStorage.getItem("dataConfirmed"))?.length;
		if (select) {
			for (let i = 0; i < length; i++) {
				var option = document.createElement("option");
				option.text = `DA${databaseConfirmedProject[i].id}`;
				option.value = databaseConfirmedProject[i].id;
				if (!select.innerText.includes(option.innerText))
					select.appendChild(option);
			}
		}
	}, []);
	return (
		<div
			className="h-screen fadein fixed top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-blue-500 to-white z-50 items-center hidden"
			id="js-doing-modal">
			<ProjectInfo
				projectName={name}
				idName={"doing"}
				onchange={() => {
					const select = document.getElementById("select-doing");
					const value = select.value;
					if (value !== "default")
						setName(
							JSON.parse(localStorage.getItem("data"))[Number(value)].name
						);
					else setName("Tên dự án");
				}}
			/>
			<div className="ml-7">
				<Function
					name={"Thêm việc"}
					css="w-[30%]"
				/>
				<ol>
					<li className="flex items-center ">
						<p className="text-3xl">{1}: </p>
						<TodoItem
							listItem={"ccc"}
							checkBox={true}
						/>
					</li>
				</ol>
				{/* Return Home Page */}
				<BackButtons
					hasConfirm={true}
					exitedModal="js-doing-modal"
				/>
			</div>
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
					css="mx-3 "
				/>
				<FunctionDatabase item={"Xoá"} />
			</div>
		)}
	</div>
);

const Doing = () => {
	return <EmployeeDoing />;
};

export default Doing;
