import React from "react";
import theme from "theme";
import { Theme, Text, Icon, Box, Section, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { BsFillCircleFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"about-us"} />
		<Helmet>
			<title>
				About Us
			</title>
			<meta name={"description"} content={"StaffCop provides a unique, fully integrated solution that focuses on detection and response to insider threats through a combination of advanced behavioral analysis and context-rich logging of insider activity.\n\n"} />
			<meta property={"og:title"} content={"StaffCop Enterprise"} />
			<meta property={"og:description"} content={"StaffCop provides a unique, fully integrated solution that focuses on detection and response to insider threats through a combination of advanced behavioral analysis and context-rich logging of insider activity.\n\n"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/gfjkjkljkl.nbmbv.png?v=2020-11-04T15:35:13.162Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/android-chrome-512x512.png?v=2023-08-23T12:52:41.903Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/android-chrome-512x512.png?v=2023-08-23T12:52:41.903Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/android-chrome-512x512.png?v=2023-08-23T12:52:41.903Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/android-chrome-512x512.png?v=2023-08-23T12:52:41.903Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/android-chrome-512x512.png?v=2023-08-25T04:37:47.288Z"} />
			<meta name={"msapplication-TileColor"} content={"#1465FF"} />
		</Helmet>
		<Components.Header />
		<Section padding="103px 0 18px 0" lg-padding="0px 0 0px 0" md-padding="00px 0 00px 0" lg-width="100%">
			<Override
				slot="SectionContent"
				border-radius="6px"
				max-width="1030px"
				lg-background="#fff"
				lg-padding="103px 10px 18px 10px"
				width="100%"
				padding="59px 72px 66px 72px"
				nout-border-radius="0px"
				align-items="center"
				justify-content="center"
				sm-padding="80px 10px 30px 10px"
				background="linear-gradient(82.74deg, #8AAEE6 34.7%, rgba(170, 194, 230, 0) 68.26%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/RectangleCCCC.png?v=2020-11-03T23:30:48.396Z) 100% 100% /cover no-repeat scroll padding-box"
			/>
			<Stack
				lg-border-radius="6px"
				margin="0px 0px 0px 0px"
				width="100%"
				lg-background="linear-gradient(82.74deg,#8AAEE6 100%,rgba(170, 194, 230, 0) 100%)"
				lg-width="95%"
			>
				{"    "}
				<StackItem
					width="60%"
					display="flex"
					sm-align-items="center"
					sm-width="100%"
					lg-width="100%"
					lg-border-radius="9px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
						lg-align-items="center"
						lg-text-align="center"
						lg-padding="29px 50px 39px 50px"
					/>
					{"        "}
					<Text
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
						lg-text-align="center"
						color="#ffffff"
						font="--headline2"
						margin="0px 0px 16px 0px"
					>
						About Us
					</Text>
					<Box display="flex" margin="0px 0px 0px 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							padding="18px 0px 0px 0px"
							lg-display="none"
						/>
						<Text
							margin="9px 0px 9px 18px"
							color="#ffffff"
							font="400 18px/160% --fontFamily-googleInter"
							sm-font="400 16px/22px --fontFamily-googleInter"
							lg-text-align="center"
							lg-margin="9px 0px 9px 0px"
						>
							"Atom Security" LLC.
						</Text>
					</Box>
					<Box display="flex">
						<Icon
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							padding="18px 0px 0px 0px"
							lg-display="none"
							category="bs"
						/>
						<Text
							lg-margin="9px 0px 9px 0px"
							margin="9px 0px 9px 18px"
							color="#ffffff"
							font="400 18px/160% --fontFamily-googleInter"
							sm-font="400 16px/22px --fontFamily-googleInter"
							lg-text-align="center"
						>
							Established in 2001
						</Text>
					</Box>
					<Box display="flex">
						<Icon
							lg-display="none"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							padding="18px 0px 0px 0px"
						/>
						<Text
							margin="9px 0px 9px 18px"
							color="#ffffff"
							font="400 18px/160% --fontFamily-googleInter"
							sm-font="400 16px/22px --fontFamily-googleInter"
							lg-text-align="center"
							lg-margin="9px 0px 9px 0px"
						>
							Based in the Heart of Russian Science
						</Text>
					</Box>
					<Box display="flex">
						<Icon
							padding="18px 0px 0px 0px"
							lg-display="none"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
						/>
						<Text
							margin="9px 0px 9px 18px"
							color="#ffffff"
							font="400 18px/160% --fontFamily-googleInter"
							sm-font="400 16px/22px --fontFamily-googleInter"
							lg-text-align="center"
							lg-margin="9px 0px 9px 0px"
						>
							The developed solution is meant to embrace both SMB and Enterprise sectors
						</Text>
					</Box>
					<Box display="flex">
						<Icon
							padding="18px 0px 0px 0px"
							lg-display="none"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
						/>
						<Text
							lg-text-align="center"
							lg-margin="9px 0px 9px 0px"
							margin="9px 0px 9px 18px"
							color="#ffffff"
							font="400 18px/160% --fontFamily-googleInter"
							sm-font="400 16px/22px --fontFamily-googleInter"
						>
							Prevent document exfiltration over external drives, Cloud applications like Office 365, social media, email or file sharing sites like Dropbox, Google Drive.
						</Text>
					</Box>
					<Box display="flex">
						<Icon
							color="rgba(20, 101, 255, 1)"
							padding="18px 0px 0px 0px"
							lg-display="none"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
						/>
						<Text
							lg-text-align="center"
							lg-margin="9px 0px 9px 0px"
							margin="9px 0px 9px 18px"
							color="#ffffff"
							font="400 18px/160% --fontFamily-googleInter"
							sm-font="400 16px/22px --fontFamily-googleInter"
						>
							International size: customers from 93 countries worldwide
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section background="#FFFFFF" padding="24px 0 0px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack width="100%" gap="--cmp-stack-gap-default" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem md-width="100%" width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 20px 0px 0px" />
					<Text
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
						font="normal 700 32px/140% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
					>
						Our vision{"\n\n"}
					</Text>
					<Text font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter" margin="30px 0px 9px 0px">
						We employ latest developments in the field of information security to provide business and governmental organizations with a tool able to improve their business efficiency and reduce risks associated with possible data breaches at accessible cost{"\n\n"}
					</Text>
					{"            "}
				</StackItem>
				<StackItem width="50%" display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
						font="normal 700 32px/140% --fontFamily-googleInter"
					>
						Headquarters
					</Text>
					<Text margin="30px 0px 9px 0px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
						Russia, Novosibirsk, Koptug Road 4,{" "}
						<br />
						Sobolev Institute of Mathematics{"\n\n"}
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
			<Hr width="98%" margin="70px 0px 70px 0px" border-color="rgba(237, 237, 237, 1)" />
		</Section>
		<Section padding="0px 0 0px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -346px/3610px no-repeat">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Components.Form />
			<Components.Footer>
				<Override slot="text">
					Russia, Novosibirsk, Koptug Road 4, Sobolev Institute of Mathematics
				</Override>
			</Components.Footer>
		</Section>
		<Components.Copyright />
		<RawHtml>
			<style place={"endOfHead"} rawKey={"602ae6625a167a1bb9dbc787"}>
				{"section#shapka {\n    -webkit-animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\n    animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\n}\n.wrap-calc {\n    border-radius: 6px;\n}\na.menu-trigger:hover {\n    color: #1465FF;\n}\n.munecontainer a:hover {\n    text-decoration: underline;\n}\n.munecontainer li { \npadding: 5px; \nfont: normal 600 14px/1.5 var(--qtheme-fontFamily-googleSourceSansPro);\ntext-align: center !important;\n}\n.munecontainer a {\ncolor: rgba(19, 33, 42, 1);\nfont: 400 18px/28px var(--qtheme-fontFamily-googleInter);\ntext-align: center !important;\n}\na.menu-trigger {\n    padding: 33px 15px 30px 15px;\n}\n.munecontainer ul {\n    background: #ffffff;\n    list-style: none;\n    padding-inline-start: 0px;\n    padding: 10px;\n    width: 220px;\n    text-align: center;\n    position: relative;\n    top: -16px;\n    z-index: 9;\n    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14);\n    border-radius: 6px;\n}\ntd:nth-child(1) {\n    font-weight: 600;\n}\nnav {\n    position: relative;\n}\nnav a {\n    display: flex;\n    text-decoration: none;\n        font: var(--qtheme-font-menu);\n    color: #020202;\n}\n.munecontainer {\n    position: absolute;\n}\nli:hover {\n    background: #FAFAFA;\n    color: rgb(23, 103, 255);\n}\n.munecontainer a:hover {\n    background: #FAFAFA;\n    color: rgb(23, 103, 255);\n    text-decoration: none;\n}  \n.menuopen[data-display=\"block\"] {\n  -webkit-transform: scaleY(1);\n  -moz-transform: scaleY(1);\n  transform: scaleY(1);\n  -webkit-transition-duration: 0.3s;\n  -moz-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transform-origin: 100% 0%;\n  transform-origin: 100% 0%;\n  opacity: 1;\n  pointer-events: all;\n}\n\n.menuopen[data-display=\"none\"] {\n    z-index: 1 !important;\n    -webkit-transition-duration: 0.3s;\n    -moz-transition-duration: 0.3s;\n    transition-duration: 0.3s;\n    opacity: 0;\n    -webkit-transform: scaleY(0);\n    transform: scaleY(0);\n    -webkit-transform-origin: 100% 0%;\n    transform-origin: 100% 0%;\n    display: block;\n    margin-top: -20px;\n}\n\n.munecontainer ul {\n  border-top-left-radius: 0px !important;\n  border-top-right-radius: 0px !important;\n}\n\na.menu-trigger:hover~.munecontainer {\n  pointer-events: all;\n}\n\n.munecontainer {\n  pointer-events: none;\n}"}
			</style>
			<script src={"https://www.googletagmanager.com/gtag/js?id=UA-6450776-3"} async={true} place={"endOfHead"} rawKey={"60a792403e90c37fb8c52e96"}>
				{"  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-6450776-3');"}
			</script>
			<script async={false} type={"text/javascript"} place={"endOfBody"} rawKey={"6397fad8cf33eb1c42d97b3d"}>
				{"   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n   m[i].l=1*new Date();\n   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}\n   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n   (window, document, \"script\", \"https://mc.yandex.ru/metrika/tag.js\", \"ym\");\n\n   ym(91528209, \"init\", {\n        clickmap:true,\n        trackLinks:true,\n        accurateTrackBounce:true,\n        webvisor:true\n   });"}
			</script>
		</RawHtml>
	</Theme>;
});