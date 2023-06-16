import React, { useRef } from "react";

function AddChild() {
	const parentDivRef = useRef(null);

	const handleClick = () => {
		const childElement = document.createElement("div");
		childElement.textContent = "Hello World!";
		parentDivRef.current.appendChild(childElement);
	};

	return (
		<div>
			<button onClick={handleClick}>Add Child</button>
			<div ref={parentDivRef}>Parent Div</div>
		</div>
	);
}

function Test() {
	return (
		<div>
			<AddChild />
			<div>Other content</div>
		</div>
	);
}

export default Test;
