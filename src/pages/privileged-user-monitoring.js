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
		<GlobalQuarklyPageStyles pageUrl={"privileged-user-monitoring"} />
		<Helmet>
			<title>
				Privileged User Monitoring
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
		<Section md-padding="90px 0 30px 0" padding="180px 0 120px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)" lg-padding="140px 0 60px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" sm-align-items="center" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
					/>
					{"        "}
					<Text
						margin="0px 0px 16px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						font="--headline2"
					>
						Privileged User Monitoring
					</Text>
					<Text
						font="normal 400 18px/160% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#555"
						md-font="normal 400 16px/140% --fontFamily-googleInter"
						sm-text-align="center"
					>
						Activity Monitoring, Privileged Access Management and DLP Technology to Protect Your Data & IT Systems
					</Text>
					{"    "}
					<Link
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						sm-font="600 16px/22px --fontFamily-googleInter"
						sm-padding="16px 20px 16px 20px"
						margin="36px 0px 0px 0px"
						md-padding="16px 26px 16px 26px"
						text-decoration-line="initial"
						box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						border-radius="40px"
						border-style="solid"
						z-index="2"
						font="600 18px/22px --fontFamily-googleInter"
						background="--color-primary"
						hover-background="#409EEB"
						border-width="1px"
						href="/request-demo"
						position="relative"
						color="#ffffff"
						padding="16px 38px 16px 38px"
					>
						Request demo
					</Link>
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" position="relative" />
					{"        "}
					<Image
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15:07:09.010Z"
						bottom="auto"
						md-right="-70px"
						md-width="400px"
						lg-position="absolute"
						lg-top="-35px"
						sm-position="relative"
						sm-bottom="auto"
						width="803px"
						position="absolute"
						top="-110px"
						lg-right="-50px"
						sm-right="auto"
						sm-top="0px"
						right="-115px"
						left="auto"
						lg-width="500px"
						md-top="0px"
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
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
						font="normal 700 32px/140% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
					>
						Monitor Privileged Users & Vendors with StaffCop
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem nout-width="100%" width="70%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" align-items="center" flex-direction="column" />
					{"        "}
					<Text
						margin="1px 0px 30px 0px"
						display="inline-block"
						md-width="100%"
						sm-margin="1px 0px 0px 0px"
						sm-text-align="center"
						text-align="justify"
						font="400 18px/28px --fontFamily-googleInter"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
					>
						Most privileged parties have access to core systems and data, making it incredibly difficult to detect a malicious user before they have caused damage. Obviously they have a significant advantage over external attackers. Besides already having access to elevated systems, they are aware of their organization’s policies, procedures, and technology and vulnerabilities. Privileged accounts are also the main targets for many external criminals looking to gain access to otherwise ‘secure’ systems.
						<br />
						<br />
						For all of these reasons and the increasing complexity of the IT environment, privileged user monitoring, identity verification and privileged access management are becoming critical components in an organization’s security techniques. This is where StaffCop comes in.
					</Text>
					{"  "}
					<Hr border-color="rgba(237, 237, 237, 1)" width="98%" margin="50px 0px 0px 0px" />
					{"  "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 12px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"        "}
				<StackItem width="70%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" align-items="center" flex-direction="column" />
					{"        "}
					<Text
						color="#555"
						margin="0px 0px 0px 0px"
						display="inline-block"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
						font="400 18px/28px --fontFamily-googleInter"
					>
						StaffCop’s real-time user activity monitoring and data loss prevention solutions allow you to monitor privileged users and automatically detect anomalous behavior and suspicious activity that signal a compromised or malicious privileged user. Examples of malicious behavior include: creation of back-door accounts, transmission of sensitive data outside the company etc.
						<br />
						<br />
						Further, StaffCop’s Intelligent Policy & Rules Engine automatically implements data protection and access control rules on the compromised privileged user to prevent data exfiltration, IP theft, fraud, industrial espionage, sabotage and other malicious attempts.
						<br />
						<br />
						Leveraging its complete session recording and metadata analysis and immutable logging features, StaffCop’s Privileged User Monitoring conducts threat analysis, forensic investigation and security auditing. Finally, expand your security coverage to encompass your entire organization with StaffCop’s built-in integration with security information and event management (SIEM) and threat analytics systems.  Essentially, StaffCop’s privileged user monitoring allows you to:
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="75%" display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
						/>
						<Text sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555">
							Identify and monitor all privileged users including system administrators, DBAs, network engineers, system architects, developers, IT auditors, remote users, third-party vendors etc.
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
							Enforce a ‘zero-trust’ data loss prevention (DLP) strategy utilizing activity, system-access, schedule and content-based rules.
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							padding="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							Create monitoring and access profiles according to a user’s role, separation of duties, existing Active Directory Group Policy or on a need to know basis.
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							padding="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							Use immutable logs, session recording and real-time alerts and notifications to audit privileged sessions, detect credential sharing, and other abuse of root accounts.
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
					lg-width="50%"
					md-width="100%"
					nout-width="50%"
					width="33.3333%"
					display="flex"
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
						border-radius="6px"
						height="100%"
						padding="42px 37px 42px 37px"
						background="#FFFFFF"
						md-display="flex"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						align-items="flex-start"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						justify-content="flex-start"
						border-width="1px"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
					>
						<Text
							margin="0px 0px 0px 0px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-color="rgba(255, 255, 255, 0.05)"
							display="block"
							text-align="center"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							justify-content="center"
							background="--color-primary"
							border-width="1px"
							border-style="solid"
							align-items="center"
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
							Visibility and Control
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
						>
							StaffCop monitors all user activity over endpoints, servers/terminal servers, network and the Cloud covering of 22+ system objects including: websites, apps, emails, file transfers and on-screen content in real-time.
						</Text>
					</Box>
					{"    "}
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
						align-items="flex-start"
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
					/>
					{"        "}
					<Box
						justify-content="flex-start"
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-style="solid"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						sm-padding="20px 20px 20px 20px"
						align-items="flex-start"
						border-width="1px"
						md-flex-direction="column"
						background="#FFFFFF"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						height="100%"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
					>
						<Text
							color="#ffffff"
							display="block"
							justify-content="center"
							background="--color-primary"
							border-width="1px"
							text-align="center"
							width="48px"
							font="700 18px/22px --fontFamily-googleInter"
							padding="13px 0px 13px 0px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-style="solid"
							margin="0px 0px 0px 0px"
							border-radius="40px"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
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
							Detect Anomalies with Intelligent Behavioral Engine
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							StaffCop’s intelligent behavioral engine prevents the mishandling of sensitive data like sharing over the Cloud or removable media.
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
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						sm-padding="20px 20px 20px 20px"
						align-items="flex-start"
						justify-content="flex-start"
						border-style="solid"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						display="flex"
						flex-direction="column"
						height="100%"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						border-radius="6px"
						padding="42px 37px 42px 37px"
					>
						<Text
							color="#ffffff"
							width="48px"
							font="700 18px/22px --fontFamily-googleInter"
							background="--color-primary"
							border-radius="40px"
							border-width="1px"
							align-items="center"
							margin="0px 0px 0px 0px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							display="block"
							justify-content="center"
							text-align="center"
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
							Conduct Forensic Investigation and IT Audit
						</Text>
						<Text
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
						>
							StaffCop uses video/audio recording of all user activity, session recording, immutable logs, alerts, optional OCR search and similar features to conduct audit and forensic investigations. Combined they provide a wide collection of investigation data to locate the cause and source of any privileged user related threats with pinpoint accuracy.
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
						border-radius="6px"
						background="#FFFFFF"
						height="100%"
						display="flex"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						border-color="rgba(255, 255, 255, 0.05)"
						justify-content="flex-start"
						border-width="1px"
						border-style="solid"
						sm-padding="20px 20px 20px 20px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
						align-items="flex-start"
						padding="42px 37px 42px 37px"
					>
						<Text
							font="700 18px/22px --fontFamily-googleInter"
							background="--color-primary"
							border-width="1px"
							border-style="solid"
							align-items="center"
							justify-content="center"
							text-align="center"
							margin="0px 0px 0px 0px"
							border-color="rgba(255, 255, 255, 0.05)"
							padding="13px 0px 13px 0px"
							display="block"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							width="48px"
							color="#ffffff"
						>
							4
						</Text>
						<Text
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
						>
							Risk Analysis to Identify Security Gaps & Vulnerabilities
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							This software solution can also identify high risk users, policy and rules and system components thanks to its dynamic risk scoring and vulnerabilities scanning feature. It also provides trend graphs and severity mapping that warn administrators about any change in threat level before it becomes critical.
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
						padding="42px 37px 42px 37px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
						justify-content="flex-start"
						hover-transform="translateY(-10px)"
						sm-padding="20px 20px 20px 20px"
						align-items="flex-start"
						md-flex-direction="column"
						border-radius="6px"
						border-width="1px"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
					>
						<Text
							font="700 18px/22px --fontFamily-googleInter"
							border-radius="40px"
							border-color="rgba(255, 255, 255, 0.05)"
							text-align="center"
							margin="0px 0px 0px 0px"
							color="#ffffff"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							display="block"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							align-items="center"
							justify-content="center"
							width="48px"
							border-style="solid"
						>
							5
						</Text>
						<Text
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
						>
							Protect Data and Privacy with Endpoint DLP
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Schedule employees by shift or workload and easily inform all employees about any updates.{" "}
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
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
						height="100%"
						border-color="rgba(255, 255, 255, 0.05)"
						justify-content="flex-start"
						border-width="1px"
						border-style="solid"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						flex-direction="column"
						align-items="flex-start"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						display="flex"
						border-radius="6px"
						padding="42px 37px 42px 37px"
						background="#FFFFFF"
						hover-transform="translateY(-10px)"
						md-display="flex"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
					>
						<Text
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-color="rgba(255, 255, 255, 0.05)"
							justify-content="center"
							width="48px"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							border-style="solid"
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							border-width="1px"
							align-items="center"
							display="block"
							text-align="center"
						>
							6
						</Text>
						<Text
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
						>
							Conform with Regulatory Compliance
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							With StaffCop you can monitor privileged users and manage their access while also adhering to major compliance regimens, including HIPAA, PCI-DSS, GDPR, ISO 27001 etc.
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
				color="#13212A"
				text-align="center"
				margin="0px 0px 45px 0px"
				display="inline-block"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 36px/40px Inter, sans-serif"
				font="--headline2"
				letter-spacing="-2%"
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
						md-display="flex"
						sm-padding="20px 20px 20px 20px"
						align-items="flex-start"
						background="#FFFFFF"
						hover-transform="translateY(-10px)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						border-width="1px"
						border-color="rgba(255, 255, 255, 0.05)"
						flex-direction="column"
						border-radius="6px"
						border-style="solid"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-flex-direction="column"
						display="flex"
						justify-content="flex-start"
						padding="36px 36px 36px 36px"
						height="100%"
					>
						<Text
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
						>
							Application monitoring
						</Text>
						<Text
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
						>
							According to a report by Cybersecurity Insider, user privilege and increased sensitive data are main risk enablers.
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
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
								37%{" "}
							</Span>
							Excess Privilege
						</Text>
						<Text
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
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
								34%{" "}
							</Span>
							Increased Amount of Sensitive Data
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
						align-items="flex-start"
						border-radius="6px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						height="100%"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
						border-style="solid"
						background="#FFFFFF"
						justify-content="flex-start"
						md-display="flex"
						sm-padding="20px 20px 20px 20px"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						display="flex"
						padding="36px 36px 36px 36px"
						border-width="1px"
					>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Majority of company breaches involve privileged accounts
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							A survey of 1,000 of IT decision makers in the U.S. and the U.K. conducted by Centrify revealed that 74% of enterprise breaches involved privileged accounts.
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							74% Enterprise Breaches Involved Privileged Credential Abuse
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
						md-display="flex"
						flex-direction="column"
						align-items="flex-start"
						padding="36px 36px 36px 36px"
						border-width="1px"
						height="100%"
						border-style="solid"
						md-flex-direction="column"
						justify-content="flex-start"
						border-radius="6px"
						hover-transform="translateY(-10px)"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						sm-padding="20px 20px 20px 20px"
					>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Privileged users are one of the greatest security risks
						</Text>
						<Text
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 18px 0px"
						>
							In a recent survey by Crowd Research Partners, 55% mention that privileged IT users/admins pose the greatest insider security risk to their organization.
						</Text>
						<Text
							sm-margin="0px 0px 0px 0px"
							font="--lead"
							margin="0px 0px 18px 0px"
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
								55%
							</Span>
							{" "}Of Companies Say Privileged Users are Their Biggest Insider Threat
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem display="flex" lg-width="50%" md-width="100%" width="50%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
					/>
					{"        "}
					<Box
						md-display="flex"
						md-flex-direction="column"
						background="#FFFFFF"
						hover-transform="translateY(-10px)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						flex-direction="column"
						border-radius="6px"
						border-width="1px"
						border-style="solid"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						sm-padding="20px 20px 20px 20px"
						padding="36px 36px 36px 36px"
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
							Systems logs and user data - crucial to security analytics
						</Text>
						<Text
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 18px 0px"
						>
							IT pros think login data and 41% think private activities on corporate devices are most essential from a security point of view according to a report by Cynet.
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
								47%
							</Span>
							{" "}Login Date and Time
						</Text>
						<Text
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
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
								41%
							</Span>
							{" "}Private User Activity on Company Devices
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#F8F8F9" padding="70px 0 90px 0" sm-padding="24px 0 50px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				font="--headline2"
				margin="0px 0px 45px 0px"
				display="inline-block"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				width="70%"
				color="#13212A"
				letter-spacing="-2%"
				text-align="center"
				lg-font="normal 700 36px/40px Inter, sans-serif"
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
						display="flex"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						border-color="rgba(255, 255, 255, 0.05)"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						height="100%"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						sm-padding="40px 36px 30px 36px"
						flex-direction="column"
						justify-content="center"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
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
							text-align="center"
							align-items="center"
							display="none"
							height="48px"
							background="#1465FF"
							width="48px"
							justify-content="center"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							transform="translateY(-30px)"
						/>
						<Override
							slot="Link"
							width="0px"
							border-radius="50px"
							text-decoration-line="initial"
							top="0px"
							right="0px"
							bottom="0px"
							left="0px"
							height="0px"
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Smart rules & automated alerts
						</Override>
						<Override slot="Before Text2 :default">
							Smart rules & automated alerts
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Groupxzcxzc.svg?v=2020-10-28T21:03:36.802Z" margin="-20px 0px 36px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						display="flex"
						background="#FFFFFF"
						border-radius="6px"
						border-color="rgba(255, 255, 255, 0.05)"
						justify-content="center"
						lg-padding="68px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						height="100%"
						flex-direction="column"
						padding="40px 36px 40px 36px"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						sm-padding="40px 36px 30px 36px"
					>
						<Override slot="Before Text2 :default">
							Live view & history playback
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Override
							slot="Link :default"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
							text-decoration-line="initial"
						/>
						<Override
							slot="Link :hover"
							height="48px"
							text-align="center"
							width="48px"
							display="none"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							transform="translateY(-30px)"
							align-items="center"
						/>
						<Override
							slot="Link"
							left="0px"
							height="0px"
							width="0px"
							border-radius="50px"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							color="#ffffff"
							text-decoration-line="initial"
							right="0px"
							display="none"
							font="600 18px --fontFamily-googleInter"
							top="0px"
							bottom="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Live view & history playback
						</Override>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/cvbcvbvcbcv.svg?v=2020-10-28T21:03:36.801Z" margin="-20px 0px 36px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						background="#FFFFFF"
						lg-padding="68px 36px 30px 36px"
						align-items="flex-start"
						flex-direction="column"
						justify-content="center"
						border-radius="6px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						height="100%"
						padding="40px 36px 40px 36px"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						position="relative"
						border-width="1px"
						sm-padding="30px 36px 30px 36px"
						display="flex"
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
							width="48px"
							align-items="center"
							transform="translateY(-30px)"
							display="none"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
						/>
						<Override
							slot="Link"
							top="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
							border-radius="50px"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							bottom="0px"
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
						/>
						<Override
							slot="Before Text2"
							margin="0px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
							font="normal 600 24px/29px --fontFamily-googleInter"
						>
							instant message monitoring
						</Override>
						<Override slot="Before Text2 :default">
							instant message monitoringinstant message monitoring
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Messages,%20Chat.18%201.svg?v=2020-10-28T15:43:13.520Z" margin="-20px 0px 36px -10px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem md-width="100%" lg-width="50%" width="33.3333%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						padding="40px 36px 40px 36px"
						position="relative"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
						justify-content="start"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						border-width="1px"
						height="100%"
						background="#FFFFFF"
						sm-padding="30px 36px 30px 36px"
						lg-padding="68px 36px 30px 36px"
						align-items="flex-start"
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
							align-items="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							transform="translateY(-30px)"
							width="48px"
							display="none"
							height="48px"
							justify-content="center"
							text-align="center"
						/>
						<Override
							slot="Link"
							bottom="0px"
							left="0px"
							height="0px"
							display="none"
							font="600 18px --fontFamily-googleInter"
							text-decoration-line="initial"
							top="0px"
							right="0px"
							width="0px"
							border-radius="50px"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							color="#ffffff"
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
						justify-content="start"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						position="relative"
						align-items="flex-start"
						height="100%"
						lg-padding="68px 36px 30px 36px"
						sm-padding="30px 36px 30px 36px"
						display="flex"
						border-width="1px"
						border-color="rgba(255, 255, 255, 0.05)"
						border-radius="6px"
						padding="40px 36px 40px 36px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						flex-direction="column"
					>
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
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							transform="translateY(-30px)"
							align-items="center"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							width="48px"
							display="none"
							height="48px"
						/>
						<Override
							slot="Link"
							text-decoration-line="initial"
							top="0px"
							border-radius="50px"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
							display="none"
							color="#ffffff"
							bottom="0px"
						/>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/oiuioioui.svg?v=2020-10-28T21:03:36.804Z" margin="-15px 0px 33px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						display="flex"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						position="relative"
						align-items="flex-start"
						flex-direction="column"
						justify-content="start"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						height="100%"
						border-width="1px"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link"
							bottom="0px"
							right="0px"
							border-radius="50px"
							display="none"
							font="600 18px --fontFamily-googleInter"
							text-decoration-line="initial"
							height="0px"
							width="0px"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							color="#ffffff"
							top="0px"
							left="0px"
						/>
						<Override
							slot="Before Text2"
							margin="30px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
							font="normal 600 24px/29px --fontFamily-googleInter"
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
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							transform="translateY(-30px)"
							align-items="center"
							display="none"
							justify-content="center"
							width="48px"
							height="48px"
							text-align="center"
						/>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(6).svg?v=2020-10-28T15:43:13.528Z" margin="-20px 0px 38px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						display="flex"
						height="100%"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						position="relative"
						align-items="flex-start"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						background="#FFFFFF"
						border-width="1px"
						flex-direction="column"
						padding="40px 36px 40px 36px"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
						justify-content="start"
					>
						<Override slot="Before Text2 :default">
							file transfer tracking
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Override
							slot="Link :default"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
							text-decoration-line="initial"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							height="48px"
							justify-content="center"
							text-align="center"
							transform="translateY(-30px)"
							align-items="center"
							display="none"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Override
							slot="Link"
							border-radius="50px"
							color="#ffffff"
							right="0px"
							width="0px"
							left="0px"
							height="0px"
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
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
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(7).svg?v=2020-10-28T15:43:13.528Z" margin="-14px 0px 32px 1px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem display="flex" md-width="100%" lg-width="50%" width="33.3333%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						display="flex"
						align-items="flex-start"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						lg-padding="68px 36px 30px 36px"
						border-width="1px"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						border-radius="6px"
						sm-padding="30px 36px 30px 36px"
						height="100%"
						flex-direction="column"
						justify-content="start"
						position="relative"
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
							align-items="center"
							display="none"
							height="48px"
							justify-content="center"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							width="48px"
							background="#1465FF"
							text-align="center"
							transform="translateY(-30px)"
						/>
						<Override
							slot="Link"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
							border-radius="50px"
							display="none"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
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
						height="100%"
						background="#FFFFFF"
						border-width="1px"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
						flex-direction="column"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						position="relative"
						display="flex"
						padding="40px 36px 40px 36px"
						lg-padding="68px 36px 30px 36px"
						justify-content="start"
						align-items="flex-start"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
					>
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
							width="48px"
							height="48px"
							background="#1465FF"
							text-align="center"
							transform="translateY(-30px)"
							align-items="center"
							display="none"
							justify-content="center"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Override
							slot="Link"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							bottom="0px"
							right="0px"
							height="0px"
							width="0px"
							left="0px"
							border-radius="50px"
							display="none"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
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
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/uyiuiuyiyu.svg?v=2020-10-28T21:03:36.822Z" margin="-8px 0px 44px 1px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="40px 0 70px 0" background="#F8F8F9" lg-padding="30px 0 30px 0" md-padding="30px 0 10px 0">
			<Override
				slot="SectionContent"
				align-items="center"
				padding="60px 0px 0px 0px"
				background="#ffffff"
				box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
				border-color="#ffffff"
				border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
				max-width="1170px"
				border-radius="6px"
				border-width="1px"
				border-style="solid"
			/>
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
						md-width="80%"
						width="82%"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22:24:26.269Z"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=3200 3200w"
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
						padding="0px 60px 0px 20px"
						border-radius="0px"
						border-width="0px"
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
						System-Wide Monitoring & Control
					</Text>
					<Text
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#555"
						lg-font="normal 400 15px/160% Inter, sans-serif"
					>
						Every action that a privileged user makes on your IT systems including endpoints, servers/terminal servers, network and the Cloud for 22+ system objects like: web, apps, email, file transfers, etc is visually recorded by StaffCop. Each object can be configured to take into consideration what needs to be monitored and who has access to the monitored records, allowing for instant administrative oversight in respect to all user activity while complying with any privacy requirements. Also, monitoring continues even when systems are offline.
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
				border-width="0px 0px 1px 0px"
			>
				<StackItem width="50%" display="flex" md-width="100%" md-order="1">
					<Override
						slot="StackItemContent"
						padding="0px 20px 0px 60px"
						border-width="0px"
						flex-direction="column"
						sm-margin="20px 0px 0px 0px"
						justify-content="center"
						border-radius="0px"
						align-items="flex-start"
						lg-padding="0px 30px 0px 50px"
						md-order="1"
					/>
					{"        "}
					<Text
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						text-align="right"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
					>
						Real-Time Alerts and Notifications
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
						Real-time alerts and trend reports show what rules were violated, when, by whom, what action was taken and the context. You'll also receive instant warning or scheduled notification emails of suspicious user activity. Plus you can search for all users or a particular user or group activity.
					</Text>
					{"    "}
				</StackItem>
				<StackItem md-width="100%" width="50%" display="flex">
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
				<StackItem md-width="100%" width="50%" display="flex">
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
						md-margin="0px 0px 24px 0px"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
					>
						Behavioral Anomaly Detection
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
						To detect suspicious behavior all you have to do is define what constitutes dangerous or harmful user behavior and StaffCop’s sophisticated anomaly engine will automatically detect when a user, department or group deviates from their normal parameters or exceeds acceptable risk levels. Identifying anomalies in applications, emails, network, file activities and printing, notifying administrators about harmful user activity, locking out users or taking remote control of the compromised system before any malicious or fraudulent attempts are made, are other functions of StaffCop.
					</Text>
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
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 30px/43px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						text-align="right"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
					>
						Authentication and Access Control
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
						Another key characteristic of StaffCop is its Identity based authentication and segregated access control. These features prevents unauthorized access or sharing of confidential data by allowing administrators to setup an access account for each privileged user that needs authorized clearance and easily track what each user is doing at any given time. Group profiles allows you  to create different access levels based on departments, job function or source of access (i.e. remote/third-party etc.) and then define what information and system resources each group can access.
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
						md-width="80%"
						object-fit="contain"
						width="90%"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22:41:42.492Z"
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
				border-width="0px 0px 1px 0px"
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
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						padding="20px 60px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
					/>
					{"        "}
					<Text
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
					>
						Session Recording and Audit
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
						StaffCop visually records every action that a user makes while on a machine, allowing for both live viewing and pas recordings. Extensive meta data and fast indexing allows past incidents to be searched and retrieved in seconds. Optional audio support for the recording of both sound outputs and inputs, ensuring that all audio coming from speakers and microphones is captured. Recorded files can be exported and downloaded as MP4 files. Immutable session logs and systems logs can be exported as PDF/CSV file or sent to a log monitoring and analytics software like LogRythm.
					</Text>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Components.BlockNeed>
			<Override slot="link" />
			<Override slot="link1" />
			<Override slot="link2">
				Try for free
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
			<Override slot="text7">
				Categorize applications and web-sites into productive and unproductive. Set up different configurations for particular users, groups and departments. Compare results.
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
				display="inline-block"
				letter-spacing="-2%"
				text-align="center"
				md-margin="0px 0px 20px 0px"
				font="--headline2"
				margin="0px 0px 70px 0px"
				color="#13212A"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 36px/58px Inter, sans-serif"
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
					Flexible
				</Span>
				{" "}Deployment Options
			</Text>
			<Stack width="100%" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem display="flex" lg-width="50%" md-width="100%" width="33.3333%">
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
						flex-direction="column"
						padding="42px 37px 42px 37px"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						align-items="flex-start"
						border-radius="6px"
						border-width="1px"
						height="100%"
						md-flex-direction="column"
						hover-transform="translateY(-10px)"
						border-style="solid"
						md-display="flex"
						justify-content="flex-start"
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
						border-radius="6px"
						border-width="1px"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
						border-style="solid"
						hover-transform="translateY(-10px)"
						flex-direction="column"
						height="100%"
						md-display="flex"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
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
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
					/>
					{"        "}
					<Box
						md-display="flex"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						justify-content="flex-start"
						padding="42px 37px 42px 37px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						border-color="rgba(255, 255, 255, 0.05)"
						align-items="flex-start"
						height="100%"
						sm-padding="20px 20px 20px 20px"
						background="#FFFFFF"
						md-flex-direction="column"
						border-radius="6px"
						border-width="1px"
						border-style="solid"
						hover-transform="translateY(-10px)"
					>
						<Image width="60px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/cloudd.svg?v=2020-10-19T23:25:21.625Z" height="60px" />
						<Text
							margin="30px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
						>
							Private Cloud
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
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