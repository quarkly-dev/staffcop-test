import React from "react";
import theme from "theme";
import { Theme, Text, Link, Image, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"features"} />
		<Helmet>
			<title>
				Features
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
			<Override slot="link1" color="--primary" />
		</Components.Header>
		<Section padding="200px 0 140px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)" lg-padding="140px 0 70px 0" md-padding="100px 0 30px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" sm-align-items="center" sm-width="100%">
					<Override
						slot="StackItemContent"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
						flex-direction="column"
					/>
					{"        "}
					<Text font="--headline2" margin="0px 0px 16px 0px" display="inline-block" md-font="normal 700 30px/40px Inter, sans-serif">
						Features
					</Text>
					<Text
						md-font="normal 400 16px/140% --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 400 18px/160% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#555"
					>
						Activity Monitoring, User Behavior Analytics, Productivity Optimization & Insider Threat Detection in a Single Platform
					</Text>
					{"    "}
					<Link
						href="/request-demo/"
						z-index="2"
						border-width="1px"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						sm-font="600 16px/22px --fontFamily-googleInter"
						sm-padding="16px 20px 16px 20px"
						position="relative"
						color="#ffffff"
						font="600 18px/22px --fontFamily-googleInter"
						padding="16px 38px 16px 38px"
						box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						background="--color-primary"
						border-style="solid"
						margin="36px 0px 0px 0px"
						hover-background="#409EEB"
						text-decoration-line="initial"
						border-radius="40px"
						md-padding="16px 26px 16px 26px"
					>
						Request demo
					</Link>
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" position="relative" sm-align-items="center" sm-justify-content="center" />
					{"        "}
					<Image
						right="-115px"
						lg-right="-50px"
						md-top="0px"
						sm-position="relative"
						sm-left="auto"
						sm-top="0px"
						width="803px"
						position="absolute"
						bottom="auto"
						lg-top="-35px"
						lg-width="500px"
						lg-position="absolute"
						sm-bottom="auto"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15:07:09.010Z"
						md-width="400px"
						left="auto"
						top="-115px"
						md-right="-70px"
						sm-right="auto"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section padding="0px 0 0px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center 1300px/3610px no-repeat scroll padding-box">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Section padding="24px 0 124px 0" sm-padding="24px 0 50px 0">
				<Override slot="SectionContent" max-width="1200px" />
				<Stack margin="0px 0px 0px 0px">
					{"    "}
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
							href="live-employee-desktop"
							width="100%"
							height="100%"
						>
							<Box
								sm-padding="15px 20px 25px 20px"
								align-items="flex-start"
								justify-content="flex-start"
								padding="27px 37px 42px 37px"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								border-style="solid"
								md-display="flex"
								background="#FFFFFF"
								border-color="rgba(255, 255, 255, 0.05)"
								flex-direction="column"
								border-radius="6px"
								border-width="1px"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								hover-transform="translateY(-10px)"
								md-flex-direction="column"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/browser-internet-web-network-window-app-icon%201%20(1).svg?v=2020-11-14T19:20:40.204Z" margin="0px 0px 20px 0px" />
								<Text
									sm-font="normal 600 20px/140% Inter, sans-serif"
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
								>
									Live Employee Desktop Monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Real-time streaming of user activity through the StaffCop admin panel
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						nout-width="50%"
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
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
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
							href="employee-internet-monitoring"
						>
							<Box
								border-style="solid"
								background="#FFFFFF"
								hover-transform="translateY(-10px)"
								md-display="flex"
								flex-direction="column"
								justify-content="flex-start"
								border-width="1px"
								border-color="rgba(255, 255, 255, 0.05)"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								md-width="100%"
								border-radius="6px"
								align-items="flex-start"
								padding="27px 37px 42px 37px"
							>
								<Image margin="0px 0px 20px 0px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/browser-internet-web-network-window-app-icon%201.svg?v=2020-11-14T11:50:25.162Z" />
								<Text
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
									font="normal 700 24px/140% --fontFamily-googleInter"
								>
									Employee internet monitoring
								</Text>
								<Text
									sm-font="normal 400 16px/140% Inter, sans-serif"
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
								>
									Track all web activity including file uploads
									<br />
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
							href="e-mail-monitoring"
							width="100%"
							height="100%"
						>
							<Box
								display="flex"
								justify-content="flex-start"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								md-flex-direction="column"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								align-items="flex-start"
								md-display="flex"
								sm-padding="15px 20px 25px 20px"
								md-width="100%"
								border-radius="6px"
								padding="27px 37px 42px 37px"
								hover-transform="translateY(-10px)"
								border-color="rgba(255, 255, 255, 0.05)"
								flex-direction="column"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Postage,%20Stamp,%20Mail,%20Email%201.svg?v=2020-11-14T11:50:27.691Z" margin="0px 0px 20px 0px" />
								<Text
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
								>
									E-mail monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Monitor incoming and outgoing employee email
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						nout-width="50%"
						width="33.3333%"
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
						<Link
							href="file-activity-monitoring-software"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-color="rgba(255, 255, 255, 0.05)"
								display="flex"
								flex-direction="column"
								border-radius="6px"
								sm-padding="15px 20px 25px 20px"
								md-width="100%"
								md-display="flex"
								align-items="flex-start"
								hover-transform="translateY(-10px)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								justify-content="flex-start"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								border-style="solid"
								md-flex-direction="column"
								padding="42px 37px 42px 37px"
								border-width="1px"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/keyyyyyy.svg?v=2020-11-14T11:50:26.499Z" margin="0px 0px 8px 5px" />
								<Text
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
								>
									File activity monitoring software
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Track files on local drive or netwerk shares
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
							href="printed-document-tracking"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								padding="27px 37px 42px 37px"
								background="#FFFFFF"
								md-flex-direction="column"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								border-width="1px"
								hover-transform="translateY(-10px)"
								flex-direction="column"
								border-radius="6px"
								border-style="solid"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								md-display="flex"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/folder-circle.1%201s.svg?v=2020-11-14T11:50:28.922Z" margin="0px 0px 20px 0px" />
								<Text
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
								>
									Printed document tracking
								</Text>
								<Text
									sm-font="normal 400 16px/140% Inter, sans-serif"
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
								>
									See what documents were sent to print
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						nout-width="50%"
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
					>
						<Override
							slot="StackItemContent"
							justify-content="flex-start"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
						/>
						{"        "}
						<Link
							display="flex"
							href="keystroke-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
						>
							<Box
								hover-transform="translateY(-10px)"
								align-items="flex-start"
								md-width="100%"
								display="flex"
								flex-direction="column"
								border-radius="6px"
								border-width="1px"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								sm-padding="15px 20px 25px 20px"
								padding="27px 37px 42px 37px"
								border-style="solid"
								md-display="flex"
								border-color="rgba(255, 255, 255, 0.05)"
								background="#FFFFFF"
								md-flex-direction="column"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								justify-content="flex-start"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/printer-print-button-circle%201.svg?v=2020-11-14T11:50:27.692Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Keystroke Monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Track keyboard input including functional keys
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
							text-decoration-line="initial"
							display="flex"
							href="optical-character-recognition-ocr"
							width="100%"
							height="100%"
						>
							<Box
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								md-flex-direction="column"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								flex-direction="column"
								justify-content="flex-start"
								border-width="1px"
								border-style="solid"
								hover-transform="translateY(-10px)"
								md-display="flex"
								sm-padding="15px 20px 25px 20px"
								padding="27px 37px 42px 37px"
								display="flex"
								align-items="flex-start"
								md-width="100%"
								border-radius="6px"
							>
								<Image margin="0px 0px 20px 0px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/text-circle%201.svg?v=2020-11-14T11:50:28.847Z" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Optical character recognition
								</Text>
								<Text
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
									font="--lead"
								>
									Search with simple text, keyword, wildcard or RegEx to find the exact information you need.
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
							height="100%"
							text-decoration-line="initial"
							display="flex"
							href="smart-rules-and-alerts"
							width="100%"
						>
							<Box
								border-width="1px"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								align-items="flex-start"
								border-radius="6px"
								hover-transform="translateY(-10px)"
								md-flex-direction="column"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								background="#FFFFFF"
								sm-padding="15px 20px 25px 20px"
								flex-direction="column"
								display="flex"
								justify-content="flex-start"
								md-width="100%"
								padding="27px 37px 42px 37px"
								border-style="solid"
								md-display="flex"
								border-color="rgba(255, 255, 255, 0.05)"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/bell-notification-circles.svg?v=2020-11-14T11:50:25.401Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Smart rules & alerts
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Configure an alert on any user behavior, including web, email, keystrokes, file transfers, instant messaging, and more
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
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="employee-productivity-tracking"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								padding="27px 37px 42px 37px"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								border-radius="6px"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								border-color="rgba(255, 255, 255, 0.05)"
								border-width="1px"
								md-display="flex"
								display="flex"
								md-width="100%"
								border-style="solid"
								hover-transform="translateY(-10px)"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Graph%20,%20Analitycs%201.svg?v=2020-11-14T11:50:26.500Z" margin="0px 0px 20px 0px" />
								<Text
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
								>
									Employee productivity tracking
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Employee Monitoring Software with Powerful Insider Threat Detection and Productivity Analysis Features
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
							justify-content="flex-start"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
						/>
						{"        "}
						<Link
							href="network-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								padding="27px 37px 42px 37px"
								md-display="flex"
								sm-padding="15px 20px 25px 20px"
								md-width="100%"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								display="flex"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								flex-direction="column"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								justify-content="flex-start"
								border-radius="6px"
								md-flex-direction="column"
								align-items="flex-start"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/notebook-laptop-circle%201%20(1).svg?v=2020-11-14T12:10:38.775Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Network activity monitoring
								</Text>
								<Text
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
									font="--lead"
								>
									Monitor all network activity and view all connected computers, destinatio IP address, etc
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						nout-width="50%"
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
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
							href="application-usage-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
						>
							<Box
								border-radius="6px"
								md-flex-direction="column"
								flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								display="flex"
								align-items="flex-start"
								justify-content="flex-start"
								border-style="solid"
								background="#FFFFFF"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-width="100%"
								border-width="1px"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								padding="27px 37px 42px 37px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
							>
								<Image margin="0px 0px 20px 0px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/cursor-click-select-circle%202.svg?v=2020-11-14T12:10:38.785Z" />
								<Text
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
									font="normal 700 24px/140% --fontFamily-googleInter"
								>
									Applications usage monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Track time of applications usage, block apps by white and black lists
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
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="instant-message-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								justify-content="flex-start"
								md-width="100%"
								padding="27px 37px 42px 37px"
								border-width="1px"
								background="#FFFFFF"
								md-display="flex"
								border-color="rgba(255, 255, 255, 0.05)"
								flex-direction="column"
								border-radius="6px"
								border-style="solid"
								hover-transform="translateY(-10px)"
								align-items="flex-start"
								sm-padding="15px 20px 25px 20px"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								md-flex-direction="column"
							>
								<Image margin="0px 0px 20px 0px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/user-circle%201.svg?v=2020-11-14T12:10:38.776Z" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Instant message monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Monitor and react to any chat conversation, whether on a web or application-based platform.
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
						width="33.3333%"
						display="none"
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
							href="social-media-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
						>
							<Box
								border-width="1px"
								border-color="rgba(255, 255, 255, 0.05)"
								align-items="flex-start"
								border-radius="6px"
								padding="27px 37px 42px 37px"
								md-flex-direction="column"
								sm-padding="10px 20px 20px 20px"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								justify-content="flex-start"
								border-style="solid"
								md-display="flex"
								flex-direction="column"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/eye-circle%201.svg?v=2020-11-14T12:10:38.771Z" margin="0px 0px 20px 0px" />
								<Text
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
									font="normal 700 24px/140% --fontFamily-googleInter"
								>
									Social media monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									View employee social media activities like posts, comments, updates
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="none"
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
							href="remote-desktop-control"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								justify-content="flex-start"
								md-width="100%"
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								hover-transform="translateY(-10px)"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								align-items="flex-start"
								background="#FFFFFF"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="10px 20px 20px 20px"
								flex-direction="column"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/notebook-laptop-circle%201%20(1).svg?v=2020-11-14T12:10:38.775Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Remote desktop control
								</Text>
								<Text
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
								>
									Control sessions from your browser or tablet. Instantly block a user's keyboard or mouse
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
						width="33.3333%"
						display="none"
					>
						<Override
							slot="StackItemContent"
							justify-content="flex-start"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
						/>
						{"        "}
						<Link
							href="active-vs-idle-time-analysis"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								flex-direction="column"
								padding="27px 37px 42px 37px"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								md-flex-direction="column"
								justify-content="flex-start"
								md-width="100%"
								border-style="solid"
								hover-transform="translateY(-10px)"
								align-items="flex-start"
								sm-padding="10px 20px 20px 20px"
								display="flex"
								border-width="1px"
								background="#FFFFFF"
								md-display="flex"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/user-circle%201.svg?v=2020-11-14T12:10:38.776Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									User & entity behavior analytics
								</Text>
								<Text
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
									font="--lead"
									margin="0px 0px 0px 0px"
								>
									Real-time behavior anomaly and threat detection, privileged user monitoring, data loss prevention
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
							height="100%"
							text-decoration-line="initial"
							display="flex"
							href="remote-desktop-control"
							width="100%"
						>
							<Box
								border-width="1px"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								border-color="rgba(255, 255, 255, 0.05)"
								justify-content="flex-start"
								padding="27px 37px 42px 37px"
								border-style="solid"
								md-display="flex"
								sm-padding="15px 20px 25px 20px"
								hover-transform="translateY(-10px)"
								md-flex-direction="column"
								display="flex"
								align-items="flex-start"
								border-radius="6px"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								flex-direction="column"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/wifi-network-signal%201.svg?v=2020-11-14T12:10:38.775Z" margin="0px 0px 20px 0px" />
								<Text
									sm-font="normal 600 20px/140% Inter, sans-serif"
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
								>
									Remote Desktop Control
								</Text>
								<Text
									sm-font="normal 400 16px/140% Inter, sans-serif"
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
								>
									Take control over remote mouse and keaboard
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
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							text-decoration-line="initial"
							display="flex"
							href="linux-terminal-capture"
							width="100%"
							height="100%"
						>
							<Box
								border-width="1px"
								border-style="solid"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								md-width="100%"
								border-radius="6px"
								background="#FFFFFF"
								md-flex-direction="column"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								hover-transform="translateY(-10px)"
								sm-padding="15px 20px 25px 20px"
								align-items="flex-start"
								justify-content="flex-start"
								flex-direction="column"
								padding="27px 37px 42px 37px"
								md-display="flex"
								border-color="rgba(255, 255, 255, 0.05)"
								display="flex"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/star-favorite-circle.1%201.svg?v=2020-11-14T12:10:38.774Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Linux terminal capture
								</Text>
								<Text
									sm-font="normal 400 16px/140% Inter, sans-serif"
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
								>
									Privileged users have access to your core IT systems, network, applications and data.
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
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="active-vs-idle-time-analysis"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								background="#FFFFFF"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								flex-direction="column"
								border-style="solid"
								border-color="rgba(255, 255, 255, 0.05)"
								display="flex"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								md-width="100%"
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								sm-padding="15px 20px 25px 20px"
								align-items="flex-start"
								justify-content="flex-start"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/search.1%202.svg?v=2020-11-14T12:10:38.775Z" margin="0px 0px 20px 0px" />
								<Text
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
									font="normal 700 24px/140% --fontFamily-googleInter"
								>
									Activity vs. Idle Time analysis
								</Text>
								<Text
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
									font="--lead"
									margin="0px 0px 0px 0px"
								>
									See top performers and top laggards in your company
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
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="nonproductive-activity-reporting"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								align-items="flex-start"
								background="#FFFFFF"
								hover-transform="translateY(-10px)"
								md-display="flex"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								border-radius="6px"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								md-flex-direction="column"
								padding="27px 37px 42px 37px"
								sm-padding="15px 20px 25px 20px"
								display="flex"
								justify-content="flex-start"
								border-width="1px"
								border-style="solid"
								flex-direction="column"
								md-width="100%"
							>
								<Image margin="0px 0px 20px 0px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/power-turn-on%201.svg?v=2020-11-14T12:10:38.771Z" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Nonproductive activity reporting
								</Text>
								<Text
									sm-font="normal 400 16px/140% Inter, sans-serif"
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
								>
									Customized lists of websites, activities, applications that fit into both productive and nonproductive categories.
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						nout-width="50%"
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
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
							href="custom-reports"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-color="rgba(255, 255, 255, 0.05)"
								flex-direction="column"
								align-items="flex-start"
								md-width="100%"
								border-radius="6px"
								border-width="1px"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								md-display="flex"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								justify-content="flex-start"
								padding="27px 37px 42px 37px"
								border-style="solid"
								background="#FFFFFF"
								display="flex"
								hover-transform="translateY(-10px)"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/setting-circle.4%201.svg?v=2020-11-14T12:10:38.773Z" margin="0px 0px 20px 0px" />
								<Text
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
									font="normal 700 24px/140% --fontFamily-googleInter"
								>
									Custom reports
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Create your own reports with the help of report Constructor
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
							align-items="flex-start"
							justify-content="flex-start"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
						/>
						{"        "}
						<Link
							text-decoration-line="initial"
							display="flex"
							href="session-recording-and-metadata"
							width="100%"
							height="100%"
						>
							<Box
								border-width="1px"
								sm-padding="15px 20px 25px 20px"
								flex-direction="column"
								border-radius="6px"
								border-style="solid"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								display="flex"
								justify-content="flex-start"
								md-width="100%"
								padding="27px 37px 42px 37px"
								background="#FFFFFF"
								md-display="flex"
								md-flex-direction="column"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								align-items="flex-start"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/eye-circle%201.svg?v=2020-11-14T12:10:38.771Z" margin="0px 0px 20px 0px" />
								<Text
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
								>
									Session recording & metadata
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									In addition to recording desktops as a video stream, StaffCop records and indexes applications used, websites visited, file activity, keystrokes, e-mails, and more
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					{"    "}
				</Stack>
				<Stack margin="0px 0px 0px 0px">
					{"    "}
					<StackItem
						md-width="100%"
						nout-width="50%"
						width="33.3333%"
						display="flex"
						lg-width="50%"
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
							height="100%"
							text-decoration-line="initial"
							display="flex"
							href="user-card"
							width="100%"
						>
							<Box
								padding="27px 37px 42px 37px"
								md-display="flex"
								border-radius="6px"
								border-width="1px"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								flex-direction="column"
								justify-content="flex-start"
								border-style="solid"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								display="flex"
								align-items="flex-start"
								background="#FFFFFF"
								md-flex-direction="column"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/browser-internet-web-network-window-app-icon%201%20(1).svg?v=2020-11-14T19:20:40.204Z" margin="0px 0px 20px 0px" />
								<Text
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
								>
									User card
								</Text>
								<Text
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
								>
									See overview of employee activity, top used applications and websites
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						nout-width="50%"
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
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
							href="screen-capture"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								sm-padding="15px 20px 25px 20px"
								align-items="flex-start"
								md-display="flex"
								display="flex"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-flex-direction="column"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								justify-content="flex-start"
								border-radius="6px"
								border-width="1px"
								border-style="solid"
								md-width="100%"
								flex-direction="column"
								padding="27px 37px 42px 37px"
								background="#FFFFFF"
								border-color="rgba(255, 255, 255, 0.05)"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/browser-internet-web-network-window-app-icon%201.svg?v=2020-11-14T11:50:25.162Z" margin="0px 0px 20px 0px" />
								<Text
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
								>
									Screen capture
								</Text>
								<Text
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
								>
									See and record all visual data happening on monitored workstation
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						/>
						{"        "}
						<Link
							href="webcam-snapshots"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-width="1px"
								border-style="solid"
								md-display="flex"
								display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								justify-content="flex-start"
								border-radius="6px"
								padding="27px 37px 42px 37px"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								align-items="flex-start"
								background="#FFFFFF"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								flex-direction="column"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Postage,%20Stamp,%20Mail,%20Email%201.svg?v=2020-11-14T11:50:27.691Z" margin="0px 0px 20px 0px" />
								<Text
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
									font="normal 700 24px/140% --fontFamily-googleInter"
								>
									Webcam snapshots
								</Text>
								<Text
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
								>
									See who is really beyond the screen
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
							height="100%"
							text-decoration-line="initial"
							display="flex"
							href="usb-device-control"
							width="100%"
						>
							<Box
								border-style="solid"
								background="#FFFFFF"
								border-color="rgba(255, 255, 255, 0.05)"
								align-items="flex-start"
								border-width="1px"
								hover-transform="translateY(-10px)"
								md-display="flex"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								md-width="100%"
								border-radius="6px"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								sm-padding="15px 20px 25px 20px"
								display="flex"
								flex-direction="column"
								justify-content="flex-start"
								padding="42px 37px 42px 37px"
								md-flex-direction="column"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/keyyyyyy.svg?v=2020-11-14T11:50:26.499Z" margin="0px 0px 8px 5px" />
								<Text
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
								>
									USB device control
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Manage usage of external devices
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
							height="100%"
							text-decoration-line="initial"
							display="flex"
							href="dlp-features"
							width="100%"
						>
							<Box
								border-radius="6px"
								hover-transform="translateY(-10px)"
								align-items="flex-start"
								justify-content="flex-start"
								border-style="solid"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								display="flex"
								md-width="100%"
								flex-direction="column"
								padding="27px 37px 42px 37px"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								border-width="1px"
								background="#FFFFFF"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/folder-circle.1%201s.svg?v=2020-11-14T11:50:28.922Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									DLP features
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Prevent leakage of trade secret and other sensitive data
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						nout-width="50%"
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
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
							href="keystroke-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								md-flex-direction="column"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								align-items="flex-start"
								justify-content="flex-start"
								padding="27px 37px 42px 37px"
								background="#FFFFFF"
								hover-transform="translateY(-10px)"
								display="flex"
								flex-direction="column"
								border-radius="6px"
								md-display="flex"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								md-width="100%"
								border-width="1px"
								border-style="solid"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/printer-print-button-circle%201.svg?v=2020-11-14T11:50:27.692Z" margin="0px 0px 20px 0px" />
								<Text
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
									font="normal 700 24px/140% --fontFamily-googleInter"
								>
									Keystroke Monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Track keyboard input including functional keys
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
						width="33.3333%"
						display="flex"
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
							href="voice-communication-recording"
							width="100%"
							height="100%"
							text-decoration-line="initial"
						>
							<Box
								md-display="flex"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								justify-content="flex-start"
								border-radius="6px"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								md-flex-direction="column"
								flex-direction="column"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								sm-padding="15px 20px 25px 20px"
								background="#FFFFFF"
								hover-transform="translateY(-10px)"
								align-items="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/text-circle%201.svg?v=2020-11-14T11:50:28.847Z" margin="0px 0px 20px 0px" />
								<Text
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
									font="normal 700 24px/140% --fontFamily-googleInter"
								>
									Voice communication recording
								</Text>
								<Text
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
									font="--lead"
									margin="0px 0px 0px 0px"
								>
									Record sound from speakers and microphones
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
							justify-content="flex-start"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
						/>
						{"        "}
						<Link
							href="file-scanner"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								padding="27px 37px 42px 37px"
								md-flex-direction="column"
								justify-content="flex-start"
								flex-direction="column"
								align-items="flex-start"
								border-radius="6px"
								hover-transform="translateY(-10px)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								sm-padding="15px 20px 25px 20px"
								display="flex"
								md-display="flex"
								border-color="rgba(255, 255, 255, 0.05)"
								md-width="100%"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
							>
								<Image margin="0px 0px 20px 0px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/bell-notification-circles.svg?v=2020-11-14T11:50:25.401Z" />
								<Text
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
								>
									File scanner
								</Text>
								<Text
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
									font="--lead"
									margin="0px 0px 0px 0px"
								>
									Scan file system on the monitored PCs to get it in the tree form
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
							href="software-and-hardware-inventory"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								justify-content="flex-start"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								border-style="solid"
								background="#FFFFFF"
								hover-transform="translateY(-10px)"
								md-display="flex"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								flex-direction="column"
								border-radius="6px"
								align-items="flex-start"
								border-width="1px"
								display="flex"
								md-width="100%"
								padding="27px 37px 42px 37px"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Graph%20,%20Analitycs%201.svg?v=2020-11-14T11:50:26.500Z" margin="0px 0px 20px 0px" />
								<Text
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
								>
									Software and Hardware inventory
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									What applications and devices are installed/uninstalled
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="none"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							justify-content="flex-start"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
						/>
						{"        "}
						<Link
							href="social-media-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								border-width="1px"
								background="#FFFFFF"
								hover-transform="translateY(-10px)"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								align-items="flex-start"
								md-width="100%"
								padding="27px 37px 42px 37px"
								md-display="flex"
								sm-padding="10px 20px 20px 20px"
								border-style="solid"
								justify-content="flex-start"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								md-flex-direction="column"
								flex-direction="column"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/eye-circle%201.svg?v=2020-11-14T12:10:38.771Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Social media monitoring
								</Text>
								<Text
									sm-font="normal 400 16px/140% Inter, sans-serif"
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
								>
									View employee social media activities like posts, comments, updates
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="none"
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
							href="remote-desktop-control"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								md-display="flex"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								justify-content="flex-start"
								sm-padding="10px 20px 20px 20px"
								display="flex"
								md-width="100%"
								border-width="1px"
								background="#FFFFFF"
								hover-transform="translateY(-10px)"
								padding="27px 37px 42px 37px"
								border-style="solid"
								flex-direction="column"
								border-color="rgba(255, 255, 255, 0.05)"
								align-items="flex-start"
								border-radius="6px"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								md-flex-direction="column"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/notebook-laptop-circle%201%20(1).svg?v=2020-11-14T12:10:38.775Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Remote desktop control
								</Text>
								<Text
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
								>
									Control sessions from your browser or tablet. Instantly block a user's keyboard or mouse
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="none"
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
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
							href="active-vs-idle-time-analysis"
						>
							<Box
								border-style="solid"
								md-display="flex"
								justify-content="flex-start"
								padding="27px 37px 42px 37px"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								border-width="1px"
								sm-padding="10px 20px 20px 20px"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								align-items="flex-start"
								md-width="100%"
								border-radius="6px"
								background="#FFFFFF"
								md-flex-direction="column"
								border-color="rgba(255, 255, 255, 0.05)"
								display="flex"
								flex-direction="column"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/user-circle%201.svg?v=2020-11-14T12:10:38.776Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									User & entity behavior analytics
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Real-time behavior anomaly and threat detection, privileged user monitoring, data loss prevention
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					{"    "}
				</Stack>
			</Section>
			<Components.Footer />
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