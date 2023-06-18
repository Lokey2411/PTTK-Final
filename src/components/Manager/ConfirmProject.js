import React, { useEffect, useState } from "react";
import {
	BackButtons,
	Confirm,
	ProjectInfo,
	addCompletedProject,
	databaseConfirmedProject,
	exitModal,
	removeArrayItem,
} from "../Local";

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
	const [work, setWork] = useState([]);
	const [description, setDescription] = useState("Mô tả dự án");
	useEffect(() => {
		const select = document.getElementById("select-confirm");
		const length = JSON.parse(localStorage.getItem("dataConfirmed"))?.length;
		if (select) {
			let defaultOption = document.createElement("option");
			defaultOption.value = "default";
			defaultOption.text = "mã dự án";
			if (!select.innerText.includes(defaultOption.innerText))
				select.appendChild(defaultOption);
			// select.innerHTML = defaultOption.innerHTML;
			for (let i = 0; i < length; i++) {
				var option = document.createElement("option");
				option.text = `DA${databaseConfirmedProject[i].id}`;
				option.value = i + 1;
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
				hasDefault={false}
				onchange={() => {
					const confirm = document.getElementById("confirm-confirm");
					const select = document.getElementById("select-confirm");
					const value = select.value;
					if (value !== "default") {
						confirm.disabled = false;
						setName(
							JSON.parse(localStorage.getItem("dataConfirmed"))[
								Number(value) - 1
							].name
						);
						setWork(JSON.parse(localStorage.getItem(`DA${value}`)));
						setDescription(
							JSON.parse(localStorage.getItem("dataConfirmed"))[
								Number(value) - 1
							].description
						);
					} else {
						setName("Tên dự án");
						setWork([]);
					}
				}}
			/>
			<div className="ml-7 flex justify-between items-center w-[70%]">
				{work && (
					<div>
						<Description
							order={1}
							projectDescription={work[0]}
						/>
						<Description
							order={2}
							projectDescription={work[1]}
						/>
						<Description
							order={3}
							projectDescription={work[2]}
						/>
					</div>
				)}
				<Confirm idName={"confirm"} />
			</div>
			<BackButtons
				hasConfirm={true}
				exitedModal={"js-confirm-modal"}
				confirmFunction={() => {
					const select = document.getElementById("select-confirm");
					let id = select.value;
					if (id === "default") {
						alert("Yêu cầu chọn dự án!");
						return;
					}
					id = Number(id);
					addCompletedProject(id, name, description);
					removeArrayItem(
						databaseConfirmedProject,
						databaseConfirmedProject[id - 1]
					);
					// remove child?
					document.getElementById("select-confirm").selectedIndex = -1;
					localStorage.setItem(
						"dataConfirmed",
						JSON.stringify(databaseConfirmedProject)
					);
					alert("Thêm thành công\nTrở về trang chủ");
					exitModal("js-confirm-modal");
				}}
			/>
		</div>
	);
};

export default ConfirmProject;
