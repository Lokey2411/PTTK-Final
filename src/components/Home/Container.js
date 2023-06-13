import React from "react";
import { RiComputerLine } from "react-icons/ri";
import Function from "./Function";

const Container = ({ functions, Function1, Function2 }) => {
	return (
		<div className="flex justify-around bg-gradient-to-r from-purple-500 to-pink-500 h-[88%] w-screen items-center ">
			<RiComputerLine className="text-[300px] bg-cyan-500 p-[-10px]" />
			<div>
				<Function
					name={functions[0]}
					functionRef={Function1}
				/>
				<Function
					name={functions[1]}
					functionRef={Function2}
				/>
			</div>
		</div>
	);
};

export default Container;
