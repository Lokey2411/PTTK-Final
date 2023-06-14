import React from "react";
import { BackButtons } from "../Local";

const info = [
	["Mã dự án", "Tên dự án", "Mô tả chi tiết"],
	["DA01", "Cú ăn ba vãi đị", "Vô địch ba cúp trong một mùa"],
];

const LineItem = ({ items }) => (
	<div className="flex ">
		<div className="border border-[#000] w-[25%] py-2 text-center">
			{items[0]}
		</div>
		<div className="border border-[#000] w-[25%] py-2 text-center">
			{items[1]}
		</div>
		<div className="border border-[#000] w-[50%] py-2 text-center">
			{items[2]}
		</div>
	</div>
);

const Completed = () => {
	return (
		<div
			className="fixed top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-blue-500 to-white z-50 flex fadein items-center justify-center hidden"
			id="js-completed-info-modal">
			<div className="w-[70%]">
				<LineItem items={info[0]} />
				<LineItem items={info[1]} />
				<BackButtons exitedModal={"js-completed-info-modal"} />
			</div>
		</div>
	);
};

export default Completed;
