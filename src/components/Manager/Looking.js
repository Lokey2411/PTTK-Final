import React, { useEffect, useState } from "react";
import { BackButtons, Confirm, ProjectInfo } from "../Local";

const Looking = () => {
	const [name, setName] = useState("Tên dự án");
	const [description, setDescription] = useState("Mô tả dự án");
	useEffect(() => {
		const select = document.getElementById("select");
		if (select) {
			for (let i = 0; i < Number(localStorage.getItem("currentID")); i++) {
				var option = document.createElement("option");
				option.text = `DA${i}`;
				option.value = `${i}`;
				if (!select.innerText.includes(option.innerText))
					select.appendChild(option);
			}
		}
		select.onchange = () => {
			const value = select.value;
			if (value !== "default") {
				setName(JSON.parse(localStorage.getItem("data"))[Number(value)].name);
				setDescription(
					JSON.parse(localStorage.getItem("data"))[Number(value)].description
				);
			} else {
				setName("Tên dự án");
				setDescription("Mô tả dự án");
			}
		};
	});

	return (
		<div
			id="js-Looking-modal"
			className="h-screen fadein fixed top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-blue-500 to-white z-50 items-center hidden">
			<ProjectInfo projectName={name} />
			<p className="ml-7 h-fit">Mô tả chi tiết</p>
			<div className="ml-7 h-[60%] flex items-center  justify-between w-[80%]">
				<div className="h-[90%] bg-[#ccc]  w-[70%] pl-6 pt-6 ">
					{description}
				</div>
				<Confirm />
			</div>
			<BackButtons
				hasConfirm={true}
				exitedModal={"js-Looking-modal"}
			/>
		</div>
	);
};

export default Looking;
