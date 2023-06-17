import React from "react";
import { BackButtons } from "../Local";

let info = [["Mã dự án", "Tên dự án", "Mô tả chi tiết"]];
const data = JSON.parse(localStorage.getItem("dataCompleted"))
	? JSON.parse(localStorage.getItem("dataCompleted"))
	: [];
let dataTrans = Array(0);

for (let i = 0; i < data.length; i++) {
	dataTrans.push([data[i].id, data[i].name, data[i].description]);
}
info = info.concat(dataTrans);

const LineItem = ({ items }) => (
	<div className="flex ">
		{items.map((elem) => (
			<div
				className="border border-[#000] w-[25%] py-2 text-center"
				key={elem.id}>
				{elem}
			</div>
		))}
	</div>
);

const Completed = () => {
	return (
		<div
			className="fixed top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-blue-500 to-white z-50 flex fadein items-center justify-center hidden"
			id="js-completed-info-modal">
			<div
				className="w-[70%]"
				id="completed">
				{info.map((elem) => (
					<LineItem
						items={elem}
						key={elem.id}
					/>
				))}
				<BackButtons exitedModal={"js-completed-info-modal"} />
			</div>
		</div>
	);
};

export default Completed;
