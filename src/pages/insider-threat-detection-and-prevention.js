import React from "react";
import theme from "theme";
import { Theme, Text, Link, Image, Section, Box, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"insider-threat-detection-and-prevention"} />
		<Helmet>
			<title>
				Insider Threat Detection & Prevention
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
		<Section md-padding="90px 0 30px 0" lg-padding="120px 0 60px 0" padding="180px 0 120px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" sm-align-items="center" sm-width="100%">
					<Override
						slot="StackItemContent"
						sm-align-items="center"
						flex-direction="column"
						justify-content="center"
						align-items="flex-start"
					/>
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 16px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
					>
						Insider Threat Detection & Prevention{"\n\n"}
					</Text>
					<Text
						color="#555"
						md-font="normal 400 16px/140% --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 400 18px/160% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
					>
						Protect Your Data and IP with StaffCop's Insider Threat Monitoring, Detection and Prevention Solution{"\n\n"}
					</Text>
					{"    "}
					<Link
						font="600 18px/22px --fontFamily-googleInter"
						padding="16px 38px 16px 38px"
						sm-padding="16px 20px 16px 20px"
						md-padding="16px 26px 16px 26px"
						z-index="2"
						position="relative"
						box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						border-width="1px"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						margin="36px 0px 0px 0px"
						sm-font="600 16px/22px --fontFamily-googleInter"
						href="/request-demo"
						text-decoration-line="initial"
						border-radius="40px"
						background="--color-primary"
						border-style="solid"
						hover-background="#409EEB"
						color="#ffffff"
						transition="-webkit-transition: all .3s;  transition: all .3s"
					>
						Request demo
					</Link>
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" position="relative" />
					{"        "}
					<Image
						lg-width="500px"
						lg-position="absolute"
						lg-top="-5px"
						md-right="-70px"
						md-width="400px"
						position="absolute"
						top="-110px"
						sm-left="auto"
						bottom="auto"
						lg-right="-50px"
						md-top="0px"
						sm-position="relative"
						width="803px"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15:07:09.010Z"
						right="-115px"
						sm-top="0px"
						left="auto"
						sm-bottom="auto"
						sm-right="auto"
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
				<StackItem width="70%" display="flex" sm-width="100%" nout-width="100%">
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
						Insider Threats: A Significant Security Risk for Many Organizations
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem sm-width="100%" nout-width="100%" width="70%" display="flex">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Text
						color="#555"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						text-align="justify"
						font="400 18px/28px --fontFamily-googleInter"
						margin="1px 0px 0px 0px"
						sm-text-align="center"
						display="inline-block"
						width="100%"
					>
						Who are insiders? Everyone who has access to an organization's internal systems ( e sensitive data and proprietary information including IP, trade secrets, customer and employee data) is an insider, including employees, vendors, contractors, and suppliers.  The harm caused by any of these groups is referred to as an insider threat.
						<br />
						Unfortunately, no organization is immune to insider threats.{" "}
						<br />
						According to an Ernst & Young and IBM report, there's a 74% perceived risk of a cyber-breach and insider misuse in the financial services industry; followed by 64% in consumer, retail and wholesale; 55% in tech and entertainment, and 56% in power and utilities. Experts have discovered that one of the main reasons why insider threat is so prevalent is because it's difficult to detect.{" "}
						<br />
						Insider threats are inherently different from other cybersecurity risks; thus, addressing this challenge using traditional measures or strategies is often ineffective. 
 Insiders have a significant advantage over external attackers - they have access to privileged systems, they are aware of their organization's policies, procedures, and technology and its security vulnerabilities.{"\n\n\n"}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="40px 0 12px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem width="70%" display="flex" sm-width="100%" nout-width="100%">
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
						StaffCop: Detect, Prevent and Respond to Insider Threats with a Single Solution{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="70%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" align-items="center" flex-direction="column" />
					{"        "}
					<Text
						margin="1px 0px 30px 0px"
						sm-text-align="center"
						text-align="justify"
						md-width="100%"
						font="400 18px/28px --fontFamily-googleInter"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
					>
						StaffCop's insider threat detection and data loss prevention solution leverages real-time user activity monitoring to detect early signs of insider threats. And Its behavior-based rules engine offers active defense from all kinds of malicious insider activity like data leak and exfiltration, IP theft, fraud, industrial espionage, sabotage, etc.{" "}
						<br />
						You can also conduct threat analysis, forensic investigation, and auditing utilizing StaffCop's unique Intelligent Session Mining with video and audio recording, complete metadata alerts, keylogging, and other powerful features. Lastly, the software comes with built-in integration with security information and event management (SIEM) and a threat analytics system that allows you to extend your security coverage.{" \n\n"}
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
						flex-direction="column"
						hover-transform="translateY(-10px)"
						display="flex"
						background="#FFFFFF"
						border-width="1px"
						border-style="solid"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						justify-content="flex-start"
						padding="42px 37px 42px 37px"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						align-items="flex-start"
						border-radius="6px"
					>
						<Text
							margin="0px 0px 0px 0px"
							color="#ffffff"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							background="--color-primary"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							display="block"
							justify-content="center"
							border-width="1px"
							width="48px"
							font="700 18px/22px --fontFamily-googleInter"
							border-style="solid"
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
							Real-Time User Activity Monitoring for Early Warning{"\n\n"}
						</Text>
						<Text
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
						>
							With StaffCop you can view all user activity in real-time encompassing 22+ system objects like web, apps, email, file transfers, etc., and on-screen content (OCR).
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
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
					/>
					{"        "}
					<Box
						height="100%"
						md-flex-direction="column"
						border-color="rgba(255, 255, 255, 0.05)"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						sm-padding="20px 20px 20px 20px"
						flex-direction="column"
						border-radius="6px"
						border-style="solid"
						display="flex"
						align-items="flex-start"
						padding="42px 37px 42px 37px"
						border-width="1px"
						md-display="flex"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						justify-content="flex-start"
					>
						<Text
							color="#ffffff"
							background="--color-primary"
							align-items="center"
							display="block"
							justify-content="center"
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							padding="13px 0px 13px 0px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							text-align="center"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							border-radius="40px"
							width="48px"
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
							Identify and Secure Sensitive Data{"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							StaffCop not only allows you to discover and identify sensitive data but also protects the information from falling into the wrong hands.
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
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						padding="42px 37px 42px 37px"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						border-width="1px"
						background="#FFFFFF"
						height="100%"
						md-display="flex"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						justify-content="flex-start"
						border-radius="6px"
					>
						<Text
							margin="0px 0px 0px 0px"
							color="#ffffff"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-style="solid"
							background="--color-primary"
							border-width="1px"
							display="block"
							justify-content="center"
							text-align="center"
							font="700 18px/22px --fontFamily-googleInter"
							border-radius="40px"
							align-items="center"
							border-color="rgba(255, 255, 255, 0.05)"
							padding="13px 0px 13px 0px"
							width="48px"
						>
							3
						</Text>
						<Text
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
						>
							Behavior Analytics to Detect Anomaly{"\n\n"}
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
						>
							StaffCop can detect malicious activity and anomalies that indicate a deviation from normal behavior using intelligent behavior analysis.{" "}
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
						background="#FFFFFF"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						justify-content="flex-start"
						border-style="solid"
						flex-direction="column"
						align-items="flex-start"
						padding="42px 37px 42px 37px"
						border-width="1px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						border-radius="6px"
						height="100%"
						hover-transform="translateY(-10px)"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
					>
						<Text
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							width="48px"
							font="700 18px/22px --fontFamily-googleInter"
							padding="13px 0px 13px 0px"
							border-width="1px"
							border-color="rgba(255, 255, 255, 0.05)"
							border-radius="40px"
							border-style="solid"
							display="block"
							justify-content="center"
							margin="0px 0px 0px 0px"
							color="#ffffff"
							background="--color-primary"
							align-items="center"
							text-align="center"
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
							Prevent Threats with Rules Engine{"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							The rules engine is a powerful tool that allows you to create rules to define what constitutes insider threats and takes immediate action when rule violation is detected.
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
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						sm-padding="20px 20px 20px 20px"
						flex-direction="column"
						justify-content="flex-start"
						background="#FFFFFF"
						height="100%"
						md-flex-direction="column"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						align-items="flex-start"
						border-radius="6px"
						border-style="solid"
						hover-transform="translateY(-10px)"
						padding="42px 37px 42px 37px"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						border-width="1px"
					>
						<Text
							color="#ffffff"
							border-style="solid"
							display="block"
							margin="0px 0px 0px 0px"
							border-color="rgba(255, 255, 255, 0.05)"
							font="700 18px/22px --fontFamily-googleInter"
							border-radius="40px"
							border-width="1px"
							align-items="center"
							text-align="center"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							justify-content="center"
							width="48px"
						>
							5
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							IT Forensics to Investigate Security Incidents{"\n\n"}
						</Text>
						<Text
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
						>
							Video recording of all user activity, audio recording, session recording, immutable logs, alerts, and optional OCR search are just a few functions of StaffCop's powerful audit and forensic component. Together they provide a wide array of investigation data to locate the source and insider threat with pinpoint accuracy.
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
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
						justify-content="flex-start"
						border-style="solid"
						padding="42px 37px 42px 37px"
						border-width="1px"
						background="#FFFFFF"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						align-items="flex-start"
						border-radius="6px"
						height="100%"
						md-display="flex"
					>
						<Text
							text-align="center"
							width="48px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							color="#ffffff"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							justify-content="center"
							font="700 18px/22px --fontFamily-googleInter"
							border-style="solid"
							align-items="center"
							background="--color-primary"
							border-width="1px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="block"
							margin="0px 0px 0px 0px"
						>
							6
						</Text>
						<Text
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
						>
							Implement Cybersecurity Best Practices and Standards
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							StaffCop's insider threat detection is built on cybersecurity systems like NIST, ISO 27001, FISMA, etc., to give you absolute peace of mind knowing you are using a solution that conforms with world-class security standards. Your sensitive data is also protected by  GDPR, PCI-DSS, HIPAA, and other compliance standards.{" "}
						</Text>
					</Box>
					{"    "}
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
					<Box
						border-width="1px"
						background="#FFFFFF"
						md-flex-direction="column"
						flex-direction="column"
						md-display="flex"
						sm-padding="20px 20px 20px 20px"
						justify-content="flex-start"
						display="flex"
						border-radius="6px"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
						border-style="solid"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						align-items="flex-start"
					>
						<Text
							align-items="center"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							color="#ffffff"
							border-radius="40px"
							border-width="1px"
							display="block"
							width="48px"
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							justify-content="center"
							text-align="center"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
						>
							7
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							External & Privileged User Monitoring for Extra Protection{"\n\n"}
						</Text>
						<Text
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
						>
							For further security and to prevent data theft or sabotage, StaffCop allows you to monitor external and privileged users like third-party vendors, remote users, and IT admins who have access to your critical systems.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#F8F8F9" padding="100px 0 70px 0" sm-padding="50px 0 30px 0">
			<Override slot="SectionContent" align-items="center" max-width="1200px" />
			<Text
				color="#13212A"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				font="--headline2"
				margin="0px 0px 45px 0px"
				display="inline-block"
				letter-spacing="-2%"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 36px/40px Inter, sans-serif"
			>
				Industry Statistics Show the Need for{" "}
				<br />
				<Span color="--primary">
					Insider Threat Prevention Solutions
				</Span>
				{"\n\n"}
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
						border-color="rgba(255, 255, 255, 0.05)"
						justify-content="flex-start"
						border-width="1px"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						sm-padding="20px 20px 20px 20px"
						padding="36px 36px 36px 36px"
						align-items="flex-start"
						md-flex-direction="column"
						border-radius="6px"
						border-style="solid"
						hover-transform="translateY(-10px)"
						md-display="flex"
						height="100%"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
					>
						<Text
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
						>
							Conspiring or colluding employees are the sources of insider threats
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							According to the Community Emergency Response Team, collusion from employees and third parties is the number one reason for insider-caused incidents.
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
								48.3%+{" "}
							</Span>
							Insider-Insider Collusion
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
								hyphens="manual"
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
							>
								16.75%+{" "}
							</Span>
							Insider-Outsider Collusion
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem lg-width="50%" md-width="100%" width="50%" display="flex">
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
						border-color="rgba(255, 255, 255, 0.05)"
						flex-direction="column"
						align-items="flex-start"
						padding="36px 36px 36px 36px"
						background="#FFFFFF"
						height="100%"
						hover-transform="translateY(-10px)"
						border-radius="6px"
						border-style="solid"
						sm-padding="20px 20px 20px 20px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						justify-content="flex-start"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
						border-width="1px"
						display="flex"
					>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Sensitive data at high risk due to employee privilege{" "}
						</Text>
						<Text
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
						>
							Findings from a survey of 400,000 members online by Cybersecurity Insiders published on The Insider Threat 2018 report indicate
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
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
								37%
							</Span>
							{" "}Insider-Insider Collusion
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font="700 18px/28.8px Inter, sans-serif"
							>
								34%
							</Span>
							{" "}Increased Amount of Sensitive Data
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
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						border-radius="6px"
						padding="36px 36px 36px 36px"
						border-width="1px"
						flex-direction="column"
						justify-content="flex-start"
						border-style="solid"
						md-flex-direction="column"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						sm-padding="20px 20px 20px 20px"
						align-items="flex-start"
					>
						<Text
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
						>
							Security experts are worried about insider threats
						</Text>
						<Text
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
						>
							When asked to evaluate their organization’s vulnerability to insider threats, 90% of cybersecurity professionals said they felt vulnerable. Source: Cybersecurity Insiders.
						</Text>
						<Text
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							sm-margin="0px 0px 0px 0px"
							font="--lead"
						>
							<Span
								color="--primary"
								white-space="normal"
								text-indent="0"
								font="700 18px/28.8px Inter, sans-serif"
								word-break="normal"
								text-overflow="clip"
								hyphens="manual"
								overflow-wrap="normal"
							>
								90%
							</Span>
							{" "}report feeling Vulnerable to Insider Threats
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
						sm-padding="20px 20px 20px 20px"
						display="flex"
						border-style="solid"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						padding="36px 36px 36px 36px"
						md-flex-direction="column"
						border-width="1px"
						background="#FFFFFF"
						flex-direction="column"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						align-items="flex-start"
						justify-content="flex-start"
						border-radius="6px"
						height="100%"
						md-display="flex"
					>
						<Text
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
						>
							The average cost of insider threats runs into millions
						</Text>
						<Text
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
						>
							A study by Ponemon Institute, which observed 159 companies over a 12 month period, found the average cost of insider threats to be $8 .76 million
						</Text>
						<Text
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							sm-margin="0px 0px 0px 0px"
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
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
								{"\n"}$8.76M
							</Span>
							{" "}Benchmarked Average Cost of Insider Threats
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#F8F8F9" padding="70px 0 70px 0" sm-padding="24px 0 50px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Text
				letter-spacing="-2%"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 36px/40px Inter, sans-serif"
				md-font="normal 700 30px/40px Inter, sans-serif"
				font="--headline2"
				margin="0px 0px 45px 0px"
				display="inline-block"
				color="#13212A"
				text-align="center"
			>
				StaffCop Insider Threat Prevention{" "}
				<br />
				Solution is Built on the NIST{" "}
				<br />
				<Span
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
				>
					Cybersecurity Framework
				</Span>
				{"\n\n"}
			</Text>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<Text
					margin="1px 0px 30px 16px"
					display="inline-block"
					width="70%"
					md-font="400 14px/20px --fontFamily-googleInter"
					md-width="100%"
					sm-text-align="center"
					text-align="justify"
					font="400 18px/28px --fontFamily-googleInter"
					color="#555"
				>
					StaffCop utilizes the National Institute of Standards and Technology (NIST) cybersecurity framework to carry out its numerous functions: Identify, Protect, Detect, Respond and Recover. Its powerful user activity monitoring, combined with its data loss prevention (DLP) capabilities, allows StaffCop to help organizations prevent insider threats and data breach incidents with ease.{" "}
				</Text>
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
						border-radius="6px"
						border-style="solid"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						justify-content="flex-start"
						border-width="1px"
						md-display="flex"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						flex-direction="column"
						height="100%"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						align-items="flex-start"
					>
						<Text
							background="--color-primary"
							border-radius="40px"
							font="700 18px/22px --fontFamily-googleInter"
							display="block"
							margin="0px 0px 0px 0px"
							justify-content="center"
							width="48px"
							border-color="rgba(255, 255, 255, 0.05)"
							padding="13px 0px 13px 0px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							align-items="center"
							text-align="center"
							color="#ffffff"
						>
							1
						</Text>
						<Text
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
						>
							Identify{"\n\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							StaffCop leverages advanced fingerprinting, OCR, and tagging technology to identify sensitive data in structured and unstructured information across organization data stores.
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
						height="100%"
						justify-content="flex-start"
						border-style="solid"
						hover-transform="translateY(-10px)"
						sm-padding="20px 20px 20px 20px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
						border-radius="6px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						padding="42px 37px 42px 37px"
						border-width="1px"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
						md-flex-direction="column"
						align-items="flex-start"
					>
						<Text
							font="700 18px/22px --fontFamily-googleInter"
							align-items="center"
							justify-content="center"
							margin="0px 0px 0px 0px"
							text-align="center"
							width="48px"
							padding="13px 0px 13px 0px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-color="rgba(255, 255, 255, 0.05)"
							display="block"
							border-style="solid"
							color="#ffffff"
							background="--color-primary"
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
							Protect{"\n\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Leveraging its activity monitoring and data loss prevention capabilities, StaffCop defends confidential information from unauthorized access, sharing, attack, and misuse.
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
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						border-radius="6px"
						border-width="1px"
						md-flex-direction="column"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						align-items="flex-start"
						border-style="solid"
						background="#FFFFFF"
						md-display="flex"
						sm-padding="20px 20px 20px 20px"
						padding="42px 37px 42px 37px"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						flex-direction="column"
						hover-transform="translateY(-10px)"
						justify-content="flex-start"
					>
						<Text
							display="block"
							align-items="center"
							color="#ffffff"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							width="48px"
							padding="13px 0px 13px 0px"
							text-align="center"
							margin="0px 0px 0px 0px"
							background="--color-primary"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							font="700 18px/22px --fontFamily-googleInter"
							justify-content="center"
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
							Detect{"\n\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							StaffCop’s powerful behavior-based policy and rules engine cast a solid detection net over the entire organization, facilitating the quick detection of insider threats and data breach incidents before it happens.
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
						md-display="flex"
						md-flex-direction="column"
						display="flex"
						flex-direction="column"
						justify-content="flex-start"
						padding="42px 37px 42px 37px"
						border-style="solid"
						background="#FFFFFF"
						border-color="rgba(255, 255, 255, 0.05)"
						border-radius="6px"
						border-width="1px"
						hover-transform="translateY(-10px)"
						height="100%"
						align-items="flex-start"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						sm-padding="20px 20px 20px 20px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
					>
						<Text
							padding="13px 0px 13px 0px"
							border-radius="40px"
							border-style="solid"
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							justify-content="center"
							width="48px"
							text-align="center"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							display="block"
							background="--color-primary"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
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
							Responde{"\n\n"}
						</Text>
						<Text
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
						>
							This solution has built-in real-time notification and immediate action features to defend against data exfiltration proactively, malicious or accidental insider threats, and data breaches. And it can pinpoint the exact cause and source of the incident with readily available forensic data.{" "}
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
						border-style="solid"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						display="flex"
						flex-direction="column"
						justify-content="flex-start"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						align-items="flex-start"
						padding="42px 37px 42px 37px"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
						border-radius="6px"
						height="100%"
						border-color="rgba(255, 255, 255, 0.05)"
					>
						<Text
							display="block"
							margin="0px 0px 0px 0px"
							color="#ffffff"
							border-color="rgba(255, 255, 255, 0.05)"
							text-align="center"
							font="700 18px/22px --fontFamily-googleInter"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							border-width="1px"
							border-style="solid"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							align-items="center"
							justify-content="center"
							width="48px"
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
							Recover{"\n\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Lastly, StaffCop can identify the source and cause of a security breach so that a recovery plan can be formulated fast while preventing similar future incidents.
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
				align-items="center"
				padding="76px 0px 0px 0px"
				border-radius="6px"
				border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
				background="#ffffff"
				border-width="1px"
				border-style="solid"
				box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
				border-color="#ffffff"
				max-width="1170px"
			/>
			<Text
				margin="0px 0px 50px 0px"
				display="inline-block"
				text-align="center"
				width="80%"
				sm-margin="0px 0px 0px 0px"
				font="--headline2"
				color="#13212A"
				letter-spacing="-2%"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 36px/40px Inter, sans-serif"
			>
				<Span
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
				>
					StaffCop Insider Threat Prevention
				</Span>
				<br />
				is Your Ultimate Defense Against Insider Threats and Data Loss Incidents{"\n\n"}
			</Text>
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
						align-items="center"
						justify-content="center"
						md-align-items="center"
						padding="0px 0px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
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
						sm-margin="20px 0px 0px 0px"
						padding="0px 60px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						lg-padding="0px 30px 0px 50px"
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
					>
						Establish Organization-Wide Visibility and Control{"\n\n"}
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
						StaffCop has built-in features that allows it to visually record every action that a user makes for over 22 objects including screen, apps, websites, files, emails, etc. All objects can be adjusted to take into consideration what needs to be monitored and who has access to the monitored records. You can also control who you want to monitor, how much you want to monitor, when and for how long, thus you can have instant administrative oversight and still meet privacy requirements.
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
				<StackItem md-width="100%" md-order="1" width="50%" display="flex">
					<Override
						slot="StackItemContent"
						justify-content="center"
						md-order="1"
						padding="0px 20px 0px 60px"
						border-radius="0px"
						flex-direction="column"
						sm-margin="20px 0px 0px 0px"
						border-width="0px"
						align-items="flex-start"
						lg-padding="0px 30px 0px 50px"
					/>
					{"        "}
					<Text
						text-align="right"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
					>
						Detect and Prevent Threats Early and Automatically{"\n\n"}
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
						Copying files to external drives, using cloud storage to share corporate files, downloading/opening files and attachments from unknown sources are often regarded as high risk behavior. StaffCop not only identifies this type of risky behavior but also applies advanced behavior-based rules to automatically detect when users violate the rules. Further, it utilizes the sophisticated anomaly rules to identify user activity outside the normal behavior and immediately alert administrators of errant employees. The solution also allows to   lock such users out from the system or take remote control of their computer before any malicious or fraudulent attempt.
					</Text>
					{"    "}
				</StackItem>
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
						width="100%"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%204.png?v=2020-10-19T22:32:34.380Z"
						md-width="80%"
						object-fit="contain"
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
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
					>
						Monitor Privileged Users, Remote Users and Third-Parties to Prevent Collusion{"\n\n"}
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
						With StaffCop you have the capability to create profiles for remote, privileged, external vendors, define what information and system resources each profile can access and use rules to set up by behavior policies so that access to sensitive information is segregated by the organization’s security policy, or on a need-to-know basis. Rules can also be developed to notify the authorities of any suspicious privileged user activity, including unscheduled and/or unauthorized changes to system configuration, creation of backdoor accounts etc.
					</Text>
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
				<StackItem md-width="100%" md-order="1" width="50%" display="flex">
					<Override
						slot="StackItemContent"
						sm-margin="20px 0px 0px 0px"
						justify-content="center"
						padding="0px 0px 0px 50px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						lg-padding="0px 30px 0px 50px"
					/>
					{"        "}
					<Text
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						text-align="right"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
					>
						Investigate Threat Incidents and Conduct Forensic Analysis and Audit{"\n\n"}
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
						Detailed alerts for all users can be viewed including any breach events and what actions were taken. Warning messages can be configured to inform the users about nonconformity as it pertains to handling sensitive data. Influence corrective behavior with on-time feedback and notifications. Session recordings and history playback can be used to view user’s desktop for audit and evidence gathering purposes.{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem md-width="100%" width="50%" display="flex">
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
						object-fit="contain"
						width="90%"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22:39:56.097Z"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22%3A39%3A56.097Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22%3A39%3A56.097Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22%3A39%3A56.097Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22%3A39%3A56.097Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22%3A39%3A56.097Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22%3A39%3A56.097Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22%3A39%3A56.097Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Components.BlockNeed>
			<Override slot="text7">
				Categorize applications and web-sites into productive and unproductive. Set up different configurations for particular users, groups and departments. Compare results.
			</Override>
			<Override slot="link1" />
			<Override slot="text2">
				Receive the required data “on the fly”. Search by keywords and regular expressions. Record sound from microphones to hear what was happening at the moment of interest.
				<Span
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="rgba(255, 255, 255, 0)"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
				>
					.
				</Span>
			</Override>
			<Override slot="text6">
				Employee Monitoring
			</Override>
			<Override slot="text4">
				View remote desktop without being notices. Take control over a workstation. Full picture of software and hardware usage. Intensity of usage and registry of states.
			</Override>
			<Override slot="link">
				Try for free
			</Override>
			<Override slot="link2" />
			<Override slot="text1">
				Information Security
			</Override>
			<Override slot="text3">
				Remote Administration
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
				lg-font="normal 700 36px/58px Inter, sans-serif"
				font="--headline2"
				margin="0px 0px 70px 0px"
				display="inline-block"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				color="#13212A"
				letter-spacing="-2%"
				md-margin="0px 0px 20px 0px"
				sm-font="normal 700 24px/30px Inter, sans-serif"
			>
				<Span
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
					overflow-wrap="normal"
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
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						border-style="solid"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						justify-content="flex-start"
						padding="42px 37px 42px 37px"
						background="#FFFFFF"
						display="flex"
						md-display="flex"
						border-width="1px"
						height="100%"
						hover-transform="translateY(-10px)"
						flex-direction="column"
						align-items="flex-start"
						border-radius="6px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-flex-direction="column"
					>
						<Image width="60px" height="60px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/papaplo.svg?v=2020-10-19T23:24:47.217Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Bare Metal
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Install on bare metal from our ISO image containing Ubuntu 18.04 and StaffCop or install StaffCop packages on existing Ubuntu 18.04.{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem lg-width="50%" md-width="100%" width="33.3333%" display="flex">
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						md-display="flex"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						justify-content="flex-start"
						padding="42px 37px 42px 37px"
						background="#FFFFFF"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						md-flex-direction="column"
						border-width="1px"
						border-style="solid"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						align-items="flex-start"
						border-radius="6px"
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
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
						>
							Install on any OS as a virtual machine from our ISO image, use Virtual Box, VMWare, Hyper-V or any other virtualization system. Easy administrating without risking the host machine.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem md-width="100%" width="33.3333%" display="flex" lg-width="100%">
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
						hover-transform="translateY(-10px)"
						sm-padding="20px 20px 20px 20px"
						padding="42px 37px 42px 37px"
						background="#FFFFFF"
						height="100%"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						justify-content="flex-start"
						border-style="solid"
						display="flex"
						md-flex-direction="column"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						flex-direction="column"
						align-items="flex-start"
						border-radius="6px"
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
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
						>
							Use your own secure, scalable private cloud implementation including AWS, Google Cloud, Azure and more{"\n\n"}
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
		</Section>
		<Components.Feature>
			<Override slot="text">
				Feature-rich, affordable with annual and perpetual licensing options
			</Override>
		</Components.Feature>
		<Components.Footer />
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