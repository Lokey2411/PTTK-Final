import React from "react";
import { BackButtons, Confirm, ProjectInfo } from "../Local";

const Description = ({ order, projectDescription }) => (
	<div className="flex my-5">
		<p className="mr-5">{order}: </p>
		{/* Mô tả chi tiết */}
		<p className="bg-gray-300 w-fit pr-[300px] pb-[10%] pl-3 pt-2 border border-cyan-700">
			{projectDescription}
		</p>
	</div>
);

const ConfirmProject = () => {
	return (
		<div
			id="js-confirm-modal"
			className="h-screen fadein fixed top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-blue-500 to-white z-50 items-center">
			<ProjectInfo projectName={"Cú ăn ba vãi đị"} />
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
				<Confirm />
			</div>
			<BackButtons
				hasConfirm={true}
				exitedModal={"js-confirm-modal"}
			/>
		</div>
	);
};

export default ConfirmProject;
