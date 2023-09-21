import React from "react";
import theme from "theme";
import { Theme, Text, Image, Box, Link, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"cases"} />
		<Helmet>
			<title>
				Solutions
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
		<Components.Header>
			<Override slot="link2" color="--primary" />
		</Components.Header>
		<Section lg-padding="120px 0 60px 0" md-padding="120px 0 30px 0" padding="150px 0 60px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)">
			<Override slot="SectionContent" max-width="1200px" />
			<Text
				color="rgba(19, 33, 42, 1)"
				font="--headline2"
				margin="0px 0px 50px 20px"
				display="inline-block"
				letter-spacing="-2%"
				md-font="normal 700 30px/40px Inter, sans-serif"
				md-margin="0px 0px 20px 17px"
				sm-font="normal 700 24px/30px Inter, sans-serif"
			>
				Cases
			</Text>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem
					width="33.3333%"
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
					<Link
						href="/remote-employee-monitoring/"
						width="100%"
						height="100%"
						text-decoration-line="initial"
						display="flex"
					>
						<Box
							md-flex-direction="column"
							border-color="rgba(255, 255, 255, 0.05)"
							box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
							flex-direction="column"
							justify-content="flex-start"
							border-width="1px"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							sm-padding="15px 20px 25px 20px"
							align-items="flex-start"
							padding="27px 37px 42px 37px"
							border-style="solid"
							md-display="flex"
							display="flex"
							border-radius="6px"
							background="#FFFFFF"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(10).svg?v=2020-10-28T15:43:13.518Z" margin="0px 0px 20px 0px" />
							<Text
								display="inline-block"
								color="--primary"
								sm-font="normal 600 20px/140% Inter, sans-serif"
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 12px 0px"
							>
								Remote employee monitoring
							</Text>
						</Box>
						{"    "}
					</Link>
				</StackItem>
				<StackItem
					width="33.3333%"
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
					<Link
						href="/insider-threat-detection-and-prevention/"
						width="100%"
						height="100%"
						text-decoration-line="initial"
						display="flex"
					>
						<Box
							border-radius="6px"
							box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
							flex-direction="column"
							align-items="flex-start"
							border-style="solid"
							justify-content="flex-start"
							display="flex"
							width="100%"
							background="#FFFFFF"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							padding="27px 37px 42px 37px"
							border-width="1px"
							sm-padding="15px 20px 25px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(11).svg?v=2020-10-28T18:13:46.820Z" margin="0px 0px 20px 0px" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 12px 0px"
								display="inline-block"
								color="--primary"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Insider threat detection
							</Text>
						</Box>
						{"    "}
					</Link>
				</StackItem>
				<StackItem
					width="33.3333%"
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
					<Link
						display="flex"
						href="/privileged-user-monitoring/"
						width="100%"
						height="100%"
						text-decoration-line="initial"
					>
						<Box
							md-flex-direction="column"
							display="flex"
							justify-content="flex-start"
							border-width="1px"
							hover-transform="translateY(-10px)"
							sm-padding="15px 20px 25px 20px"
							box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
							border-radius="6px"
							border-style="solid"
							background="#FFFFFF"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							border-color="rgba(255, 255, 255, 0.05)"
							flex-direction="column"
							align-items="flex-start"
							padding="27px 37px 42px 37px"
							md-display="flex"
							width="100%"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(9).svg?v=2020-10-28T15:43:13.527Z" margin="0px 0px 20px -4px" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 12px 0px"
								display="inline-block"
								color="--primary"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Privileged user monitoring
							</Text>
						</Box>
						{"    "}
					</Link>
				</StackItem>
				<StackItem
					width="33.3333%"
					display="flex"
					lg-width="50%"
					md-width="100%"
					nout-width="50%"
				>
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
					/>
					{"        "}
					<Link
						href="/productivity-optimization/"
						width="100%"
						height="100%"
						text-decoration-line="initial"
						display="flex"
					>
						<Box
							border-radius="6px"
							border-style="solid"
							background="#FFFFFF"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							align-items="flex-start"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							md-display="flex"
							border-width="1px"
							md-flex-direction="column"
							sm-padding="15px 20px 25px 20px"
							box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
							flex-direction="column"
							width="100%"
							padding="27px 37px 42px 37px"
							hover-transform="translateY(-10px)"
							justify-content="flex-start"
						>
							<Image margin="10px 0px 30px 0px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(14).svg?v=2020-10-28T18:13:46.836Z" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 12px 0px"
								display="inline-block"
								color="--primary"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Productivity optimization
							</Text>
						</Box>
						{"    "}
					</Link>
				</StackItem>
				<StackItem
					display="flex"
					lg-width="50%"
					md-width="100%"
					nout-width="50%"
					width="33.3333%"
				>
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Link
						text-decoration-line="initial"
						display="flex"
						href="/third-party-vendor-management/"
						width="100%"
						height="100%"
					>
						<Box
							border-style="solid"
							md-display="flex"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="flex-start"
							background="#FFFFFF"
							padding="27px 37px 42px 37px"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-flex-direction="column"
							border-radius="6px"
							border-width="1px"
							sm-padding="15px 20px 25px 20px"
							box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
							display="flex"
							flex-direction="column"
							justify-content="flex-start"
							width="100%"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Groupqwewqewq.svg?v=2020-10-28T19:39:04.928Z" margin="10px 0px 48px 0px" />
							<Text
								sm-font="normal 600 20px/140% Inter, sans-serif"
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 12px 0px"
								display="inline-block"
								color="--primary"
							>
								Vendor management
							</Text>
						</Box>
						{"    "}
					</Link>
				</StackItem>
				<StackItem
					md-width="100%"
					nout-width="50%"
					width="33.3333%"
					display="flex"
					lg-width="50%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
					/>
					{"        "}
					<Link
						height="100%"
						text-decoration-line="initial"
						display="flex"
						href="/compliance-management-auditing-and-monitoring/"
						width="100%"
					>
						<Box
							border-style="solid"
							display="flex"
							background="#FFFFFF"
							hover-transform="translateY(-10px)"
							md-flex-direction="column"
							box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
							justify-content="flex-start"
							border-radius="6px"
							border-width="1px"
							sm-padding="15px 20px 25px 20px"
							flex-direction="column"
							width="100%"
							padding="27px 37px 42px 37px"
							md-display="flex"
							align-items="flex-start"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							border-color="rgba(255, 255, 255, 0.05)"
						>
							<Image margin="0px 0px 39px -4px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Groupasdsadsadas.svg?v=2020-10-28T19:39:04.934Z" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 12px 0px"
								display="inline-block"
								color="--primary"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Compliance
							</Text>
						</Box>
						{"    "}
					</Link>
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section md-padding="24px 0 40px 0" padding="24px 0 24px 0">
			<Override slot="SectionContent" align-items="center" max-width="1200px" />
			<Text
				sm-font="normal 700 24px/30px Inter, sans-serif"
				font="--headline2"
				display="inline-block"
				md-font="normal 700 30px/40px Inter, sans-serif"
				md-margin="0px 0px 20px 0px"
				margin="0px 0px 50px 0px"
				letter-spacing="-2%"
				text-align="center"
				color="rgba(19, 33, 42, 1)"
			>
				By Industry
			</Text>
			<Stack width="100%" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka
						height="100%"
						padding="68px 150px 0px 36px"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						min-height="242px"
						display="flex"
						flex-direction="column"
						justify-content="flex-end"
						background="linear-gradient(180deg,rgba(0, 0, 0, 0) 83.3%,rgba(0, 0, 0, 0.6) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fghgfhfg.png?v=2020-10-16T10:19:49.175Z) 0% 0% /cover no-repeat scroll padding-box"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
					>
						<Override
							slot="Before image"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z"
							width="7px"
							height="12px"
							min-width="none"
							min-height="none"
						/>
						<Override slot="Before image :default" display="none" />
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="48px"
							height="48px"
						/>
						<Override
							slot="Link :hover"
							align-items="center"
							justify-content="center"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-30px)"
							width="48px"
							display="flex"
							height="48px"
							background="#1465FF"
						/>
						<Override slot="Before Text2 :default">
							For healthcare
						</Override>
						<Override slot="Before Text2 :hover" transform="translateY(-50px)" />
						<Override
							slot="Link"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							display="flex"
							align-items="center"
							justify-content="center"
							href="/for-hipaa/"
							border-radius="50px"
							color="#ffffff"
							text-decoration-line="initial"
						/>
						<Override slot="Before Text2" font="normal 500 24px/29px --fontFamily-googleInter" margin="0px 0px 0px 0px" transition="-webkit-transition: all .5s;  transition: all .5s">
							For healthcare
						</Override>
						<Override
							slot="Before image :hover"
							width="7px"
							height="12px"
							min-width="none"
							min-height="none"
						/>
					</Components.Knopka>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Stack flex-direction="column">
						{"        "}
						<StackItem width="100%" display="flex" md-width="100%">
							<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
							{"        "}
							<Components.Knopka
								border-radius="6px"
								height="100%"
								display="flex"
								justify-content="flex-end"
								padding="68px 150px 0px 36px"
								min-height="242px"
								flex-direction="column"
								background="linear-gradient(180deg,rgba(0, 0, 0, 0) 83.3%,rgba(0, 0, 0, 0.6) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/tyreterter.png?v=2020-10-16T10:20:03.901Z) 0% 0% /cover no-repeat scroll padding-box"
								transition="-webkit-transition: all .3s;  transition: all .3s"
								lg-padding="68px 36px 30px 36px"
							>
								<Override
									slot="Link :default"
									color="rgba(0, 0, 238, 0)"
									width="48px"
									height="48px"
									text-decoration-line="initial"
								/>
								<Override
									slot="Link :hover"
									justify-content="center"
									text-align="center"
									box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
									transform="translateY(-30px)"
									width="48px"
									align-items="center"
									display="flex"
									height="48px"
									background="#1465FF"
								/>
								<Override slot="Before Text2 :default">
									For government
								</Override>
								<Override slot="Before Text2 :hover" transform="translateY(-50px)" />
								<Override slot="Before image :default" width="7px" height="12px" display="none" />
								<Override
									slot="Link"
									border-radius="50px"
									display="flex"
									color="#ffffff"
									href="/government-and-public-sector-cyber-security/"
									align-items="center"
									justify-content="center"
									transition="-webkit-transition: all .3s;  transition: all .3s"
									font="600 18px --fontFamily-googleInter"
									text-decoration-line="initial"
								/>
								<Override slot="Before Text2" font="normal 500 24px/29px --fontFamily-googleInter" margin="0px 0px 0px 0px" transition="-webkit-transition: all .5s;  transition: all .5s">
									For government
								</Override>
								<Override
									slot="Before image"
									width="7px"
									min-width="none"
									min-height="none"
									src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z"
									height="12px"
								/>
								<Override
									slot="Before image :hover"
									height="12px"
									width="7px"
									min-width="none"
									min-height="none"
								/>
							</Components.Knopka>
							{"    "}
						</StackItem>
						<StackItem width="100%" display="flex" md-width="100%">
							<Override slot="StackItemContent" padding="0px 0px 0px 0px" flex-direction="column" />
							{"        "}
							<Components.Knopka
								justify-content="flex-end"
								background="linear-gradient(180deg,rgba(0, 0, 0, 0) 83.3%,rgba(0, 0, 0, 0.6) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/cxvxcvcxv.png?v=2020-10-16T10:21:28.600Z) 0% 0% /cover no-repeat scroll padding-box"
								transition="-webkit-transition: all .3s;  transition: all .3s"
								border-radius="6px"
								lg-padding="68px 36px 30px 36px"
								height="100%"
								display="flex"
								flex-direction="column"
								min-height="242px"
								padding="68px 150px 0px 36px"
							>
								<Override
									slot="Link :default"
									color="rgba(0, 0, 238, 0)"
									width="48px"
									height="48px"
									text-decoration-line="initial"
								/>
								<Override
									slot="Link"
									color="#ffffff"
									text-decoration-line="initial"
									display="flex"
									align-items="center"
									justify-content="center"
									transition="-webkit-transition: all .3s;  transition: all .3s"
									font="600 18px --fontFamily-googleInter"
									href="/for-banks/"
									border-radius="50px"
								/>
								<Override slot="Before Text2" font="normal 500 24px/29px --fontFamily-googleInter" margin="0px 0px 0px 0px" transition="-webkit-transition: all .5s;  transition: all .5s">
									For financial services
								</Override>
								<Override slot="Before Text2 :hover" transform="translateY(-50px)" />
								<Override
									slot="Before image"
									min-height="none"
									src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z"
									width="7px"
									height="12px"
									min-width="none"
								/>
								<Override
									slot="Link :hover"
									box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
									text-align="center"
									transform="translateY(-30px)"
									width="48px"
									height="48px"
									justify-content="center"
									align-items="center"
									display="flex"
									background="#1465FF"
								/>
								<Override slot="Before Text2 :default">
									For financial services
								</Override>
								<Override slot="Before image :default" display="none" />
								<Override
									slot="Before image :hover"
									width="7px"
									height="12px"
									min-width="none"
									min-height="none"
								/>
							</Components.Knopka>
							{"    "}
						</StackItem>
					</Stack>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 40px 0px" width="100%">
				{"    "}
				<StackItem display="flex" md-width="100%" width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Stack flex-direction="column">
						{"        "}
						<StackItem width="100%" display="flex" md-width="100%">
							<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
							{"        "}
							<Components.Knopka
								transition="-webkit-transition: all .3s;  transition: all .3s"
								lg-padding="68px 36px 30px 36px"
								padding="68px 150px 0px 36px"
								display="flex"
								flex-direction="column"
								justify-content="flex-end"
								background="linear-gradient(180deg,rgba(0, 0, 0, 0) 83.3%,rgba(0, 0, 0, 0.6) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/wewtrthgbn.png?v=2020-10-28T19:23:40.105Z) 0% 0% /cover no-repeat scroll padding-box"
								border-radius="6px"
								min-height="242px"
								height="100%"
							>
								<Override
									slot="Link :default"
									width="48px"
									height="48px"
									text-decoration-line="initial"
									color="rgba(0, 0, 238, 0)"
								/>
								<Override
									slot="Link :hover"
									align-items="center"
									display="flex"
									height="48px"
									background="#1465FF"
									text-align="center"
									width="48px"
									justify-content="center"
									box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
									transform="translateY(-30px)"
								/>
								<Override
									slot="Link"
									align-items="center"
									href="/energy-and-utilities-sector-cyber-security/"
									display="flex"
									justify-content="center"
									transition="-webkit-transition: all .3s;  transition: all .3s"
									font="600 18px --fontFamily-googleInter"
									color="#ffffff"
									text-decoration-line="initial"
									border-radius="50px"
								/>
								<Override slot="Before Text2" font="normal 500 24px/29px --fontFamily-googleInter" margin="0px 0px 0px 0px" transition="-webkit-transition: all .5s;  transition: all .5s">
									Energy
								</Override>
								<Override slot="Before Text2 :default">
									Energy
								</Override>
								<Override slot="Before Text2 :hover" transform="translateY(-50px)" />
								<Override
									slot="Before image"
									src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z"
									height="12px"
									width="7px"
									min-width="none"
									min-height="none"
								/>
								<Override
									slot="Before image :default"
									height="12px"
									width="7px"
									min-width="0px"
									min-height="0px"
									display="none"
								/>
							</Components.Knopka>
							{"    "}
						</StackItem>
						<StackItem width="100%" display="flex" md-width="100%">
							<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
							{"        "}
							<Components.Knopka
								lg-padding="68px 36px 30px 36px"
								flex-direction="column"
								background="linear-gradient(180deg,rgba(0, 0, 0, 0) 83.3%,rgba(0, 0, 0, 0.6) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/asdasdasdasdas.png?v=2020-10-28T19:23:50.030Z) 0% 0% /cover no-repeat scroll padding-box"
								border-radius="6px"
								padding="68px 150px 0px 36px"
								transition="-webkit-transition: all .3s;  transition: all .3s"
								min-height="242px"
								height="100%"
								display="flex"
								justify-content="flex-end"
							>
								<Override slot="Before image :default" display="none" />
								<Override
									slot="Link :default"
									text-decoration-line="initial"
									color="rgba(0, 0, 238, 0)"
									width="48px"
									height="48px"
								/>
								<Override
									slot="Link :hover"
									transform="translateY(-30px)"
									height="48px"
									box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
									text-align="center"
									justify-content="center"
									background="#1465FF"
									width="48px"
									align-items="center"
									display="flex"
								/>
								<Override
									slot="Link"
									font="600 18px --fontFamily-googleInter"
									text-decoration-line="initial"
									href="/retail-and-ecommerce-cyber-security/"
									display="flex"
									transition="-webkit-transition: all .3s;  transition: all .3s"
									justify-content="center"
									color="#ffffff"
									border-radius="50px"
									align-items="center"
								/>
								<Override slot="Before Text2" margin="0px 0px 0px 0px" transition="-webkit-transition: all .5s;  transition: all .5s" font="normal 500 24px/29px --fontFamily-googleInter">
									Retail & Ecommerce
								</Override>
								<Override slot="Before Text2 :default">
									Retail & Ecommerce
								</Override>
								<Override slot="Before Text2 :hover" transform="translateY(-50px)" />
								<Override
									slot="Before image"
									src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z"
									width="7px"
									height="12px"
									min-width="0px"
									min-height="0px"
								/>
							</Components.Knopka>
							{"    "}
						</StackItem>
					</Stack>
					{"    "}
				</StackItem>
				<StackItem md-width="100%" width="50%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka
						justify-content="flex-end"
						padding="68px 150px 0px 36px"
						background="linear-gradient(180deg,rgba(0, 0, 0, 0) 83.3%,rgba(0, 0, 0, 0.6) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/charlesasdasde.png?v=2020-10-28T19:24:02.171Z) 0% 0% /cover no-repeat scroll padding-box"
						border-radius="6px"
						height="100%"
						flex-direction="column"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						lg-padding="68px 36px 30px 36px"
						min-height="242px"
						display="flex"
					>
						<Override
							slot="Link"
							color="#ffffff"
							href="/for-legal/"
							display="flex"
							align-items="center"
							justify-content="center"
							font="600 18px --fontFamily-googleInter"
							border-radius="50px"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							text-decoration-line="initial"
						/>
						<Override slot="Before Text2" transition="-webkit-transition: all .5s;  transition: all .5s" font="normal 500 24px/29px --fontFamily-googleInter" margin="0px 0px 0px 0px">
							Legal
						</Override>
						<Override slot="Before Text2 :default">
							Legal
						</Override>
						<Override slot="Before Text2 :hover" transform="translateY(-50px)" />
						<Override
							slot="Before image"
							height="12px"
							width="7px"
							min-width="0px"
							min-height="0px"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z"
						/>
						<Override slot="Before image :default" display="none" />
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="48px"
							height="48px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							justify-content="center"
							background="#1465FF"
							text-align="center"
							align-items="center"
							display="flex"
							height="48px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							transform="translateY(-30px)"
						/>
					</Components.Knopka>
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