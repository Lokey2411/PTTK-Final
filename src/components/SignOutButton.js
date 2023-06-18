import React from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const SignOutButton = () => {
	return (
		<Link
			to="../"
			className="flex items-center h-fit px-3 py-2 w-screen text-right text-white justify-end text-3xl">
			Đăng xuất
			<FaSignOutAlt className="m-1" />
		</Link>
	);
};

export default SignOutButton;
