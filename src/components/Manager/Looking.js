import React from "react";
import { BackButtons, Confirm, ProjectInfo } from "../Local";

const Looking = () => {
	return (
		<div
			id="js-Looking-modal"
			className="h-screen fadein fixed top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-blue-500 to-white z-50 items-center hidden">
			<ProjectInfo projectName={"Cú ăn ba vãi đị"} />
			<p className="ml-7 h-fit">Mô tả chi tiết</p>
			<div className="ml-7 h-[60%] flex items-center  justify-between w-[80%]">
				<div className="h-[90%] bg-[#ccc]  w-[70%] pl-6 pt-6 ">
					Ăn ba gồm c1, epl, fa năm 2023
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
