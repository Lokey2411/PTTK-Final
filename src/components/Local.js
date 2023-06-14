import { child, push, ref, update } from "firebase/database";
import Function from "./Home/Function";
import { database } from "./Firebase";

export const isManager = JSON.parse(localStorage.getItem("isManager"));
export const isLogin = JSON.parse(localStorage.getItem("isLogin"));
export const isEmployee = !isManager && isLogin;
export const openModal = (modal) =>
	document.getElementById(modal).classList.remove("hidden");
export const exitModal = (modal) =>
	document.getElementById(modal).classList.add("hidden");
export const BackButtons = ({ hasConfirm, exitedModal }) => (
	<div
		className={`flex justify-between mr-7 w-1/10 items-end w-[40%] absolute right-0`}>
		<Function
			name={"Trở về"}
			functionRef={() => {
				exitModal(exitedModal);
			}}
		/>
		{hasConfirm && <Function name={"Xác nhận"} />}
	</div>
);

export const ProjectInfo = ({ projectName }) => (
	<div>
		{" "}
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
	</div>
);
export const Confirm = () => (
	<select className="px-5 py-8 border border-[#000]">
		<option value={"default"}>Xác nhận</option>
		<option value={true}>Yes</option>
		<option value={false}>No</option>
	</select>
);
export function writeNewPost(uid, username, picture, title, body) {
	const db = database();

	// A post entry.
	const postData = {
		author: username,
		uid: uid,
		body: body,
		title: title,
		starCount: 0,
		authorPic: picture,
	};

	// Get a key for a new Post.
	const newPostKey = push(child(ref(db), "posts")).key;

	// Write the new post's data simultaneously in the posts list and the user's post list.
	const updates = {};
	updates["/posts/" + newPostKey] = postData;
	updates["/user-posts/" + uid + "/" + newPostKey] = postData;

	return update(ref(db), updates);
}
