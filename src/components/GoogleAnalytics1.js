import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your JS here:

const customJs = `
async src="https://www.googletagmanager.com/gtag/js?id=UA-6450776-3
`;

const EmbedJS = ({
	children,
	...props
}) => {
	const ref = useRef(null); // useLayoutEffect(() => {
	// 	const script = document.createElement("script");
	// 	script.innerHTML = customJs;
	// 	ref.current.appendChild(script);
	// }, []);

	return <div {...props} ref={ref} />;
};

export default atomize(EmbedJS)({
	name: "EmbedJS",
	normalize: true,
	mixins: true
});