import React from "react";
import theme from "theme";
import { Theme, Text, Section, Image, Link, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"white-papers"} />
		<Helmet>
			<title>
				White Papers
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
		<Section
			sm-padding="80px 2.5% 18px 2.5%"
			padding="103px 0 18px 0"
			lg-width="95%"
			lg-padding="100px 2.5% 18px 2.5%"
			lg-border-radius="6px"
		>
			<Override
				slot="SectionContent"
				height="267px"
				hd-border-radius="0px"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectanglcghjkj.png?v=2020-11-04T02:10:23.597Z) 100% 100% /cover no-repeat scroll padding-box"
				padding="59px 0px 66px 72px"
				width="100%"
				border-radius="6px"
				justify-content="flex-end"
				max-height="392px"
				max-width="1100px"
				md-padding="0px 0px 50px 0px"
				lg-border-radius="6px"
				lg-width="100%"
				lg-padding="59px 40px 66px 40px"
			/>
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem
					display="flex"
					sm-align-items="center"
					sm-width="100%"
					lg-width="100%"
					width="60%"
				>
					<Override
						slot="StackItemContent"
						lg-align-items="center"
						flex-direction="column"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
					/>
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 0px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
						lg-text-align="center"
						color="#ffffff"
					>
						White Papers
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section background="#FFFFFF" padding="24px 0 70px 0" sm-padding="24px 0 50px 0" lg-padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Text margin="16px 0px 16px 15px" width="70%" font="normal 700 32px/38px --fontFamily-googleInter" letter-spacing="-1%">
				Download presentations, white papers and other marketing materials in PDF
			</Text>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem
					width="33.333%"
					display="flex"
					lg-width="50%"
					md-width="100%"
					nout-width="50%"
				>
					<Override
						slot="StackItemContent"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
						flex-direction="column"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-width="1px"
						border-radius="6px"
						border-style="solid"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						align-items="flex-start"
						justify-content="space-between"
					/>
					{"        "}
					<Text
						font="normal 700 24px/140% --fontFamily-googleInter"
						margin="0px 0px 12px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						sm-font="normal 600 20px/140% Inter, sans-serif"
					>
						About "atom security" llc.
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						sm-font="normal 400 16px/140% Inter, sans-serif"
					>
						1.23 Mb
						<br />
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Link
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="flex"
							href="https://staffcop.com/documents/About_Atom_Security.pdf"
							color="#1465FF"
							text-decoration-line="initial"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Arrow,%20Download,%20Save,%20Upload%201.svg?v=2020-11-04T02:18:51.068Z" margin="0px 10px 0px 0px" />
							Download
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="33.333%"
					display="flex"
					lg-width="50%"
					md-width="100%"
					nout-width="50%"
				>
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						justify-content="space-between"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
						flex-direction="column"
						align-items="flex-start"
						border-radius="6px"
						border-width="1px"
						border-style="solid"
					/>
					{"        "}
					<Text
						sm-font="normal 600 20px/140% Inter, sans-serif"
						font="normal 700 24px/140% --fontFamily-googleInter"
						margin="0px 0px 12px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
					>
						Security audit with staffcop
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						sm-font="normal 400 16px/140% Inter, sans-serif"
					>
						4.56 Mb
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Link
							href="https://staffcop.com/documents/Security_audit_with_StaffCop.pdf"
							color="#1465FF"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="flex"
						>
							<Image margin="0px 10px 0px 0px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Arrow,%20Download,%20Save,%20Upload%201.svg?v=2020-11-04T02:18:51.068Z" />
							Download
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					display="flex"
					lg-width="50%"
					md-width="100%"
					nout-width="50%"
					width="33.333%"
				>
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						border-radius="6px"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
						align-items="flex-start"
						justify-content="space-between"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-width="1px"
					/>
					{"        "}
					<Text
						font="normal 700 24px/140% --fontFamily-googleInter"
						margin="0px 0px 12px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						sm-font="normal 600 20px/140% Inter, sans-serif"
					>
						Staffcop datasheet
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						sm-font="normal 400 16px/140% Inter, sans-serif"
					>
						6.55 Mb
						<br />
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Link
							display="flex"
							href="https://staffcop.com/documents/StaffCop_Datasheet.pdf"
							color="#1465FF"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Arrow,%20Download,%20Save,%20Upload%201.svg?v=2020-11-04T02:18:51.068Z" margin="0px 10px 0px 0px" />
							Download
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="33.333%"
					display="flex"
					lg-width="50%"
					md-width="100%"
					nout-width="50%"
				>
					<Override
						slot="StackItemContent"
						border-radius="6px"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						align-items="flex-start"
						justify-content="space-between"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-width="1px"
						border-style="solid"
						flex-direction="column"
					/>
					{"        "}
					<Text
						font="normal 700 24px/140% --fontFamily-googleInter"
						margin="0px 0px 12px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						sm-font="normal 600 20px/140% Inter, sans-serif"
					>
						Staffcop presentation
					</Text>
					<Text
						sm-font="normal 400 16px/140% Inter, sans-serif"
						font="--lead"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
					>
						3.63 Mb
						<br />
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Link
							margin="0px 0px 0px 0px"
							display="flex"
							href="https://staffcop.com/documents/StaffCop_Enterprise.pdf"
							color="#1465FF"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Arrow,%20Download,%20Save,%20Upload%201.svg?v=2020-11-04T02:18:51.068Z" margin="0px 10px 0px 0px" />
							Download
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					display="flex"
					lg-width="50%"
					md-width="100%"
					nout-width="50%"
					width="33.333%"
				>
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						border-radius="6px"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
						align-items="flex-start"
						justify-content="space-between"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-width="1px"
						border-style="solid"
					/>
					{"        "}
					<Text
						color="rgba(19, 33, 42, 1)"
						sm-font="normal 600 20px/140% Inter, sans-serif"
						font="normal 700 24px/140% --fontFamily-googleInter"
						margin="0px 0px 12px 0px"
						display="inline-block"
					>
						For information security
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						sm-font="normal 400 16px/140% Inter, sans-serif"
					>
						4.69 Mb
						<br />
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Link
							href="https://staffcop.com/documents/StaffCop_for_IS.pdf"
							color="#1465FF"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="flex"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Arrow,%20Download,%20Save,%20Upload%201.svg?v=2020-11-04T02:18:51.068Z" margin="0px 10px 0px 0px" />
							Download
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					lg-width="50%"
					md-width="100%"
					nout-width="50%"
					width="33.333%"
					display="flex"
				>
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-radius="6px"
						border-width="1px"
						align-items="flex-start"
						justify-content="space-between"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
					/>
					{"        "}
					<Text
						color="rgba(19, 33, 42, 1)"
						sm-font="normal 600 20px/140% Inter, sans-serif"
						font="normal 700 24px/140% --fontFamily-googleInter"
						margin="0px 0px 12px 0px"
						display="inline-block"
					>
						for it department
					</Text>
					<Text
						color="rgba(85, 85, 85, 1)"
						sm-font="normal 400 16px/140% Inter, sans-serif"
						font="--lead"
						margin="0px 0px 30px 0px"
						display="inline-block"
					>
						1.85 Mb
						<br />
					</Text>
					<Box margin="0px 0px 0px 0px" display="flex" align-items="center">
						<Link
							href="https://staffcop.com/documents/StaffCop_for_IT.pdf"
							color="#1465FF"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="flex"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Arrow,%20Download,%20Save,%20Upload%201.svg?v=2020-11-04T02:18:51.068Z" margin="0px 10px 0px 0px" />
							Download
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="33.333%"
					display="flex"
					lg-width="50%"
					md-width="100%"
					nout-width="50%"
				>
					<Override
						slot="StackItemContent"
						border-width="1px"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="space-between"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-radius="6px"
					/>
					{"        "}
					<Text
						font="normal 700 24px/140% --fontFamily-googleInter"
						margin="0px 0px 12px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						sm-font="normal 600 20px/140% Inter, sans-serif"
					>
						Staffcop on mac
					</Text>
					<Text
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						sm-font="normal 400 16px/140% Inter, sans-serif"
						font="--lead"
					>
						1.34 Mb
						<br />
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Link
							href="https://staffcop.com/documents/StaffCop_for_MAC.pdf"
							color="#1465FF"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="flex"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Arrow,%20Download,%20Save,%20Upload%201.svg?v=2020-11-04T02:18:51.068Z" margin="0px 10px 0px 0px" />
							Download
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="33.333%"
					display="flex"
					lg-width="50%"
					md-width="100%"
					nout-width="50%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="space-between"
						border-radius="6px"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-width="1px"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
					/>
					{"        "}
					<Text
						sm-font="normal 600 20px/140% Inter, sans-serif"
						font="normal 700 24px/140% --fontFamily-googleInter"
						margin="0px 0px 12px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
					>
						Techical and commercial offer
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						sm-font="normal 400 16px/140% Inter, sans-serif"
					>
						4.69 Mb
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Link
							href="https://staffcop.com/documents/Technical_and_commercial_offer.pdf"
							color="#1465FF"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="flex"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Arrow,%20Download,%20Save,%20Upload%201.svg?v=2020-11-04T02:18:51.068Z" margin="0px 10px 0px 0px" />
							Download
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="33.333%"
					display="flex"
					lg-width="50%"
					md-width="100%"
					nout-width="50%"
				>
					<Override
						slot="StackItemContent"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-radius="6px"
						padding="42px 37px 42px 37px"
						flex-direction="column"
						justify-content="space-between"
						border-width="1px"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0.05)"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						align-items="flex-start"
					/>
					{"        "}
					<Text
						font="normal 700 24px/140% --fontFamily-googleInter"
						margin="0px 0px 12px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						sm-font="normal 600 20px/140% Inter, sans-serif"
					>
						Use cases
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						sm-font="normal 400 16px/140% Inter, sans-serif"
					>
						4.00 Mb
						<br />
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Link
							display="flex"
							href="https://staffcop.com/documents/Use_cases.pdf"
							color="#1465FF"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Arrow,%20Download,%20Save,%20Upload%201.svg?v=2020-11-04T02:18:51.068Z" margin="0px 10px 0px 0px" />
							Download
						</Link>
					</Box>
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
					Russia, Novosibirsk,
					<br />
					{" "}630090 ul. Kutateladze, 4g,{"\n\n"}
				</Override>
			</Components.Footer>
		</Section>
		<Components.EmbedHTML />
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