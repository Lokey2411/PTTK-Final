import React from "react";

const Function = ({ name, functionRef, css }) => {
	return (
		<div
			className={`bg-green-400 px-20 py-5 text-2xl rounded-2xl border border-black border-solid my-9 cursor-pointer ${
				!name && "hidden"
			} text-center w-[100%] h-auto ${css}`}
			onClick={functionRef}>
			{name}
		</div>
	);
};

export default Function;
