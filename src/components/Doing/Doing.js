import React, { useEffect, useState } from "react";
import {
	BackButtons,
	ProjectInfo,
	databaseConfirmedProject,
	exitModal,
	isEmployee,
} from "../Local";
import Function from "../Home/Function";

const EmployeeDoing = () => {
	const [jobForm, setjobForm] = useState([]);
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
							JSON.parse(localStorage.getItem("dataConfirmed"))[
								Number(value) - 1
							].name
						);
					else setName("Tên dự án");
				}}
			/>
			<div className="ml-7 mt-[-20px]">
				<Function
					name={"Thêm việc"}
					css="w-[30%]"
					functionRef={() => {
						if (jobForm.length >= 3) {
							alert("Nhiều việc quá!");
							return;
						}
						setjobForm([
							...jobForm,
							<li className="flex items-center my-4">
								<p className="text-3xl">{jobForm.length + 1}: </p>
								<TodoItem
									checkBox={true}
									listItem={jobForm.length + 1}
								/>
							</li>,
						]);
					}}
				/>
				<ol id="items">
					{jobForm[0]}
					{jobForm[1] && jobForm[1]}
					{jobForm[2] && jobForm[2]}
				</ol>
				{/* Return Home Page */}
				<BackButtons
					hasConfirm={true}
					exitedModal="js-doing-modal"
					confirmFunction={() => {
						const select = document.getElementById("select-doing");
						if (select.value === "default") {
							alert("Bạn chưa chọn dự án!");
							return;
						}
						const id = Number(select.value);
						const jobs = [
							document.getElementById("list-item-1") &&
								document.getElementById("list-item-1").value,
							document.getElementById("list-item-2") &&
								document.getElementById("list-item-2").value,
							document.getElementById("list-item-3") &&
								document.getElementById("list-item-3").value,
						];
						localStorage.setItem(
							`DA${databaseConfirmedProject[id].id}`,
							JSON.stringify(jobs ? jobs : [])
						);
						alert("Thêm việc thành công!");
						exitModal("js-doing-modal");
					}}
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
		className={`flex items-center align-middle justify-between w-4/6 ml-10 ${css} `}>
		<input
			className="w-1/2 bg-gray-200 py-4 px-2 "
			placeholder="Nhập việc cần làm ..."
			id={`list-item-${listItem}`}
		/>
		{checkBox && (
			<input
				type="checkbox"
				className={`w-14 h-14 `}
			/>
		)}
		{isEmployee && (
			<div className="flex hidden">
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
