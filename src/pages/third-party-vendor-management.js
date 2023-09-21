import React from "react";
import theme from "theme";
import { Theme, Text, Link, Image, Section, Hr, Span, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"third-party-vendor-management"} />
		<Helmet>
			<title>
				Third Party Vendor Management
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
		<Section padding="180px 0 120px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)" lg-padding="120px 0 60px 0" md-padding="90px 0 30px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem sm-align-items="center" sm-width="100%" width="50%" display="flex">
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
						Third Party Vendor Management
					</Text>
					<Text
						sm-text-align="center"
						font="normal 400 18px/160% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#555"
						md-font="normal 400 16px/140% --fontFamily-googleInter"
					>
						StaffCop provides third party vendor monitoring, threat detection and data loss prevention in a single platform
					</Text>
					{"    "}
					<Link
						color="#ffffff"
						font="600 18px/22px --fontFamily-googleInter"
						padding="16px 38px 16px 38px"
						border-width="1px"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						md-padding="16px 26px 16px 26px"
						href="/request-demo"
						z-index="2"
						margin="36px 0px 0px 0px"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						sm-font="600 16px/22px --fontFamily-googleInter"
						sm-padding="16px 20px 16px 20px"
						position="relative"
						text-decoration-line="initial"
						box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						border-radius="40px"
						border-style="solid"
						hover-background="#409EEB"
						background="--color-primary"
					>
						Request demo
					</Link>
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" position="relative" />
					{"        "}
					<Image
						right="-115px"
						lg-width="500px"
						lg-position="absolute"
						lg-top="-35px"
						md-top="0px"
						width="803px"
						position="absolute"
						left="auto"
						top="-110px"
						sm-bottom="auto"
						sm-top="0px"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15:07:09.010Z"
						md-right="-70px"
						sm-position="relative"
						sm-left="auto"
						sm-right="auto"
						bottom="auto"
						lg-right="-50px"
						md-width="400px"
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
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
						font="normal 700 32px/140% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
					>
						The risk of third-party vendor access
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem display="flex" sm-width="100%" nout-width="100%" width="70%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="1px 0px 30px 0px"
						display="inline-block"
						color="#555"
						text-align="justify"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
					>
						Third party vendors, partners, consultants and outsourced contractors are usually granted privileged access to a company’s internal systems through root or domain administration rights. Due to this access, they can easily change system configuration, steal company data as well as sabotage critical infrastructure. Even with no malicious intent, an external vendor is a major security risk. Industries such as banking and healthcare have strict regulatory requirements - where vendor monitoring is mandatory to ensure privacy and protection while data is transferred or processed between two parties.
					</Text>
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						color="#555"
						width="100%"
						sm-text-align="center"
						margin="1px 0px 30px 0px"
						display="inline-block"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						text-align="justify"
					>
						These factors are reasons enough for organizations to set up a security perimeter when giving access to external vendors and contractors. And find a technique to continuously monitor all vendor activity to ensure they conform to the company’s security policy and rules.
						<br />
						<br />
						Additionally, some compliance regulations require organizations to keep a detailed record of any security, privacy or data breach incidents caused by a third-party.
					</Text>
					{"  "}
					<Hr width="98%" margin="50px 0px 0px 0px" border-color="rgba(237, 237, 237, 1)" />
					{"  "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 12px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem width="70%" display="flex" sm-width="100%" nout-width="100%">
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
						StaffCop Third Party Vendor Management: activity monitoring, threat detection and data loss prevention in a single platform
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem display="flex" sm-width="100%" nout-width="100%" width="70%">
					<Override slot="StackItemContent" align-items="center" flex-direction="column" />
					{"        "}
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						StaffCop provides an unrivaled platform to monitor, control and protect third party vendors to ensure access is only granted to systems needed, decrease the chances of accidental mistakes that can damage system settings, and help improve IT safety measures. These capabilities are made possible by the software's unique features like user activity monitoring, privileged user management, advanced authentication and access control, remote user monitoring and support for virtualization services.
						<br />
						<br />
						What’s more, StaffCop helps you meet many regulatory compliance requirements bordering on third party vendor management with its extensive user activity monitoring, data exfiltration protection, audit, reporting and forensics capabilities.{"\n"}
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
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						border-radius="6px"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						display="flex"
						flex-direction="column"
						border-style="solid"
						md-display="flex"
						sm-padding="20px 20px 20px 20px"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						border-color="rgba(255, 255, 255, 0.05)"
						justify-content="flex-start"
						padding="42px 37px 42px 37px"
						border-width="1px"
						background="#FFFFFF"
						align-items="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							padding="13px 0px 13px 0px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="block"
							justify-content="center"
							width="48px"
							color="#ffffff"
							border-style="solid"
							text-align="center"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							align-items="center"
							font="700 18px/22px --fontFamily-googleInter"
							background="--color-primary"
							border-radius="40px"
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
								text-overflow="clip"
								hyphens="manual"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
							>
								Real-Time Activity Monitoring
							</Span>
						</Text>
						<Text
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
						>
							StaffCop let’s you monitor all user activity encompassing 22+ system objects like: web pages, apps, email, file transfers, instant messaging, social media and more.
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
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						border-width="1px"
						height="100%"
						border-color="rgba(255, 255, 255, 0.05)"
						flex-direction="column"
						border-radius="6px"
						border-style="solid"
						background="#FFFFFF"
						md-flex-direction="column"
						md-display="flex"
						sm-padding="20px 20px 20px 20px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
					>
						<Text
							margin="0px 0px 0px 0px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							color="#ffffff"
							align-items="center"
							display="block"
							justify-content="center"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							border-width="1px"
							text-align="center"
							width="48px"
							font="700 18px/22px --fontFamily-googleInter"
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
							Authentication and Access Control
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
						>
							With StaffCop’s identity based authentication and segregated access control, you can prevent unauthorized access and sharing of sensitive systems and data by a third-party.
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
						align-items="flex-start"
						justify-content="flex-start"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
						md-flex-direction="column"
						flex-direction="column"
						display="flex"
						border-style="solid"
						height="100%"
						hover-transform="translateY(-10px)"
						sm-padding="20px 20px 20px 20px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						border-radius="6px"
						padding="42px 37px 42px 37px"
						background="#FFFFFF"
						border-color="rgba(255, 255, 255, 0.05)"
					>
						<Text
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							display="block"
							justify-content="center"
							width="48px"
							margin="0px 0px 0px 0px"
							background="--color-primary"
							align-items="center"
							text-align="center"
							border-color="rgba(255, 255, 255, 0.05)"
							padding="13px 0px 13px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							border-radius="40px"
							border-style="solid"
							color="#ffffff"
							border-width="1px"
						>
							3
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
								Intelligent Policy and Rules Engine
							</Span>
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Create monitoring profiles for individual users, groups or departments, and set up custom behavior rules to limit the use of unproductive applications and websites or send automated notices to alert you about excessive idle time and other anomalies with StaffCop.
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
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0.05)"
						border-width="1px"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						flex-direction="column"
						justify-content="flex-start"
						hover-transform="translateY(-10px)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						align-items="flex-start"
						padding="42px 37px 42px 37px"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
					>
						<Text
							border-radius="40px"
							text-align="center"
							font="700 18px/22px --fontFamily-googleInter"
							background="--color-primary"
							border-style="solid"
							justify-content="center"
							padding="13px 0px 13px 0px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							display="block"
							margin="0px 0px 0px 0px"
							color="#ffffff"
							border-width="1px"
							width="48px"
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
							<Span
								text-overflow="clip"
								hyphens="manual"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
							>
								Audit and Forensics
							</Span>
						</Text>
						<Text
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
						>
							<Span
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								overflow-wrap="normal"
							>
								StaffCop's audit and forensic functionality allow for video recording of employee activity, session recording, immutable logs, alerts, and much more. Combined, they offer a wide collection of investigation data to identify the source and insider threat with pinpoint accuracy.
								<br />
							</Span>
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
						md-display="flex"
						flex-direction="column"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						border-style="solid"
						background="#FFFFFF"
						justify-content="flex-start"
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						display="flex"
						align-items="flex-start"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
					>
						<Text
							border-radius="40px"
							border-style="solid"
							text-align="center"
							width="48px"
							border-width="1px"
							align-items="center"
							background="--color-primary"
							display="block"
							justify-content="center"
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							padding="13px 0px 13px 0px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-color="rgba(255, 255, 255, 0.05)"
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
							Vendor Risk Management
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Identify high risk vendors, policies and system components on a dedicated risk dashboard. Sophisticated risk scoring helps identify and focus on areas of vulnerabilities.
							<br />
							<br />
							<br />
							<br />
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
						border-color="rgba(255, 255, 255, 0.05)"
						align-items="flex-start"
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-style="solid"
						sm-padding="20px 20px 20px 20px"
						display="flex"
						justify-content="flex-start"
						border-width="1px"
						background="#FFFFFF"
						height="100%"
						hover-transform="translateY(-10px)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
						md-flex-direction="column"
					>
						<Text
							margin="0px 0px 0px 0px"
							color="#ffffff"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							text-align="center"
							width="48px"
							background="--color-primary"
							border-radius="40px"
							border-width="1px"
							border-style="solid"
							font="700 18px/22px --fontFamily-googleInter"
							padding="13px 0px 13px 0px"
							display="block"
							justify-content="center"
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
							Productivity & SLA
						</Text>
						<Text
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
						>
							StaffCop has built-in productivity tools that allows administrators to establish a continuous feedback loop with your vendor network. You can also refine and adjust your organizational workflow by monitoring contract schedules, projects, budget and engagement rate to improve vendor SLA and QA.
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
						sm-padding="20px 20px 20px 20px"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						background="#FFFFFF"
						md-display="flex"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-flex-direction="column"
						border-style="solid"
						height="100%"
						border-width="1px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						border-radius="6px"
						padding="42px 37px 42px 37px"
						hover-transform="translateY(-10px)"
						flex-direction="column"
					>
						<Text
							font="700 18px/22px --fontFamily-googleInter"
							padding="13px 0px 13px 0px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="0px 0px 0px 0px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							color="#ffffff"
							border-radius="40px"
							justify-content="center"
							text-align="center"
							background="--color-primary"
							border-width="1px"
							display="block"
							width="48px"
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
							<Span
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								overflow-wrap="normal"
							>
								Compliance Management
							</Span>
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Companies can also leverage StaffCop to develop activity and schedule-based rules to support several common compliance requirements like implementing audit trails (GDPR), limiting unauthorized login (ISO 27001), prevent unencrypted file transfers (PCI DSS), reporting, etc.
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
				sm-font="normal 700 24px/30px Inter, sans-serif"
				margin="0px 0px 45px 0px"
				text-align="center"
				color="#13212A"
				letter-spacing="-2%"
				md-font="normal 700 30px/40px Inter, sans-serif"
				lg-font="normal 700 36px/40px Inter, sans-serif"
				font="--headline2"
				display="inline-block"
			>
				Third Party Vendors: A Weak URL in{" "}
				<br />
				<Span color="--primary">
					Cyber Security Chain
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
						align-items="flex-start"
						hover-transform="translateY(-10px)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="36px 36px 36px 36px"
						background="#FFFFFF"
						height="100%"
						border-radius="6px"
						md-display="flex"
						display="flex"
						justify-content="flex-start"
						border-width="1px"
						border-style="solid"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
					>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							3rd-party incidents – a harsh reality for many companies
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							In a 2016 global survey of 170 companies, Deloitte researchers discovered that 87% had experienced an incident with a 3rd-party.{" "}
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
						>
							<Span
								color="--primary"
								overflow-wrap="normal"
								hyphens="manual"
								text-indent="0"
								text-overflow="clip"
								font="700 18px/28.8px Inter, sans-serif"
								word-break="normal"
								white-space="normal"
							>
								87%
							</Span>
							{" "}Suffered a Disturbing 3rd-Party Incident
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
						border-style="solid"
						align-items="flex-start"
						md-flex-direction="column"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
						justify-content="flex-start"
						background="#FFFFFF"
						height="100%"
						sm-padding="20px 20px 20px 20px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						md-display="flex"
						padding="36px 36px 36px 36px"
						border-width="1px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
					>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							3rd-party vendors have access to crucial systems and sensitive data
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							According to a SOHA study, 75% of organizations agree that third-parties have access to many VPNs, networks, and platforms{"  "}
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
						>
							<Span
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
								white-space="normal"
								hyphens="manual"
								overflow-wrap="normal"
								word-break="normal"
								text-indent="0"
								text-overflow="clip"
							>
								75%
							</Span>
							{" "}Confirm Third-Parties Have Access to Critical Systems
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem lg-width="50%" md-width="100%" width="50%" display="flex">
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
						flex-direction="column"
						justify-content="flex-start"
						border-radius="6px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						background="#FFFFFF"
						sm-padding="20px 20px 20px 20px"
						align-items="flex-start"
						border-style="solid"
						hover-transform="translateY(-10px)"
						height="100%"
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
							Organizations spend millions on 3rd-party breaches
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Organizations spend an estimated $10+ million responding to 3rd-party breaches annually, says Riskonnect{" "}
						</Text>
						<Text
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
						>
							Est. $10M+ Spent on 3rd-Party Breaches by Organizations
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
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						align-items="flex-start"
						border-style="solid"
						background="#FFFFFF"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						height="100%"
						flex-direction="column"
						padding="36px 36px 36px 36px"
						border-width="1px"
						border-radius="6px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
						display="flex"
						justify-content="flex-start"
					>
						<Text
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
						>
							A majority of companies lack 3rd-party security standards
						</Text>
						<Text
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
						>
							A global survey of companies conducted by PwC found that only 52% have security standards in place for 3rd-parties.{" "}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Only 52% of Organizations Consider 3rd-Party Security Top Priority.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="70px 0 00px 0" lg-padding="70px 0 50px 0" color="rgba(85, 85, 85, 1)" background="#F8F8F9">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				display="inline-block"
				color="#13212A"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				font="--headline2"
				margin="0px 0px 50px 0px"
			>
				How Third Party Vendors Cause{" "}
				<br />
				<Span color="--primary">
					Security Risks
				</Span>
				{"\n\n"}
			</Text>
			<Stack width="100%" margin="0px 0px 0px 0px" position="relative" justify-content="center">
				{"    "}
				<Hr
					opacity="0.08"
					bottom="auto"
					left="auto"
					right="auto"
					top="82px"
					z-index="1"
					lg-display="none"
					nout-display="none"
					width="70%"
					position="absolute"
					border-width="2px 0 0 0"
					border-color="#000000"
				/>
				<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						justify-content="flex-start"
						flex-direction="column"
						padding="10px 60px 10px 60px"
						hd-padding="10px 50px 10px 50px"
						md-padding="10px 20px 10px 20px"
						lg-padding="10px 20px 10px 20px"
						nout-padding="10px 40px 10px 40px"
						align-items="center"
					/>
					{"        "}
					<Box
						height="120px"
						display="flex"
						align-items="center"
						justify-content="center"
						position="relative"
						z-index="2"
						background="#F8F8F9"
						width="120px"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/cursor-click-select-circl421.svg?v=2020-10-29T01:42:01.440Z" object-fit="contain" margin="25px 0px 0px 0px" />
					</Box>
					<Text
						margin="20px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						text-align="center"
						font="--headline3"
					>
						Malware infection{"\n\n"}
					</Text>
					<Text
						font="--lead"
						margin="12px 0px 24px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						text-align="center"
					>
						Third-parties that open infected email or visit a website with malware expose the organization's systems to cyberattacks
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						padding="10px 60px 10px 60px"
						hd-padding="10px 50px 10px 50px"
						md-padding="10px 20px 10px 20px"
						lg-padding="10px 20px 10px 20px"
						nout-padding="10px 40px 10px 40px"
					/>
					{"        "}
					<Box
						width="120px"
						height="120px"
						display="flex"
						align-items="center"
						justify-content="center"
						position="relative"
						z-index="2"
						background="#F8F8F9"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Server,%20Databases,%20Circleasdasd.svg?v=2020-10-29T01:42:01.447Z" object-fit="contain" margin="25px 0px 0px 0px" />
					</Box>
					<Text
						font="--headline3"
						margin="20px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						text-align="center"
					>
						Database access{"\n\n"}
					</Text>
					<Text
						font="--lead"
						margin="12px 0px 24px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						text-align="center"
					>
						Attempting to log in to database servers during off-hours or after the completion of a project can also pose a threat.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						padding="10px 60px 10px 60px"
						hd-padding="10px 50px 10px 50px"
						md-padding="10px 20px 10px 20px"
						lg-padding="10px 20px 10px 20px"
						nout-padding="10px 40px 10px 40px"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
					/>
					{"        "}
					<Box
						align-items="center"
						justify-content="center"
						background="#F8F8F9"
						position="relative"
						z-index="2"
						width="120px"
						height="120px"
						display="flex"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/lockasdsad.svg?v=2020-10-29T01:42:01.441Z" object-fit="contain" margin="25px 0px 0px 0px" />
					</Box>
					<Text
						font="--headline3"
						margin="20px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						text-align="center"
					>
						Privilege elevation{"\n\n"}
					</Text>
					<Text
						font="--lead"
						margin="12px 0px 24px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						text-align="center"
					>
						This occurs when a vendor attempts to bypass security clearances and gain additional access by exploiting a bug, design flaw or configuration oversight in an operating system or software application.
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="0px 0 24px 0" lg-padding="70px 0 50px 0" color="rgba(85, 85, 85, 1)" background="#F8F8F9">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" position="relative" justify-content="center" width="100%">
				{"    "}
				<Hr
					bottom="auto"
					top="82px"
					z-index="1"
					border-width="2px 0 0 0"
					nout-display="none"
					width="70%"
					opacity="0.08"
					position="absolute"
					left="auto"
					right="auto"
					lg-display="none"
					border-color="#000000"
				/>
				<StackItem lg-width="50%" sm-width="100%" width="33.333%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						padding="10px 60px 10px 60px"
						hd-padding="10px 50px 10px 50px"
						md-padding="10px 20px 10px 20px"
						lg-padding="10px 20px 10px 20px"
						nout-padding="10px 40px 10px 40px"
					/>
					{"        "}
					<Box
						z-index="2"
						background="#F8F8F9"
						width="120px"
						height="120px"
						display="flex"
						align-items="center"
						justify-content="center"
						position="relative"
					>
						<Image object-fit="contain" margin="25px 0px 0px 0px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/folder-circle12424.svg?v=2020-10-29T01:42:01.441Z" />
					</Box>
					<Text
						color="rgba(19, 33, 42, 1)"
						text-align="center"
						font="--headline3"
						margin="20px 0px 0px 0px"
						display="inline-block"
					>
						Data exfiltration{"\n\n"}
					</Text>
					<Text
						font="--lead"
						margin="12px 0px 24px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						text-align="center"
					>
						A vendor can abuse access within a system to view confidential customer and employee records.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						lg-padding="10px 20px 10px 20px"
						nout-padding="10px 40px 10px 40px"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						padding="10px 60px 10px 60px"
						hd-padding="10px 50px 10px 50px"
						md-padding="10px 20px 10px 20px"
					/>
					{"        "}
					<Box
						height="120px"
						display="flex"
						align-items="center"
						justify-content="center"
						position="relative"
						z-index="2"
						background="#F8F8F9"
						width="120px"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/warningasdasd.svg?v=2020-10-29T01:42:01.446Z" object-fit="contain" margin="25px 0px 0px 0px" />
					</Box>
					<Text
						font="--headline3"
						margin="20px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						text-align="center"
					>
						Cloud security{"\n\n"}
					</Text>
					<Text
						font="--lead"
						margin="12px 0px 24px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						text-align="center"
					>
						Any access to cloud-based storage services, which can lead to confidential information being exported from the system is a cloud security threat.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						hd-padding="10px 50px 10px 50px"
						md-padding="10px 20px 10px 20px"
						lg-padding="10px 20px 10px 20px"
						nout-padding="10px 40px 10px 40px"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						padding="10px 60px 10px 60px"
					/>
					{"        "}
					<Box
						background="#F8F8F9"
						position="relative"
						z-index="2"
						width="120px"
						height="120px"
						display="flex"
						align-items="center"
						justify-content="center"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/tv-circle-monitorasdsadsa.svg?v=2020-10-29T01:42:01.571Z" object-fit="contain" margin="25px 0px 0px 0px" />
					</Box>
					<Text
						margin="20px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						text-align="center"
						font="--headline3"
					>
						Steganography{"\n\n"}
					</Text>
					<Text
						margin="12px 0px 24px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						text-align="center"
						font="--lead"
					>
						Leveraging screen-capturing software to share confidential documents and security information with unauthorized sources outside the organization.
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="34px 0 34px 0" lg-padding="70px 0 50px 0" color="rgba(85, 85, 85, 1)" background="#F8F8F9">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				lg-font="normal 700 34px/42px Inter, sans-serif"
				margin="0px 0px 50px 0px"
				display="inline-block"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				font="--headline2"
				color="#13212A"
				letter-spacing="-2%"
				sm-font="normal 700 24px/30px Inter, sans-serif"
			>
				Third Party Vendor Management
				<br />
				<Span color="--primary">
					Use Cases
				</Span>
				{"\n\n"}
			</Text>
			<Stack width="100%" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image
						border-radius="6px"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectanglesadas.png?v=2020-10-29T01:54:18.349Z"
						max-height="372px"
						width="100%"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectanglesadas.png?v=2020-10-29T01%3A54%3A18.349Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectanglesadas.png?v=2020-10-29T01%3A54%3A18.349Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectanglesadas.png?v=2020-10-29T01%3A54%3A18.349Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectanglesadas.png?v=2020-10-29T01%3A54%3A18.349Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectanglesadas.png?v=2020-10-29T01%3A54%3A18.349Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectanglesadas.png?v=2020-10-29T01%3A54%3A18.349Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectanglesadas.png?v=2020-10-29T01%3A54%3A18.349Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					<Text
						color="rgba(19, 33, 42, 1)"
						md-text-align="center"
						font="normal 700 18px/28px --fontFamily-googleInter"
						margin="18px 0px 0px 0px"
						display="inline-block"
					>
						IT Services{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						md-padding="0px 0px 0px 0px"
						flex-direction="column"
						margin="0px 0px 0px 0px"
						padding="0px 0px 0px 25px"
					/>
					{"        "}
					<Text
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						lg-font="normal 700 28px/35px --fontFamily-googleInter"
					>
						The risk of third-party vendor access{"\n\n"}
					</Text>
					<Text
						font="normal 400 18px/29px --fontFamily-googleInter"
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
					>
						IT services businesses, MSPs and hosting providers need to monitor vendor activity in the company servers to implement SLA and process billing.
 Also, since employees of third party professional services can access organizational databases, configure servers and often set up IT security systems, they should be treated with the same vigor as other privileged employees and scrutinized for all their activity.{"\n"}
					</Text>
					<Text
						letter-spacing="-1%"
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
					>
						Solution{"\n\n"}
					</Text>
					<Text
						font="normal 400 18px/29px --fontFamily-googleInter"
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
					>
						Fortunately for IT services companies StaffCop offers an activity monitoring solution, that allows administrators to quickly view (and prove) exactly who worked on the servers, when, for how long and what they did to ensure security and process accurate billing and SLAs.{"\n"}
						<br />
						<br />
						What's more, StaffCop supports ISO 27001 compliance that further ensures an organization’s overall IT security strategies are covered with a single solution.{"\n\n\n"}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Hr width="98%" margin="0px 0px 0px 0px" border-color="rgba(237, 237, 237, 1)" />
		</Section>
		<Section color="rgba(85, 85, 85, 1)" background="#F8F8F9" padding="34px 0 34px 0" lg-padding="70px 0 50px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangleasdasd.png?v=2020-10-29T02:03:55.267Z"
						max-height="372px"
						width="100%"
						border-radius="6px"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangleasdasd.png?v=2020-10-29T02%3A03%3A55.267Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangleasdasd.png?v=2020-10-29T02%3A03%3A55.267Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangleasdasd.png?v=2020-10-29T02%3A03%3A55.267Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangleasdasd.png?v=2020-10-29T02%3A03%3A55.267Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangleasdasd.png?v=2020-10-29T02%3A03%3A55.267Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangleasdasd.png?v=2020-10-29T02%3A03%3A55.267Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangleasdasd.png?v=2020-10-29T02%3A03%3A55.267Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					<Text
						font="normal 700 18px/28px --fontFamily-googleInter"
						margin="18px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						md-text-align="center"
					>
						Financial Services{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						margin="0px 0px 0px 0px"
						padding="0px 0px 0px 25px"
						md-padding="0px 0px 0px 0px"
					/>
					{"        "}
					<Text
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						lg-font="normal 700 28px/35px --fontFamily-googleInter"
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
					>
						Industry challenge{"\n\n"}
					</Text>
					<Text
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
						font="normal 400 18px/29px --fontFamily-googleInter"
					>
						Today, many financial institutions including banks outsource operational functions to contractors or use third parties to offer value added services. In fact a rapidly increasing number of banks are outsourcing core banking operations (i.e. accessing demand deposit accounts through bank cards) to third party service providers. The implications of this: a new avenue of threats for both the banks and their customers. Over the years, regulations and laws have been introduced to ensure banks hold their vendors accountable for their activities. For instance, Federal Financial Institutions Examination Council (FFIEC) recently released the Cybersecurity Assessment Tool that states, “Financial institutions must understand the complex nature of arrangements with outside parties and ensure adequate due diligence for the engagement of the relationships and ongoing monitoring.”
					</Text>
					<Text
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
					>
						StaffCop solution{"\n\n"}
					</Text>
					<Text
						font="normal 400 18px/29px --fontFamily-googleInter"
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
					>
						To address these challenges, StaffCop provides an activity monitoring tool that allows for instant visibility (and proof) into activities conducted on the servers such as who worked on the systems, when, for how long and what they did.
						<br />
						StaffCop enables banks and financial institutions to discover potential cybersecurity vulnerabilities in their online banking system and develop threat intelligence with behavioral and content-based analysis of secure financial data. With continuous monitoring, a bank can prevent harmful practices by its vendors and if necessary, conduct detailed file search to ensure vendors are using the right forms, following the agreement and addressing customer requests in a prompt and responsive manner.
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Hr width="98%" margin="0px 0px 0px 0px" border-color="rgba(237, 237, 237, 1)" />
		</Section>
		<Section padding="34px 0 34px 0" lg-padding="70px 0 50px 0" color="rgba(85, 85, 85, 1)" background="#F8F8F9">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack width="100%" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2097.png?v=2020-10-29T02:07:35.197Z"
						max-height="372px"
						width="100%"
						border-radius="6px"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2097.png?v=2020-10-29T02%3A07%3A35.197Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2097.png?v=2020-10-29T02%3A07%3A35.197Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2097.png?v=2020-10-29T02%3A07%3A35.197Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2097.png?v=2020-10-29T02%3A07%3A35.197Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2097.png?v=2020-10-29T02%3A07%3A35.197Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2097.png?v=2020-10-29T02%3A07%3A35.197Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2097.png?v=2020-10-29T02%3A07%3A35.197Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					<Text
						margin="18px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						md-text-align="center"
						font="normal 700 18px/28px --fontFamily-googleInter"
					>
						Retail / E-Commerce{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 25px"
						md-padding="0px 0px 0px 0px"
						flex-direction="column"
						margin="0px 0px 0px 0px"
					/>
					{"        "}
					<Text
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						lg-font="normal 700 28px/35px --fontFamily-googleInter"
					>
						Industry challenge{"\n\n"}
					</Text>
					<Text
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
						font="normal 400 18px/29px --fontFamily-googleInter"
					>
						Retail and e-commerce merchants and any business processing payment information must comply with PCI DSS, which involves stringent information security requirements for the merchants and their vendors while processing credit card transactions or dealing with customer data. For instance, as a merchant you must ensure that third party service providers (TPSPs)/vendors you conduct business with are also following the compliance protocol. You should be able to list each vendor your company does business with, confirm what services they offer, and make sure that each provider listed is compliant with the PCI DSS on an ongoing basis.
					</Text>
					<Text
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
					>
						StaffCop solution{"\n\n"}
					</Text>
					<Text
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
						font="normal 400 18px/29px --fontFamily-googleInter"
						margin="0px 0px 60px 0px"
					>
						The simplest approach to ensure PCI DSS compliance and proper auditing is to integrate third party vendors into your existing monitoring and auditing system. That way, you both have a common, transparent, end-to-end auditing system.
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Hr width="98%" margin="0px 0px 0px 0px" border-color="rgba(237, 237, 237, 1)" />
		</Section>
		<Section padding="34px 0 34px 0" lg-padding="70px 0 50px 0" color="rgba(85, 85, 85, 1)" background="#F8F8F9">
			<Override slot="SectionContent" align-items="center" max-width="1200px" />
			<Stack width="100%" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem md-width="100%" width="50%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2098.png?v=2020-10-29T02:08:17.558Z"
						max-height="372px"
						width="100%"
						border-radius="6px"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2098.png?v=2020-10-29T02%3A08%3A17.558Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2098.png?v=2020-10-29T02%3A08%3A17.558Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2098.png?v=2020-10-29T02%3A08%3A17.558Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2098.png?v=2020-10-29T02%3A08%3A17.558Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2098.png?v=2020-10-29T02%3A08%3A17.558Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2098.png?v=2020-10-29T02%3A08%3A17.558Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2098.png?v=2020-10-29T02%3A08%3A17.558Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					<Text
						font="normal 700 18px/28px --fontFamily-googleInter"
						margin="18px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						md-text-align="center"
					>
						Health and Medicine
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						margin="0px 0px 0px 0px"
						padding="0px 0px 0px 25px"
						md-padding="0px 0px 0px 0px"
						flex-direction="column"
					/>
					{"        "}
					<Text
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						lg-font="normal 700 28px/35px --fontFamily-googleInter"
						font="normal 700 32px/38px --fontFamily-googleInter"
					>
						Industry challenge{"\n\n"}
					</Text>
					<Text
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
						font="normal 400 18px/29px --fontFamily-googleInter"
						margin="0px 0px 60px 0px"
						display="inline-block"
					>
						The Health Insurance Portability and Accountability Act (HIPAA) is designed to ensure the efficient flow of the healthcare data and protect patient’s Personally Identifiable Information (PII), Personal Health Information (PHI) and Electronic Health Record (EHR) from fraud, theft or misuse. Healthcare organizations covered by HIPAA must protect these data not only from their employees but ensure any contractors or Business Associates (BAs) have systems in place to comply with the regulation. There are even certain Administrative, Security and Technical Rules for such addressable implementation specifications.
					</Text>
					<Text
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
					>
						StaffCop solution{"\n\n"}
					</Text>
					<Text
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
						font="normal 400 18px/29px --fontFamily-googleInter"
					>
						StaffCop enables healthcare institutions to comply with ongoing privacy and security requirements of HIPAA regulated PII, PHI and EHR data from both internal and external users.
It can be used to create security profiles for vendors allowing or restricting access to patient records on a need to know basis. And it offers granular activity monitoring of all system objects like files, networks, websites, apps, emails etc., thereby helping organizations enforce privacy policy. Further, organizations can leverage StaffCop's instant alerts and audit trail to meet the HIPAA security review and reporting requirements.{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Hr width="98%" margin="0px 0px 0px 0px" border-color="rgba(237, 237, 237, 1)" />
		</Section>
		<Section padding="34px 0 34px 0" lg-padding="70px 0 50px 0" color="rgba(85, 85, 85, 1)" background="#F8F8F9">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack width="100%" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2099.png?v=2020-10-29T02:09:14.578Z"
						max-height="372px"
						width="100%"
						border-radius="6px"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2099.png?v=2020-10-29T02%3A09%3A14.578Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2099.png?v=2020-10-29T02%3A09%3A14.578Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2099.png?v=2020-10-29T02%3A09%3A14.578Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2099.png?v=2020-10-29T02%3A09%3A14.578Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2099.png?v=2020-10-29T02%3A09%3A14.578Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2099.png?v=2020-10-29T02%3A09%3A14.578Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2099.png?v=2020-10-29T02%3A09%3A14.578Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					<Text
						font="normal 700 18px/28px --fontFamily-googleInter"
						margin="18px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						md-text-align="center"
					>
						Telecom{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						margin="0px 0px 0px 0px"
						padding="0px 0px 0px 25px"
						md-padding="0px 0px 0px 0px"
					/>
					{"        "}
					<Text
						letter-spacing="-1%"
						lg-font="normal 700 28px/35px --fontFamily-googleInter"
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
					>
						Industry challenge{"\n\n"}
					</Text>
					<Text
						font="normal 400 18px/29px --fontFamily-googleInter"
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
					>
						Undoubtedly, telecommunications is a crucial sector in today’s world. Like utilities and other critical industries, it impacts everyone: individuals, businesses and governments alike. This is why telecom operators and ISPs are common targets of cybercriminals or malicious actors. Unfortunately, these criminals are becoming more desperate. According to a telecom threat intelligence report by Kaspersky, cybercriminals are enlisting insiders including contractors and vendors to gain access to telecommunications networks and subscriber data. They blackmail the targeted insiders forcing them to give up credentials or distribute spear-phishing attacks on the criminal’s behalf.
					</Text>
					<Text
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
					>
						StaffCop solution{"\n\n"}
					</Text>
					<Text
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
						font="normal 400 18px/29px --fontFamily-googleInter"
					>
						With StaffCop’s privileged user monitoring and intelligent behavioral analysis, telecom providers can easily identify compromised vendors who show abnormal signs, like attempting  to change system component or to bypass security clearances and gain additional access.
Telecom providers can also take advantage of StaffCop’s granular activity monitoring and data loss prevention solution, built for high-grade security standards like NERC-CIP, NIST-FISMA, ISO 27001 and critical systems.{"\n"}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Hr width="98%" margin="0px 0px 0px 0px" border-color="rgba(237, 237, 237, 1)" />
		</Section>
		<Section padding="34px 0 34px 0" lg-padding="70px 0 50px 0" color="rgba(85, 85, 85, 1)" background="#F8F8F9">
			<Override slot="SectionContent" align-items="center" max-width="1200px" />
			<Stack width="100%" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%20100.png?v=2020-10-29T02:09:55.377Z"
						max-height="372px"
						width="100%"
						border-radius="6px"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%20100.png?v=2020-10-29T02%3A09%3A55.377Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%20100.png?v=2020-10-29T02%3A09%3A55.377Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%20100.png?v=2020-10-29T02%3A09%3A55.377Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%20100.png?v=2020-10-29T02%3A09%3A55.377Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%20100.png?v=2020-10-29T02%3A09%3A55.377Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%20100.png?v=2020-10-29T02%3A09%3A55.377Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%20100.png?v=2020-10-29T02%3A09%3A55.377Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					<Text
						font="normal 700 18px/28px --fontFamily-googleInter"
						margin="18px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						md-text-align="center"
					>
						GDPR / Privacy Data Protection{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						margin="0px 0px 0px 0px"
						padding="0px 0px 0px 25px"
						md-padding="0px 0px 0px 0px"
					/>
					{"        "}
					<Text
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						lg-font="normal 700 28px/35px --fontFamily-googleInter"
					>
						Industry challenge{"\n\n"}
					</Text>
					<Text
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
						font="normal 400 18px/29px --fontFamily-googleInter"
						margin="0px 0px 60px 0px"
						display="inline-block"
					>
						Since May 2018, any organization handling EU citizens’ personal data was mandated to comply with the GDPR law. These organizations also known as Controllers must ensure that its Processors are compliant as well. A Processor is an entity that adheres to the instructions from the data controller to collect/process the personal data (PII), in other words a third party vendor. Thus, any controlling organization using a third party vendor to process EU citizens’ personal data, will be responsible for their GDPR compliance.
					</Text>
					<Text
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
					>
						StaffCop solution{"\n\n"}
					</Text>
					<Text
						font="normal 400 18px/29px --fontFamily-googleInter"
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
					>
						For a GDPR Controller to enforce the right accountability procedures for its Processor(s), the following must be in place: third-party vendor management, access control and contractual oversight.
StaffCop is designed to ensure that your third party is processing privacy data only in the context it is required to be processed.{" "}
						<br />
						And it can be configured with restricted feature sets to allow for further privacy of EU customers. Leverage StaffCop’s extensive reporting and forensic capability to fulfill GDPR’s record keeping and breach reporting requirements.{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Hr width="98%" margin="0px 0px 0px 0px" border-color="rgba(237, 237, 237, 1)" />
		</Section>
		<Section padding="40px 0 70px 0" background="#F8F8F9" lg-padding="30px 0 30px 0" md-padding="30px 0 10px 0">
			<Override
				slot="SectionContent"
				max-width="1170px"
				border-width="1px"
				border-style="solid"
				box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
				border-color="#ffffff"
				border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
				padding="60px 0px 0px 0px"
				background="#ffffff"
				border-radius="6px"
				align-items="center"
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
						width="82%"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22:24:26.269Z"
						md-width="80%"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22%3A24%3A26.269Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					{"    "}
				</StackItem>
				<StackItem display="flex" md-width="100%" width="50%">
					<Override
						slot="StackItemContent"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						padding="0px 60px 0px 20px"
						border-radius="0px"
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
						Authentication and Access Control{"\n\n"}
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
						With StaffCop’s identity based authentication and segregated access control features you can prevent unauthorized access or sharing of confidential data outside your organization. The software allows you to create an access account for each vendor that will need authorized clearance and easily monitor what each vendor is doing at any given time. You can also set up profiles for regular, privileged and contract/external users and determine what information and system resources each profile can access.
					</Text>
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
				<StackItem md-order="1" width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						justify-content="center"
						padding="0px 20px 0px 60px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						md-order="1"
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
						Session Recording and Playback{"\n\n"}
					</Text>
					<Text
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#555"
						lg-font="normal 400 15px/160% Inter, sans-serif"
						text-align="right"
					>
						StaffCop’s live view and history features offer seamless real-time streaming of third party vendor activity through the dashboard and extensive visual history of all actions taken for both on-site and remote vendors. You can search all actions via metadata, regular expression and natural language. And tag recordings by time and date highlighting any alerts and notification.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
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
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						sm-margin="20px 0px 0px 0px"
						padding="20px 60px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						lg-padding="0px 30px 0px 50px"
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
						lg-font="normal 400 15px/160% Inter, sans-serif"
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#555"
					>
						StaffCop has a dedicated Risk dashboard where the supervisor can carry out organization-wide risk evaluation. Risk can be profiled by vendors, system objects accessed by the vendor or departments responsible for the vendor. While reports can be derived by severity of risks or by how many times security violations occur. Organizations can use the software's unique Risk Scores to identify high-risk vendors or policies so that techniques can be developed to address the risks.
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
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						justify-content="center"
						padding="0px 0px 0px 50px"
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
						Enterprise-Wide Monitoring and Tracking{"\n\n"}
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
						To ensure organization-wide monitoring, StaffCop allows you to create specific monitoring profiles for your vendors, define what actions and system resources the vendor will be monitored for, when and how and set a schedule for when vendors can log into systems and from which locations. You can also control their access within certain applications, networks, and websites or by time slots.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
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
				<StackItem md-width="100%" width="50%" display="flex">
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
						md-margin="0px 0px 24px 0px"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
					>
						Document Tracking{"\n\n"}
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
						The document tracking functionality enables companies to monitor the interactions between third-party vendors and your data including reports on: who accesses data, when the data is accessed, any changes, abnormal activity or any attempts made to alter the data. What’s more, this feature can be configured to fit your policies and used in tracking documents transferred to emails as an attachment, USB, Dropbox, Google Drive, documents printed etc.
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
				<StackItem width="50%" display="flex" md-width="100%" md-order="1">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-end"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						justify-content="center"
						padding="0px 0px 0px 50px"
						border-radius="0px"
						border-width="0px"
					/>
					{"        "}
					<Text
						lg-font="normal 700 30px/43px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						text-align="right"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
					>
						Remote Desktop Control
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
						Thanks to StaffCop remote contractors and vendors can now enjoy the simplicity of tracking their project and time with the click of a mouse. Once the StaffCop agent is activated, all actions and data are recorded. The software also allows you to take control of an external vendor's desktop and access at the first sign of malicious activity to eliminate threats of all kinds.
					</Text>
					{"    "}
				</StackItem>
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
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
					>
						Powerful Policy and Rules Editor{"\n\n"}
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
						With StaffCop’s remote control feature, a user's ability to access a desktop can be instantly taken away. By manually overriding an account, you can remove the user from the equation, ensuring that activity is contained, and potential threats are eliminated. To activate the remote control function simply click on the remote icon on all live sessions. Override all manual inputs by a user to prevent sensitive data from being compromised and data breach incidents from occurring.
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
						padding="0px 0px 0px 50px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-end"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						justify-content="center"
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
						Integrated Threat Management
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
						Part of StaffCop’s integrated threat management strategy is providing in-depth activity reports that contain information on which vendors are accessing systems and network resources. And sending real-time alerts for high-risk vendor behavior to administrators. Make your findings and observations tasks easier by identifying where sensitive data is stored, who accessed it and how with session logs, anomaly and risk analysis and incident reports. Finally, incident triggers and logs from StaffCop can be sent to SIEM and other analytics tools for a holistic threat management system.
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
						Ensure Quality of Service
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
						Integrated productivity tools allows you to establish a continuous feedback loop with your vendor network. Refine and fine tune your organizational workflow through monitoring contract schedules, projects, budget and engagement rate to improve vendor SLA. If your vendors handle customer care services, you can track their performance and quality and if necessary, conduct detailed investigation to make sure vendors are using the right forms, following the agreement and addressing customer requests in a prompt and responsive manner.
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
						Compliance Management
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
						Today, most organizations are required to meet several regulatory, cybersecurity, administrative and privacy standards that include vendor’s accountability and liability protection. Not only does StaffCop have built-in support for many of these compliance standards including HIPAA, GDPR, PCI DSS, ISO 27001 etc. but it can also be adapted to support emerging compliance requirements with its powerful Policy & Rules editor and various monitoring and reporting capabilities.
					</Text>
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
		</Section>
		<Components.BlockNeed>
			<Override slot="text1">
				Information Security
			</Override>
			<Override slot="text2">
				Receive the required data “on the fly”. Search by keywords and regular expressions. Record sound from microphones to hear what was happening at the moment of interest.
			</Override>
			<Override slot="text3">
				Remote Administration
			</Override>
			<Override slot="text4">
				View remote desktop without being notices. Take control over a workstation. Full picture of software and hardware usage. Intensity of usage and registry of states.
				<Span
					text-overflow="clip"
					hyphens="manual"
					color="rgba(255, 255, 255, 0)"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
				>
					.
				</Span>
			</Override>
			<Override slot="text6">
				Employee Monitoring
			</Override>
			<Override slot="text7">
				Categorize applications and web-sites into productive and unproductive. Set up different configurations for particular users, groups and departments. Compare results. ..
				<Span
					hyphens="manual"
					color="rgba(255, 255, 255, 0)"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
				>
					.
				</Span>
			</Override>
		</Components.BlockNeed>
		<Section
			padding="70px 0 20px 0"
			md-padding="24px 0 40px 0"
			border-width="0px 0px 1px 0px"
			border-style="solid"
			border-color="rgba(255, 255, 255, 0.05)"
			background="#ffffff"
		>
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				md-margin="0px 0px 20px 0px"
				font="--headline2"
				margin="0px 0px 70px 0px"
				display="inline-block"
				color="#13212A"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 36px/58px Inter, sans-serif"
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
						border-radius="6px"
						padding="42px 37px 42px 37px"
						hover-transform="translateY(-10px)"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						border-width="1px"
						height="100%"
						sm-padding="20px 20px 20px 20px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						border-style="solid"
						background="#FFFFFF"
						md-flex-direction="column"
						border-color="rgba(255, 255, 255, 0.05)"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
					>
						<Image width="60px" height="60px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/papaplo.svg?v=2020-10-19T23:24:47.217Z" />
						<Text
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
						>
							Bare Metal{"\n\n"}
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
						border-radius="6px"
						border-width="1px"
						md-display="flex"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-flex-direction="column"
						flex-direction="column"
						justify-content="flex-start"
						background="#FFFFFF"
						height="100%"
						border-color="rgba(255, 255, 255, 0.05)"
						align-items="flex-start"
						padding="42px 37px 42px 37px"
						border-style="solid"
						hover-transform="translateY(-10px)"
						sm-padding="20px 20px 20px 20px"
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
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
						>
							Install on any OS as a virtual machine from our ISO image, use Virtual Box, VMWare, Hyper-V or any other virtualization system. Easy administrating without risking the host machine.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem display="flex" lg-width="100%" md-width="100%" width="33.3333%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
					/>
					{"        "}
					<Box
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						align-items="flex-start"
						border-radius="6px"
						hover-transform="translateY(-10px)"
						border-color="rgba(255, 255, 255, 0.05)"
						justify-content="flex-start"
						height="100%"
						border-width="1px"
						border-style="solid"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						display="flex"
						flex-direction="column"
						padding="42px 37px 42px 37px"
					>
						<Image height="60px" width="60px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/cloudd.svg?v=2020-10-19T23:25:21.625Z" />
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