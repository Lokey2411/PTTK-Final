import React from "react";
import { NotLogin } from "../NhanVien";
import NavbarItem from "../NavbarItem";
import SignOutButton from "../SignOutButton";

const ManagerDoing = () => <div></div>;

const EmployeeDoing = () => (
	<div>
		<div className="flex justify-end max-h-1/50">
			<div className="flex justify-evenly w-1/2 mt-1 h-fit z-10 mb-6 relative right-0">
				<div className="flex  w-1/2 h-fit">
					<NavbarItem
						content="Đang làm"
						Navigate={() => (window.location = "./DangLam")}
					/>
					<NavbarItem content="Hoàn thành" />
				</div>
				<SignOutButton />
			</div>
		</div>
		<div>
			<TodoItem listItem={"ccc"} />
		</div>
	</div>
);

const FunctionDatabase = ({ item, functionRef }) => (
	<div onClick={functionRef}>{item}</div>
);

const TodoItem = ({ listItem }) => (
	<div className="flex">
		<div>{listItem}</div>
		<input type="checkbox" />
		<FunctionDatabase item={"Sửa"} />
		<FunctionDatabase item={"Xoá"} />
	</div>
);

const Doing = () => {
	return JSON.parse(localStorage.getItem("isManager")) ? (
		<ManagerDoing />
	) : JSON.parse(localStorage.getItem("isLogin")) ? (
		<EmployeeDoing />
	) : (
		<NotLogin />
	);
};

export default Doing;
