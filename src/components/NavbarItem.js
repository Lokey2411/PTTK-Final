import React from "react";

const NavbarItem = ({ content, Navigate }) => {
	return (
		<div
			className="bg-cyan-400 w-fit px-3 py-2 rounded-lg mx-2 border border-cyan-700 cursor-pointer"
			onClick={Navigate}>
			{content}
		</div>
	);
};

export default NavbarItem;
