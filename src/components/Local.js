import Function from "./Home/Function";

export const removeArrayItem = (array, item) => {
	const n = array.length;
	for (let i = n - 1; i >= 0; i--) {
		if (array[i] === item) array.splice(i, 1);
	}
};
export let databaseConfirmedProject = JSON.parse(
	localStorage.getItem("dataConfirmed")
)
	? JSON.parse(localStorage.getItem("dataConfirmed"))
	: new Array(0);
export const getID = (number) => {
	return JSON.parse(localStorage.getItem("data"))[number].id;
};
export const getName = (id) => {
	return JSON.parse(localStorage.getItem("data"))[id].name;
};
export const getDescription = (id) => {
	return JSON.parse(localStorage.getItem("data"))[id].description;
};

export const addConfirmedProject = (id, name, description) => {
	const project = {
		id: id,
		name: name,
		description: description,
	};
	databaseConfirmedProject = Array.isArray(databaseConfirmedProject)
		? databaseConfirmedProject.concat([project])
		: [project];
	localStorage.setItem(
		"dataConfirmed",
		JSON.stringify(databaseConfirmedProject)
	);
};
export const getSelectedValue = (item) => {
	return item.value;
};
export const SelectProject = ({ onchange, id }) => {
	return (
		<select
			onChange={onchange}
			className="px-2 py-3 bg-[#ccc]"
			id={`select-${id}`}>
			<option value={"default"}>mã dự án</option>
		</select>
	);
};

export let database = JSON.parse(localStorage.getItem("data"))
	? JSON.parse(localStorage.getItem("data"))
	: new Array(0);
export const isManager = JSON.parse(localStorage.getItem("isManager"));
export const isLogin = JSON.parse(localStorage.getItem("isLogin"));
export const isEmployee = !isManager && isLogin;
export const openModal = (modal) =>
	document.getElementById(modal).classList.remove("hidden");
export const exitModal = (modal) => {
	document.getElementById(modal).classList.add("hidden");
	window.location.reload();
};
export const BackButtons = ({ hasConfirm, exitedModal, confirmFunction }) => (
	<div
		className={`flex justify-between mr-7 w-1/10 items-end w-[40%] absolute right-0`}>
		<Function
			name={"Trở về"}
			functionRef={() => {
				exitModal(exitedModal);
			}}
			css="w-[48%]"
		/>
		{hasConfirm && (
			<Function
				name={"Xác nhận"}
				css="w-[48%]"
				functionRef={confirmFunction}
			/>
		)}
	</div>
);

export const ProjectInfo = ({ projectName, onchange, idName }) => (
	<div>
		{" "}
		<p className="ml-[12rem] mb-[-1.5rem]">Tên dự án</p>
		<div className=" p-7 flex justify-between w-[25%]">
			<SelectProject
				onchange={onchange}
				id={idName}
			/>
			<div>
				<p className="bg-[#ccc] w-[200px] py-3 mx-5 px-3">{projectName}</p>
			</div>
		</div>
	</div>
);
export const Confirm = ({ idName }) => (
	<select
		className="px-5 py-8 border border-[#000] hidden"
		id={`confirm-${idName}`}
		disabled>
		<option value={"default"}>Xác nhận</option>
		<option value={true}>Yes</option>
		<option value={false}>No</option>
	</select>
);
export const addProject = (name, description) => {
	if (!Number(localStorage.getItem("currentID")) === undefined) {
		localStorage.setItem("currentID", 0);
	}
	const data = {
		id: Number(localStorage.getItem("currentID")) + 1,
		name: name,
		description: description,
	};
	database = Array.isArray(database) ? database.concat([data]) : [data];
	localStorage.setItem("currentID", data.id);
	localStorage.setItem("data", JSON.stringify(database));
};
