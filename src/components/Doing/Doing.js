import React from "react";
import { NotLogin } from "../NhanVien";
import NavbarItem from "../NavbarItem";
import SignOutButton from "../SignOutButton";
import { isEmployee, isManager } from "../Local";

const ManagerDoing = () => (
	<div className="h-screen">
		<div className="flex justify-end max-h-1/50">
			<div className="flex justify-evenly w-1/2 mt-1 h-fit z-10 mb-6 relative right-0">
				<div className="flex  w-3/4 h-fit">
					<NavbarItem
						content="Đang làm"
						Navigate={() => (window.location = "./DangLam")}
					/>
					<NavbarItem content="Hoàn thành" />
					<NavbarItem
						content="Trang Chủ"
						Navigate={() => (window.location = "./QuanLy")}
					/>
				</div>
				<SignOutButton />
			</div>
		</div>
		<div className="bg-gradient-to-r from-purple-500 to-pink-500 h-[88%] w-screen p-7">
			<TodoItem
				listItem={"ccc"}
				css={"w-1/2"}
			/>
		</div>
	</div>
);

const EmployeeDoing = () => (
	<div className="h-screen">
		<div className="flex justify-end max-h-1/50">
			<div className="flex justify-evenly w-1/2 mt-1 h-fit z-10 mb-6 relative right-0">
				<div className="flex  w-3/4 h-fit">
					<NavbarItem
						content="Đang làm"
						Navigate={() => (window.location = "./DangLam")}
					/>
					<NavbarItem content="Hoàn thành" />
					<NavbarItem
						content="Trang Chủ"
						Navigate={() => (window.location = "./NhanVien")}
					/>
				</div>
				<SignOutButton />
			</div>
		</div>
		<div className="bg-gradient-to-r from-purple-500 to-pink-500 h-[88%] w-screen p-7">
			<FunctionDatabase
				item={"Thêm việc"}
				css="ml-10 mb-6"
			/>
			<TodoItem listItem={"ccc"} />
		</div>
	</div>
);

const FunctionDatabase = ({ item, functionRef, css }) => (
	<div
		onClick={functionRef}
		className={`flex bg-cyan-200 p-3 w-fit ${css}`}>
		{item}
	</div>
);

const TodoItem = ({ listItem, css }) => (
	<div
		className={`flex items-center align-middle justify-between w-4/6 ml-10 ${css}`}>
		<div className="w-1/2 bg-gray-200 py-4 px-2 ">{listItem}</div>
		<input
			type="checkbox"
			className="w-14 h-14 "
		/>
		{isEmployee ? (
			<div className="flex ">
				<FunctionDatabase
					item={"Sửa"}
					css="mx-3"
				/>
				<FunctionDatabase item={"Xoá"} />
			</div>
		) : (
			<div></div>
		)}
	</div>
);

const Doing = () => {
	return isManager ? (
		<ManagerDoing />
	) : isEmployee ? (
		<EmployeeDoing />
	) : (
		<NotLogin />
	);
};

export default Doing;
