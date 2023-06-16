import React, { useEffect, useState } from "react";
import { BackButtons, Confirm, ProjectInfo } from "../Local";

const Description = ({ order, projectDescription }) => (
	<div className="flex my-5">
		<p className="mr-5">{order}: </p>
		{/* Mô tả chi tiết */}
		<p className="bg-gray-300 w-[300px] pr-[300px] pb-[10%] pl-3 pt-2 border border-cyan-700">
			{projectDescription}
		</p>
	</div>
);

const ConfirmProject = () => {
	const [name, setName] = useState("Tên dự án");

	useEffect(() => {
		const select = document.getElementById("select-confirm");
		if (select) {
			for (let i = 0; i < Number(localStorage.getItem("currentID")); i++) {
				var option = document.createElement("option");
				option.text = `DA${i}`;
				option.value = `${i}`;
				if (!select.innerText.includes(option.innerText))
					select.appendChild(option);
			}
		}
	}, []);
	return (
		<div
			id="js-confirm-modal"
			className="h-screen fadein fixed top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-blue-500 to-white z-50 items-center hidden">
			<ProjectInfo
				projectName={name}
				idName={"confirm"}
				onchange={() => {
					const confirm = document.getElementById("confirm-confirm");
					const select = document.getElementById("select-confirm");
					const value = select.value;
					if (value !== "default") {
						confirm.disabled = false;
						setName(
							JSON.parse(localStorage.getItem("data"))[Number(value)].name
						);
					} else {
						confirm.value = "default";
						confirm.disabled = true;
						setName("Tên dự án");
					}
				}}
			/>
			<div className="ml-7 flex justify-between items-center w-[70%]">
				<div>
					<Description
						order={1}
						projectDescription={"C1"}
					/>
					<Description
						order={2}
						projectDescription={"EPL"}
					/>
					<Description
						order={3}
						projectDescription={"FA"}
					/>
				</div>
				<Confirm idName={"confirm"} />
			</div>
			<BackButtons
				hasConfirm={true}
				exitedModal={"js-confirm-modal"}
			/>
		</div>
	);
};

export default ConfirmProject;
