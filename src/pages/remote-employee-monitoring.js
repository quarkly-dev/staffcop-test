import React from "react";
import theme from "theme";
import { Theme, Text, Link, Image, Section, Hr, Icon, Box, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { BsFillCircleFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"remote-employee-monitoring"} />
		<Helmet>
			<title>
				Remote Employee Monitoring
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
		<Section padding="200px 0 140px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)" md-padding="90px 0 30px 0" lg-padding="140px 0 70px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" sm-align-items="center" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						sm-align-items="center"
						flex-direction="column"
						justify-content="center"
					/>
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 16px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
					>
						Remote Employee Monitoring
					</Text>
					<Text
						font="normal 400 18px/160% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#555"
						md-font="normal 400 16px/140% --fontFamily-googleInter"
						sm-text-align="center"
					>
						Track Your Off-Site Team's Activity for Security and Productivity
					</Text>
					{"    "}
					<Link
						z-index="2"
						border-radius="40px"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						sm-padding="16px 20px 16px 20px"
						md-padding="16px 26px 16px 26px"
						font="600 18px/22px --fontFamily-googleInter"
						background="--color-primary"
						margin="36px 0px 0px 0px"
						hover-background="#409EEB"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						href="/request-demo"
						color="#ffffff"
						text-decoration-line="initial"
						border-width="1px"
						border-style="solid"
						position="relative"
						padding="16px 38px 16px 38px"
						box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						sm-font="600 16px/22px --fontFamily-googleInter"
					>
						Request demo
					</Link>
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" position="relative" />
					{"        "}
					<Image
						top="-110px"
						lg-top="-15px"
						md-top="0px"
						md-right="-70px"
						sm-position="relative"
						sm-bottom="auto"
						sm-top="auto"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15:07:09.010Z"
						md-width="400px"
						position="absolute"
						left="auto"
						lg-width="500px"
						width="803px"
						right="-115px"
						sm-right="auto"
						bottom="auto"
						lg-position="absolute"
						lg-right="-50px"
						sm-left="auto"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section background="#FFFFFF" padding="24px 0 0px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem width="70%" display="flex" sm-width="100%" nout-width="100%">
					{"        "}
					<Text
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
						font="normal 700 32px/140% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
					>
						Insights and Security for Remote Employees with StaffCop
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="70%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" align-items="center" flex-direction="column" />
					{"        "}
					<Text
						text-align="justify"
						font="400 18px/28px --fontFamily-googleInter"
						margin="1px 0px 30px 0px"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						sm-text-align="center"
						display="inline-block"
						color="#555"
						md-width="100%"
					>
						Remote work in all sectors has been steadily increasing over the years. According to a Gallup report, between 2012 and 2016, the number of American employees working remotely had grown by 10 percent. This rise is not restricted to the US; other studies show it is a global phenomenon - an IWG study found that 70 percent of professionals around the world work away from the office at least once a week, and 53 percent at least half of the week.
						<br />
						<br />
						Gone are the days when remote work was only appealing to employees alone. Today many companies have discovered the benefits of this work model and are now integrating ‘remote-first and ‘agile team’ philosophies into their business operations – including StaffCop. In fact, according to a 2019 study by Owl Labs, 16 percent of global companies are fully remote, and 40 percent are hybrid (companies that offer both remote and in-office options).
					</Text>
					<Text
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						font="400 18px/28px --fontFamily-googleInter"
						sm-text-align="center"
						text-align="justify"
						margin="1px 0px 30px 0px"
					>
						Some of the factors driving the adoption of remote working models include: remote work boosts productivity while significantly reducing the costs of office space and other accouterments.{" "}
						<br />
						<br />
						However, like any other system, remote work is not without its challenges: communication issues, loss of productivity due to lack of supervision, feelings of alienation, the difficulty of managing accountability, high turnover, the difficulty of tracking project, timeline and payroll, security concerns - all of which diminish the benefits of remote work.{" "}
					</Text>
					<Text
						display="inline-block"
						md-font="400 14px/20px --fontFamily-googleInter"
						width="100%"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
						font="400 18px/28px --fontFamily-googleInter"
						margin="1px 0px 30px 0px"
						color="#555"
					>
						Fortunately, with the right strategy and tools, you can effectively monitor your remote workers to identify and tackle these issues to fully reap the benefits of a distributed team.
					</Text>
					{"  "}
					<Hr width="98%" margin="50px 0px 0px 0px" border-color="rgba(237, 237, 237, 1)" />
					{"  "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 12px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack width="100%" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem display="flex" sm-width="100%" nout-width="100%" width="70%">
					{"        "}
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
						Insights and Security for Remote Employees with StaffCop
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem sm-width="100%" nout-width="100%" width="70%" display="flex">
					<Override slot="StackItemContent" align-items="center" flex-direction="column" />
					{"        "}
					<Text
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						sm-text-align="center"
						font="400 18px/28px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						md-width="100%"
						text-align="justify"
						display="inline-block"
						color="#555"
					>
						Track time and engagement, manage projects, reduce costs and ensure the overall productivity of your remote team with StaffCop’s all-inclusive remote employee monitoring solution. Additionally, with StaffCop’s automated Policy & Rules Engine you can better defend your organization from theft, sabotage, and other threats, either intentional or accidental.  StaffCop’s remote user monitoring allows you to:{" "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="75%" display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box margin="0px 0px 18 0px" display="flex">
						<Icon
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
						/>
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							Monitor virtually all remote employee activity and behavior.
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="18px 0px 0px 0px"
							category="bs"
						/>
						<Text font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px">
							Manage schedule, track time, projects, tasks, and costs.{" "}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
						/>
						<Text font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px">
							Use comparative metrics like active vs.
idle time, productive vs. unproductive time, session vs. work time to track employee engagement.
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="18px 0px 0px 0px"
						/>
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							Remotely view and control employee desktop.{" "}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
						/>
						<Text font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px">
							Implement security policy and rules even when the employee is offline.{" "}
						</Text>
					</Box>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 70px 0" sm-padding="24px 0 50px 0">
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
					<Box
						background="#FFFFFF"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-width="1px"
						border-style="solid"
						display="flex"
						align-items="flex-start"
						padding="42px 37px 42px 37px"
						height="100%"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						flex-direction="column"
						border-radius="6px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						justify-content="flex-start"
					>
						<Text
							border-width="1px"
							justify-content="center"
							text-align="center"
							width="48px"
							font="700 18px/22px --fontFamily-googleInter"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-color="rgba(255, 255, 255, 0.05)"
							border-radius="40px"
							border-style="solid"
							align-items="center"
							display="block"
							margin="0px 0px 0px 0px"
							color="#ffffff"
						>
							1
						</Text>
						<Text
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
						>
							All-round Activity Monitoring
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							StaffCop not only monitors all user activity over endpoints, network, servers but also the Cloud covering of over 22 system objects, including web, apps, email, files etc., and on-screen content in real-time.
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
						border-width="1px"
						background="#FFFFFF"
						sm-padding="20px 20px 20px 20px"
						height="100%"
						hover-transform="translateY(-10px)"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-style="solid"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-flex-direction="column"
						justify-content="flex-start"
					>
						<Text
							border-style="solid"
							justify-content="center"
							text-align="center"
							width="48px"
							display="block"
							color="#ffffff"
							padding="13px 0px 13px 0px"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							font="700 18px/22px --fontFamily-googleInter"
							background="--color-primary"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="0px 0px 0px 0px"
							border-radius="40px"
							border-width="1px"
						>
							2
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Online and Offline Tracking
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							StaffCop Agent continues to monitor activity and enforce admin policies and rules even when the user is offline.
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
						align-items="flex-start"
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
					/>
					{"        "}
					<Box
						padding="42px 37px 42px 37px"
						height="100%"
						align-items="flex-start"
						border-radius="6px"
						border-width="1px"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						border-style="solid"
						md-display="flex"
						flex-direction="column"
						justify-content="flex-start"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
					>
						<Text
							border-radius="40px"
							border-width="1px"
							border-style="solid"
							display="block"
							align-items="center"
							justify-content="center"
							margin="0px 0px 0px 0px"
							color="#ffffff"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							font="700 18px/22px --fontFamily-googleInter"
							width="48px"
							text-align="center"
							background="--color-primary"
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
							Productivity Analysis
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							StaffCop enables you to choose which applications and sites you consider productive and offers administrators thorough reports on how employees spend their time. It also allows you to set up automated alerts to discourage unproductive activity and excessive idleness among your employees.{" "}
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
						align-items="flex-start"
						border-style="solid"
						border-width="1px"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						padding="42px 37px 42px 37px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						border-radius="6px"
						flex-direction="column"
						justify-content="flex-start"
						md-display="flex"
					>
						<Text
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							display="block"
							justify-content="center"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							border-width="1px"
							border-style="solid"
							width="48px"
							margin="0px 0px 0px 0px"
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
							Improved Communications
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							In an effort to improve communications, StaffCop offers on-time feedback on employee behavior with real-time alerts and notifications.
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
						flex-direction="column"
						justify-content="flex-start"
						height="100%"
						padding="42px 37px 42px 37px"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						border-radius="6px"
						background="#FFFFFF"
						align-items="flex-start"
						border-style="solid"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
						display="flex"
						border-width="1px"
					>
						<Text
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							justify-content="center"
							text-align="center"
							color="#ffffff"
							background="--color-primary"
							align-items="center"
							display="block"
							width="48px"
							margin="0px 0px 0px 0px"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							border-width="1px"
							font="700 18px/22px --fontFamily-googleInter"
						>
							5
						</Text>
						<Text
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
						>
							Schedule Management
						</Text>
						<Text
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
						>
							StaffCop helps organizations manage their employee's schedules by creating precise reports for employees working several shifts and placing holidays or sick leaves on the calendar.
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
						border-width="1px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						justify-content="flex-start"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						sm-padding="20px 20px 20px 20px"
						display="flex"
						padding="42px 37px 42px 37px"
						border-color="rgba(255, 255, 255, 0.05)"
						align-items="flex-start"
						border-radius="6px"
						border-style="solid"
						background="#FFFFFF"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						flex-direction="column"
					>
						<Text
							font="700 18px/22px --fontFamily-googleInter"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							color="#ffffff"
							margin="0px 0px 0px 0px"
							border-radius="40px"
							display="block"
							justify-content="center"
							text-align="center"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							width="48px"
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
							<Span
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								overflow-wrap="normal"
								word-break="normal"
							>
								Security Policy and Rules Enforcement
							</Span>
						</Text>
						<Text
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
						>
							The rules engine is a powerful tool that allows you to create rules to define what constitutes insider threats and takes immediate action when rule violation is detected.
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
						background="#FFFFFF"
						md-flex-direction="column"
						border-style="solid"
						hover-transform="translateY(-10px)"
						md-display="flex"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						align-items="flex-start"
						padding="42px 37px 42px 37px"
						border-width="1px"
						justify-content="flex-start"
						sm-padding="20px 20px 20px 20px"
						display="flex"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						border-color="rgba(255, 255, 255, 0.05)"
						flex-direction="column"
						border-radius="6px"
						height="100%"
					>
						<Text
							color="#ffffff"
							justify-content="center"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							display="block"
							width="48px"
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							padding="13px 0px 13px 0px"
							border-width="1px"
							border-style="solid"
							text-align="center"
							background="--color-primary"
						>
							7
						</Text>
						<Text
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
						>
							Live View, Remote Control (RDP) and History Playback
						</Text>
						<Text
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
						>
							The live view feature allows you to see your employees’ desktops in real-time and, if needed, take full remote control of their systems to prevent malicious activities. With history playback, you can view the past activity and collate evidence for forensic and investigation purposes.
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
						padding="42px 37px 42px 37px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						border-color="rgba(255, 255, 255, 0.05)"
						flex-direction="column"
						align-items="flex-start"
						border-style="solid"
						background="#FFFFFF"
						hover-transform="translateY(-10px)"
						md-display="flex"
						sm-padding="20px 20px 20px 20px"
						display="flex"
						border-radius="6px"
						border-width="1px"
						md-flex-direction="column"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						justify-content="flex-start"
						height="100%"
					>
						<Text
							border-color="rgba(255, 255, 255, 0.05)"
							color="#ffffff"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							width="48px"
							font="700 18px/22px --fontFamily-googleInter"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							align-items="center"
							display="block"
							justify-content="center"
							text-align="center"
							background="--color-primary"
							border-width="1px"
							border-style="solid"
							margin="0px 0px 0px 0px"
						>
							8
						</Text>
						<Text
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
						>
							<Span
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								overflow-wrap="normal"
								word-break="normal"
							>
								Expenses Tracking
							</Span>
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
				{"    "}
			</Stack>
		</Section>
		<Section background="#F8F8F9" padding="100px 0 70px 0" sm-padding="50px 0 30px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				text-align="center"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 36px/40px Inter, sans-serif"
				margin="0px 0px 45px 0px"
				display="inline-block"
				color="#13212A"
				letter-spacing="-2%"
				md-font="normal 700 30px/40px Inter, sans-serif"
				font="--headline2"
			>
				Industry Statistics Show the Need for{" "}
				<br />
				<Span color="--primary">
					Insider Threat Prevention Solutions
				</Span>
			</Text>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
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
						md-flex-direction="column"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
						align-items="flex-start"
						padding="36px 36px 36px 36px"
						border-style="solid"
						background="#FFFFFF"
						hover-transform="translateY(-10px)"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
						sm-padding="20px 20px 20px 20px"
						display="flex"
						justify-content="flex-start"
						border-width="1px"
						height="100%"
						border-radius="6px"
						border-color="rgba(255, 255, 255, 0.05)"
					>
						<Text
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
						>
							Remote work is commonplace among companies globally
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							A 2019 global study reveals 70% of professionals work remotely at least once a week, while 53% work remotely for at least half of the week—source: IWG.
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							sm-margin="0px 0px 0px 0px"
						>
							Globally, 70% of People Work Remotely At least One Day in a Week.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
					/>
					{"        "}
					<Box
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						padding="36px 36px 36px 36px"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						background="#FFFFFF"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						border-radius="6px"
						border-width="1px"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						border-style="solid"
						sm-padding="20px 20px 20px 20px"
						display="flex"
					>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Yet, many organizations lack tools and policy for remote work
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							While remote work is becoming more prevalent on an individual level, organizations still have much work to do to support distributed teams. Source: Upwork
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							sm-margin="0px 0px 0px 0px"
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
								57%{" "}
							</Span>
							of Companies Lack a Remote Work Policy
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="50%" md-width="100%">
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
						border-width="1px"
						display="flex"
						flex-direction="column"
						background="#FFFFFF"
						height="100%"
						md-display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						border-style="solid"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="36px 36px 36px 36px"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
					>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Remote worker productivity is hinged on engagement
						</Text>
						<Text
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
						>
							According to a study by igloo, a significant number (70%) of remote employees feel left out of the workplace due to a lack of knowledge sharing and communication practices.
						</Text>
						<Text
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							sm-margin="0px 0px 0px 0px"
							font="--lead"
						>
							70% Remote Employees Feel Neglected in Workplace
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
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						justify-content="flex-start"
						padding="36px 36px 36px 36px"
						border-width="1px"
						border-style="solid"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						flex-direction="column"
						border-radius="6px"
						align-items="flex-start"
						hover-transform="translateY(-10px)"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						background="#FFFFFF"
					>
						<Text
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
						>
							Further, studies show that unattended remote employees can cause security and privacy risks.
						</Text>
						<Text
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 18px 0px"
						>
							A Cisco report found that more than 75% of employees don’t bother with privacy measures when working remotely in a public place.{" "}
						</Text>
						<Text
							sm-font="normal 400 16px/140% Inter, sans-serif"
							sm-margin="0px 0px 0px 0px"
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
						>
							75% of Remote Employees are not Concerned About Privacy Risks
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section sm-padding="24px 0 50px 0" background="#F8F8F9" padding="70px 0 90px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				font="--headline2"
				display="inline-block"
				letter-spacing="-2%"
				text-align="center"
				lg-font="normal 700 36px/40px Inter, sans-serif"
				margin="0px 0px 45px 0px"
				color="#13212A"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				width="70%"
			>
				Types of employee{" "}
				<Span color="--primary">
					monitoring software
				</Span>
			</Text>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						border-radius="6px"
						position="relative"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
						sm-padding="30px 36px 30px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						lg-padding="68px 36px 30px 36px"
						height="100%"
						padding="40px 36px 40px 36px"
						border-width="1px"
						justify-content="center"
						align-items="flex-start"
					>
						<Override
							slot="Link"
							width="0px"
							border-radius="50px"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							top="0px"
							left="0px"
							height="0px"
							display="none"
							text-decoration-line="initial"
							bottom="0px"
							right="0px"
						/>
						<Override
							slot="Before Text2"
							margin="0px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
							font="normal 600 24px/29px --fontFamily-googleInter"
						>
							Smart rules & automated alerts
						</Override>
						<Override slot="Before Text2 :default">
							Smart rules & automated alerts
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							display="none"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							transform="translateY(-30px)"
							width="48px"
							align-items="center"
							height="48px"
							text-align="center"
						/>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Groupxzcxzc.svg?v=2020-10-28T21:03:36.802Z" margin="-20px 0px 36px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem lg-width="50%" width="33.3333%" display="flex" md-width="100%">
					<Override slot="StackItemContent" padding="0px 0px 0px 0px" flex-direction="column" />
					{"        "}
					<Components.Knopka2
						position="relative"
						align-items="flex-start"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						height="100%"
						flex-direction="column"
						lg-padding="68px 36px 30px 36px"
						border-width="1px"
						display="flex"
						justify-content="center"
						border-radius="6px"
						sm-padding="30px 36px 30px 36px"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-color="rgba(255, 255, 255, 0.05)"
					>
						<Override
							slot="Link :hover"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							justify-content="center"
							background="#1465FF"
							transform="translateY(-30px)"
							width="48px"
							align-items="center"
							display="none"
							height="48px"
						/>
						<Override
							slot="Link"
							bottom="0px"
							width="0px"
							border-radius="50px"
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							text-decoration-line="initial"
							right="0px"
							height="0px"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							top="0px"
							left="0px"
						/>
						<Override
							slot="Before Text2"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
						>
							Live view & history playback
						</Override>
						<Override slot="Before Text2 :default">
							Live view & history playback
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Image margin="-20px 0px 36px 0px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/cvbcvbvcbcv.svg?v=2020-10-28T21:03:36.801Z" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem md-width="100%" lg-width="50%" width="33.3333%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						position="relative"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						border-width="1px"
						display="flex"
						justify-content="center"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						align-items="flex-start"
						sm-padding="30px 36px 30px 36px"
						height="100%"
						flex-direction="column"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
					>
						<Override
							slot="Link"
							border-radius="50px"
							display="none"
							color="#ffffff"
							text-decoration-line="initial"
							left="0px"
							height="0px"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							top="0px"
							bottom="0px"
							right="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
						>
							instant message monitoring
						</Override>
						<Override slot="Before Text2 :default">
							instant message monitoring
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							width="48px"
							align-items="center"
							background="#1465FF"
							text-align="center"
							transform="translateY(-30px)"
							display="none"
							height="48px"
							justify-content="center"
						/>
						<Image margin="-20px 0px 36px -10px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Messages,%20Chat.18%201.svg?v=2020-10-28T15:43:13.520Z" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						display="flex"
						flex-direction="column"
						border-radius="6px"
						position="relative"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						height="100%"
						justify-content="start"
						padding="40px 36px 40px 36px"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						lg-padding="68px 36px 30px 36px"
						border-color="rgba(255, 255, 255, 0.05)"
						background="#FFFFFF"
						align-items="flex-start"
						border-width="1px"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							align-items="center"
							display="none"
							text-align="center"
							transform="translateY(-30px)"
							width="48px"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Override
							slot="Link"
							top="0px"
							bottom="0px"
							left="0px"
							height="0px"
							width="0px"
							border-radius="50px"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							right="0px"
							display="none"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Keystroke logging
						</Override>
						<Override slot="Before Text2 :default">
							Keystroke logging
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/gjkhgkh.svg?v=2020-10-28T21:03:36.833Z" margin="-3px 0px 39px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						position="relative"
						padding="40px 36px 40px 36px"
						justify-content="start"
						align-items="flex-start"
						display="flex"
						flex-direction="column"
						background="#FFFFFF"
						lg-padding="68px 36px 30px 36px"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						height="100%"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							display="none"
							height="48px"
							transform="translateY(-30px)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							width="48px"
							align-items="center"
							justify-content="center"
							background="#1465FF"
						/>
						<Override
							slot="Link"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							top="0px"
							right="0px"
							height="0px"
							border-radius="50px"
							display="none"
							text-decoration-line="initial"
							bottom="0px"
							left="0px"
							width="0px"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Website monitoring
						</Override>
						<Override slot="Before Text2 :default">
							Website monitoring
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image margin="-15px 0px 33px 0px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/oiuioioui.svg?v=2020-10-28T21:03:36.804Z" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem display="flex" md-width="100%" lg-width="50%" width="33.3333%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						border-width="1px"
						display="flex"
						padding="40px 36px 40px 36px"
						position="relative"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						sm-padding="30px 36px 30px 36px"
						height="100%"
						justify-content="start"
						background="#FFFFFF"
						align-items="flex-start"
						flex-direction="column"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
					>
						<Override
							slot="Link"
							height="0px"
							border-radius="50px"
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							width="0px"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
						/>
						<Override
							slot="Before Text2"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
						>
							Email monitoring
						</Override>
						<Override slot="Before Text2 :default">
							Email monitoring
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							display="none"
							height="48px"
							text-align="center"
							align-items="center"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							transform="translateY(-30px)"
						/>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(6).svg?v=2020-10-28T15:43:13.528Z" margin="-20px 0px 38px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						align-items="flex-start"
						height="100%"
						padding="40px 36px 40px 36px"
						sm-padding="30px 36px 30px 36px"
						justify-content="start"
						flex-direction="column"
						background="#FFFFFF"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						border-width="1px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						position="relative"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						transition="-webkit-transition: all .3s;  transition: all .3s"
					>
						<Override
							slot="Link :default"
							height="0px"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
						/>
						<Override
							slot="Link :hover"
							height="48px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							transform="translateY(-30px)"
							background="#1465FF"
							text-align="center"
							width="48px"
							align-items="center"
							display="none"
							justify-content="center"
						/>
						<Override
							slot="Link"
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							height="0px"
							width="0px"
							border-radius="50px"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							file transfer tracking
						</Override>
						<Override slot="Before Text2 :default">
							file transfer tracking
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(7).svg?v=2020-10-28T15:43:13.528Z" margin="-14px 0px 32px 1px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem md-width="100%" lg-width="50%" width="33.3333%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						padding="40px 36px 40px 36px"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						lg-padding="68px 36px 30px 36px"
						position="relative"
						background="#FFFFFF"
						border-radius="6px"
						sm-padding="30px 36px 30px 36px"
						height="100%"
						justify-content="start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						border-color="rgba(255, 255, 255, 0.05)"
					>
						<Override
							slot="Link :default"
							width="0px"
							height="0px"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
						/>
						<Override
							slot="Link :hover"
							background="#1465FF"
							display="none"
							height="48px"
							justify-content="center"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-30px)"
							width="48px"
							align-items="center"
						/>
						<Override
							slot="Link"
							left="0px"
							right="0px"
							width="0px"
							border-radius="50px"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							text-decoration-line="initial"
							top="0px"
							display="none"
							color="#ffffff"
							bottom="0px"
							height="0px"
						/>
						<Override
							slot="Before Text2"
							margin="30px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
							font="normal 600 24px/29px --fontFamily-googleInter"
						>
							Remote desktop control
						</Override>
						<Override slot="Before Text2 :default">
							Remote desktop control
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/vnb14dasd.svg?v=2020-10-28T21:03:36.828Z" margin="-8px 0px 44px 1px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						sm-padding="30px 36px 30px 36px"
						justify-content="start"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						position="relative"
						border-color="rgba(255, 255, 255, 0.05)"
						background="#FFFFFF"
						height="100%"
						padding="40px 36px 40px 36px"
						border-width="1px"
					>
						<Override
							slot="Link"
							color="#ffffff"
							bottom="0px"
							right="0px"
							height="0px"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							text-decoration-line="initial"
							top="0px"
							left="0px"
							width="0px"
							border-radius="50px"
							display="none"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Application monitoring
						</Override>
						<Override slot="Before Text2 :default">
							Application monitoring
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							transform="translateY(-30px)"
							width="48px"
							align-items="center"
							display="none"
							height="48px"
							justify-content="center"
							text-align="center"
						/>
						<Image margin="-8px 0px 44px 1px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/uyiuiuyiyu.svg?v=2020-10-28T21:03:36.822Z" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section lg-padding="30px 0 30px 0" md-padding="30px 0 10px 0" padding="40px 0 70px 0" background="#F8F8F9">
			<Override
				slot="SectionContent"
				max-width="1170px"
				align-items="center"
				border-width="1px"
				border-style="solid"
				box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
				sm-padding="30px 0px 0px 0px"
				border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
				padding="60px 0px 0px 0px"
				background="#ffffff"
				border-radius="6px"
				border-color="#ffffff"
			/>
			<Stack
				border-width="0px 0px 1px 0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
				margin="0px 0px 0px 0px"
				width="100%"
				gap="--cmp-stack-gap-default"
			>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						md-align-items="center"
						padding="0px 0px 0px 20px"
						border-radius="0px"
						border-width="0px"
					/>
					{"        "}
					<Image
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22:24:26.269Z"
						md-width="80%"
						width="82%"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						padding="0px 60px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
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
						Get Complete Visibility on All Remote User Activity{"\n\n"}
					</Text>
					<Text
						lg-font="normal 400 15px/160% Inter, sans-serif"
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#555"
					>
						StaffCop is the right solution for you if you want to have complete visibility into the activities of all parties connected to your systems. It visually records every action that all remote users – employees, third-party vendors, and external contractors – make, regardless of the platform they are using - local machine, remote domain, servers, or terminal servers. All system objects like: web, apps, email, file transfers can be tracked in real-time by StaffCop whether they are online or offline.  Each object can be structured to take into consideration what needs to be monitored and who has access to the monitored records, allowing for instant administrative oversight in respect to all user activity while complying with any privacy requirements.
					</Text>
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
				<StackItem md-order="1" width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						border-width="0px"
						flex-direction="column"
						md-order="1"
						padding="0px 20px 0px 60px"
						align-items="flex-start"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						justify-content="center"
						border-radius="0px"
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
						Increase Productivity of Your Off-Site Workforce{"\n\n"}
					</Text>
					<Text
						color="#555"
						lg-font="normal 400 15px/160% Inter, sans-serif"
						text-align="right"
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
					>
						Besides tracking on-premise, StaffCop also monitors remote employee activity throughout the day, then aggregate that data to produce detailed metrics, such as:
					</Text>
					<Box display="flex" margin="0px 0px 18px 0px">
						<Text
							margin="0px 18px 0px 0px"
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							text-align="right"
						>
							An analysis of work-related vs. non-work-related tasks
						</Text>
						<Icon
							padding="8px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
					</Box>
					<Box margin="0px 0px 18px 0px" display="flex">
						<Text
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							text-align="right"
							margin="0px 18px 0px 0px"
						>
							Minute-to-minute trend graphs displaying how much time is spent on individual projects.
						</Text>
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="8px 0px 0px 0px"
						/>
					</Box>
					<Box display="flex" margin="0px 0px 18px 0px">
						<Text
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							text-align="right"
							margin="0px 18px 0px 0px"
						>
							Prioritize critical projects and ensure your team is focused on them.
						</Text>
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="8px 0px 0px 0px"
						/>
					</Box>
					<Box margin="0px 0px 18px 0px" display="flex">
						<Text
							text-align="right"
							margin="0px 18px 0px 0px"
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
						>
							Utilize various productivity reports to monitor progress and fine-tune tasks to ensure they meet their productivity goals.
						</Text>
						<Icon
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="8px 0px 0px 0px"
							category="bs"
						/>
					</Box>
					{"    "}
				</StackItem>
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
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%204.png?v=2020-10-19T22:32:34.380Z"
						md-width="80%"
						object-fit="contain"
						width="100%"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%204.png?v=2020-10-19T22%3A32%3A34.380Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%204.png?v=2020-10-19T22%3A32%3A34.380Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%204.png?v=2020-10-19T22%3A32%3A34.380Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%204.png?v=2020-10-19T22%3A32%3A34.380Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%204.png?v=2020-10-19T22%3A32%3A34.380Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%204.png?v=2020-10-19T22%3A32%3A34.380Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%204.png?v=2020-10-19T22%3A32%3A34.380Z&quality=85&w=3200 3200w"
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
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%205.png?v=2020-10-19T22:35:48.644Z"
						md-width="80%"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%205.png?v=2020-10-19T22%3A35%3A48.644Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%205.png?v=2020-10-19T22%3A35%3A48.644Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%205.png?v=2020-10-19T22%3A35%3A48.644Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%205.png?v=2020-10-19T22%3A35%3A48.644Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%205.png?v=2020-10-19T22%3A35%3A48.644Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%205.png?v=2020-10-19T22%3A35%3A48.644Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%205.png?v=2020-10-19T22%3A35%3A48.644Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					{"    "}
				</StackItem>
				<StackItem display="flex" md-width="100%" width="50%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="center"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						padding="20px 60px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
					/>
					{"        "}
					<Text
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
					>
						Reduce Administrative Overhead{"\n\n"}
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
						StaffCop's embedded administrative features automate many repetitive but essential tasks like setting up schedules and tracking attendance, breaks, sick leaves, late shifts, absence, etc.
					</Text>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
						/>
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							It also allows you to track the time, performance, and expenses of projects handled by remote employees and contractors, reducing the need for manual invoicing and oversight.{" "}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
						/>
						<Text color="#555" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter">
							By automatically identifying tasks based on employee apps and web usage, you can reduce project supervision.{" \n\n"}
						</Text>
					</Box>
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
				<StackItem display="flex" md-width="100%" md-order="1" width="50%">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 50px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						justify-content="center"
					/>
					{"        "}
					<Text
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						text-align="right"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
					>
						Increase Remote Worker Engagement{"\n\n"}
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
						StaffCop helps you build your own KPIs and metrics to determine remote employee engagement: hours home-based workers are active, time spent on social media, and volume of emails received. It also enables you to track employee performance over a period of time and see if their engagement is decreasing, identify the cause of disengagement and then systematically address them. For example:
					</Text>
					<Box display="flex" margin="0px 0px 18px 0px">
						<Text
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							text-align="right"
							margin="0px 18px 0px 0px"
							font="400 18px/160% --fontFamily-googleInter"
						>
							You can swiftly address communication issues by identifying which methods work best for your remote team (i.e., email/phone/IM){" "}
						</Text>
						<Icon
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="8px 0px 0px 0px"
							category="bs"
						/>
					</Box>
					<Box display="flex" margin="0px 0px 18px 0px">
						<Text
							text-align="right"
							margin="0px 18px 0px 0px"
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
						>
							Identify high-performing employees vs. laggards automatically to reduce time spent on developing performance reviews.
						</Text>
						<Icon
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="8px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
						/>
					</Box>
					<Box display="flex" margin="0px 0px 18px 0px">
						<Text
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							text-align="right"
							margin="0px 18px 0px 0px"
						>
							Prioritize essential projects and ensure your team is focused on them.
						</Text>
						<Icon
							padding="8px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
					</Box>
					<Box display="flex" margin="0px 0px 18px 0px">
						<Text
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							text-align="right"
							margin="0px 18px 0px 0px"
							font="400 18px/160% --fontFamily-googleInter"
						>
							Also, the system provides continuous, automated feedback based on employee behavior and activity.
						</Text>
						<Icon
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="8px 0px 0px 0px"
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
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22:39:56.097Z"
						md-width="80%"
						object-fit="contain"
						width="90%"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22%3A39%3A56.097Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22%3A39%3A56.097Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22%3A39%3A56.097Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22%3A39%3A56.097Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22%3A39%3A56.097Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22%3A39%3A56.097Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22%3A39%3A56.097Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
			<Stack
				border-width="0px 0px 1px 0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
				margin="0px 0px 0px 0px"
				width="100%"
				gap="--cmp-stack-gap-default"
			>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						md-align-items="center"
						padding="0px 0px 0px 20px"
						border-radius="0px"
						border-width="0px"
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
						padding="20px 60px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
					/>
					{"        "}
					<Text
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
					>
						Optimize Workflows and Reduce Cost{"\n\n"}
					</Text>
					<Text
						sm-text-align="center"
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#555"
						lg-font="normal 400 15px/160% Inter, sans-serif"
						nout-font="normal 400 16px/160% Inter, sans-serif"
					>
						StaffCop allows you to track employee active vs. idle time and send unproductive remote workers automated notifications. With payroll reports and activity category breakdown, you can develop a precise estimate of how much time each type of work takes and configure your team's deliverables accordingly, reducing idle times and overtime hours. Using the software's device monitoring feature, you can set a limit on a printer to reduce paper, ink waste and implement similar policies.{" "}
					</Text>
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
				border-width="0px"
			>
				<StackItem width="50%" display="flex" md-width="100%" md-order="1">
					<Override
						slot="StackItemContent"
						justify-content="center"
						padding="0px 0px 0px 50px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-end"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
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
						Detect Suspicious Behavior with Automated Policy & Rules
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
						Once you've determined what constitutes dangerous or harmful user behavior, StaffCop's sophisticated anomaly engine will automatically detect when an employee deviates from their normal parameters or exceeds acceptable risk levels. The solution can detect anomalies in applications, emails, and networks, file activities and immediately notify administrators of harmful user activity. It can also lock out users or take remote control of the compromised system before any malicious or fraudulent attempts are made.
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
						object-fit="contain"
						width="90%"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22:41:42.492Z"
						md-width="80%"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22%3A41%3A42.492Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22%3A41%3A42.492Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22%3A41%3A42.492Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22%3A41%3A42.492Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22%3A41%3A42.492Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22%3A41%3A42.492Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22%3A41%3A42.492Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
			<Stack
				margin="0px 0px 0px 0px"
				width="100%"
				gap="--cmp-stack-gap-default"
				border-width="0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
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
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
					>
						Track and Audit Remote Logins and Network Activity{"\n\n"}
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
						StaffCop offers network monitoring tools that facilitate the monitoring of network traffic for all remote users connected to your business network, their identity, location, time, and exact IP ports utilized for the connection. Alerting administrators when suspicious remote user activity is detected is another function of these automated rules. For instance, repeated connection attempts, use of suspicious connection protocols, initiation of specific root processes, login sessions at abnormal hours, etc. Network monitoring allows administrators to block connections or data transmissions from a remote user for individual IP addresses or computers.
					</Text>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Components.BlockNeed>
			<Override slot="text4">
				View remote desktop without being notices. Take control over a workstation. Full picture of software and hardware usage. Intensity of usage and registry of states.
				<Span
					color="rgba(255, 255, 255, 0)"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					.
				</Span>
			</Override>
			<Override slot="link2" />
			<Override slot="text7">
				Categorize applications and web-sites into productive and unproductive. Set up different configurations for particular users, groups and departments. Compare results.
				<Span
					color="rgba(255, 255, 255, 0)"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					.
				</Span>
			</Override>
			<Override slot="link" />
			<Override slot="link1">
				Try for free
			</Override>
			<Override slot="text1">
				Information Security
			</Override>
			<Override slot="text2">
				Receive the required data “on the fly”. Search by keywords and regular expressions. Record sound from microphones to hear what was happening at the moment of interest.
			</Override>
			<Override slot="text3">
				Remote Administration
			</Override>
			<Override slot="text6">
				Employee Monitoring
			</Override>
		</Components.BlockNeed>
		<Section
			border-color="rgba(255, 255, 255, 0.05)"
			background="#ffffff"
			padding="70px 0 20px 0"
			md-padding="24px 0 40px 0"
			border-width="0px 0px 1px 0px"
			border-style="solid"
		>
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				font="--headline2"
				display="inline-block"
				color="#13212A"
				letter-spacing="-2%"
				text-align="center"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 36px/58px Inter, sans-serif"
				margin="0px 0px 70px 0px"
				md-font="normal 700 30px/40px Inter, sans-serif"
				md-margin="0px 0px 20px 0px"
			>
				<Span
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
					overflow-wrap="normal"
					word-break="normal"
				>
					Flexible
				</Span>
				{" "}Deployment Options
			</Text>
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"    "}
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
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						justify-content="flex-start"
						display="flex"
						align-items="flex-start"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						flex-direction="column"
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
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
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
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						justify-content="flex-start"
						padding="42px 37px 42px 37px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						align-items="flex-start"
						hover-transform="translateY(-10px)"
						md-display="flex"
						border-radius="6px"
						border-width="1px"
						flex-direction="column"
					>
						<Image width="60px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/zamolk.svg?v=2020-10-19T23:25:24.891Z" height="60px" />
						<Text
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
						>
							Virtual Machine
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
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
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						sm-padding="20px 20px 20px 20px"
						align-items="flex-start"
						border-width="1px"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						border-radius="6px"
						padding="42px 37px 42px 37px"
						md-flex-direction="column"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
						border-style="solid"
						height="100%"
						justify-content="flex-start"
					>
						<Image height="60px" width="60px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/cloudd.svg?v=2020-10-19T23:25:21.625Z" />
						<Text
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
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
			<Components.Feature>
				<Override slot="text">
					Feature-rich, affordable with annual and perpetual licensing options
				</Override>
			</Components.Feature>
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