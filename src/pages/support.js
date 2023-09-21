import React from "react";
import theme from "theme";
import { Theme, Text, Section, Link, Icon, Box, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { BsFillCircleFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"support"} />
		<Helmet>
			<title>
				Support
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
		<Section padding="103px 0 18px 0" lg-padding="100px 0px 18px 0px" md-padding="100px 0px 18px 0px" sm-padding="80px 0px 18px 0px">
			<Override
				slot="SectionContent"
				width="100%"
				justify-content="flex-end"
				lg-padding="40px 0px 50px 0px"
				lg-width="95%"
				max-width="1100px"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/gfjkjkljkl.nbmbv.png?v=2020-11-04T15:35:13.162Z) 100% 100% /cover no-repeat scroll padding-box"
				padding="59px 0px 66px 72px"
				border-radius="6px"
				height="267px"
			/>
			<Stack margin="0px 0px 0px 0px" width="100%">
				<StackItem
					display="flex"
					sm-align-items="center"
					sm-width="100%"
					lg-width="100%"
					width="60%"
				>
					<Override
						slot="StackItemContent"
						lg-align-items="center"
						flex-direction="column"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
					/>
					<Text
						lg-text-align="center"
						color="#ffffff"
						font="--headline2"
						margin="0px 0px 0px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
					>
						Support
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section background="#FFFFFF" padding="24px 0 0px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				<StackItem width="50%" display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						sm-font="normal 700 24px/30px Inter, sans-serif"
						font="normal 700 32px/140% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
					>
						Our vision
					</Text>
					<Text margin="30px 0px 9px 0px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
						Here you can find guides on installation, upgrades, faq and other relevant information:{" "}
						<Link
							href="https://docs.staffcop.com"
							text-overflow="clip"
							target="_blank"
							white-space="normal"
							text-indent="0"
							text-decoration-line="initial"
							color="#1465FF"
							hover-text-decoration-line="underline"
							overflow-wrap="normal"
							word-break="normal"
							hyphens="manual"
						>
							docs.staffcop.com
						</Link>
					</Text>
				</StackItem>
				<StackItem sm-width="100%" md-width="100%" width="50%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
						font="normal 700 32px/140% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
					>
						Headquarters
					</Text>
					<Text margin="30px 0px 9px 0px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
						Russia, Novosibirsk,
						<br />
						{" "}630090 ul. Kutateladze, 4g,
					</Text>
					<Box display="flex">
						<Icon
							padding="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
						/>
						<Text color="#555" font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px">
							5 AM – 2 PM (GMT), Monday-Friday;
						</Text>
					</Box>
					<Box display="flex">
						<Icon
							size="10px"
							color="rgba(20, 101, 255, 1)"
							padding="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
						/>
						<Text sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" color="#555" font="400 18px/160% --fontFamily-googleInter">
							in the ticket system
							<Link
								href="https://help.staffcop.com"
								text-decoration-line="initial"
								color="--primary"
								hover-text-decoration-line="underline"
								target="_blank"
							>
								help.staffcop.com
							</Link>
						</Text>
					</Box>
					<Box display="flex">
						<Icon
							padding="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
						/>
						<Text font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" color="#555">
							by e-mail
							<Link href="mailto:support@staffcop.com" text-decoration-line="initial" color="--primary" hover-text-decoration-line="underline">
								support@staffcop.com
							</Link>
						</Text>
					</Box>
					<Box display="flex">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							padding="18px 0px 0px 0px"
						/>
						<Text font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" color="#555">
							tickets are processed within 24 hours (weekdays)
						</Text>
					</Box>
				</StackItem>
			</Stack>
			<Hr
				width="100%"
				margin="70px 0px 70px 0px"
				border-color="rgba(237, 237, 237, 1)"
				sm-margin="30px 0px 30px 0px"
				md-margin="30px 0px 30px 0px"
			/>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 24px 0" sm-padding="0px 0 0px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				<StackItem
					sm-width="100%"
					md-width="100%"
					lg-width="100%"
					width="50%"
					display="flex"
				>
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" />
					<Text
						sm-font="400 16px/22px --fontFamily-googleInter"
						sm-margin="0px 0px 0px 0px"
						margin="0px 0px 46px 0px"
						font="400 18px/160% --fontFamily-googleInter"
						color="#555"
					>
						If you meet any questions or troubles, don’t hesitate to contact our support team – our specialists are always
				glad to help you.
						<br />
						If you can’t find the answer to your question in the documentation – open a ticket in the support center:
					</Text>
					<Box>
						<Link
							border-radius="40px"
							nout-padding="13px 15px 13px 15px"
							background="--color-primary"
							href="https://help.staffcop.com/open.php"
							color="#ffffff"
							hover-color="#ffffff"
							text-align="center"
							text-decoration-line="initial"
							border-color="--color-primary"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							hover-background="--color-primary"
							sm-display="none"
							target="_blank"
							font="600 18px/22px --fontFamily-googleInter"
							padding="14px 29px 14px 29px"
							border-width="0px"
							lg-margin="0px 8px 0px 0px"
							margin="0px 24px 0px 0px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						>
							Open new ticket
						</Link>
						<Link
							font="600 18px/22px --fontFamily-googleInter"
							padding="13px 29px 13px 29px"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							text-decoration-line="initial"
							border-width="2px"
							border-style="solid"
							border-color="--color-primary"
							border-radius="40px"
							sm-display="none"
							color="--primary"
							text-align="center"
							lg-margin="0px 8px 0px 0px"
							href="/request-demo"
							hover-background="--color-primary"
							hover-color="#ffffff"
							nout-padding="13px 15px 13px 15px"
						>
							Try for free
						</Link>
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="0px 0 0px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -346px/3610px no-repeat">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Components.Form />
			<Components.Footer>
				<Override slot="text" />
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