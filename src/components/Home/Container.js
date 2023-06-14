import React from "react";
import { RiComputerLine } from "react-icons/ri";
import Function from "./Function";
import SignOutButton from "../SignOutButton";

const Container = ({ functions, Function1, Function2, Function3 }) => {
	return (
		<div className=" bg-gradient-to-r from-red-500 to-sky-500 h-screen w-screen items-center">
			<div className="">
				<SignOutButton />
			</div>
			<div className="flex justify-around items-center ">
				<RiComputerLine className="text-[300px] p-[-10px]" />
				<div>
					<Function
						name={functions[0]}
						functionRef={Function1}
					/>
					<Function
						name={functions[1]}
						functionRef={Function2}
					/>
					<Function
						name={functions[2]}
						functionRef={Function3}
					/>
				</div>
			</div>
		</div>
	);
};

export default Container;
