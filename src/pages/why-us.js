import React from "react";
import theme from "theme";
import { Theme, Text, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"why-us"} />
		<Helmet>
			<title>
				Why Us?
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
		<Section padding="103px 0 18px 0" lg-padding="103px 2.5% 18px 2.5%" lg-width="95%" sm-padding="80px 2.5% 18px 2.5%">
			<Override
				slot="SectionContent"
				border-radius="6px"
				justify-content="flex-end"
				height="267px"
				sm-width="95%"
				max-width="1030px"
				padding="59px 72px 66px 72px"
				width="100%"
				sm-padding="24px 0px 24px 0px"
				lg-width="100%"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectanglezxczxczxc.png?v=2020-11-04T01:09:40.735Z) 100% 100% /cover no-repeat scroll padding-box"
			/>
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem
					sm-align-items="center"
					sm-width="100%"
					lg-width="100%"
					width="60%"
					display="flex"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
						lg-align-items="center"
					/>
					{"        "}
					<Text
						margin="0px 0px 0px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
						lg-text-align="center"
						color="#ffffff"
						font="--headline2"
					>
						Why Us?
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section padding="24px 0 70px 0" sm-padding="24px 0 50px 0" background="#FFFFFF">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem
					width="100%"
					display="flex"
					lg-width="50%"
					md-width="100%"
					nout-width="50%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
					/>
					{"        "}
					<Box
						hover-transform="translateY(-10px)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
						align-items="flex-start"
						display="flex"
						padding="42px 37px 42px 37px"
						border-width="1px"
						height="100%"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						border-color="rgba(255, 255, 255, 0.05)"
						justify-content="flex-start"
						border-radius="6px"
						border-style="solid"
						background="#FFFFFF"
					>
						<Text
							background="--color-primary"
							border-width="1px"
							display="block"
							font="700 18px/22px --fontFamily-googleInter"
							align-items="center"
							justify-content="center"
							text-align="center"
							margin="0px 0px 0px 0px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							color="#ffffff"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							width="48px"
						>
							1
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							On-Premise installation{"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Built-in templates for cardholder data, including: Personally Identifiable Information (PII), Personal Financial Information (PFI), CC numbers, bank a/c, ABN/swift codes and more.Deep content inspection in both structured and unstructured data.‘On the fly’ content discovery with advanced OCR and digital fingerprinting.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="100%"
					display="flex"
					lg-width="50%"
					md-width="100%"
					nout-width="50%"
				>
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						height="100%"
						hover-transform="translateY(-10px)"
						display="flex"
						flex-direction="column"
						justify-content="flex-start"
						padding="42px 37px 42px 37px"
						border-width="1px"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						border-style="solid"
						md-flex-direction="column"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						align-items="flex-start"
						border-radius="6px"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
					>
						<Text
							margin="0px 0px 0px 0px"
							background="--color-primary"
							border-radius="40px"
							align-items="center"
							font="700 18px/22px --fontFamily-googleInter"
							padding="13px 0px 13px 0px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="block"
							justify-content="center"
							text-align="center"
							border-width="1px"
							border-style="solid"
							width="48px"
							color="#ffffff"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						>
							2
						</Text>
						<Text
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
						>
							Perpetual license{"\n\n"}
						</Text>
						<Text
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
						>
							Perpetual license represensts one-time payment for the right to use software. Access to upgrades and technical support is optional and is free for the first 12 months. Then prolongation can be purchased additionaly. This type of license is suitable in following cases: 1) the system is going to be used for a long period of time (for years), 2) customer has high-qualified IT department and doesn't often need assistance of StaffCop support team.{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					nout-width="50%"
					width="100%"
					display="flex"
					lg-width="50%"
					md-width="100%"
				>
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
					/>
					{"        "}
					<Box
						border-style="solid"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						justify-content="flex-start"
						padding="42px 37px 42px 37px"
						border-width="1px"
						height="100%"
						display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
						align-items="flex-start"
						border-radius="6px"
						md-display="flex"
					>
						<Text
							background="--color-primary"
							width="48px"
							color="#ffffff"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							margin="0px 0px 0px 0px"
							border-style="solid"
							display="block"
							justify-content="center"
							font="700 18px/22px --fontFamily-googleInter"
							border-radius="40px"
							border-width="1px"
							border-color="rgba(255, 255, 255, 0.05)"
							padding="13px 0px 13px 0px"
							align-items="center"
						>
							3
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Fully customized reports{"\n\n"}
						</Text>
						<Text
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
						>
							These days employee monitoring market features a number of decent solutions allowing to monitor staff efficiency. Usually, with the help of similar instruments: web-sites and applications are categorized as productive or unproductive, screenshots are taken at a needed interval, sometimes keystrokes are also logged. The output is represented by a number of reports containing the collected data and in most cases these reports suffice. But what if the task is not so common? What if we need to exclude a slice of data from the report or change the way it looks? This can be done by creating custom reports with StaffCop.{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="100%"
					display="flex"
					lg-width="50%"
					md-width="100%"
					nout-width="50%"
				>
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						padding="42px 37px 42px 37px"
						border-style="solid"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						border-color="rgba(255, 255, 255, 0.05)"
						align-items="flex-start"
						border-radius="6px"
						hover-transform="translateY(-10px)"
						md-display="flex"
						flex-direction="column"
						justify-content="flex-start"
						border-width="1px"
						background="#FFFFFF"
						height="100%"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						display="flex"
					>
						<Text
							display="block"
							border-radius="40px"
							margin="0px 0px 0px 0px"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							justify-content="center"
							text-align="center"
							border-width="1px"
							color="#ffffff"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-style="solid"
							width="48px"
							font="700 18px/22px --fontFamily-googleInter"
						>
							4
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							All-in-One solution{"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							StaffCop Enterprise is an All-In-One solution which means that the official distribution contains all the functions provided by StaffCop and they are easily enabled or disabled. We don't charge for each module separately. In case some of the modules are strongly needed to be disabled (to prevent violations by employees responsible for operating StaffCop) we recommend to create administrator accounts without the permissions to change configuration OR/AND document the responsibility of usage the system.{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					nout-width="50%"
					width="100%"
					display="flex"
					lg-width="50%"
					md-width="100%"
				>
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
					/>
					{"        "}
					<Box
						border-style="solid"
						hover-transform="translateY(-10px)"
						align-items="flex-start"
						justify-content="flex-start"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
						height="100%"
						sm-padding="20px 20px 20px 20px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						border-radius="6px"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
						md-flex-direction="column"
					>
						<Text
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							display="block"
							color="#ffffff"
							border-style="solid"
							justify-content="center"
							width="48px"
							font="700 18px/22px --fontFamily-googleInter"
							border-radius="40px"
							border-color="rgba(255, 255, 255, 0.05)"
							text-align="center"
							margin="0px 0px 0px 0px"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							align-items="center"
						>
							5
						</Text>
						<Text
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
						>
							Web-based interface{"\n\n"}
						</Text>
						<Text
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
						>
							StaffCop Enterprise is managed with the help of web-based administrative interface. It means that to open the admin panel StaffCop User should enter the IP address of the computer (server) with StaffCop Server. What benefits does this implementation have? 1) no need to install additional application for adminstrating the system 2) admin interface can be accessed outside the local network from anywhere with internet connection. 3) A single instance of the system can be used for administrating several departments or even companies with a single admin interface by using different credentials.{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
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