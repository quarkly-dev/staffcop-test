import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your JS here:

const customJs = `
var CharTimeout = 120; 
	var StoryTimeout = 4000; 

	var Summaries = new Array();
	var SiteLinks = new Array();

		Summaries[1] = 'User Activity Monitoring';
		SiteLinks[1] = '/';
		Summaries[0] = 'Data Loss Prevention';
		SiteLinks[0] = '/';
        Summaries[2] = 'User Behavior Analytics';
		SiteLinks[2] = '/';


	function startTicker(){
		massiveItemCount =  Number(Summaries.length); 

		CurrentStory     = -1;
		CurrentLength    = 0;

		AnchorObject     = document.getElementById("Ticker");
		runTheTicker();     
	}

	function runTheTicker(){
		var myTimeout;  

		if(CurrentLength == 0){
			CurrentStory++;
			CurrentStory      = CurrentStory % massiveItemCount;
			StorySummary      = Summaries[CurrentStory].replace(/"/g,'-');      
			AnchorObject.href = SiteLinks[CurrentStory];
		}

		AnchorObject.innerHTML = StorySummary.substring(0,CurrentLength) + znak();
		if(CurrentLength != StorySummary.length){
			CurrentLength++;
			myTimeout = CharTimeout;
		} else {
			CurrentLength = 0;
			myTimeout = StoryTimeout;
		}

		setTimeout("runTheTicker()", myTimeout);
	}

	function znak(){
		if(CurrentLength == StorySummary.length) return "";
		else return "<span style='color:#2570FF;font-weight:300;'>|</span>";
	}
 
	startTicker();
`;

const EmbedJS = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		const script = document.createElement("script");
		script.innerHTML = customJs;
		ref.current.appendChild(script);
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedJS)({
	name: "EmbedJS",
	normalize: true,
	mixins: true
});