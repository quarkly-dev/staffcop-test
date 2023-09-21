import React from "react";
import theme from "theme";
import { Theme, Text, Link, Image, Section, Icon, Box, Hr, Span, Em } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { BsFillCircleFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"features/employee-productivity-tracking"} />
		<Helmet>
			<title>
				Employee Productivity Tracking
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
		<Section padding="200px 0 140px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)" lg-padding="100px 0 30px 0" md-padding="100px 0 0px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem
					width="50%"
					display="flex"
					sm-align-items="center"
					sm-width="100%"
					md-width="100%"
					md-align-items="center"
					md-justify-content="center"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
						md-align-items="center"
					/>
					{"        "}
					<Text
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						md-text-align="center"
						font="--headline2"
						margin="0px 0px 16px 0px"
						display="inline-block"
					>
						Employee Productivity
						<br />
						Tracking{"\n\n"}
					</Text>
					<Text
						font="normal 400 18px/160% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#555"
						md-font="normal 400 16px/140% --fontFamily-googleInter"
						sm-text-align="center"
						md-text-align="center"
					>
						Employee Monitoring Software with Powerful Insider Threat Detection and Productivity Analysis Features{"\n\n"}
					</Text>
					{"    "}
					<Link
						text-decoration-line="initial"
						background="--color-primary"
						border-width="1px"
						hover-background="#409EEB"
						md-padding="16px 26px 16px 26px"
						href="#"
						color="#ffffff"
						border-style="solid"
						margin="36px 0px 0px 0px"
						sm-font="600 16px/22px --fontFamily-googleInter"
						font="600 18px/22px --fontFamily-googleInter"
						box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						sm-padding="16px 20px 16px 20px"
						padding="16px 38px 16px 38px"
						border-radius="40px"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						position="relative"
						z-index="2"
					>
						Request demo
					</Link>
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" md-align-items="center" md-justify-content="center" position="relative" />
					{"        "}
					<Image
						lg-width="500px"
						md-right="auto"
						sm-position="relative"
						sm-right="auto"
						md-width="400px"
						right="-115px"
						left="auto"
						top="-110px"
						md-position="relative"
						sm-bottom="auto"
						sm-top="0px"
						width="803px"
						position="absolute"
						bottom="auto"
						lg-top="-35px"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15:07:09.010Z"
						lg-right="-50px"
						sm-left="auto"
						lg-position="absolute"
						md-top="0px"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section background="#FFFFFF">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem sm-width="100%" nout-width="100%" width="70%" display="flex">
					{"        "}
					<Text
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
						font="normal 700 32px/140% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
					>
						Optimize Workforce Productivity{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem nout-width="100%" width="70%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Text
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
						font="400 18px/28px --fontFamily-googleInter"
						color="#555"
						width="100%"
						margin="1px 0px 0px 0px"
						display="inline-block"
					>
						As the business space becomes more competitive, the pressure on management teams to improve and optimize employee productivity is intensifying. Often, management is faced with the following questions:
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="5px 0 5px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="100%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex" align-items="center">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Text font="400 18px/160% --fontFamily-googleInter" margin="8px 0px 8px 18px" color="#555">
							How productive are my employees?{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" align-items="center">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Text color="#555" margin="8px 0px 8px 18px" font="400 18px/160% --fontFamily-googleInter">
							Do I have a few under-performing employees, or is the whole organization infected?
						</Text>
					</Box>
					<Box display="flex" align-items="center">
						<Icon
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
						/>
						<Text font="400 18px/160% --fontFamily-googleInter" color="#555" margin="8px 0px 8px 18px">
							Are my remote resources properly utilized?
						</Text>
					</Box>
					<Box display="flex" align-items="center">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Text color="--primary" margin="8px 0px 8px 18px" font="400 18px/160% --fontFamily-googleInter">
							Do my employees completely understand what’s expected of them?
						</Text>
					</Box>
					<Box display="flex" align-items="center">
						<Icon
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							category="bs"
							icon={BsFillCircleFill}
						/>
						<Text margin="8px 0px 8px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555">
							How can I make sure that my team is engaged and motivated?
						</Text>
					</Box>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
			<Hr width="98%" margin="50px 0px 0px 0px" border-color="rgba(237, 237, 237, 1)" />
		</Section>
		<Section padding="40px 0 12px 0" background="#FFFFFF">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem display="flex" sm-width="100%" nout-width="100%" width="70%">
					{"        "}
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
						StaffCop Employee Productivity Tools Go Beyond Monitoring and Basic Time Tracking{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem sm-width="100%" nout-width="100%" width="70%" display="flex">
					<Override slot="StackItemContent" align-items="center" flex-direction="column" />
					{"        "}
					<Text
						width="100%"
						md-width="100%"
						sm-text-align="center"
						font="400 18px/28px --fontFamily-googleInter"
						margin="1px 0px 30px 0px"
						display="inline-block"
						color="#555"
						md-font="400 14px/20px --fontFamily-googleInter"
						text-align="justify"
					>
						StaffCop employs a data-centric approach to employee productivity. It captures virtually all types of user activity and behavior data and utilizes it to review and evaluate user productivity. StaffCop numerous analytics tools allow for a proper analysis of data collected, thereby enabling management to understand and take steps to improve employee productivity.{" "}
					</Text>
					<Text
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
						font="400 18px/28px --fontFamily-googleInter"
						margin="1px 0px 30px 0px"
						width="100%"
						display="inline-block"
						color="#555"
					>
						The solution provides an enterprise-wide oversight with productivity, performance, and security KPIs for all uses on a single, intuitive dashboard. And allows you to gauge your employee's engagement with its Productive, Unproductive, Active, and idle time tracking property.{" "}
					</Text>
					<Text
						margin="1px 0px 30px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						font="400 18px/28px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
						md-font="400 14px/20px --fontFamily-googleInter"
					>
						The integrated schedule and task management lessen administrative headache while the automated rules enforce company policy and decrease unproductive behavior. StaffCop workforce optimization tools also allow you to easily track project costs and eliminate waste for not just regular employees but external consultants, remote employees, and freelance contractors.{"\n\n"}
					</Text>
					<Text
						margin="1px 0px 30px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-width="100%"
						font="400 18px/28px --fontFamily-googleInter"
						sm-text-align="center"
						text-align="justify"
						md-font="400 14px/20px --fontFamily-googleInter"
					>
						Besides tracking employee productivity, these tools defend your organization from theft, sabotage, and other malicious user activity with built-in insider threat detection and data loss prevention features.
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 70px 0" sm-padding="24px 0 50px 0">
			<Override slot="SectionContent" max-width="1200px" />
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
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						border-radius="6px"
						border-style="solid"
						height="100%"
						background="#FFFFFF"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
						sm-padding="20px 20px 20px 20px"
						md-flex-direction="column"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						justify-content="flex-start"
						border-width="1px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
					>
						<Text
							margin="0px 0px 0px 0px"
							color="#ffffff"
							border-radius="40px"
							text-align="center"
							border-color="rgba(255, 255, 255, 0.05)"
							justify-content="center"
							width="48px"
							padding="13px 0px 13px 0px"
							align-items="center"
							font="700 18px/22px --fontFamily-googleInter"
							background="--color-primary"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							display="block"
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
							<Span
								hyphens="manual"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
							>
								Real-Time Employee Monitoring
							</Span>
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							StaffCop allows companies to monitor all their employee activity for system objects like websites, applications, social media, IMs. Searches etc., in real-time for Windows, Mac, Virtual PCs, and Terminal Server.
						</Text>
					</Box>
					{"    "}
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
					<Box
						border-width="1px"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						border-radius="6px"
						height="100%"
						display="flex"
						border-style="solid"
						hover-transform="translateY(-10px)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						padding="42px 37px 42px 37px"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
					>
						<Text
							width="48px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							text-align="center"
							font="700 18px/22px --fontFamily-googleInter"
							border-radius="40px"
							border-style="solid"
							justify-content="center"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							display="block"
							margin="0px 0px 0px 0px"
							color="#ffffff"
						>
							2
						</Text>
						<Text
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
						>
							Productivity Analysis{"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							StaffCop provides in-depth reports on how employees and departments spend their time and helps executives identify high-performing employees and those who need improvement.
							<br />
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"    "}
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
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
					/>
					{"        "}
					<Box
						display="flex"
						justify-content="flex-start"
						border-radius="6px"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						align-items="flex-start"
						border-width="1px"
						background="#FFFFFF"
						border-color="rgba(255, 255, 255, 0.05)"
						flex-direction="column"
						padding="42px 37px 42px 37px"
						border-style="solid"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
					>
						<Text
							color="#ffffff"
							border-style="solid"
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							background="--color-primary"
							align-items="center"
							border-width="1px"
							justify-content="center"
							text-align="center"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							display="block"
							width="48px"
							border-color="rgba(255, 255, 255, 0.05)"
							padding="13px 0px 13px 0px"
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
							Time Tracking{"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							This software solution allows you to monitor work time, sessions, and activity levels to determine when users are most productive.{" "}
						</Text>
					</Box>
					{"    "}
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
					<Box
						justify-content="flex-start"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						height="100%"
						sm-padding="20px 20px 20px 20px"
						border-radius="6px"
						background="#FFFFFF"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						border-width="1px"
						border-style="solid"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						align-items="flex-start"
						padding="42px 37px 42px 37px"
					>
						<Text
							justify-content="center"
							width="48px"
							margin="0px 0px 0px 0px"
							padding="13px 0px 13px 0px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							border-radius="40px"
							border-width="1px"
							align-items="center"
							color="#ffffff"
							display="block"
							text-align="center"
							font="700 18px/22px --fontFamily-googleInter"
							background="--color-primary"
						>
							4
						</Text>
						<Text
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
						>
							Task Management{"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Task management involves enabling employees to organize their tasks and tracking them as they switch between different tasks. It also entails creating tasks that get tasks that get assigned automatically based on the user's application/website usage
						</Text>
					</Box>
					{"    "}
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
					<Box
						border-style="solid"
						justify-content="flex-start"
						sm-padding="20px 20px 20px 20px"
						align-items="flex-start"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						border-radius="6px"
						border-width="1px"
						flex-direction="column"
						md-display="flex"
						md-flex-direction="column"
						padding="42px 37px 42px 37px"
						height="100%"
					>
						<Text
							font="700 18px/22px --fontFamily-googleInter"
							display="block"
							justify-content="center"
							margin="0px 0px 0px 0px"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							border-style="solid"
							border-width="1px"
							text-align="center"
							align-items="center"
							width="48px"
							color="#ffffff"
							background="--color-primary"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-color="rgba(255, 255, 255, 0.05)"
						>
							5
						</Text>
						<Text
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
						>
							Automated Behavior Rules{"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							These behavior rules limit the use of unproductive applications and websites or send automated notices to alert you about excessive idle time, decreased employee productivity. They are also used to design monitoring profiles for individual users, groups, or departments.
						</Text>
					</Box>
					{"    "}
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
					<Box
						justify-content="flex-start"
						hover-transform="translateY(-10px)"
						md-display="flex"
						background="#FFFFFF"
						sm-padding="20px 20px 20px 20px"
						align-items="flex-start"
						border-radius="6px"
						border-style="solid"
						display="flex"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-flex-direction="column"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
						padding="42px 37px 42px 37px"
						border-width="1px"
					>
						<Text
							width="48px"
							color="#ffffff"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							border-style="solid"
							border-width="1px"
							justify-content="center"
							text-align="center"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							display="block"
						>
							6
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Expenses Tracking{"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							StaffCop allows you to manage your employees' schedules, tracks idle time, attendance, breaks, sick leaves, late shifts, absence, etc. And monitor work time, sessions, and activity level to see when your employees are most productive.
						</Text>
					</Box>
					{"    "}
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
					<Box
						border-radius="6px"
						border-width="1px"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
						height="100%"
						sm-padding="20px 20px 20px 20px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						display="flex"
						border-style="solid"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
					>
						<Text
							background="--color-primary"
							display="block"
							margin="0px 0px 0px 0px"
							color="#ffffff"
							border-width="1px"
							border-style="solid"
							justify-content="center"
							text-align="center"
							font="700 18px/22px --fontFamily-googleInter"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-color="rgba(255, 255, 255, 0.05)"
							width="48px"
							align-items="center"
							padding="13px 0px 13px 0px"
							border-radius="40px"
						>
							7
						</Text>
						<Text
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
						>
							Continuous Process Improvement{"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Fine-tune your organizational workflow through tracking of schedules, projects, the employee engagement rate for overall productivity boost with StaffCop’s continuous feedback platform.{" "}
						</Text>
					</Box>
					{"    "}
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
					<Box
						border-style="solid"
						hover-transform="translateY(-10px)"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						border-radius="6px"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						padding="42px 37px 42px 37px"
						height="100%"
						md-display="flex"
						md-flex-direction="column"
						justify-content="flex-start"
						border-width="1px"
						sm-padding="20px 20px 20px 20px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
						align-items="flex-start"
					>
						<Text
							text-align="center"
							border-color="rgba(255, 255, 255, 0.05)"
							border-width="1px"
							border-style="solid"
							align-items="center"
							width="48px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							background="--color-primary"
							border-radius="40px"
							display="block"
							justify-content="center"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							padding="13px 0px 13px 0px"
							margin="0px 0px 0px 0px"
						>
							8
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Active Directory Integration
						</Text>
						<Text
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
						>
							With an active directory LDAP, you can import employees, departments, computers, and groups to accelerate enrolling into StaffCop’s employee monitoring and productivity optimization solution.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section sm-padding="50px 0 30px 0" background="#F8F8F9" padding="100px 0 30px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				font="--headline2"
				color="#13212A"
				letter-spacing="-2%"
				lg-font="normal 700 36px/40px Inter, sans-serif"
				margin="0px 0px 45px 0px"
				display="inline-block"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
			>
				Industry Statistics Prove the{" "}
				<br />
				<Span color="--primary">
					Need for Employee Monitoring
				</Span>
			</Text>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem lg-width="50%" md-width="100%" width="50%" display="flex">
					<Override
						slot="StackItemContent"
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						sm-padding="20px 20px 20px 20px"
						display="flex"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						border-color="rgba(255, 255, 255, 0.05)"
						border-width="1px"
						border-style="solid"
						height="100%"
						md-display="flex"
						padding="36px 36px 36px 36px"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							A large amount of employees waste time at work{" "}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							According to a new survey of 2063 adults conducted by GetVOIP, 80.4% of people waste time at the office.{" "}
						</Text>
						<Text
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
						>
							<Span
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
								overflow-wrap="normal"
							>
								80%+{" "}
							</Span>
							{" "}of Employees Waste Time at Work
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
					/>
					{"        "}
					<Box
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
						padding="36px 36px 36px 36px"
						hover-transform="translateY(-10px)"
						border-style="solid"
						md-flex-direction="column"
						border-width="1px"
						background="#FFFFFF"
						height="100%"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						align-items="flex-start"
						justify-content="flex-start"
						border-radius="6px"
					>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Personal use of the web & email lowers productivity
						</Text>
						<Text
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
						>
							64% of employees use non-work-related websites, and 85% use email for personal reasons daily, says FinancesOnline.
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
							>
								64%
							</Span>
							{" "}Browse Unproductive Sites
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							<Span
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								85%
							</Span>
							{" "}Use Email for Personal Tasks
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						border-width="1px"
						border-style="solid"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-flex-direction="column"
						border-radius="6px"
						height="100%"
						border-color="rgba(255, 255, 255, 0.05)"
						align-items="flex-start"
						background="#FFFFFF"
						sm-padding="20px 20px 20px 20px"
						justify-content="flex-start"
						padding="36px 36px 36px 36px"
						hover-transform="translateY(-10px)"
						md-display="flex"
						flex-direction="column"
					>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							American employees are disengaged at work
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							A study by Gallup revealed that less than one-third, or 31.5%, of employees in the U.S. report being "engaged" at the office.
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							<Span
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
								overflow-wrap="normal"
							>
								52%
							</Span>
							{" "}of Businesses Agree Employees are Biggest Risk
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem md-width="100%" width="50%" display="flex" lg-width="50%">
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
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						display="flex"
						align-items="flex-start"
						hover-transform="translateY(-10px)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						border-color="rgba(255, 255, 255, 0.05)"
						flex-direction="column"
						justify-content="flex-start"
						padding="36px 36px 36px 36px"
						border-width="1px"
						border-style="solid"
						md-display="flex"
						md-flex-direction="column"
						border-radius="6px"
						background="#FFFFFF"
						sm-padding="20px 20px 20px 20px"
					>
						<Text
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
						>
							Major part of employees spends time at work unproductively
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							According to the Community Emergency Response Team, the main reasons for insider caused incidents are collusion from employees and third-parties.
						</Text>
						<Text
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 18px 0px"
						>
							<Span
								text-overflow="clip"
								hyphens="manual"
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
							>
								64%
							</Span>
							{" "}Browse Unproductive Sites
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="40px 0 70px 0" background="#F8F8F9" lg-padding="30px 0 30px 0" md-padding="30px 0 10px 0">
			<Override
				slot="SectionContent"
				max-width="1170px"
				padding="76px 0px 0px 0px"
				background="#ffffff"
				border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
				align-items="center"
				border-radius="6px"
				border-width="1px"
				border-style="solid"
				box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
				border-color="#ffffff"
			/>
			<Text
				color="#13212A"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				lg-font="normal 700 36px/40px Inter, sans-serif"
				sm-margin="0px 0px 0px 0px"
				font="--headline2"
				margin="0px 0px 50px 0px"
				display="inline-block"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				width="80%"
			>
				StaffCop is a Feature-Rich Employee Monitoring Solution with{" "}
				<Span
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
					overflow-wrap="normal"
				>
					Tangible Business Benefits
				</Span>
			</Text>
			<Stack
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
				margin="0px 0px 0px 0px"
				width="100%"
				gap="--cmp-stack-gap-default"
				border-width="0px 0px 1px 0px"
			>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						border-width="0px"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						md-align-items="center"
						padding="0px 0px 0px 20px"
						border-radius="0px"
					/>
					{"        "}
					<Image
						width="82%"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22:24:26.269Z"
						md-width="80%"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="center"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						padding="0px 60px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
					/>
					{"        "}
					<Text
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
					>
						Increase Employee Productivity{"\n\n"}
					</Text>
					<Text
						display="inline-block"
						color="#555"
						lg-font="normal 400 15px/160% Inter, sans-serif"
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
						font="--lead"
						margin="0px 0px 24px 0px"
					>
						StaffCop monitor employee activity throughout the day, then collect data to produce detailed metrics, such as:
					</Text>
					<Box display="flex" align-items="center">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Text margin="8px 0px 8px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555">
							How productive are my employees?{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" align-items="center">
						<Icon
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
						/>
						<Text font="400 18px/160% --fontFamily-googleInter" color="#555" margin="8px 0px 8px 18px">
							Minute-to-minute trend graphs describing how much time is spent on specific projects.{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" align-items="center">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Text margin="8px 0px 8px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555">
							Prioritize crucial projects and ensure your team is focused on them.{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" align-items="center">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Text margin="8px 0px 8px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555">
							Leverage the various productivity reports to track progress and adjust tasks to make sure you meet your productivity goals.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
			<Stack
				gap="--cmp-stack-gap-default"
				border-width="0px 0px 1px 0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
				margin="0px 0px 0px 0px"
				width="100%"
			>
				<StackItem width="50%" display="flex" md-width="100%" md-order="1">
					<Override
						slot="StackItemContent"
						border-radius="0px"
						align-items="flex-start"
						lg-padding="0px 30px 0px 50px"
						justify-content="center"
						md-order="1"
						padding="0px 20px 0px 60px"
						border-width="0px"
						flex-direction="column"
						sm-margin="20px 0px 0px 0px"
					/>
					{"        "}
					<Text
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						text-align="right"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
					>
						Enhance Security and Prevent Insider Threats
					</Text>
					<Text
						display="inline-block"
						color="#555"
						lg-font="normal 400 15px/160% Inter, sans-serif"
						text-align="right"
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
						font="--lead"
						margin="0px 0px 24px 0px"
					>
						StaffCop identifies high-risk behavior, applies advanced behavior-based rules to automatically detect when users violate the rules, employs sophisticated anomaly detection to determine user activity outside the normal behavior, and takes action to prevent escalation of threats.{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" md-width="100%" width="50%">
					<Override
						slot="StackItemContent"
						justify-content="center"
						md-align-items="center"
						padding="0px 0px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="center"
					/>
					{"        "}
					<Image
						object-fit="contain"
						width="100%"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%204.png?v=2020-10-19T22:32:34.380Z"
						md-width="80%"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%204.png?v=2020-10-19T22%3A32%3A34.380Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%204.png?v=2020-10-19T22%3A32%3A34.380Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%204.png?v=2020-10-19T22%3A32%3A34.380Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%204.png?v=2020-10-19T22%3A32%3A34.380Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%204.png?v=2020-10-19T22%3A32%3A34.380Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%204.png?v=2020-10-19T22%3A32%3A34.380Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%204.png?v=2020-10-19T22%3A32%3A34.380Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
			<Stack
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
				margin="0px 0px 0px 0px"
				width="100%"
				gap="--cmp-stack-gap-default"
				border-width="0px 0px 1px 0px"
				border-style="solid"
			>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						md-align-items="center"
					/>
					{"        "}
					<Image
						md-width="80%"
						width="90%"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%205.png?v=2020-10-19T22:35:48.644Z"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%205.png?v=2020-10-19T22%3A35%3A48.644Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%205.png?v=2020-10-19T22%3A35%3A48.644Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%205.png?v=2020-10-19T22%3A35%3A48.644Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%205.png?v=2020-10-19T22%3A35%3A48.644Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%205.png?v=2020-10-19T22%3A35%3A48.644Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%205.png?v=2020-10-19T22%3A35%3A48.644Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%205.png?v=2020-10-19T22%3A35%3A48.644Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						padding="20px 60px 0px 20px"
						border-radius="0px"
						border-width="0px"
					/>
					{"        "}
					<Text
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
					>
						Reduce Administrative Overhead{"\n\n"}
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#555"
						lg-font="normal 400 15px/160% Inter, sans-serif"
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
					>
						StaffCop’s built-in features automate and optimize many repetitive yet essential administrative tasks. For instance, StaffCop allows you to:
					</Text>
					<Box display="flex" align-items="center">
						<Icon
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							category="bs"
						/>
						<Text margin="8px 0px 8px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555">
							Develop schedules and automatically monitor attendance, breaks, sick hours, late shifts, absence, etc.
						</Text>
					</Box>
					<Box align-items="center" display="flex">
						<Icon
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							category="bs"
							icon={BsFillCircleFill}
						/>
						<Text margin="8px 0px 8px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555">
							Track the time, performance, and cost of projects with contractors and hourly employees, decreasing the need for manual invoicing and oversight.
						</Text>
					</Box>
					<Box align-items="center" display="flex">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Text margin="8px 0px 8px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555">
							Cut down project supervision by automatically identifying tasks based on employee apps and web usage.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
			<Stack
				border-color="rgba(19, 33, 42, 0.05)"
				margin="0px 0px 0px 0px"
				width="100%"
				gap="--cmp-stack-gap-default"
				border-width="0px 0px 1px 0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
			>
				<StackItem width="50%" display="flex" md-width="100%" md-order="1">
					<Override
						slot="StackItemContent"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						justify-content="center"
						padding="0px 0px 0px 50px"
					/>
					{"        "}
					<Text
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						text-align="right"
					>
						Increase Employee Engagement{"\n\n"}
					</Text>
					<Text
						sm-text-align="center"
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#555"
						lg-font="normal 400 15px/160% Inter, sans-serif"
						text-align="right"
						nout-font="normal 400 16px/160% Inter, sans-serif"
					>
						StaffCop allows you to develop your own KPIs and metrics to measure employee engagement: how many hours are your employees active? Are they spending too much time on social media because they are not challenged? Are they getting buried under email?
						<br />
						<br />
						{" "}You can keep an eye on employee performance over time and see if they are on a decreasing trend. Determine the cause of disengagement and then systematically table them. For instance:{"\n\n"}
					</Text>
					<Box display="flex" align-items="center">
						<Text margin="16px 18px 16px 0px" font="400 18px/160% --fontFamily-googleInter" color="#555" text-align="right">
							Address communication issues by identifying which methods works best for your employees (i.e. email/phone/IM).{"\n\n"}
						</Text>
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
					</Box>
					<Box align-items="center" display="flex">
						<Text color="#555" text-align="right" margin="16px 18px 16px 0px" font="400 18px/160% --fontFamily-googleInter">
							By automatically identifying high performing vs. laggards, you can reduce time spent on developing performance reviews.
						</Text>
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
					</Box>
					<Box display="flex" align-items="center">
						<Text font="400 18px/160% --fontFamily-googleInter" color="#555" text-align="right" margin="16px 18px 16px 0px">
							Leveraging user behavior and activity to provide continuous, automated feedback.
						</Text>
						<Icon
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
						/>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						md-align-items="center"
						padding="0px 0px 0px 20px"
					/>
					{"        "}
					<Image
						width="90%"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22:39:56.097Z"
						md-width="80%"
						object-fit="contain"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22%3A39%3A56.097Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22%3A39%3A56.097Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22%3A39%3A56.097Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22%3A39%3A56.097Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22%3A39%3A56.097Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22%3A39%3A56.097Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22%3A39%3A56.097Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
			<Stack
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
				margin="0px 0px 0px 0px"
				width="100%"
				gap="--cmp-stack-gap-default"
				border-width="0px 0px 1px 0px"
			>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						border-width="0px"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						md-align-items="center"
						padding="0px 0px 0px 20px"
						border-radius="0px"
					/>
					{"        "}
					<Image
						width="90%"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%207.png?v=2020-10-19T22:40:56.844Z"
						md-width="80%"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%207.png?v=2020-10-19T22%3A40%3A56.844Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%207.png?v=2020-10-19T22%3A40%3A56.844Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%207.png?v=2020-10-19T22%3A40%3A56.844Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%207.png?v=2020-10-19T22%3A40%3A56.844Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%207.png?v=2020-10-19T22%3A40%3A56.844Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%207.png?v=2020-10-19T22%3A40%3A56.844Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%207.png?v=2020-10-19T22%3A40%3A56.844Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						padding="20px 60px 0px 20px"
					/>
					{"        "}
					<Text
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
					>
						Identify Process Gaps{"\n\n"}
					</Text>
					<Text
						color="#555"
						lg-font="normal 400 15px/160% Inter, sans-serif"
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
					>
						Not only can you carry out gap analysis and process improvement at individual and team levels by identifying skill gaps, overlap in duties and responsibilities, conflicting goals and accountability, etc. With StaffCop’s advanced OCR and content-based rules, you can also automatically analyze the emotional context in email, IM, and social media conversations. As an example, the rules can help you determine if a talented software developer of your team is consistently engaging in poor client communications. If that is the case, you can quickly transfer the person to a position that is less customer-facing, maximizing the developer’s strengths while also protecting the reputation of the company.
					</Text>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
			<Stack
				gap="--cmp-stack-gap-default"
				border-width="0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
				margin="0px 0px 0px 0px"
				width="100%"
			>
				<StackItem width="50%" display="flex" md-width="100%" md-order="1">
					<Override
						slot="StackItemContent"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-end"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						justify-content="center"
						padding="0px 0px 0px 50px"
					/>
					{"        "}
					<Text
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 30px/43px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						text-align="right"
					>
						Minimize Waste and{" "}
						<br />
						Reduce Cost{"\n\n"}
					</Text>
					<Text
						lg-font="normal 400 15px/160% Inter, sans-serif"
						text-align="right"
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#555"
					>
						With StaffCop, you can effectively track your employee's active and idle time and easily send automated notifications to excessively idle employees. The payroll reports and activity category breakdown allows you to have a precise estimate of how much time the completion of each task requires and set your team’s deliverables accordingly, reducing slack times and overtime hours. Using the software’s device monitoring feature, you can enforce policies like setting a limit on printers to reduce paper and ink waste.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						md-align-items="center"
					/>
					{"        "}
					<Image
						width="90%"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22:41:42.492Z"
						md-width="80%"
						object-fit="contain"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22%3A41%3A42.492Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22%3A41%3A42.492Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22%3A41%3A42.492Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22%3A41%3A42.492Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22%3A41%3A42.492Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22%3A41%3A42.492Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22%3A41%3A42.492Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
			<Stack
				width="100%"
				gap="--cmp-stack-gap-default"
				border-width="0px 0px 1px 0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
				margin="0px 0px 0px 0px"
			>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						md-align-items="center"
						padding="0px 0px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="center"
						justify-content="center"
					/>
					{"        "}
					<Image
						width="90%"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%207.png?v=2020-10-19T22:40:56.844Z"
						md-width="80%"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%207.png?v=2020-10-19T22%3A40%3A56.844Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%207.png?v=2020-10-19T22%3A40%3A56.844Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%207.png?v=2020-10-19T22%3A40%3A56.844Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%207.png?v=2020-10-19T22%3A40%3A56.844Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%207.png?v=2020-10-19T22%3A40%3A56.844Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%207.png?v=2020-10-19T22%3A40%3A56.844Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%207.png?v=2020-10-19T22%3A40%3A56.844Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					{"    "}
				</StackItem>
				<StackItem md-width="100%" width="50%" display="flex">
					<Override
						slot="StackItemContent"
						justify-content="center"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						padding="20px 60px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
					/>
					{"        "}
					<Text
						md-margin="0px 0px 24px 0px"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
					>
						Design Better Management and HR Policies
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#555"
						lg-font="normal 400 15px/160% Inter, sans-serif"
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
						font="--lead"
					>
						<Em
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						/>
						By identifying high-risk behavior, detecting employee violation and user activity outside the normal behavior, and taking appropriate actions, StaffCop helps to develop better management and human resource policies.
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Components.BlockNeed>
			<Override slot="text7">
				Categorize applications and web-sites into productive and unproductive. Set up different configurations for particular users, groups and departments. Compare results.
			</Override>
			<Override slot="text1">
				Information Security
			</Override>
			<Override slot="text3">
				Remote Administration
			</Override>
			<Override slot="text6">
				Employee Monitoring
			</Override>
			<Override slot="text2">
				Receive the required data “on the fly”. Search by keywords and regular expressions. Record sound from microphones to hear what was happening at the moment of interest.
			</Override>
			<Override slot="text4">
				View remote desktop without being notices. Take control over a workstation. Full picture of software and hardware usage. Intensity of usage and registry of states.
			</Override>
		</Components.BlockNeed>
		<Section
			background="#ffffff"
			padding="70px 0 20px 0"
			md-padding="24px 0 40px 0"
			border-width="0px 0px 1px 0px"
			border-style="solid"
			border-color="rgba(255, 255, 255, 0.05)"
		>
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				color="#13212A"
				text-align="center"
				lg-font="normal 700 36px/58px Inter, sans-serif"
				margin="0px 0px 70px 0px"
				display="inline-block"
				letter-spacing="-2%"
				md-font="normal 700 30px/40px Inter, sans-serif"
				md-margin="0px 0px 20px 0px"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				font="--headline2"
			>
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
				>
					Flexible
				</Span>
				{" "}Deployment Options
			</Text>
			<Stack width="100%" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
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
						sm-padding="10px 20px 20px 20px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
						padding="42px 37px 42px 37px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						align-items="flex-start"
						border-width="1px"
						background="#FFFFFF"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						justify-content="flex-start"
						border-radius="6px"
						height="100%"
						border-style="solid"
						md-flex-direction="column"
					>
						<Image width="60px" height="60px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/papaplo.svg?v=2020-10-19T23:24:47.217Z" />
						<Text
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
						>
							Bare Metal
						</Text>
						<Text
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
						>
							Install on bare metal from our ISO image containing Ubuntu 18.04 and StaffCop or install StaffCop packages on existing Ubuntu 18.04.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
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
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						border-radius="6px"
						border-style="solid"
						md-flex-direction="column"
						border-width="1px"
						hover-transform="translateY(-10px)"
						background="#FFFFFF"
						sm-padding="10px 20px 20px 20px"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
						padding="42px 37px 42px 37px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
					>
						<Image width="60px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/zamolk.svg?v=2020-10-19T23:25:24.891Z" height="60px" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Virtual Machine
						</Text>
						<Text
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
						>
							Install on any OS as a virtual machine from our ISO image, use Virtual Box, VMWare, Hyper-V or any other virtualization system. Easy administrating without risking the host machine.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						border-width="1px"
						height="100%"
						hover-transform="translateY(-10px)"
						justify-content="flex-start"
						padding="42px 37px 42px 37px"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						border-style="solid"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-flex-direction="column"
						sm-padding="10px 20px 20px 20px"
						align-items="flex-start"
					>
						<Image width="60px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/cloudd.svg?v=2020-10-19T23:25:21.625Z" height="60px" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Private Cloud
						</Text>
						<Text
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
						>
							Use your own secure, scalable private cloud implementation including AWS, Google Cloud, Azure and more
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Components.Company />
		</Section>
		<Section padding="0px 0 0px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -346px/3610px no-repeat">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Section padding="70px 0 124px 0" lg-padding="70px 0 70px 0">
				<Override slot="SectionContent" max-width="1200px" align-items="center" />
				<Stack
					width="100%"
					margin="0px 0px 0px 0px"
					position="relative"
					align-items="center"
					justify-content="center"
					overflow-y="hidden"
				>
					{"    "}
					<StackItem
						background="#F7F7F7"
						border-radius="6px"
						border-color="rgba(246, 246, 246, 1)"
						border-width="1px"
						border-style="solid"
						width="100%"
						display="flex"
						padding="16px 16px 16px 16px"
					>
						<Override
							slot="StackItemContent"
							position="relative"
							flex-direction="column"
							padding="80px 0px 190px 0px"
							lg-padding="80px 0px 50px 0px"
							sm-padding="50px 0px 50px 0px"
							align-items="center"
							justify-content="center"
							z-index="2"
							md-padding="50px 0px 50px 0px"
							lg-width="100%"
						/>
						{"        "}
						<Text
							display="inline-block"
							text-align="center"
							font="--headline2"
							margin="0px 0px 0px 0px"
							color="#13212A"
							width="80%"
							lg-width="90%"
							md-font="normal 700 30px/40px Inter, sans-serif"
							sm-font="normal 700 20px/30px Inter, sans-serif"
							lg-font="normal 700 36px/40px Inter, sans-serif"
						>
							<Span color="--primary">
								Feature-rich
							</Span>
							, affordable with monthly and annual licensin goptions
						</Text>
						<Box display="flex" margin="42px 0px 67px 0px">
							<Link
								transition="-webkit-transition: all .3s;  transition: all .3s"
								margin="0px 0px 0px 0px"
								position="relative"
								z-index="4"
								sm-font="500 15px/22px Inter, sans-serif"
								color="#ffffff"
								hover-background="#409EEB"
								md-padding="16px 20px 16px 20px"
								sm-padding="16px 10px 16px 10px"
								href="#"
								background="--color-primary"
								text-decoration-line="initial"
								font="--menu"
								box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
								padding="16px 38px 16px 38px"
								border-color="--color-primary"
								border-style="solid"
								border-radius="40px"
								border-width="2px"
							>
								Request demo
							</Link>
						</Box>
						<Image
							right="auto"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							lg-bottom="-306px"
							lg-left="auto"
							lg-top="auto"
							z-index="2"
							width="830px"
							left="auto"
							md-bottom="-282px"
							md-top="auto"
							md-width="80%"
							bottom="-430px"
							height="705.625px"
							lg-height="413.625px"
							sm-bottom="-240px"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/asdasdasdasd.svg?v=2020-10-16T19:04:50.914Z"
							position="absolute"
							lg-right="auto"
							top="auto"
							lg-width="586px"
						/>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
			</Section>
		</Section>
		<Components.Footer>
			<Override slot="text">
				Russia, Novosibirsk,{" "}
				<br />
				st. Kutateladze 4G, 3rd floor.
			</Override>
		</Components.Footer>
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