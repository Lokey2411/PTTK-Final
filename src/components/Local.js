import Function from "./Home/Function";

export const getLastElement = (arr) => {
	return arr[arr.length - 1];
};

export const SelectProject = () => {
	return (
		<select
			className="px-2 py-3 bg-[#ccc]"
			id="select">
			<option value={"default"}>mã dự án</option>
		</select>
	);
};

let database = JSON.parse(localStorage.getItem("data"))
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
export const BackButtons = ({ hasConfirm, exitedModal }) => (
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
			/>
		)}
	</div>
);

export const ProjectInfo = ({ projectName }) => (
	<div>
		{" "}
		<p className="ml-[12rem] mb-[-1.5rem]">Tên dự án</p>
		<div className=" p-7 flex justify-between w-[25%]">
			<SelectProject />
			<div>
				<p className="bg-[#ccc] w-[200px] py-3 mx-5 px-3">{projectName}</p>
			</div>
		</div>
	</div>
);
export const Confirm = () => (
	<select className="px-5 py-8 border border-[#000]">
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
