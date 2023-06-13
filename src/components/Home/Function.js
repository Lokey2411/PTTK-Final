import React from "react";

const Function = ({ name, functionRef }) => {
	return (
		<div
			className="bg-gray-400 px-20 py-5 text-2xl rounded-2xl border border-black border-solid my-9 cursor-pointer"
			onClick={functionRef}>
			{name}
		</div>
	);
};

export default Function;
