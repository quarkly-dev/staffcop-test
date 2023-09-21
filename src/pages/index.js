import React from "react";
import theme from "theme";
import { Theme, Text, Link, Image, Section, Box, Span, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, SocialMedia } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				StaffCop Enterprise
			</title>
			<meta name={"description"} content={"StaffCop provides a unique, fully integrated solution that focuses on detection and response to insider threats through a combination of advanced behavioral analysis and context-rich logging of insider activity.\n\n"} />
			<meta property={"og:title"} content={"StaffCop Enterprise"} />
			<meta property={"og:description"} content={"StaffCop provides a unique, fully integrated solution that focuses on detection and response to insider threats through a combination of advanced behavioral analysis and context-rich logging of insider activity.\n\n"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/gfjkjkljkl.nbmbv.png?v=2020-11-04T15:35:13.162Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/android-chrome-512x512.png?v=2023-08-25T04:37:47.288Z"} />
			<meta name={"msapplication-TileColor"} content={"#1465FF"} />
		</Helmet>
		<Components.Header />
		<Components.EmbedHTML />
		<Section
			padding="180px 0 100px 0"
			background="linear-gradient(180deg,rgba(2, 2, 2, 0.22) 0%,rgba(02, 02, 02, 0.35) 46.88%,#020202 100%),#020202 url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/ebuchayasetka.svg?v=2020-10-21T00:06:31.897Z) center -693px/cover repeat"
			hd-background="#020202 url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/ebuchayasetka.svg?v=2020-10-21T00:06:31.897Z) center -693px/2060px repeat"
			width="100%"
			lg-padding="140px 0 70px 0"
			md-padding="120px 0 40px 0"
		>
			<Override slot="SectionContent" max-width="1200px" align-items="center" position="relative" />
			<Text font="--menu" color="#1767FF" margin="0px 0px 10px 0px" text-align="center">
				StaffCop Enterprise
			</Text>
			<Components.TextBeghtml
				margin="16px 0px 16px 0px"
				font="normal bold 66px/1.2 --fontFamily-googleInter"
				color="#ffffff !IMPORTANT"
				md-font="normal bold 40px/1.2 --fontFamily-googleInter"
				sm-font="normal bold 24px/1.2 --fontFamily-googleInter"
				position="relative"
				z-index="3"
			/>
			<Components.TextBegJs />
			<Text
				letter-spacing="-0.01em"
				margin="8px 0px 16px 0px"
				text-align="center"
				width="49%"
				md-width="80%"
				sm-font="normal 300 16px/140% --fontFamily-googleInter"
				font="normal 300 18px/160% --fontFamily-googleInter"
				color="#ffffff"
			>
				Activity Monitoring, User Behavior Analytics, Productivity Optimization & Insider Threat Detection in a Single
		Platform
			</Text>
			<Link
				href="/request-demo/"
				z-index="2"
				font="600 18px/22px --fontFamily-googleInter"
				hover-background="#409EEB"
				border-color="#2165FF"
				md-margin="20px 0px 55px 0px"
				text-decoration-line="initial"
				background="--color-primary"
				margin="20px 0px 115px 0px"
				position="relative"
				padding="16px 38px 16px 38px"
				border-width="1px"
				border-style="solid"
				color="#ffffff"
				box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
				border-radius="40px"
				transition="-webkit-transition: all .3s;  transition: all .3s"
				sm-font="600 16px/22px --fontFamily-googleInter"
				sm-padding="16px 20px 16px 20px"
			>
				Free trial 15 days
			</Link>
			<Image
				bottom="-15px"
				width="90%"
				src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/migalkiauf.svg?v=2020-10-20T11:13:38.372Z"
				position="absolute"
				top="auto"
				right="auto"
				loading="lazy"
				z-index="1"
				left="auto"
			/>
			<Image
				md-width="80%"
				position="relative"
				z-index="2"
				sm-width="100%"
				loading="lazy"
				src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/newposteres.png?v=2020-12-14T13:27:25.853Z"
				srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/newposteres.png?v=2020-12-14T13%3A27%3A25.853Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/newposteres.png?v=2020-12-14T13%3A27%3A25.853Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/newposteres.png?v=2020-12-14T13%3A27%3A25.853Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/newposteres.png?v=2020-12-14T13%3A27%3A25.853Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/newposteres.png?v=2020-12-14T13%3A27%3A25.853Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/newposteres.png?v=2020-12-14T13%3A27%3A25.853Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/newposteres.png?v=2020-12-14T13%3A27%3A25.853Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
			/>
		</Section>
		<Section background="#020202">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				<StackItem width="50%" display="flex" sm-width="100%">
					<Text
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						font="--headline2"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#ffffff"
						letter-spacing="-2%"
					>
						Productivity tracking
					</Text>
				</StackItem>
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" align-items="center" />
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						display="inline-block"
						text-align="right"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						margin="1px 0px 0px 0px"
						color="#ffffff"
						md-width="100%"
						sm-text-align="center"
					>
						Activity Monitoring, User Behavior Analytics, Productivity Optimization & Insider Threat Detection in a Single
				Platform
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section background="#020202" border-color="#161616">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					<Box
						padding="0px 0px 0px 0px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						sm-padding="10px 20px 20px 20px"
						border-width="1px"
						height="100%"
						md-flex-direction="column"
						border-color="#161616"
						flex-direction="column"
						border-style="solid"
						hover-transform="translateY(-10px)"
						md-display="flex"
						display="flex"
						border-radius="6px"
						background="#0D0D0D"
					>
						<Link href="/features/user-card/" padding="20px 36px 20px 36px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/icons1.svg?v=2020-11-30T14:42:32.054Z"
								object-position="0% 0%"
								margin="10px 0px 20px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="--headline3"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								User Activity Monitoring
							</Text>
							<Text
								font="--lead"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Monitor and control user activity to ensure compliance with internal security policies and regulatory
					requirements
								<br />
							</Text>
						</Link>
					</Box>
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					<Box
						border-width="1px"
						background="#0D0D0D"
						height="100%"
						border-color="#161616"
						display="flex"
						flex-direction="column"
						border-radius="6px"
						padding="0px 0px 0px 0px"
						md-display="flex"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						border-style="solid"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						sm-padding="10px 20px 20px 20px"
					>
						<Link href="/features/application-usage-monitoring" padding="20px 36px 20px 36px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/icoasd2.svg?v=2020-11-30T14:43:23.306Z"
								object-position="0% 0%"
								margin="10px 0px 20px -3px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="--headline3"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								User Behavior Analytics
							</Text>
							<Text
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
								font="--lead"
								margin="0px 0px 0px 0px"
								display="inline-block"
							>
								Identify behavior anomalies and uncover potential threats in real time. Get fully customizable alerts with
					full audit trail and video recording of all user actions
							</Text>
						</Link>
					</Box>
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					<Box
						sm-padding="10px 20px 20px 20px"
						background="#0D0D0D"
						hover-transform="translateY(-10px)"
						border-color="#161616"
						flex-direction="column"
						border-radius="6px"
						border-style="solid"
						md-flex-direction="column"
						display="flex"
						padding="0px 0px 0px 0px"
						height="100%"
						md-display="flex"
						border-width="1px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
					>
						<Link href="/monitoring" padding="20px 36px 20px 36px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/icosdasd3.svg?v=2020-11-30T14:43:48.102Z"
								object-position="0% 0%"
								margin="10px 0px 20px -1px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="--headline3"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Employee Monitoring
							</Text>
							<Text
								font="--lead"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Monitor employee activity with customizable reports to identify team, department, individual level
					productivity, social media use, time spent on projects, apps, and more.
								<br />
								<br />
							</Text>
						</Link>
					</Box>
				</StackItem>
				<StackItem md-width="100%" width="33.3333%" display="flex" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					<Box
						border-style="solid"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 20px 20px 20px"
						display="flex"
						border-radius="6px"
						border-width="1px"
						background="#0D0D0D"
						height="100%"
						border-color="#161616"
					>
						<Link padding="20px 36px 20px 36px" height="100%" href="/security">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/icoasdas4.svg?v=2020-11-30T14:44:23.174Z"
								object-position="0% 0%"
								margin="10px 0px 20px -1px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="--headline3"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Data Loss Prevention
							</Text>
							<Text
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
								font="--lead"
								margin="0px 0px 0px 0px"
							>
								Identify behavior anomalies and uncover potential threats in real time. Get fully customizable alerts with
					full audit trail and video recording of all user actions
								<br />
								<br />
							</Text>
						</Link>
					</Box>
				</StackItem>
				<StackItem md-width="100%" width="33.3333%" display="flex" lg-width="50%">
					<Override slot="StackItemContent" justify-content="flex-start" flex-direction="column" align-items="flex-start" />
					<Box
						border-width="1px"
						background="#0D0D0D"
						md-display="flex"
						display="flex"
						border-style="solid"
						height="100%"
						hover-transform="translateY(-10px)"
						sm-padding="10px 20px 20px 20px"
						padding="0px 0px 0px 0px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						flex-direction="column"
						border-radius="6px"
						md-flex-direction="column"
						border-color="#161616"
					>
						<Link href="/compliance-management-auditing-and-monitoring" padding="20px 36px 20px 36px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/icosna5.svg?v=2020-11-30T14:45:02.994Z"
								object-position="0% 0%"
								margin="10px 0px 20px -1px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
								font="--headline3"
							>
								Compliance & Audit
							</Text>
							<Text
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
								font="--lead"
								margin="0px 0px 0px 0px"
							>
								Ensure ongoing compliance for GDPR, HIPAA, PCI and much more by identifying and alerting user to non-compliant
					actions with real time alerts
								<br />
							</Text>
						</Link>
					</Box>
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					<Box
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						border-color="#161616"
						display="flex"
						border-width="1px"
						border-style="solid"
						background="#0D0D0D"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						height="100%"
						sm-padding="10px 20px 20px 20px"
						border-radius="6px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
					>
						<Link href="/insider-threat-detection-and-prevention" padding="20px 36px 20px 36px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/icosadf6.svg?v=2020-11-30T14:45:13.084Z"
								object-position="0% 0%"
								margin="10px 0px 20px -1px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
								font="--headline3"
							>
								Insider Threat Prevention
							</Text>
							<Text
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
								font="--lead"
								margin="0px 0px 0px 0px"
							>
								Automate risk detection and block unwanted employee behavior. StaffCop uses smart rules & alerts to always
					keep your organization safe
							</Text>
						</Link>
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<Section background="#020202" padding="70px 0 70px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Text
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				md-margin="0px 0px 20px 0px"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				font="--headline2"
				color="#ffffff"
				margin="0px 0px 50px 0px"
				display="inline-block"
			>
				<Span
					color="--primary"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Advantages
				</Span>
				of our product
			</Text>
			<Stack margin="0px 0px 0px 0px">
				<StackItem md-width="100%" width="50%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					<Components.Knopka
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						border-width="1px"
						border-color="#161616"
						height="100%"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						justify-content="center"
						padding="68px 25px 0px 36px"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/charles-deluvio-pjAH2Ax4uWk-unsplash.png?v=2020-12-14T13:27:25.854Z) 0% 0% /cover no-repeat scroll padding-box"
						sm-padding="38px 10px 30px 20px"
						border-style="solid"
						display="flex"
						flex-direction="column"
					>
						<Override slot="Before image :default" display="none" />
						<Override
							slot="Link :hover"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-15px)"
							align-items="center"
							display="flex"
							justify-content="center"
							background="#1465FF"
							width="48px"
							height="48px"
						/>
						<Override slot="Before Text">
							TheTheTheTheTheTheTheTheTheTheTheTheTheTheTheThe
						</Override>
						<Override
							slot="Before Text2"
							margin="16px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							width="65%"
							color="#ffffff"
							font="normal 500 24px/29px --fontFamily-googleInter"
						>
							Helps reduce the risks of data leakage and loss of reputation
						</Override>
						<Override slot="Before Text2 :default" transform="translateY(20px)">
							Helps reduce the risks of data leakage and loss of reputationHelps reduce the risks of data leakage and loss
					of reputation
						</Override>
						<Override slot="Before Text2 :hover" transform="translateY(-25px)" />
						<Override slot="image" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z" width="7px" height="12px" />
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="48px"
							height="48px"
							transform="translateY(10px)"
						/>
						<Override
							slot="Link"
							display="flex"
							align-items="center"
							justify-content="center"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							color="#ffffff"
							href="/privileged-user-monitoring/"
							border-radius="100%"
							font="600 18px --fontFamily-googleInter"
							text-decoration-line="initial"
							padding="0px 0px 0px 0px"
						/>
						<Override
							slot="Before image"
							width="7px"
							height="12px"
							min-width="none"
							min-height="none"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z"
						/>
					</Components.Knopka>
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					<Components.Knopka
						padding="68px 150px 0px 36px"
						border-width="1px"
						display="flex"
						flex-direction="column"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/kaitlyn-baker-vZJdYl5JVXY-unsplash%201.png?v=2020-12-14T13:27:25.855Z) 0% 0% /cover no-repeat scroll padding-box"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						sm-padding="38px 10px 30px 20px"
						border-color="#161616"
						height="100%"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						justify-content="flex-end"
						border-style="solid"
					>
						<Override
							slot="Before Text2"
							color="#ffffff"
							font="normal 500 24px/29px --fontFamily-googleInter"
							margin="16px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							width="65%"
						>
							Gives transparency in the workflow
						</Override>
						<Override slot="Before Text2 :default" transform="translateY(20px)" />
						<Override slot="Before Text2 :hover" transform="translateY(-25px)" />
						<Override
							slot="Before image"
							height="12px"
							min-height="none"
							min-width="none"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z"
							width="7px"
						/>
						<Override slot="Before image :default" display="none" />
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="48px"
							height="48px"
							transform="translateY(10px)"
						/>
						<Override
							slot="Link :hover"
							display="flex"
							background="#1465FF"
							height="48px"
							justify-content="center"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-15px)"
							width="48px"
							align-items="center"
						/>
						<Override
							slot="Link"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							color="#ffffff"
							display="flex"
							align-items="center"
							justify-content="center"
							font="600 18px --fontFamily-googleInter"
							text-decoration-line="initial"
							href="/third-party-vendor-management/"
							border-radius="50px"
						/>
					</Components.Knopka>
				</StackItem>
				<StackItem md-width="100%" width="50%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					<Components.Knopka
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/kaitlyn.png?v=2020-12-14T13:27:25.851Z) 0% 0% /cover no-repeat scroll padding-box"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						lg-padding="68px 36px 30px 36px"
						sm-padding="38px 10px 30px 20px"
						padding="68px 130px 0px 36px"
						height="100%"
						display="flex"
						justify-content="center"
						border-width="1px"
						border-style="solid"
						flex-direction="column"
						border-radius="6px"
						border-color="#161616"
					>
						<Override slot="Before Text2 :default" transform="translateY(20px)">
							Allows you to see your business processes in reality 1999Allows you to see your business processes in reality
					1999
						</Override>
						<Override slot="Before Text2 :hover" transform="translateY(-25px)" />
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
							transform="translateY(10px)"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="flex"
							height="48px"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							transform="translateY(-15px)"
							justify-content="center"
							text-align="center"
						/>
						<Override
							slot="Link"
							align-items="center"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							href="/remote-employee-monitoring/"
							border-radius="50px"
							display="flex"
							justify-content="center"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							text-decoration-line="initial"
						/>
						<Override
							slot="Before Text2"
							width="65%"
							color="#ffffff"
							font="normal 500 24px/29px --fontFamily-googleInter"
							margin="16px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
						>
							Allows you to track employees working remotely from home
						</Override>
					</Components.Knopka>
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					<Components.Knopka
						sm-padding="38px 10px 30px 20px"
						border-width="1px"
						height="100%"
						display="flex"
						flex-direction="column"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/kaitlyn-baker-vZJdYl.png?v=2020-12-14T13:27:25.851Z) 0% 0% /cover no-repeat scroll padding-box"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						lg-padding="68px 36px 30px 36px"
						border-style="solid"
						justify-content="center"
						border-radius="6px"
						padding="68px 150px 3px 36px"
						border-color="#161616"
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
							width="48px"
							display="flex"
							transform="translateY(-15px)"
							align-items="center"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
						/>
						<Override
							slot="Link"
							border-radius="50px"
							align-items="center"
							color="#ffffff"
							text-decoration-line="initial"
							href="/features/employee-productivity-tracking"
							display="flex"
							justify-content="center"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
						/>
						<Override
							slot="Before Text2"
							color="#ffffff"
							font="normal 500 24px/29px --fontFamily-googleInter"
							margin="16px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							width="65%"
						>
							Allows you to see your business processes in reality
						</Override>
						<Override slot="Before Text2 :default" transform="translateY(20px)">
							Test
						</Override>
						<Override slot="Before Text2 :hover" transform="translateY(-25px)" />
					</Components.Knopka>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="70px 0 70px 0" background="#020202" md-padding="30px 0 30px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				color="#ffffff"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				font="--headline2"
				margin="0px 0px 50px 0px"
				display="inline-block"
			>
				The Right Employee
				<br />
				Monitoring and DLP Solution
				<br />
				for
				<Span
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
				>
					Every Need
				</Span>
			</Text>
			<Stack margin="0px 0px 0px 0px" width="100%">
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						lg-align-items="center"
						border-radius="8px"
						border-width="1px"
						border-style="solid"
						flex-direction="column"
						align-items="flex-start"
						justify-content="space-between"
						background="#0D0D0D"
						padding="20px 36px 42px 36px"
						border-color="#161616"
					/>
					<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/vtorya2.svg?v=2020-11-16T21:37:03.195Z" object-position="0% 0%" margin="0px 0px 10px -10px" />
					<Box lg-display="flex" lg-flex-direction="column" lg-align-items="center">
						<Text
							font="--headline3"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="#ffffff"
							lg-text-align="center"
						>
							Information Security
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 36px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
						>
							Receive the required data “on the fly”. Search
					by keywords and regular expressions. Record sound from microphones to hear what was happening at the moment of
					interest.
						</Text>
					</Box>
					<Link
						border-radius="40px"
						border-style="solid"
						text-decoration-line="initial"
						color="#ffffff"
						font="--menu"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						href="/security/"
						padding="13px 29px 13px 29px"
						border-color="--color-primary"
						border-width="2px"
						hover-background="--color-primary"
					>
						Learn more
					</Link>
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						border-width="1px"
						border-style="solid"
						flex-direction="column"
						align-items="flex-start"
						justify-content="space-between"
						lg-align-items="center"
						padding="20px 36px 42px 36px"
						border-color="#161616"
						background="#0D0D0D"
					/>
					<Image margin="0px 0px 10px -10px" loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/pervaya1.svg?v=2020-11-16T21:36:47.681Z" object-position="0% 0%" />
					<Text font="--headline3" margin="0px 0px 18px 0px" display="inline-block" color="#ffffff">
						Remote Administration
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 36px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-text-align="center"
					>
						View remote desktop without being notices. Take control over
				a workstation. 
				Full picture of software and hardware usage. Intensity of usage
				and registry of states.
					</Text>
					<Link
						href="/administration/"
						text-decoration-line="initial"
						color="#ffffff"
						padding="13px 29px 13px 29px"
						border-radius="40px"
						border-color="--color-primary"
						border-width="2px"
						border-style="solid"
						font="--menu"
						hover-background="--color-primary"
						transition="-webkit-transition: all .3s;  transition: all .3s"
					>
						Learn more
					</Link>
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						padding="20px 36px 42px 36px"
						border-radius="8px"
						flex-direction="column"
						position="relative"
						background="#1465FF"
						lg-align-items="center"
						border-width="1px"
						border-style="solid"
						align-items="flex-start"
						justify-content="space-between"
					/>
					<Text
						border-radius="8px"
						padding="8px 13px 8px 13px"
						margin="0px 0px 0px 0px"
						bottom="auto"
						box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						border-style="solid"
						color="#ffffff"
						background="#4AC62B"
						position="absolute"
						right="18px"
						font="600 14px/14px --fontFamily-googleInter"
						border-width="1px"
						left="auto"
						top="18px"
						border-color="rgba(255, 255, 255, 0.05)"
					>
						Recommend
					</Text>
					<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/treriya3.svg?v=2020-11-16T21:37:12.931Z" object-position="0% 0%" margin="0px 0px 10px -10px" />
					<Text color="#ffffff" font="--headline3" margin="0px 0px 18px 0px" display="inline-block">
						Employee Monitoring
					</Text>
					<Text font="--lead" margin="0px 0px 36px 0px" display="inline-block" color="rgba(255, 255, 255, 0.6)">
						Categorize applications and web-sites into productive
				and unproductive. Set up different configurations for particular
				users, groups and departments. Compare results.
					</Text>
					<Link
						text-decoration-line="initial"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						hover-border-color="#0D0D0D"
						hover-color="#ffffff"
						border-style="solid"
						color="--primary"
						padding="13px 29px 13px 29px"
						border-color="#ffffff"
						font="--menu"
						hover-background="#0D0D0D"
						background="#ffffff"
						href="/monitoring/"
						border-radius="40px"
						border-width="2px"
					>
						Learn more
					</Link>
				</StackItem>
			</Stack>
		</Section>
		<Section background="#020202" lg-padding="30px 0 30px 0" md-padding="30px 0 10px 0" padding="30px 0 70px 0">
			<Override
				slot="SectionContent"
				border-style="solid"
				border-color="#161616"
				max-width="1170px"
				align-items="center"
				padding="76px 0px 0px 0px"
				background="#0D0D0D"
				border-radius="6px"
				border-width="1px"
			/>
			<Text
				sm-font="normal 700 24px/30px Inter, sans-serif"
				width="50%"
				font="--headline2"
				display="inline-block"
				md-font="normal 700 30px/40px Inter, sans-serif"
				text-align="center"
				margin="0px 0px 50px 0px"
				color="#ffffff"
				letter-spacing="-2%"
			>
				A solution for your
				<br />
				<Span
					color="--primary"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					every task
				</Span>
			</Text>
			<Stack
				gap="0px"
				border-width="0px 0px 1px 0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(255, 255, 255, 0.05)"
				margin="0px 0px 0px 0px"
				width="100%"
			>
				<StackItem display="flex" md-width="100%" width="50%">
					<Override
						slot="StackItemContent"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						md-align-items="center"
						padding="0px 0px 0px 20px"
					/>
					<Image
						width="90%"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/022222202%201.png?v=2020-10-15T22:52:40.753Z"
						md-width="80%"
						loading="lazy"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/022222202%201.png?v=2020-10-15T22%3A52%3A40.753Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/022222202%201.png?v=2020-10-15T22%3A52%3A40.753Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/022222202%201.png?v=2020-10-15T22%3A52%3A40.753Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/022222202%201.png?v=2020-10-15T22%3A52%3A40.753Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/022222202%201.png?v=2020-10-15T22%3A52%3A40.753Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/022222202%201.png?v=2020-10-15T22%3A52%3A40.753Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/022222202%201.png?v=2020-10-15T22%3A52%3A40.753Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
				</StackItem>
				<StackItem display="flex" md-width="100%" width="50%">
					<Override
						slot="StackItemContent"
						padding="0px 50px 0px 50px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
					/>
					<Text
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="#ffffff"
						margin="-50px 0px 24px 0px"
						lg-font="normal 700 30px/43px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
					>
						Information Security
					</Text>
					<Text
						lg-font="normal 400 15px/160% Inter, sans-serif"
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
					>
						StaffCop provides a unique, fully integrated solution that focuses on detection and response to insider threats
				through a combination of advanced behavioral analysis and context-rich logging of insider activity.
						<br />
					</Text>
					<Link
						text-decoration-line="initial"
						lg-margin="0px 0px 20px 0px"
						sm-margin="0px 0px 40px 0px"
						href="/security/"
						font="--menu"
						color="--primary"
						md-margin="0px 0px 30px 0px"
						hover-color="#409EEB"
						transition="-webkit-transition: all .3s;  transition: all .3s"
					>
						More details ❯
					</Link>
				</StackItem>
			</Stack>
			<Stack
				margin="70px 0px 0px 0px"
				width="100%"
				gap="0px"
				border-width="0px 0px 1px 0px"
				border-style="solid"
				border-color="rgba(255, 255, 255, 0.05)"
			>
				<StackItem width="50%" display="flex" md-width="100%" md-order="1">
					<Override
						slot="StackItemContent"
						justify-content="center"
						lg-padding="0 30px 0 50px"
						sm-margin="20px 0px 0px 0px"
						padding="0px 50px 0px 60px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-end"
					/>
					<Text
						lg-font="normal 700 30px/43px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="#ffffff"
						margin="-50px 0px 24px 0px"
					>
						Employee Monitoring
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						text-align="right"
						lg-font="normal 400 15px/160% Inter, sans-serif"
						font="--lead"
					>
						StaffCop Enterprise logs the beginning and the end of each employee’s workday, including lunch and coffee
				breaks, etc. It enables executives and employees, themselves, to improve discipline at the workplace and reduce
				idle periods.
						<br />
					</Text>
					<Link
						sm-margin="0px 0px 40px 0px"
						href="/monitoring/"
						color="--primary"
						lg-margin="0px 0px 20px 0px"
						md-margin="0px 0px 30px 0px"
						hover-color="#409EEB"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						font="--menu"
						text-decoration-line="initial"
					>
						More details ❯
					</Link>
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						md-align-items="center"
						padding="0px 0px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					<Image
						width="90%"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/3213123123.png?v=2020-10-15T23:20:36.211Z"
						md-width="80%"
						margin="0px 0px 0px 0px"
						loading="lazy"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/3213123123.png?v=2020-10-15T23%3A20%3A36.211Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/3213123123.png?v=2020-10-15T23%3A20%3A36.211Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/3213123123.png?v=2020-10-15T23%3A20%3A36.211Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/3213123123.png?v=2020-10-15T23%3A20%3A36.211Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/3213123123.png?v=2020-10-15T23%3A20%3A36.211Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/3213123123.png?v=2020-10-15T23%3A20%3A36.211Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/3213123123.png?v=2020-10-15T23%3A20%3A36.211Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
				</StackItem>
			</Stack>
			<Stack
				border-color="rgba(255, 255, 255, 0.05)"
				margin="70px 0px 0px 0px"
				width="100%"
				gap="0px"
				border-width="0px 0px 1px 0px"
				border-style="solid"
			>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						justify-content="flex-start"
						md-align-items="center"
						padding="0px 0px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
					/>
					<Image
						loading="lazy"
						width="90%"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/45654645.png?v=2020-10-15T23:21:36.301Z"
						md-width="80%"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/45654645.png?v=2020-10-15T23%3A21%3A36.301Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/45654645.png?v=2020-10-15T23%3A21%3A36.301Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/45654645.png?v=2020-10-15T23%3A21%3A36.301Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/45654645.png?v=2020-10-15T23%3A21%3A36.301Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/45654645.png?v=2020-10-15T23%3A21%3A36.301Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/45654645.png?v=2020-10-15T23%3A21%3A36.301Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/45654645.png?v=2020-10-15T23%3A21%3A36.301Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
				</StackItem>
				<StackItem display="flex" md-width="100%" width="50%">
					<Override
						slot="StackItemContent"
						padding="0px 50px 0px 50px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						lg-padding="0 30px 0 50px"
						sm-margin="20px 0px 0px 0px"
					/>
					<Text
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="#ffffff"
						margin="-50px 0px 24px 0px"
						lg-font="normal 700 30px/43px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
					>
						Remote Administration
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-font="normal 400 15px/160% Inter, sans-serif"
					>
						Monitor processes and applications, system events,
				and remote desktop connection makes StaffCop a must-have tool for an IT specialist. Monitor and analyze user
				actions on workstations with X-Windows window nanager as well as in terminal mode.
					</Text>
					<Link
						transition="-webkit-transition: all .3s;  transition: all .3s"
						font="--menu"
						color="--primary"
						lg-margin="0px 0px 20px 0px"
						sm-margin="0px 0px 40px 0px"
						md-margin="0px 0px 30px 0px"
						hover-color="#409EEB"
						href="/administration/"
						text-decoration-line="initial"
					>
						More details ❯
					</Link>
				</StackItem>
			</Stack>
			<Stack
				margin="90px 0px 60px 0px"
				width="100%"
				gap="0px"
				border-width="0px"
				border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
			>
				<StackItem display="flex" lg-width="100%" width="49%">
					<Override
						slot="StackItemContent"
						lg-align-items="center"
						sm-padding="0px 10px 0px 10px"
						padding="0px 60px 0px 60px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
					/>
					<Text
						margin="0px 0px 0px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-font="normal 700 24px/30px Inter, sans-serif"
						font="normal 700 36px/45.57px --fontFamily-googleInter"
						color="#ffffff"
						letter-spacing="-2%"
						lg-margin="0px 0px 20px 0px"
						lg-text-align="center"
						sm-width="100%"
					>
						92% of companies detect serious violations when testing StaffCop
					</Text>
				</StackItem>
				<StackItem width="51%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 0px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						lg-align-items="center"
					/>
					<Stack
						width="90%"
						margin="0px 0px 0px 0px"
						gap="12px"
						sm-align-items="center"
						sm-justify-content="center"
					>
						<StackItem display="flex" sm-width="50%" width="33.3333%">
							<Override
								slot="StackItemContent"
								border-radius="8px"
								border-width="0px"
								border-style="solid"
								flex-direction="column"
								align-items="center"
								justify-content="center"
								padding="0px 0px 0px 0px"
							/>
							<Link
								href="https://www.capterra.com/reviews/183561/StaffCop?utm_source=vendor&utm_medium=badge&utm_campaign=capterra_reviews_badge"
								target="_blank"
								text-decoration-line="initial"
								hover-transform="translateY(-10px)"
								transition=" all .3s;  transition: all .3s"
							>
								<Image
									width="100%"
									sm-margin="0px 0px 0px 0px"
									loading="lazy"
									src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/pershildik.svg?v=2020-10-21T00:30:19.423Z"
									object-position="0% 0%"
									margin="25px 0px 25px 0px"
								/>
							</Link>
						</StackItem>
						<StackItem display="flex" sm-width="50%" width="33.3333%">
							<Override
								slot="StackItemContent"
								justify-content="center"
								padding="0px 0px 0px 0px"
								border-radius="8px"
								border-width="0px"
								border-style="solid"
								flex-direction="column"
								align-items="center"
							/>
							<Link
								hover-transform="translateY(-10px)"
								transition=" all .3s;  transition: all .3s"
								href="https://sourceforge.net/software/product/StaffCop/?pk_campaign=badge&pk_source=vendor"
								target="_blank"
								text-decoration-line="initial"
							>
								<Image
									object-position="0% 0%"
									margin="25px 0px 25px 0px"
									width="100%"
									sm-margin="0px 0px 0px 0px"
									loading="lazy"
									src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/dvashildik.svg?v=2020-10-21T00:31:29.773Z"
								/>
							</Link>
						</StackItem>
						<StackItem width="33.3333%" display="flex" sm-width="50%">
							<Override
								slot="StackItemContent"
								border-radius="8px"
								border-width="0px"
								border-style="solid"
								flex-direction="column"
								align-items="center"
								justify-content="center"
								padding="0px 0px 0px 0px"
							/>
							<Link
								href="https://www.serchen.com/category/employee-monitoring/"
								target="_blank"
								text-decoration-line="initial"
								hover-transform="translateY(-10px)"
								transition=" all .3s;  transition: all .3s"
							>
								<Image
									object-position="0% 0%"
									margin="25px 0px 25px 0px"
									width="100%"
									sm-margin="0px 0px 0px 0px"
									loading="lazy"
									src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/treeshildik.svg?v=2020-10-21T00:31:37.419Z"
								/>
							</Link>
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section
			md-padding="24px 0 40px 0"
			border-style="solid"
			border-color="rgba(255, 255, 255, 0.05)"
			border-width="0px 0px 1px 0px"
			background="#020202"
			padding="24px 0 70px 0"
		>
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				margin="0px 0px 50px 0px"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				md-margin="0px 0px 20px 0px"
				font="--headline2"
				display="inline-block"
				color="#ffffff"
				letter-spacing="-2%"
				sm-font="normal 700 24px/30px Inter, sans-serif"
			>
				<Span
					color="--primary"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Advantages
				</Span>
				of our product
			</Text>
			<Stack margin="0px 0px 40px 0px" width="100%">
				<StackItem md-width="100%" width="50%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					<Components.Knopka
						display="flex"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						background="linear-gradient(180deg,rgba(0, 0, 0, 0) 83.3%,rgba(0, 0, 0, 0.6) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fghgfhfg.png?v=2020-12-14T13:27:25.854Z) 0% 0% /cover no-repeat scroll padding-box"
						min-height="242px"
						border-width="1px"
						border-color="#161616"
						height="100%"
						flex-direction="column"
						justify-content="flex-end"
						padding="68px 150px 0px 36px"
						border-style="solid"
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
							display="flex"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							transform="translateY(-30px)"
							width="48px"
							align-items="center"
							height="48px"
							justify-content="center"
							background="#1465FF"
							text-align="center"
						/>
						<Override
							slot="Link"
							display="flex"
							align-items="center"
							justify-content="center"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							border-radius="50px"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							href="/for-hipaa/"
						/>
						<Override slot="Before Text2" font="normal 500 24px/29px --fontFamily-googleInter" margin="0px 0px 0px 0px" transition="-webkit-transition: all .5s;  transition: all .5s">
							For healthcare
						</Override>
						<Override slot="Before Text2 :default">
							For healthcare
						</Override>
						<Override slot="Before Text2 :hover" transform="translateY(-50px)" />
						<Override
							slot="Before image"
							width="7px"
							height="12px"
							min-width="none"
							min-height="none"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z"
						/>
					</Components.Knopka>
				</StackItem>
				<StackItem md-width="100%" width="50%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					<Stack flex-direction="column">
						<StackItem width="100%" display="flex" md-width="100%">
							<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
							<Components.Knopka
								border-color="#161616"
								border-style="solid"
								display="flex"
								justify-content="flex-end"
								padding="68px 150px 0px 36px"
								lg-padding="68px 36px 30px 36px"
								border-radius="6px"
								min-height="242px"
								border-width="1px"
								height="100%"
								flex-direction="column"
								background="linear-gradient(180deg,rgba(0, 0, 0, 0) 83.3%,rgba(0, 0, 0, 0.6) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/tyreterter-min.png?v=2020-12-14T13:57:23.882Z) 0% 0% /cover no-repeat scroll padding-box"
								transition="-webkit-transition: all .3s;  transition: all .3s"
							>
								<Override slot="Before Text2 :default">
									For government
								</Override>
								<Override slot="Before Text2 :hover" transform="translateY(-50px)" />
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
									justify-content="center"
									background="#1465FF"
									box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
									width="48px"
									align-items="center"
									text-align="center"
									transform="translateY(-30px)"
									display="flex"
									height="48px"
								/>
								<Override
									slot="Link"
									text-decoration-line="initial"
									href="/government-and-public-sector-cyber-security/"
									border-radius="50px"
									align-items="center"
									transition="-webkit-transition: all .3s;  transition: all .3s"
									font="600 18px --fontFamily-googleInter"
									color="#ffffff"
									display="flex"
									justify-content="center"
								/>
								<Override slot="Before Text2" font="normal 500 24px/29px --fontFamily-googleInter" margin="0px 0px 0px 0px" transition="-webkit-transition: all .5s;  transition: all .5s">
									For government
								</Override>
							</Components.Knopka>
						</StackItem>
						<StackItem width="100%" display="flex" md-width="100%">
							<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
							<Components.Knopka
								transition="-webkit-transition: all .3s;  transition: all .3s"
								lg-padding="68px 36px 30px 36px"
								border-color="#161616"
								border-style="solid"
								display="flex"
								justify-content="flex-end"
								background="linear-gradient(180deg,rgba(0, 0, 0, 0) 83.3%,rgba(0, 0, 0, 0.6) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/cxvxcvcxv-min.png?v=2020-12-14T13:57:11.309Z) 0% 0% /cover no-repeat scroll padding-box"
								border-radius="6px"
								min-height="242px"
								border-width="1px"
								height="100%"
								flex-direction="column"
								padding="68px 150px 0px 36px"
							>
								<Override
									slot="Link :hover"
									align-items="center"
									justify-content="center"
									background="#1465FF"
									box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
									text-align="center"
									transform="translateY(-30px)"
									width="48px"
									display="flex"
									height="48px"
								/>
								<Override
									slot="Link"
									justify-content="center"
									color="#ffffff"
									border-radius="50px"
									display="flex"
									align-items="center"
									transition="-webkit-transition: all .3s;  transition: all .3s"
									font="600 18px --fontFamily-googleInter"
									text-decoration-line="initial"
									href="/for-banks/"
								/>
								<Override slot="Before Text2" font="normal 500 24px/29px --fontFamily-googleInter" margin="0px 0px 0px 0px" transition="-webkit-transition: all .5s;  transition: all .5s">
									For financial services
								</Override>
								<Override slot="Before Text2 :default">
									For financial services
								</Override>
								<Override slot="Before Text2 :hover" transform="translateY(-50px)" />
								<Override
									slot="Before image"
									width="7px"
									height="12px"
									min-width="none"
									min-height="none"
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
							</Components.Knopka>
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
			<Link
				border-color="--color-primary"
				border-width="2px"
				border-style="solid"
				color="#ffffff"
				font="--menu"
				href="/cases/"
				padding="13px 29px 13px 29px"
				border-radius="40px"
				text-decoration-line="initial"
				hover-background="--color-primary"
				transition="-webkit-transition: all .3s;  transition: all .3s"
			>
				More use cases
			</Link>
		</Section>
		<Section padding="0px 0 0px 0" background="#020202">
			<Override slot="SectionContent" width="100%" max-width="none" />
			<Section padding="70px 0 40px 0" lg-padding="70px 0 50px 0">
				<Override slot="SectionContent" max-width="1200px" align-items="center" />
				<Text
					md-font="normal 700 30px/40px Inter, sans-serif"
					sm-font="normal 700 24px/30px Inter, sans-serif"
					font="--headline2"
					margin="0px 0px 50px 0px"
					display="inline-block"
					color="#ffffff"
					letter-spacing="-2%"
					text-align="center"
				>
					How can I get
					<Span color="--primary">
						started
					</Span>
					?
				</Text>
				<Stack position="relative" justify-content="center" width="100%" margin="0px 0px 0px 0px">
					<Hr
						width="70%"
						bottom="auto"
						border-width="2px 0 0 0"
						top="82px"
						z-index="1"
						lg-display="none"
						nout-display="none"
						opacity="0.08"
						position="absolute"
						left="auto"
						right="auto"
					/>
					<StackItem sm-width="100%" width="25%" display="flex" lg-width="50%">
						<Override
							slot="StackItemContent"
							justify-content="flex-start"
							flex-direction="column"
							padding="10px 10px 10px 10px"
							align-items="center"
						/>
						<Box
							display="flex"
							align-items="center"
							justify-content="center"
							position="relative"
							z-index="2"
							background="#020202"
							width="120px"
							height="120px"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Laptop%201.svg?v=2020-11-16T15:16:18.655Z" object-fit="contain" margin="20px 0px 0px 0px" loading="lazy" />
						</Box>
						<Text
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 1)"
							text-align="center"
							font="--headline3"
						>
							Install StaffCop{" "}
						</Text>
						<Text
							text-align="center"
							font="--lead"
							margin="12px 0px 24px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
						>
							Install StaffCop on-premises or on private cloud (AWS, Google Cloud)
						</Text>
					</StackItem>
					<StackItem width="25%" display="flex" lg-width="50%" sm-width="100%">
						<Override
							slot="StackItemContent"
							align-items="center"
							justify-content="flex-start"
							flex-direction="column"
							padding="10px 10px 10px 10px"
						/>
						<Box
							background="#020202"
							width="120px"
							height="120px"
							display="flex"
							align-items="flex-start"
							justify-content="center"
							position="relative"
							z-index="2"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Server,%20Databases,%20Download%201.svg?v=2020-11-16T15:16:18.649Z" object-fit="contain" margin="0px 0px 0px 0px" />
						</Box>
						<Text
							font="--headline3"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 1)"
							text-align="center"
						>
							Install Agents
						</Text>
						<Text
							color="rgba(255, 255, 255, 0.6)"
							text-align="center"
							font="--lead"
							margin="12px 0px 24px 0px"
							display="inline-block"
						>
							Install the agents on the machines you wish to monitor.
						</Text>
					</StackItem>
					<StackItem sm-width="100%" width="25%" display="flex" lg-width="50%">
						<Override
							slot="StackItemContent"
							align-items="center"
							justify-content="flex-start"
							flex-direction="column"
							padding="10px 10px 10px 10px"
						/>
						<Box
							display="flex"
							align-items="center"
							justify-content="center"
							position="relative"
							z-index="2"
							width="120px"
							height="120px"
						>
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/settings.4%201.svg?v=2020-11-16T15:16:18.648Z"
								object-fit="contain"
								background="#020202"
								margin="25px 0px 0px 0px"
							/>
						</Box>
						<Text
							text-align="center"
							font="--headline3"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 1)"
						>
							Customize Settings
						</Text>
						<Text
							margin="12px 0px 24px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							text-align="center"
							font="--lead"
						>
							Customize our pre-defined rules for your use-case
						</Text>
					</StackItem>
					<StackItem lg-width="50%" sm-width="100%" width="25%" display="flex">
						<Override
							slot="StackItemContent"
							padding="10px 10px 10px 10px"
							align-items="center"
							justify-content="flex-start"
							flex-direction="column"
						/>
						<Box
							display="flex"
							align-items="center"
							justify-content="center"
							background="#020202"
							position="relative"
							z-index="2"
							width="120px"
							height="120px"
						>
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/settings.4%202.svg?v=2020-11-16T15:16:18.649Z"
								object-fit="contain"
								margin="10px 0px 0px 0px"
								background="#020202"
							/>
						</Box>
						<Text
							font="--headline3"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 1)"
							text-align="center"
						>
							Take Control!
						</Text>
						<Text
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							text-align="center"
							font="--lead"
							margin="12px 0px 24px 0px"
						>
							Start using the dashboard to secure your domain and gain insight into users' activities.
						</Text>
					</StackItem>
				</Stack>
			</Section>
			<Section lg-padding="70px 0 70px 0" padding="50px 0 112px 0">
				<Override slot="SectionContent" max-width="1200px" align-items="center" />
				<Stack
					justify-content="center"
					overflow-y="hidden"
					border-radius="6px"
					border-color="#161616"
					border-width="1px"
					border-style="solid"
					width="100%"
					margin="0px 0px 0px 0px"
					background="rgba(6, 6, 6, 1)"
					position="relative"
					align-items="center"
					gap="0px"
				>
					<Box
						md-top="-115px"
						width="70%"
						left="auto"
						top="-170px"
						lg-width="80%"
						height="100%"
						position="absolute"
						sm-height="300px"
						sm-top="-70px"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Groupoba.svg?v=2020-10-17T19:56:21.221Z) center center/cover no-repeat scroll padding-box"
						right="auto"
						sm-width="70%"
						sm-display="none"
						bottom="auto"
						z-index="1"
					/>
					<StackItem width="100%" display="flex" padding="16px 16px 16px 16px">
						<Override
							slot="StackItemContent"
							border-radius="6px"
							justify-content="center"
							padding="60px 0px 0px 0px"
							lg-padding="80px 0px 0px 0px"
							sm-padding="50px 0px 0px 0px"
							md-padding="50px 0px 0px 0px"
							lg-width="100%"
							border-width="0px"
							align-items="center"
							position="relative"
							z-index="2"
							flex-direction="column"
						/>
						<Text
							lg-width="90%"
							md-font="normal 700 30px/40px Inter, sans-serif"
							font="--headline2"
							margin="0px 0px 0px 0px"
							text-align="center"
							sm-font="normal 700 20px/30px Inter, sans-serif"
							display="inline-block"
							color="#ffffff"
							width="70%"
						>
							Cutting-edge technologies for cybersecurity, threat detection and alerting
						</Text>
						<Box
							margin="42px 0px 67px 0px"
							display="flex"
							sm-flex-direction="column"
							sm-align-items="center"
							sm-justify-content="center"
						>
							<Link
								border-radius="40px"
								border-width="1px"
								box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
								border-color="--color-primary"
								text-decoration-line="initial"
								color="#ffffff"
								background="--color-primary"
								md-padding="16px 20px 16px 20px"
								sm-margin="0px 0px 18px 0px"
								padding="16px 38px 16px 38px"
								transition="-webkit-transition: all .3s;  transition: all .3s"
								position="relative"
								z-index="4"
								sm-font="500 15px/22px Inter, sans-serif"
								href="/request-demo/"
								border-style="solid"
								font="--menu"
								hover-background="#409EEB"
								margin="0px 18px 0px 0px"
								sm-padding="16px 12px 16px 12px"
							>
								Request demo
							</Link>
							<Link
								border-width="2px"
								text-decoration-line="initial"
								color="#ffffff"
								text-align="center"
								sm-padding="16px 34px 16px 34px"
								sm-font="500 15px/22px Inter, sans-serif"
								border-radius="40px"
								border-style="solid"
								font="--menu"
								hover-background="--color-primary"
								z-index="4"
								href="/purchase/"
								padding="16px 68px 16px 68px"
								border-color="--color-primary"
								transition="-webkit-transition: all .3s;  transition: all .3s"
								position="relative"
								md-padding="16px 40px 16px 40px"
							>
								Pricing
							</Link>
						</Box>
						<Image
							loading="lazy"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/rezhevmasdas.png?v=2020-10-21T15:09:40.369Z"
							width="736px"
							nout-width="70%"
							srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/rezhevmasdas.png?v=2020-10-21T15%3A09%3A40.369Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/rezhevmasdas.png?v=2020-10-21T15%3A09%3A40.369Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/rezhevmasdas.png?v=2020-10-21T15%3A09%3A40.369Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/rezhevmasdas.png?v=2020-10-21T15%3A09%3A40.369Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/rezhevmasdas.png?v=2020-10-21T15%3A09%3A40.369Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/rezhevmasdas.png?v=2020-10-21T15%3A09%3A40.369Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/rezhevmasdas.png?v=2020-10-21T15%3A09%3A40.369Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
						/>
					</StackItem>
				</Stack>
			</Section>
			<Section padding="50px 0 60px 0" lg-padding="50px 0 20px 0">
				<Override slot="SectionContent" max-width="1200px" align-items="center" />
				<Stack width="100%" margin="0px 0px 0px 0px">
					<StackItem
						width="35%"
						display="flex"
						lg-width="100%"
						lg-align-items="center"
						lg-justify-content="center"
					>
						<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" />
						<Image loading="lazy" width="250px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/logo_white%20%281%29.svg?v=2023-08-25T08:28:35.300Z" />
						<Text
							margin="31px 0px 24px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							md-text-align="center"
							font="normal 300 18px/160% --fontFamily-googleInter"
						>
							630090 ul. Kutateladze, 4g,
							<br />
							Novosibirsk, Russia.
							<br />
						</Text>
						<SocialMedia
							lg-justify-content="center"
							facebook="https://www.facebook.com/quarklyapp/"
							vkontakte="https://vk.com/staffcop"
							telegram="https://t.me/StaffCop"
							align-items="center"
							justify-content="flex-start"
							twitter="https://twitter.com/quarklyapp"
							youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
							background="rgba(0, 0, 0, 0)"
						>
							<Override
								slot="link"
								background="rgba(237, 242, 246, 0)"
								color="#ffffff"
								hover-background="--color-primary"
								hover-border-radius="40px"
							/>
							<Override slot="link-facebook" display="none" />
							<Override slot="link-twitter" display="none" />
							<Override slot="link-youtube" display="none" />
						</SocialMedia>
					</StackItem>
					<StackItem width="20%" display="flex" lg-width="33.333%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" />
						<Text font="normal 700 18px/160% --fontFamily-googleInter" margin="0px 0px 27px 0px" display="inline-block" color="rgba(255, 255, 255,1)">
							SOLUTIONS
						</Text>
						<Link
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
							href="/administration/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
						>
							Remote Administration
						</Link>
						<Link
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
							href="/monitoring/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
						>
							Employee Monitoring
						</Link>
						<Link
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
							md-text-align="center"
							href="/security/"
						>
							Information Security
						</Link>
					</StackItem>
					<StackItem
						display="flex"
						lg-width="33.333%"
						md-width="50%"
						sm-width="100%"
						width="15%"
					>
						<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" />
						<Text display="inline-block" color="rgba(255, 255, 255,1)" font="normal 700 18px/160% --fontFamily-googleInter" margin="0px 0px 27px 0px">
							ABOUT
						</Text>
						<Link
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
							href="/about-us/"
							color="rgba(255, 255, 255, 0.6)"
						>
							Company
						</Link>
						<Link
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
							href="/why-us/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
						>
							Why StaffCop?
						</Link>
						<Link
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
							href="/white-papers/"
						>
							White Papers
						</Link>
					</StackItem>
					<StackItem
						sm-width="100%"
						width="15%"
						display="flex"
						lg-width="33.333%"
						md-width="50%"
					>
						<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" />
						<Text font="normal 700 18px/160% --fontFamily-googleInter" margin="0px 0px 27px 0px" display="inline-block" color="rgba(255, 255, 255,1)">
							LEARN
						</Text>
						<Link
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
							target="_blank"
							href="https://docs.staffcop.com/"
							color="rgba(255, 255, 255, 0.6)"
						>
							Documentation
						</Link>
						<Link
							transition="all 1s ease 0s"
							href="/cases/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
						>
							Use cases
						</Link>
						<Link
							transition="all 1s ease 0s"
							href="/features/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
						>
							Features
						</Link>
					</StackItem>
					<StackItem
						sm-width="100%"
						width="15%"
						display="flex"
						lg-width="33.333%"
						md-width="50%"
					>
						<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" />
						<Text font="normal 700 18px/160% --fontFamily-googleInter" margin="0px 0px 27px 0px" display="inline-block" color="rgba(255, 255, 255,1)">
							CONTACT
						</Text>
						<Link
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
							href="/purchase/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
						>
							Purchase
						</Link>
						<Link
							href="/support/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
						>
							Support
						</Link>
						<Link
							href="/partners/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
						>
							Distributors
						</Link>
					</StackItem>
				</Stack>
			</Section>
		</Section>
		<Components.CopyrightBlack />
		<Components.EmbedHTML />
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