import React from "react";

const Section = ({ children, className }) => {
	return <div className={`max-w-8xl min-w-6xl m-auto ${className}`}>{children}</div>;
};

export default Section;
