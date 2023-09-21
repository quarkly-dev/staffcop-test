import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Text, Image, Link, Section } from "@quarkly/widgets";
const defaultProps = {
	"background": "#ffffff",
	"padding": "30px 0 30px 0",
	"border-width": "1px 0px 0px 0px",
	"border-style": "solid",
	"border-image": "linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {
			"width": "100%",
			"margin": "0px 0px 0px 0px"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "53%",
			"display": "flex",
			"lg-width": "85%"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"color": "#999999",
			"md-font": "normal 400 13px/22px --fontFamily-googleInter",
			"sm-font": "normal 400 12px/17px --fontFamily-googleInter",
			"font": "normal 400 15px/24px --fontFamily-googleInter",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"children": <>
				© Atom Security LLC, 2001–2023. All rights reserved. All trademarks are the property of their respective owners.{"\n\n\n\n\n        "}
			</>
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "47%",
			"display": "flex",
			"lg-width": "15%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"md-justify-content": "center",
			"align-items": "center",
			"justify-content": "flex-end"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"cursor": "pointer",
			"align-items": "center",
			"border-width": "2px",
			"color": "--primary",
			"lg-font": "normal 400 24px/1.5 --fontFamily-sans",
			"sm-width": "auto",
			"transition": "box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease",
			"hover-box-shadow": "0 10px 10px -6px rgba(0,0,0,.24)",
			"text-decoration-line": "initial",
			"target": "_blank",
			"display": "flex",
			"md-padding": "0px 0px 0px 0px",
			"sm-text-align": "center",
			"border-radius": "40px",
			"text-align": "center",
			"id": "gobot",
			"href": "#shapka",
			"padding": "0px 0px 0px 0px",
			"font": "normal 600 25px/1.5 --fontFamily-sans",
			"margin": "0px 0px 0px 0px",
			"hover-transform": "translateY(-2px)",
			"border-style": "solid",
			"border-color": "--color-primary"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "18px",
			"height": "18px",
			"src": "https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Icon.svg?v=2020-10-21T00:34:26.772Z",
			"padding": "12px 13px 14px 13px"
		}
	}
};

const Copyright = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" max-width="1200px" align-items="center" />
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				{"        "}
				<Text {...override("text")} />
				{"    "}
			</StackItem>
			{"    "}
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride")} />
				{"        "}
				<Link {...override("link")}>
					<Image {...override("image")} />
				</Link>
				{"    "}
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(Copyright, { ...Section,
	defaultProps,
	overrides
});
export default Copyright;