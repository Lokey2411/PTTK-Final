import React, { useEffect, useState } from "react";
import {
	BackButtons,
	Confirm,
	ProjectInfo,
	addConfirmedProject,
	database,
	exitModal,
	getID,
	removeArrayItem,
} from "../Local";

const Looking = () => {
	const [name, setName] = useState("Tên dự án");
	const [description, setDescription] = useState("Mô tả dự án");
	const length = JSON.parse(localStorage.getItem("data")).length;
	useEffect(() => {
		const select = document.getElementById("select-Looking");
		if (select) {
			for (let i = 0; i < length; i++) {
				var option = document.createElement("option");
				option.text = `DA${i}`;
				option.value = `${i}`;
				if (!select.innerText.includes(option.innerText))
					select.appendChild(option);
			}
		}
	});

	return (
		<div
			id="js-Looking-modal"
			className="h-screen fadein fixed top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-blue-500 to-white z-50 items-center hidden">
			<ProjectInfo
				projectName={name}
				idName={"Looking"}
				onchange={() => {
					const confirm = document.getElementById(`confirm-Looking`);
					const select = document.getElementById("select-Looking");
					const value = select.value;
					if (value !== "default") {
						confirm.disabled = false;
						setName(
							JSON.parse(localStorage.getItem("data"))[Number(value)].name
						);
						setDescription(
							JSON.parse(localStorage.getItem("data"))[Number(value)]
								.description
						);
					} else {
						confirm.disabled = true;
						setName("Tên dự án");
						setDescription("Mô tả dự án");
					}
				}}
			/>
			<p className="ml-7 h-fit">Mô tả chi tiết</p>
			<div className="ml-7 h-[60%] flex items-center  justify-between w-[80%]">
				<div className="h-[90%] bg-[#ccc]  w-[70%] pl-6 pt-6 ">
					{description}
				</div>
				<Confirm idName={"Looking"} />
			</div>
			<BackButtons
				hasConfirm={true}
				exitedModal={"js-Looking-modal"}
				confirmFunction={() => {
					const select = document.getElementById("select-Looking");

					const id = getID(Number(select.value));
					const ten = name;
					const moTa = description;
					addConfirmedProject(id, ten, moTa);
					removeArrayItem(database, database[id - 1]);
					localStorage.setItem("data", JSON.stringify(database));
					exitModal("js-Looking-modal");
				}}
			/>
		</div>
	);
};

export default Looking;
