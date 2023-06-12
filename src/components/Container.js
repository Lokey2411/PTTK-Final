import React from "react";
import { RiComputerLine } from "react-icons/ri";
import Function from "./Function";

const Container = ({ functions }) => {
	return (
		<div className="flex justify-around w-4/5">
			<RiComputerLine className="text-[300px] bg-cyan-500 p-0" />
			<div>
				<Function name={functions[0]} />
				<Function name={functions[1]} />
			</div>
		</div>
	);
};

export default Container;
