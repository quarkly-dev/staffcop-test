import React from "react";
import theme from "theme";
import { Theme, Text, Link, Image, Section, Hr, Box, Span, Em } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"compliance-management-auditing-and-monitoring"} />
		<Helmet>
			<title>
				Compliance Management, Auditing & Monitoring
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
				<StackItem sm-width="100%" width="55%" display="flex" sm-align-items="center">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
					/>
					{"        "}
					<Text
						sm-text-align="center"
						font="--headline2"
						margin="0px 0px 16px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
					>
						Compliance Management,
						<br />
						Auditing & Monitoring
					</Text>
					<Text
						sm-text-align="center"
						font="normal 400 18px/160% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#555"
						md-font="normal 400 16px/140% --fontFamily-googleInter"
					>
						Find Compliance Solutions with StaffCop
					</Text>
					{"    "}
					<Link
						border-style="solid"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						z-index="2"
						color="#ffffff"
						text-decoration-line="initial"
						padding="16px 38px 16px 38px"
						border-radius="40px"
						border-width="1px"
						hover-background="#409EEB"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						position="relative"
						margin="36px 0px 0px 0px"
						sm-font="600 16px/22px --fontFamily-googleInter"
						font="600 18px/22px --fontFamily-googleInter"
						box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						background="--color-primary"
						sm-padding="16px 20px 16px 20px"
						md-padding="16px 26px 16px 26px"
						href="/request-demo/"
					>
						Request demo
					</Link>
				</StackItem>
				{"    "}
				<StackItem width="45%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" position="relative" />
					{"        "}
					<Image
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15:07:09.010Z"
						md-width="400px"
						lg-position="absolute"
						lg-right="-50px"
						sm-bottom="auto"
						width="803px"
						right="-115px"
						lg-width="500px"
						lg-top="-35px"
						md-top="0px"
						md-right="-70px"
						sm-top="0px"
						top="-110px"
						bottom="auto"
						sm-position="relative"
						sm-left="auto"
						position="absolute"
						left="auto"
						sm-right="auto"
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
					<Override slot="StackItemContent" sm-justify-content="center" sm-align-items="center" />
					{"        "}
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
						Compliance Management{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem nout-width="100%" width="70%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Text
						margin="1px 0px 30px 0px"
						display="inline-block"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
						font="400 18px/28px --fontFamily-googleInter"
						width="100%"
						color="#555"
					>
						Compliance is an increasingly challenging task:  requiring organizations to manage multiple risk factors across an evolving technology landscape, while also ensuring appropriate user behavior to fulfil the stringent requirements of today’s widely-accepted regulatory standards, such as GDPR, HIPAA, PCI DSS, ISO 27001, NIST and others.  Organizations that fail to remain compliant risk severe financial and reputational consequences. Regardless of the industry you are in, you need a solid compliance management solution that can help you attain compliance and then assists you in staying compliant with continuous oversight. Additionally, the solution should provide you with a burden of proof in case of an audit.
					</Text>
					{"  "}
					<Hr margin="50px 0px 0px 0px" border-color="rgba(237, 237, 237, 1)" width="98%" />
					{"  "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 12px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem nout-width="100%" width="70%" display="flex" sm-width="100%">
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
						How StaffCop can help with your compliance requirements{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem display="flex" sm-width="100%" nout-width="100%" width="70%">
					<Override slot="StackItemContent" align-items="center" flex-direction="column" />
					{"        "}
					<Text
						md-font="400 14px/20px --fontFamily-googleInter"
						text-align="justify"
						font="400 18px/28px --fontFamily-googleInter"
						display="inline-block"
						color="#555"
						width="100%"
						md-width="100%"
						sm-text-align="center"
						margin="0px 0px 30px 0px"
					>
						While there are many solutions available to ensure compliance with respect to various systems, they have been unable to oversee, mandate and manage the human factors embedded in these data driven transactions.
With its intelligent behavior analysis and user centric activity monitoring,{" "}
						<br />
						StaffCop can identify the human elements in compliance such as insider threats, errors or accidents, allowing you to address critical data protection, security and audit requirements. Irrespective of what your specific compliance requirements are, StaffCop provides the needed control and peace of mind with its many features and benefits.{"\n"}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="24px 0 70px 0" sm-padding="24px 0 50px 0" background="#FFFFFF">
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
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
					/>
					{"        "}
					<Box
						md-display="flex"
						sm-padding="20px 20px 20px 20px"
						align-items="flex-start"
						border-radius="6px"
						hover-transform="translateY(-10px)"
						justify-content="flex-start"
						border-width="1px"
						background="#FFFFFF"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
						padding="42px 37px 42px 37px"
						border-style="solid"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-flex-direction="column"
						display="flex"
					>
						<Text
							font="700 18px/22px --fontFamily-googleInter"
							align-items="center"
							display="block"
							color="#ffffff"
							border-color="rgba(255, 255, 255, 0.05)"
							padding="13px 0px 13px 0px"
							justify-content="center"
							width="48px"
							margin="0px 0px 0px 0px"
							background="--color-primary"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							text-align="center"
						>
							1
						</Text>
						<Text
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="30px 0px 0px 0px"
						>
							StaffCop offers non-intrusive, rules-driven user activity monitoring, insider threat detection and data loss prevention features
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
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
					/>
					{"        "}
					<Box
						padding="42px 37px 42px 37px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						justify-content="flex-start"
						sm-padding="20px 20px 20px 20px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						align-items="flex-start"
						border-radius="6px"
						background="#FFFFFF"
						height="100%"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						border-style="solid"
						md-display="flex"
						border-width="1px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						flex-direction="column"
					>
						<Text
							border-width="1px"
							width="48px"
							padding="13px 0px 13px 0px"
							color="#ffffff"
							border-style="solid"
							display="block"
							font="700 18px/22px --fontFamily-googleInter"
							background="--color-primary"
							margin="0px 0px 0px 0px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							justify-content="center"
							text-align="center"
							border-radius="40px"
						>
							2
						</Text>
						<Text
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="30px 0px 0px 0px"
						>
							It enables organizations to achieve compliance and remain compliant with regulatory compliance standards
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
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
					/>
					{"        "}
					<Box
						border-radius="6px"
						background="#FFFFFF"
						sm-padding="20px 20px 20px 20px"
						border-style="solid"
						md-display="flex"
						align-items="flex-start"
						md-flex-direction="column"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						justify-content="flex-start"
						padding="42px 37px 42px 37px"
						border-width="1px"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						flex-direction="column"
					>
						<Text
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							padding="13px 0px 13px 0px"
							background="--color-primary"
							border-width="1px"
							display="block"
							margin="0px 0px 0px 0px"
							justify-content="center"
							width="48px"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							align-items="center"
							text-align="center"
						>
							3
						</Text>
						<Text
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="30px 0px 0px 0px"
						>
							Content and activity driven rules facilitate compliant behavior with respect to employees, contractors and third party vendors handling data
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
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						align-items="flex-start"
						border-style="solid"
						height="100%"
						flex-direction="column"
						border-radius="6px"
						padding="42px 37px 42px 37px"
						hover-transform="translateY(-10px)"
						md-display="flex"
						display="flex"
						justify-content="flex-start"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						border-color="rgba(255, 255, 255, 0.05)"
					>
						<Text
							align-items="center"
							justify-content="center"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							border-width="1px"
							border-style="solid"
							text-align="center"
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							background="--color-primary"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-color="rgba(255, 255, 255, 0.05)"
							display="block"
							width="48px"
						>
							4
						</Text>
						<Text
							font="--lead"
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							StaffCop allows you to focus on context with heavy emphasis on user behavior analytics to eliminate false positives, and identify anomalous behavior
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
						border-style="solid"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						justify-content="flex-start"
						border-width="1px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						align-items="flex-start"
						md-display="flex"
						md-flex-direction="column"
						border-radius="6px"
						padding="42px 37px 42px 37px"
						background="#FFFFFF"
						hover-transform="translateY(-10px)"
					>
						<Text
							padding="13px 0px 13px 0px"
							margin="0px 0px 0px 0px"
							color="#ffffff"
							background="--color-primary"
							align-items="center"
							justify-content="center"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-style="solid"
							text-align="center"
							width="48px"
							font="700 18px/22px --fontFamily-googleInter"
							border-radius="40px"
							border-width="1px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="block"
						>
							5
						</Text>
						<Text
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="30px 0px 0px 0px"
						>
							It ensures data safety by implementing immediate actions (warn, block action, lock out user, etc.)
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
						padding="42px 37px 42px 37px"
						border-style="solid"
						background="#FFFFFF"
						md-flex-direction="column"
						border-color="rgba(255, 255, 255, 0.05)"
						align-items="flex-start"
						border-radius="6px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						sm-padding="20px 20px 20px 20px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
						border-width="1px"
						md-display="flex"
						display="flex"
						justify-content="flex-start"
					>
						<Text
							border-radius="40px"
							justify-content="center"
							text-align="center"
							width="48px"
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							background="--color-primary"
							border-color="rgba(255, 255, 255, 0.05)"
							display="block"
							padding="13px 0px 13px 0px"
							border-width="1px"
							border-style="solid"
							align-items="center"
							color="#ffffff"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						>
							6
						</Text>
						<Text
							font="--lead"
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							The software contains features that record all violations. These records can be for forensics, assists in investigations, and can be leveraged to satisfy audit and breach reporting requirements.
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
				font="--headline2"
				margin="0px 0px 45px 0px"
				letter-spacing="-2%"
				lg-font="normal 700 36px/40px Inter, sans-serif"
				width="80%"
				display="inline-block"
				color="#13212A"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
			>
				Compliance solutions for{" "}
				<Span color="--primary">
					various industries
				</Span>
				{"\n\n"}
			</Text>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem md-width="100%" width="50%" display="flex" lg-width="50%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
					/>
					{"        "}
					<Box
						border-radius="6px"
						border-width="1px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						height="100%"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						padding="36px 36px 42px 36px"
						sm-padding="20px 20px 20px 20px"
						justify-content="flex-start"
						border-style="solid"
						background="#FFFFFF"
						md-flex-direction="column"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/lockasdsad.svg?v=2020-10-29T01:42:01.441Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="29px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Privacy data (GDPR){"\n\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 30px 0px"
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
								overflow-wrap="normal"
							>
								The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy for all citizens of the European Union and the European Economic Area. To meet the demands of the regulation, business owners should employ both organizational and software means. StaffCop is a software system which helps you meet these demands, covering a number of important articles.{"\n\n"}
								<br />
								{"\n"}
								<br />
								– Support for GDPR Articles 25: Data protection and design by default, 30: Record of processing activities, 32: Security of processing, 33: Notification of a data breach and 38: Supporting the data protection officer.
								<br />
								{" \n"}
								<br />
								– Allows for automatic discovery of privacy related information in both structured and unstructured data leveraging fingerprinting and OCR.{" \n"}
								<br />
								{"\n"}
								<br />
								<Em>
									–{" "}
								</Em>
								Records data processing activity, updated in real-time to a granular level for all employees, contractors and third-party vendors.{" \n"}
								<br />
								{"\n"}
								<br />
								<Em>
									–{" "}
								</Em>
								Provides full forensics and video recordings of data breaches.{"\n\n"}
							</Span>
						</Text>
						<Link
							href="/gdpr-compliance/"
							text-decoration-line="initial"
							color="--primary"
							font="normal 500 18px/22px --fontFamily-googleInter"
							hover-color="rgba(19, 33, 42, 1)"
						>
							Read more ❯{" "}
						</Link>
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
						border-style="solid"
						height="100%"
						hover-transform="translateY(-10px)"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						border-radius="6px"
						padding="36px 36px 42px 36px"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						flex-direction="column"
						align-items="flex-start"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						justify-content="flex-start"
						border-width="1px"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/heart-circlesadasd.svg?v=2020-10-30T01:39:16.613Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="29px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Healthcare (HIPAA){"\n\n\n"}
						</Text>
						<Text
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 30px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
						>
							It is necessary for all healthcare organizations to comply with HIPAA requirements of privacy and safeguards for medical and patient information as it protects them from data theft, insider threats, fraud and misuses. With StaffCop, healthcare organizations can accelerate the HIPAA compliance implementation and auditing process. Here’s how:
							<br />
							{"\n"}
							<br />
							– StaffCop guards protected health information (PHI), claim, care and clinical data ready to use HIPAA policy templates.
							<br />
							<br />
							– Allows organizations identify employees and third party vendors who fail to comply with activity monitoring and tracking of communication channels like file transfer, email, IM etc.{" \n"}
							<br />
							{"\n"}
							<br />
							– Its session recording and risk reports conduct compliance reviews, provide burden of proof and create employee training programs
							<br />
							<br />
							{"\n\n"}
						</Text>
						<Link
							href="/for-hipaa/"
							text-decoration-line="initial"
							color="--primary"
							font="normal 500 18px/22px --fontFamily-googleInter"
							hover-color="rgba(19, 33, 42, 1)"
						>
							Read more ❯{" "}
						</Link>
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
						sm-padding="20px 20px 20px 20px"
						flex-direction="column"
						border-radius="6px"
						padding="36px 36px 42px 36px"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						border-width="1px"
						border-style="solid"
						md-flex-direction="column"
						border-color="rgba(255, 255, 255, 0.05)"
						align-items="flex-start"
						justify-content="flex-start"
						background="#FFFFFF"
						hover-transform="translateY(-10px)"
						md-display="flex"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Bank,%20Circle%201.svg?v=2020-10-30T01:40:47.574Z" />
						<Text
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="29px 0px 18px 0px"
							display="inline-block"
						>
							Legal / law firms{"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 30px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Law firms are constantly faced with the ever evolving challenge of addressing insider threats in respect to safeguarding attorney-client privileged information and client/matter data. Here’s how StaffCop can help these firms tackle these threats, protect confidentiality and product/demonstrate effective oversight to compliance initiatives to your clients:
							<br />
							{" \n"}
							<br />
							– This software goes beyond the traditional access and identity management systems to ensure safety of client/matter data and work-product stored in firm repositories.{" \n"}
							<br />
							{"\n"}
							<br />
							– Provides oversight, audit and logs of all actions taken by employees (or any subsection of users/departments) as it pertains to the firm's desktops, laptops and content.{" \n"}
							<br />
							{"\n"}
							<br />
							– Offers privileged user monitoring, session recording, with searchable logs, videos, and audit trail for forensics.{" \n"}
							<br />
							{"\n"}
							<br />
							– It also demonstrates a firm’s ability to comply with AML/KYC, HIPAA, ISO 27001/27002, GDPR and other regulatory standards and laws.
							<br />
							{"\n\n"}
						</Text>
						<Link
							href="/for-legal/"
							text-decoration-line="initial"
							color="--primary"
							font="normal 500 18px/22px --fontFamily-googleInter"
							hover-color="rgba(19, 33, 42, 1)"
						>
							Read more ❯{" "}
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
					/>
					{"        "}
					<Box
						padding="36px 36px 42px 36px"
						background="#FFFFFF"
						display="flex"
						justify-content="flex-start"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						align-items="flex-start"
						flex-direction="column"
						border-radius="6px"
						border-style="solid"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						border-width="1px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/pen-circle-1%201.svg?v=2020-10-30T01:42:16.653Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="29px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Government / public services{"\n\n"}
						</Text>
						<Text
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 30px 0px"
						>
							StaffCop allows government organizations to address data loss, cybersecurity and insider threats with its insider threat detection and data loss prevention solutions. As an effective endpoint monitoring platform, StaffCop ensures your adherence to regulatory standards including NIST, FAR/DFARS, FDCC, FedRamp, FISMA and more:{" \n"}
							<br />
							{"\n"}
							<br />
							– It uses policies and anomaly rules to apprehend insider threats and sophisticated risk algorithms to identify high risk users and system components.{" \n"}
							<br />
							{"\n"}
							<br />
							– StaffCop’s built-in identity based authentication, privileged user monitoring and segregated access control helps to prevent unauthorized data access.{" \n"}
							<br />
							{"\n"}
							<br />
							– Session recording, alerts and immutable logs assists forensic investigation and incident response. StaffCop also allows you to locate the source and threat vectors with pinpoint accuracy.{" \n"}
							<br />
							{"\n"}
							<br />
							– Finally, StaffCop integrates with BI and SIEM systems to create a cybersecurity perimeter, share threat intelligence and coordinate response.{" \n\n"}
						</Text>
						<Link
							href="/government-and-public-sector-cyber-security/"
							text-decoration-line="initial"
							color="--primary"
							font="normal 500 18px/22px --fontFamily-googleInter"
							hover-color="rgba(19, 33, 42, 1)"
						>
							Read more ❯{" "}
						</Link>
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
						border-width="1px"
						background="#FFFFFF"
						height="100%"
						hover-transform="translateY(-10px)"
						flex-direction="column"
						justify-content="flex-start"
						align-items="flex-start"
						border-radius="6px"
						padding="36px 36px 42px 36px"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						sm-padding="20px 20px 20px 20px"
						md-display="flex"
						md-flex-direction="column"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/bag-shopping-circle%201.svg?v=2020-10-30T01:45:05.593Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="29px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Retail / ecommerce (PCI DSS){"\n\n"}
						</Text>
						<Text
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 30px 0px"
						>
							- StaffCop can be utilized in diversifying access to the cardholders’ data, which means that only authorized users will be able to work with files containing this type of information.{"\n\n \n"}
							<br />
							{"\n"}
							<br />
							– These authorized users will have a unique identification represented by their name. This also applies to the users of StaffCop – they can be assigned unique IDs and a unique range of permissions.{"\n\n \n"}
							<br />
							{"\n"}
							<br />
							– StaffCop can prevent cardholder data leakage by blocking information channels through which it may leak. For instance, blocking the USB and CD drives or e-mail applications of PCs that contain this type of information.{"\n\n \n"}
							<br />
							{"\n"}
							<br />
							– StaffCop monitors all information related to cardholder data and network resources and possesses all the tools crucial to preventing data leakage, including the ability to instantly block the targeted PC. Each card number is identified with the implementation of Luhn algorithm. That way the administrator of the system will be timely notified about the actions with this data which gives him time to take preventive measures.
						</Text>
						<Link
							text-decoration-line="initial"
							color="--primary"
							font="normal 500 18px/22px --fontFamily-googleInter"
							hover-color="rgba(19, 33, 42, 1)"
							href="https://romantic-jang-bba117.netlify.app/retail-and-ecommerce-cyber-security/"
						>
							Read more ❯{" "}
						</Link>
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
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						padding="36px 36px 42px 36px"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						justify-content="flex-start"
						border-radius="6px"
						border-width="1px"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/notebook-laptop-circle%201.svg?v=2020-10-30T01:46:14.076Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="29px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Information technology (ISO 27001){"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 30px 0px"
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
								overflow-wrap="normal"
							>
								StaffCop Enterprise can significantly help you meet ISO 27001 demands. The flexibility of settings makes it perfect to fit any Information Security Management System (ISMS). PDCA (Plan-Do-Check-Act) cycle lies in the core of the standard, so let’s take it with StaffCop step-by-step.{"\n\n \n"}
								<br />
								{"\n"}
								<br />
								<Em>
									–{" "}
								</Em>
								Allows you to monitor and measure user activity and maintain mandatory and supplemental records, exceptions, security events and how they were handled.{" \n"}
								<br />
								{"\n"}
								<br />
								<Em>
									–{" "}
								</Em>
								Helps you define security roles and responsibility, assess control of regular/privileged users and 3rd party vendors.
								<br />
								<br />
								{"\n"}
								<Em>
									–{" "}
								</Em>
								StaffCop Enterprise can track huge amount of information that can be used to analyze user behavior and estimate. Use pre-set and customized reports to analyze data and visualize the resulting output. There are quite handy embedded tools, such as heat map and anomalies detector that could help you track behavior trends and deviations. With experience gained and data collected the ISMS should be corrected in a corresponding way, which means both organizational means and configuring of StaffCop polices.{"\n\n \n"}
								<br />
							</Span>
						</Text>
						<Link
							color="--primary"
							font="normal 500 18px/22px --fontFamily-googleInter"
							hover-color="rgba(19, 33, 42, 1)"
							href="/iso-27001-compliance/"
							text-decoration-line="initial"
						>
							Read more ❯{" "}
						</Link>
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
						flex-direction="column"
						height="100%"
						md-display="flex"
						md-flex-direction="column"
						display="flex"
						align-items="flex-start"
						border-style="solid"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						border-width="1px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						justify-content="flex-start"
						border-radius="6px"
						padding="36px 36px 42px 36px"
						hover-transform="translateY(-10px)"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/lockasdsadsavcxv.svg?v=2020-10-30T01:47:13.604Z" />
						<Text
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="29px 0px 18px 0px"
						>
							Public accounting (SOX){"\n\n"}
						</Text>
						<Text
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 30px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
						>
							StaffCop's robust fraud prevention, data protection and reporting capabilities empowers public companies, investors, public accounting and management firms to meet several provisions of the Sarbanes–Oxley Act of 2002 (SOX) compliance requirements:{" \n"}
							<br />
							{"\n"}
							<br />
							– StaffCop’s user activity monitoring and recording prevents accounting frauds.{" \n"}
							<br />
							{"\n"}
							<br />
							– Prevent document/data tampering with content rules and access safeguards.{" \n"}
							<br />
							{"\n"}
							<br />
							– Its verifiable controls solution tracks data access, discloses data breaches, and exports audit reports as CSV/Excel formats for feeding into ERP systems.{" \n"}
							<br />
							{"\n"}
							<br />
							– StaffCop provides historical logs and video records of all user activity to streamline any change in management process.{"\n\n"}
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
						border-style="solid"
						height="100%"
						display="flex"
						border-width="1px"
						md-flex-direction="column"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						align-items="flex-start"
						justify-content="flex-start"
						border-radius="6px"
						md-display="flex"
						sm-padding="20px 20px 20px 20px"
						flex-direction="column"
						padding="36px 36px 42px 36px"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						border-color="rgba(255, 255, 255, 0.05)"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Credit%20Cards,%20Circle%201.svg?v=2020-10-30T01:48:08.968Z" />
						<Text
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="29px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
						>
							Online banking (FFIEC){"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 30px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							FFIEC (Federal Financial Institutions Examination Council) compliance comprises a set of conformance standards for online banking. StaffCop assists banks and financial institutions in uncovering potential cybersecurity vulnerabilities and insider threats in their online banking system:{" \n"}
							<br />
							{"\n"}
							<br />
							– Offers threat intelligence with 22+ monitored objects, user activities and content sharing.{" \n"}
							<br />
							{"\n"}
							<br />
							– Provides ‘always on’ cyber security controls with automated monitoring rules.{" \n"}
							<br />
							{"\n"}
							<br />
							– Manages external/third party vendor access and dependency.{" \n"}
							<br />
							{"\n"}
							<br />
							– Assist with cybersecurity risk assessment and policy development by identifying vulnerable departments, employees and resources with built-in Risk Analysis Dashboard.
							<br />
							{"\n\n"}
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
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="36px 36px 42px 36px"
						sm-padding="20px 20px 20px 20px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						background="#FFFFFF"
						height="100%"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						border-style="solid"
						border-width="1px"
						display="flex"
						border-radius="6px"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/programming-code%201.svg?v=2020-10-30T01:48:53.486Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="29px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Utilities (NERC){"\n\n\n"}
						</Text>
						<Text
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 30px 0px"
							display="inline-block"
						>
							The NERC-CIP is arguably one of the most rigorous compliance regulation as it contains nine standards and forty-five requirements. StaffCop can assist registered utilities in meeting these requirements:{" \n"}
							<br />
							{"\n"}
							<br />
							– StaffCop offers a documented trail of user activities within a desktop or terminal server.{" \n"}
							<br />
							{"\n"}
							<br />
							– It provides real-time monitoring of critical systems and user workstations. And receives automated alerts when any system configuration change occurs.{" \n"}
							<br />
							{"\n"}
							<br />
							– Offers risk and vulnerability analysis of users, departments, policies or applications.{" \n"}
							<br />
							{"\n"}
							<br />
							– Uses session recording, simulated incident detection and threat response to develop mock audit programs and training plans.{" \n\n"}
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
						md-flex-direction="column"
						flex-direction="column"
						border-radius="6px"
						border-width="1px"
						display="flex"
						background="#FFFFFF"
						hover-transform="translateY(-10px)"
						height="100%"
						md-display="flex"
						sm-padding="20px 20px 20px 20px"
						padding="36px 36px 42px 36px"
						border-style="solid"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						align-items="flex-start"
						justify-content="flex-start"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						border-color="rgba(255, 255, 255, 0.05)"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/shield-protected-circle%201.svg?v=2020-10-30T01:49:23.222Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="29px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Federal agencies (FISMA){"\n\n"}
						</Text>
						<Text
							margin="0px 0px 30px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
						>
							Augment your existing federal security implementation for NIST-FISMA with StaffCop’s comprehensive platform for risk management, information protection and confidentiality. StaffCop provides{" \n"}
							<br />
							{"\n"}
							<br />
							– 24/7 or 'always on' continuous monitoring and real-time visual screen recording.{" \n"}
							<br />
							{"\n"}
							<br />
							– Risk categorization and configurable risk levels for individual users, groups and departments.{" \n"}
							<br />
							{"\n"}
							<br />
							– Ensures the integrity, confidentiality and availability of sensitive data through OCR, fingerprinting and content sharing rules.{" \n"}
							<br />
							{"\n"}
							<br />
							– Tracks, documents, and reports security incidents with built in Session Recording, risk reports and immutable event logs.
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="0px 0 0px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -346px/3610px no-repeat">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Components.Feature>
				<Override slot="text">
					Feature-rich, affordable with annual and perpetual licensing options
				</Override>
			</Components.Feature>
			<Components.Footer>
				<Override slot="link">
					Company
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