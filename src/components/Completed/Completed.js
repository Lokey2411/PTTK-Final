import React from "react";
import { isLogin, isManager } from "../Local";
import { NotLogin } from "../NhanVien";
import NavbarItem from "../NavbarItem";
import SignOutButton from "../SignOutButton";
import { TodoItem } from "../Doing/Doing";

const Completed = () => {
	return (
		<div className="w-screen h-screen ">
			<div className="flex justify-end max-h-1/50">
				<div className="flex justify-evenly w-1/2 mt-1 h-fit z-10 mb-6 relative right-0">
					<div className="flex  w-3/4 h-fit">
						<NavbarItem
							content="Đang làm"
							Navigate={() => (window.location = "./DangLam")}
						/>
						<NavbarItem
							content="Trang Chủ"
							Navigate={() => (window.location = "./NhanVien")}
						/>
						{isManager && <NavbarItem content="Chờ duyệt" />}
					</div>
					<SignOutButton />
				</div>
			</div>
			<div className="flex justify-center w-screen mx-auto bg-gradient-to-r  from-purple-500 to-pink-500 h-[88%] ">
				<TodoItem
					listItem={"ccc"}
					checkBox={false}
					css="w-full my-0 ml-[38%] h-fit my-5"
				/>
			</div>
		</div>
	);
};

export default isLogin ? Completed : NotLogin;
