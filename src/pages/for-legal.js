import React from "react";
import theme from "theme";
import { Theme, Text, Link, Section, Hr, Box, Strong, Image, Icon, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { BsFillCircleFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"for-legal"} />
		<Helmet>
			<title>
				For Legal
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
		<Section sm-padding="80px 0 20px 0" padding="103px 0 18px 0" lg-padding="100px 0 20px 0">
			<Override slot="SectionContent" border-radius="6px" max-width="1170px" background="linear-gradient(0deg, rgba(0, 9, 27, 0.5), rgba(0, 9, 27, 0.5)),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%D1%84%D1%8B%D0%B2%D1%84%D1%8B%D0%B2%D1%84%D1%8B.png?v=2020-11-01T21:09:31.273Z) 0% 0% /auto repeat scroll padding-box" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="100%" display="flex" sm-align-items="center" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
						padding="96px 0px 96px 80px"
						sm-padding="50px 20px 50px 20px"
					/>
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 16px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
						color="#ffffff"
					>
						For Legal
					</Text>
					{"    "}
					<Link
						padding="16px 38px 16px 38px"
						border-radius="40px"
						sm-font="600 16px/22px --fontFamily-googleInter"
						color="#ffffff"
						font="600 18px/22px --fontFamily-googleInter"
						box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						background="--color-primary"
						margin="36px 0px 0px 0px"
						sm-padding="16px 20px 16px 20px"
						z-index="2"
						text-decoration-line="initial"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						href="/request-demo/"
						hover-background="#409EEB"
						position="relative"
						md-padding="16px 26px 16px 26px"
					>
						Request demo
					</Link>
				</StackItem>
				{"    "}
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
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
						font="normal 700 32px/140% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
					>
						Law firm insider threat management
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem nout-width="100%" width="70%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Text
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						font="400 18px/28px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						color="#555"
						width="100%"
						display="inline-block"
						sm-text-align="center"
						text-align="justify"
					>
						In today’s highly regulated business landscape, law firms are faced with the ever-evolving challenge of tackling their insider risk problems as it relates to protecting attorney-client privileged information and client/matter data, ensuring the security of the work product offshored, and securing access to critical systems by privileged users and third-party vendors/contractors.
						<br />
						StaffCop for Legal is designed to assist law firms to address these challenges and demonstrate effective oversight to compliance initiatives to clients.
					</Text>
					<Hr border-color="rgba(237, 237, 237, 1)" width="98%" margin="40px 0px 40px 0px" />
					<Text
						sm-font="normal 700 24px/30px Inter, sans-serif"
						font="normal 700 32px/140% --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
					>
						Complience management
					</Text>
					<Text
						display="inline-block"
						color="#555"
						md-font="400 14px/20px --fontFamily-googleInter"
						sm-text-align="center"
						text-align="justify"
						font="400 18px/28px --fontFamily-googleInter"
						margin="30px 0px 30px 0px"
						width="100%"
						md-width="100%"
					>
						Since clients now require law firms to adhere to regulatory standards such as AML/KYC, HIPAA, ISO27001/27002, GDPR that secure their sensitive data, it is crucial for legal organizations to adopt solutions that ensure compliance.
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
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						display="flex"
						background="#FFFFFF"
						flex-direction="column"
						justify-content="flex-start"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						align-items="flex-start"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
					>
						<Text
							margin="0px 0px 0px 0px"
							color="#ffffff"
							border-radius="40px"
							align-items="center"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-color="rgba(255, 255, 255, 0.05)"
							text-align="center"
							font="700 18px/22px --fontFamily-googleInter"
							background="--color-primary"
							border-style="solid"
							justify-content="center"
							padding="13px 0px 13px 0px"
							display="block"
							width="48px"
						>
							1
						</Text>
						<Text
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
						>
							Controls to enforce safety of client/matter data and work-product stored in firm systems and repositories
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
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
					/>
					{"        "}
					<Box
						border-style="solid"
						hover-transform="translateY(-10px)"
						display="flex"
						align-items="flex-start"
						background="#FFFFFF"
						md-flex-direction="column"
						border-width="1px"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						justify-content="flex-start"
						border-radius="6px"
						padding="42px 37px 42px 37px"
						sm-padding="20px 20px 20px 20px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
					>
						<Text
							width="48px"
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							background="--color-primary"
							border-radius="40px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							text-align="center"
							padding="13px 0px 13px 0px"
							display="block"
							justify-content="center"
							color="#ffffff"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							align-items="center"
						>
							2
						</Text>
						<Text
							font="--lead"
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Oversight, audit and logs of all actions for all employees at the firm
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
						padding="42px 37px 42px 37px"
						sm-padding="20px 20px 20px 20px"
						flex-direction="column"
						background="#FFFFFF"
						height="100%"
						hover-transform="translateY(-10px)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						border-radius="6px"
						border-style="solid"
						md-flex-direction="column"
						border-color="rgba(255, 255, 255, 0.05)"
						align-items="flex-start"
						border-width="1px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
						justify-content="flex-start"
					>
						<Text
							background="--color-primary"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-color="rgba(255, 255, 255, 0.05)"
							margin="0px 0px 0px 0px"
							text-align="center"
							border-width="1px"
							justify-content="center"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							border-style="solid"
							padding="13px 0px 13px 0px"
							display="block"
							align-items="center"
							width="48px"
						>
							3
						</Text>
						<Text
							font="--lead"
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Privileged user monitoring, session recording, with videos, searchable logs, and audit trail for forensics
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
						height="100%"
						hover-transform="translateY(-10px)"
						justify-content="flex-start"
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-style="solid"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						flex-direction="column"
						align-items="flex-start"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
						md-flex-direction="column"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
					>
						<Text
							justify-content="center"
							text-align="center"
							background="--color-primary"
							border-radius="40px"
							border-width="1px"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							font="700 18px/22px --fontFamily-googleInter"
							padding="13px 0px 13px 0px"
							margin="0px 0px 0px 0px"
							border-style="solid"
							width="48px"
							color="#ffffff"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							display="block"
						>
							4
						</Text>
						<Text
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
						>
							User behavior analytics to eliminate false positives, and identify anomalous behavior
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
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						border-style="solid"
						height="100%"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						border-radius="6px"
						padding="42px 37px 42px 37px"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						justify-content="flex-start"
						border-width="1px"
						background="#FFFFFF"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
					>
						<Text
							background="--color-primary"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							width="48px"
							border-radius="40px"
							border-style="solid"
							justify-content="center"
							color="#ffffff"
							border-width="1px"
							text-align="center"
							align-items="center"
							display="block"
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							padding="13px 0px 13px 0px"
							border-color="rgba(255, 255, 255, 0.05)"
						>
							5
						</Text>
						<Text
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="30px 0px 0px 0px"
							display="inline-block"
						>
							An immutable log of actions that vividly product/demonstrate all activity as it relates to firm desktops, laptops and content
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
						background="#FFFFFF"
						hover-transform="translateY(-10px)"
						border-radius="6px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						align-items="flex-start"
						border-style="solid"
						height="100%"
						sm-padding="20px 20px 20px 20px"
						display="flex"
						flex-direction="column"
						border-width="1px"
						md-display="flex"
						md-flex-direction="column"
						justify-content="flex-start"
						padding="42px 37px 42px 37px"
					>
						<Text
							text-align="center"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							padding="13px 0px 13px 0px"
							display="block"
							margin="0px 0px 0px 0px"
							border-radius="40px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							background="--color-primary"
							justify-content="center"
							width="48px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							align-items="center"
						>
							6
						</Text>
						<Text
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
						>
							Ability to set up real-time alerts to track suspect activities
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section sm-padding="50px 0 30px 0" background="#F8F8F9" padding="100px 0 70px 0">
			<Override slot="SectionContent" align-items="center" max-width="1200px" />
			<Text
				margin="0px 0px 45px 0px"
				color="#13212A"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				font="--headline2"
				letter-spacing="-2%"
				lg-font="normal 700 36px/40px Inter, sans-serif"
				width="75%"
				display="inline-block"
			>
				Data breach is a costly challenge confronting privacy
			</Text>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
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
						display="flex"
						border-radius="6px"
						background="#FFFFFF"
						md-display="flex"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						padding="36px 36px 36px 36px"
						border-width="1px"
						align-items="flex-start"
						border-style="solid"
						height="100%"
						justify-content="flex-start"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						flex-direction="column"
					>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="--primary"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							53 %
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							of all attacks resulted in a financial loss of more than US $500,000, including, but not limited to, lost revenue, customers, opportunities, and out-of-pocket costs.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem md-width="100%" width="50%" display="flex" lg-width="50%">
					<Override
						slot="StackItemContent"
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
					/>
					{"        "}
					<Box
						padding="36px 36px 36px 36px"
						border-style="solid"
						background="#FFFFFF"
						hover-transform="translateY(-10px)"
						md-display="flex"
						display="flex"
						align-items="flex-start"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						border-width="1px"
						height="100%"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						justify-content="flex-start"
						border-radius="6px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-flex-direction="column"
						flex-direction="column"
					>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="--primary"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							$209M
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							The FBI reported that $209M was paid in ransom in the first quarter of 2016, while just $24 million in ransom payments was made in all of 2015.
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
						hover-transform="translateY(-10px)"
						sm-padding="20px 20px 20px 20px"
						display="flex"
						justify-content="flex-start"
						border-width="1px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						align-items="flex-start"
						padding="36px 36px 36px 36px"
						border-color="rgba(255, 255, 255, 0.05)"
						border-radius="6px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						md-display="flex"
						md-flex-direction="column"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
					>
						<Text
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="--primary"
						>
							67%
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							of businesses identified privileged users as a top cloud security concern.
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
						align-items="flex-start"
						padding="36px 36px 36px 36px"
						border-width="1px"
						background="#FFFFFF"
						md-display="flex"
						sm-padding="20px 20px 20px 20px"
						display="flex"
						flex-direction="column"
						border-radius="6px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						height="100%"
						justify-content="flex-start"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
					>
						<Text
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="--primary"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
						>
							~$12B
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							estimated annual losses for the US from cybercrime targeting IP and roughly $50 billion to $60 billion globally
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#F8F8F9" padding="24px 0 70px 0" sm-padding="24px 0 50px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				font="--headline2"
				margin="0px 0px 30px 0px"
				display="inline-block"
				color="#13212A"
				letter-spacing="-2%"
				width="75%"
				lg-font="normal 700 36px/40px Inter, sans-serif"
			>
				StaffCop helps to comply with
				<br />
				ISO 27001{"\n\n"}
			</Text>
			<Text
				font="normal 400 18px/160% --fontFamily-googleInter"
				margin="0px 0px 45px 0px"
				display="inline-block"
				color="rgba(85, 85, 85, 1)"
				letter-spacing="-2%"
				text-align="center"
				width="75%"
			>
				StaffCop Enterprise can significantly help you meet{" "}
				<Strong>
					ISO 27001
				</Strong>
				{" "}demands. The flexibility of settings makes it perfect to fit any Information Security Management System (ISMS). PDCA (Plan-Do-Check-Act) cycle lies in the core of the standard, so let’s take it with StaffCop step-by-step.{"\n\n"}
			</Text>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem
					width="100%"
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
						flex-direction="column"
						height="100%"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 20px 20px 20px"
						justify-content="flex-start"
						display="flex"
						align-items="flex-start"
						border-radius="6px"
						padding="30px 37px 42px 37px"
						border-style="solid"
						hover-transform="translateY(-10px)"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
					>
						<Image width="64px" height="64px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/lockasdsadsavcxv.svg?v=2020-10-30T01:47:13.604Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							<Strong>
								Plan
							</Strong>
							{"\n\n"}
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							At this stage you should establish the internal policy of the company regulating creation and distribution of information (ISMS) within and beyond the company. The corporate information and access to it should be classified and divided with different access rights for different groups of employees. For example, your employees should work only with a limited number of web-sites and applications, the PC of the secretary is the only one which can print documents and the sales department is the only department with access to the customers’ database.{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					lg-width="50%"
					md-width="100%"
					nout-width="50%"
					width="100%"
					display="flex"
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
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						justify-content="flex-start"
						border-radius="6px"
						height="100%"
						md-display="flex"
						align-items="flex-start"
						background="#FFFFFF"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						md-flex-direction="column"
						sm-padding="10px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="30px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						hover-transform="translateY(-10px)"
					>
						<Image width="64px" height="64px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/shield-protected-circle%201.svg?v=2020-10-30T01:49:23.222Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							<Strong>
								Do
							</Strong>
							{"\n\n"}
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							The implementation is done through creating a number of fully customized filters and policies. It’s all carried out in the administrative interface of StaffCop to be applied on the workstations. The policies and filters can be easily modified at any moment. StaffCop is deployed in your corporate network and it doesn’t send any data outside providing high level of information security. It can work in closed networks, the ones that don’t have internet connection.{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					md-width="100%"
					nout-width="50%"
					width="100%"
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
						background="#FFFFFF"
						height="100%"
						md-flex-direction="column"
						sm-padding="10px 20px 20px 20px"
						flex-direction="column"
						border-radius="6px"
						border-width="1px"
						md-display="flex"
						display="flex"
						align-items="flex-start"
						padding="30px 37px 42px 37px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						border-color="rgba(255, 255, 255, 0.05)"
						justify-content="flex-start"
					>
						<Image width="64px" height="64px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/detectore.svg?v=2020-10-30T02:12:10.433Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							<Strong>
								Check
							</Strong>
							{"\n\n"}
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							The monitoring is carried out in the same administrative interface. A number of administrators can be assigned access right corresponding to the level of the responsibility they carry. For example, each head of a department can monitor information on PCs belonging to his or her department. The alerts on violations of ISMS will be sent to the specified e-mail addresses, be it a security officer or the company owner. Documents can be easily searched for classified information, and if it’s contained in images or PDF, the text will be recognized.{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					display="flex"
					lg-width="50%"
					md-width="100%"
					nout-width="50%"
					width="100%"
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
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						border-color="rgba(255, 255, 255, 0.05)"
						align-items="flex-start"
						padding="30px 37px 42px 37px"
						border-width="1px"
						background="#FFFFFF"
						md-display="flex"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
						border-radius="6px"
						border-style="solid"
						md-flex-direction="column"
						justify-content="flex-start"
						hover-transform="translateY(-10px)"
						sm-padding="10px 20px 20px 20px"
						display="flex"
					>
						<Image width="64px" height="64px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/bell-notification-circle%202.svg?v=2020-10-30T02:15:27.985Z" />
						<Text
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
						>
							<Strong>
								Act
							</Strong>
							{"\n\n"}
						</Text>
						<Text
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
						>
							StaffCop Enterprise can track huge amount of information that can be used to analyze user behavior and estimate. Use pre-set and customized reports to analyze data and visualize the resulting output. There are quite handy embedded tools, such as heat map and anomalies detector that could help you track behavior trends and deviations. With experience gained and data collected the ISMS should be corrected in a corresponding way, which means both organizational means and configuring of StaffCop polices.{"\n\n"}
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
				padding="60px 0px 0px 0px"
				border-style="solid"
				box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
				border-color="#ffffff"
				border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
				max-width="1170px"
				align-items="center"
				background="#ffffff"
				border-radius="6px"
				border-width="1px"
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
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
					>
						User session recording, live view and playback
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
						StaffCop’s Session Recording feature captures all user activity and screen content. With this function, you can:
					</Text>
					{"  "}
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
						/>
						<Text color="#555" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter">
							Know and have forensic evidence, if your users are engaged in unproductive or harmful activities while at work.
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
							category="bs"
						/>
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							Take control of a user's desktop in a potential breach event.
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							margin="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							With the components such as immutable logs, alert reports and audit trails, the recording can serve as forensic evidence for investigation.
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
						/>
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							The insight derived from the reports and recordings can be leveraged to train employees about security best practices.
						</Text>
					</Box>
					{"  "}
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
						align-items="flex-start"
						sm-margin="20px 0px 0px 0px"
						md-order="1"
						padding="0px 20px 0px 60px"
						border-radius="0px"
						flex-direction="column"
						border-width="0px"
						lg-padding="0px 30px 0px 50px"
						justify-content="center"
					/>
					{"        "}
					<Text
						md-margin="0px 0px 24px 0px"
						text-align="right"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
					>
						Privileged user monitoring
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
						Because of their access to critical information systems containing client/matter data, privileged users can cause severe damage to a law firm, if they have malicious intent. They can leak, steal or potentially destroying client/matter data and work product. To prevent these insider threats, StaffCop offers:
					</Text>
					<Box display="flex" margin="0px 0px 18 0px">
						<Text
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							text-align="right"
							margin="9px 18px 9px 0"
							font="400 18px/160% --fontFamily-googleInter"
						>
							Power-user rules to check for backdoor account creation, attempt to gain additional system privileges etc.
						</Text>
						<Icon
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
						/>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Text
							margin="9px 18px 9px 0"
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							text-align="right"
						>
							Real-time alerts when a privileged user tries to tamper with sensitive systems, databases or content.
						</Text>
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
						/>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Text
							margin="9px 18px 9px 0"
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							text-align="right"
						>
							Immutable session log that keep a permanent record of all privileged user actions.
						</Text>
						<Icon
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
						/>
					</Box>
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
						Intelligent session mining with OCR
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
						StaffCop can collects all data on a computer screen, including text in images and apply OCR technology to provide the firm with the ability to:
					</Text>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
						/>
						<Text font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px">
							Search for certain keywords and find any relevant content that was visible to the user, using regular expressions or natural language.
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
						/>
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							Find out which users have seen relevant information to ensure ethical walls remain in place and report any violations.
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
						/>
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							Develop rules that send an alert when certain text appears on screen.
						</Text>
					</Box>
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
						justify-content="center"
						padding="0px 0px 0px 50px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
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
						Process and productivity optimization
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#555"
						lg-font="normal 400 15px/160% Inter, sans-serif"
						text-align="right"
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
					>
						With work product offshored and contracted out on a regular basis, it’s essential to be able to monitor and improve the process and productivity of the extended legal workforce. StaffCop can assist by offering a framework within which your law firm can:
					</Text>
					<Box display="flex" margin="0px 0px 18 0px">
						<Text
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							text-align="right"
							margin="9px 18px 9px 0"
						>
							Classify apps and websites you consider productive and provide in-depth reports on their usage.
						</Text>
						<Icon
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
						/>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Text
							margin="9px 18px 9px 0"
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							text-align="right"
						>
							Detailed reports for productivity KPIs like session, active, productive, unproductive and idle time.
						</Text>
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
						/>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Text
							text-align="right"
							margin="9px 18px 9px 0"
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
						>
							Sends automated alerts to discourage excessive idling.
						</Text>
						<Icon
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
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
						md-margin="0px 0px 24px 0px"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
					>
						Policy and rules engine
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
						With StaffCop’s visual Policy and Rules creation engine, law firms can establish:
					</Text>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
						/>
						<Text color="#555" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter">
							Rules and policies to monitor and secure client/matter and other sensitive data from insider threats and breaches.
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
						/>
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							The visual Policy and Rules Editor allows administrators to define highly complex rules for very specific use cases with oversight on all internal and external disk activity, keystrokes, application usage, and much more.
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
						/>
						<Text sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555">
							Utilize black/whitelisting, define safe or restricted apps and websites, and do much more.
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
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 30px/43px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						text-align="right"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
					>
						Privacy-aware recording and monitoring
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
						StaffCop allows firms to have complete control over when, who and how much to monitor, when to record and when not to. StaffCop is flexible to accommodate all use cases:
					</Text>
					<Box display="flex" margin="0px 0px 18 0px">
						<Text
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							text-align="right"
							margin="9px 18px 9px 0"
							font="400 18px/160% --fontFamily-googleInter"
						>
							Track activity and alert only, with no user-session recording
						</Text>
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
						/>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Text
							text-align="right"
							margin="9px 18px 9px 0"
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
						>
							Specified working hours monitoring
						</Text>
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
						/>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Text
							text-align="right"
							margin="9px 18px 9px 0"
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
						>
							Define which types of data are monitored for specific users or departments. E.g, monitor only printing documents for the accountant, only email and messengers for the sales department, and so on.
						</Text>
						<Icon
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
						/>
					</Box>
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
						md-margin="0px 0px 24px 0px"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
					>
						Revealed or stealth desktop agent
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
						You can either deploy StaffCop with a revealed desktop agent, whereby users are aware of the StaffCop system and its monitoring functions. Or, launch the desktop agent in stealth mode with no visible controls to the end-users being monitored.
					</Text>
					<Text
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
						font="normal 600 18px/160% --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						lg-font="normal 400 15px/160% Inter, sans-serif"
					>
						With the revealed agent you can:
					</Text>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
						/>
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							Users can see the StaffCop icon in the taskbar with the address of the StaffCop Server aggregating the data from this agent.
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
						/>
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							Users will be required to provide reasons for absence, if there is no activity registered for a specified period of time.
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
						/>
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							Allows you to control mouse and keyboard of a remote desktop in real-time
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
			<Stack
				width="100%"
				gap="--cmp-stack-gap-default"
				border-width="0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
				margin="0px 0px 0px 0px"
			>
				<StackItem width="50%" display="flex" md-width="100%" md-order="1">
					<Override
						slot="StackItemContent"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						justify-content="center"
						padding="0px 0px 0px 50px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-end"
					/>
					{"        "}
					<Text
						margin="0px 0px 18px 0px"
						lg-font="normal 700 30px/43px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						text-align="right"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
					>
						Data loss prevention
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#555"
						lg-font="normal 400 15px/160% Inter, sans-serif"
						text-align="right"
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
					>
						Compliance, competition and customer trust means law firms have to safeguard client/matter information and work product. To ensure data safety and integrity, StaffCop provides a robust, four-step data loss prevention process:
					</Text>
					<Box display="flex" margin="0px 0px 18 0px">
						<Text
							margin="9px 18px 9px 0"
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							text-align="right"
						>
							First, it allows you to define what constitutes sensitive or classified data.
						</Text>
						<Icon
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
						/>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Text
							margin="9px 18px 9px 0"
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							text-align="right"
						>
							Creates a security perimeter by setting rules for how the data should be handled.
						</Text>
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
						/>
					</Box>
					<Box margin="0px 0px 18 0px" display="flex">
						<Text
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							text-align="right"
							margin="9px 18px 9px 0"
						>
							Automatically thwart any rule violation incident with actions that block, notify, or warn.
						</Text>
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
						/>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Text
							margin="9px 18px 9px 0"
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							text-align="right"
						>
							In case of a data breach, pinpoint the exact cause and source of the incident with audit and forensic data available in the StaffCop system.
						</Text>
						<Icon
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							margin="18px 0px 0px 0px"
							category="bs"
							icon={BsFillCircleFill}
						/>
					</Box>
					{"    "}
				</StackItem>
				<StackItem display="flex" md-width="100%" width="50%">
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
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22:41:42.492Z"
						md-width="80%"
						object-fit="contain"
						width="90%"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22%3A41%3A42.492Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22%3A41%3A42.492Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22%3A41%3A42.492Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22%3A41%3A42.492Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22%3A41%3A42.492Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22%3A41%3A42.492Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22%3A41%3A42.492Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Components.BlockNeed>
			<Override slot="text7">
				Categorize applications and web-sites into productive and unproductive. Set up different configurations for particular users, groups and departments. Compare results.{"  "}
				<Span
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="rgba(255, 255, 255, 0)"
					overflow-wrap="normal"
				>
					.
				</Span>
			</Override>
			<Override slot="text1">
				Information Security{"\n\n"}
			</Override>
			<Override slot="text2">
				Receive the required data “on the fly”. Search by keywords and regular expressions. Record sound from microphones to hear what was happening at the moment of interest.
			</Override>
			<Override slot="text3">
				Remote Administration{"\n\n"}
			</Override>
			<Override slot="text4">
				View remote desktop without being notices. Take control over a workstation.  Full picture of software and hardware usage. Intensity of usage and registry of states.{"\n\n"}
			</Override>
			<Override slot="text6">
				Employee Monitoring{"\n\n\n\n"}
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
				md-font="normal 700 30px/40px Inter, sans-serif"
				md-margin="0px 0px 20px 0px"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				margin="0px 0px 70px 0px"
				letter-spacing="-2%"
				text-align="center"
				lg-font="normal 700 36px/58px Inter, sans-serif"
			>
				<Span
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
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
						justify-content="flex-start"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
					/>
					{"        "}
					<Box
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						border-width="1px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						sm-padding="20px 20px 20px 20px"
						display="flex"
						align-items="flex-start"
						border-radius="6px"
						background="#FFFFFF"
						md-flex-direction="column"
						padding="42px 37px 42px 37px"
						border-style="solid"
						height="100%"
						hover-transform="translateY(-10px)"
						md-display="flex"
						flex-direction="column"
						justify-content="flex-start"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/papaplo.svg?v=2020-10-19T23:24:47.217Z" width="60px" height="60px" />
						<Text
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 18px 0px"
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
							Install on bare metal from our ISO image containing Ubuntu 18.04 and StaffCop or install StaffCop packages on existing Ubuntu 18.04.{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
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
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						display="flex"
						justify-content="flex-start"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						hover-transform="translateY(-10px)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
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
							Virtual Machine{"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Install on any OS as a virtual machine from our ISO image, use Virtual Box, VMWare, Hyper-V or any other virtualization system. Easy administrating without risking the host machine.{"\n\n"}
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
						md-flex-direction="column"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						justify-content="flex-start"
						border-width="1px"
						height="100%"
						sm-padding="20px 20px 20px 20px"
						border-radius="6px"
						padding="42px 37px 42px 37px"
						hover-transform="translateY(-10px)"
						align-items="flex-start"
						border-style="solid"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
						display="flex"
						flex-direction="column"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/cloudd.svg?v=2020-10-19T23:25:21.625Z" height="60px" width="60px" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Private Cloud{"\n\n"}
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
			<Components.Feature>
				<Override slot="text">
					Feature-rich, affordable with annual and perpetual licensing options{"\n\n"}
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