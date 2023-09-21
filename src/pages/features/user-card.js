import React from "react";
import theme from "theme";
import { Theme, Text, Icon, Box, Link, Image, Section, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { BsFillCircleFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"features/user-card"} />
		<Helmet>
			<title>
				StaffCop Enterprise
			</title>
			<meta name={"description"} content={"StaffCop provides a unique, fully integrated solution that focuses on detection and response to insider threats through a combination of advanced behavioral analysis and context-rich logging of insider activity.\n\n"} />
			<meta property={"og:title"} content={"StaffCop Enterprise"} />
			<meta property={"og:description"} content={"StaffCop provides a unique, fully integrated solution that focuses on detection and response to insider threats through a combination of advanced behavioral analysis and context-rich logging of insider activity.\n\n"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/gfjkjkljkl.nbmbv.png?v=2020-11-04T15:35:13.162Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/favicon-32x32.png?v=2023-08-25T09:35:09.985Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/android-chrome-512x512.png?v=2023-08-23T12:52:41.903Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/android-chrome-512x512.png?v=2023-08-23T12:52:41.903Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/android-chrome-512x512.png?v=2023-08-23T12:52:41.903Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/android-chrome-512x512.png?v=2023-08-23T12:52:41.903Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/android-chrome-512x512.png?v=2023-08-25T04:37:47.288Z"} />
			<meta name={"msapplication-TileColor"} content={"#1465FF"} />
		</Helmet>
		<Components.Header />
		<Section
			md-padding="100px 0 0px 0"
			sm-padding="80px 0 0px 0"
			padding="180px 0 120px 0"
			background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)"
			lg-padding="100px 0 30px 0"
		>
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem
					width="50%"
					display="flex"
					sm-align-items="center"
					sm-width="100%"
					lg-width="100%"
				>
					<Override
						slot="StackItemContent"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
						lg-align-items="center"
						padding="0px 10px 0px 0px"
						flex-direction="column"
					/>
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 16px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
						lg-text-align="center"
					>
						User card
						<br />
						{"\n\n\n\n"}
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Icon
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
						/>
						<Text font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" color="#555">
							Web-sites visited by the user
							<br />
							{"\n\n\n\n"}
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
						<Text margin="9px 0px 9px 18px" color="#555" font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter">
							Applications in which the user works{"\n\n"}
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
						<Text margin="9px 0px 9px 18px" color="#555" font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter">
							Duration of calls in softphones and Skype
							<br />
							{"\n\n\n\n"}
						</Text>
					</Box>
					{"    "}
					<Link
						border-style="solid"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						sm-font="600 16px/22px --fontFamily-googleInter"
						sm-padding="16px 20px 16px 20px"
						md-padding="16px 26px 16px 26px"
						font="600 18px/22px --fontFamily-googleInter"
						text-decoration-line="initial"
						background="--color-primary"
						position="relative"
						margin="36px 0px 0px 0px"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						padding="16px 38px 16px 38px"
						box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						border-radius="40px"
						border-width="1px"
						hover-background="#409EEB"
						href="/demo-request"
						z-index="2"
						color="#ffffff"
					>
						Request demo
					</Link>
				</StackItem>
				{"    "}
				<StackItem sm-width="100%" lg-width="100%" width="50%" display="flex">
					<Override slot="StackItemContent" position="relative" lg-align-items="center" lg-justify-content="center" />
					{"        "}
					<Image
						left="auto"
						lg-top="0px"
						sm-left="auto"
						position="absolute"
						bottom="auto"
						lg-width="500px"
						lg-bottom="auto"
						md-bottom="auto"
						width="803px"
						top="-60px"
						lg-right="auto"
						md-top="0px"
						sm-right="auto"
						sm-top="0px"
						md-width="400px"
						right="-115px"
						lg-position="relative"
						md-right="auto"
						sm-position="relative"
						lg-left="auto"
						md-left="auto"
						sm-bottom="auto"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15:07:09.010Z"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem display="flex" sm-width="100%" nout-width="100%" width="80%">
					<Override slot="StackItemContent" flex-direction="column" />
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
						<Strong>
							Basic account information
						</Strong>
						{"\n\n\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem sm-width="100%" md-width="100%" width="50%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex" margin="0px 0px 18 0px">
						<Text color="#555" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter">
							Basic account information includes user name, domain name, and the date of last report received from this account.
							<br />
							{"\n\n\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/121.png?v=2021-02-03T07:24:17.309Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/121.png?v=2021-02-03T07%3A24%3A17.309Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/121.png?v=2021-02-03T07%3A24%3A17.309Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/121.png?v=2021-02-03T07%3A24%3A17.309Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/121.png?v=2021-02-03T07%3A24%3A17.309Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/121.png?v=2021-02-03T07%3A24%3A17.309Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/121.png?v=2021-02-03T07%3A24%3A17.309Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/121.png?v=2021-02-03T07%3A24%3A17.309Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					</Box>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="24px 0 24px 0" background="#FFFFFF">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
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
						<Strong
							hyphens="manual"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
						>
							<Strong>
								Web-sites visited by the user
							</Strong>
							{"\n\n"}
						</Strong>
						{"\n\n\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem md-width="100%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex" margin="0px 0px 18 0px">
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							User card contains a pie-chart on all the web-sites visited by a user with percentage and total time for each web-site. If we click on the web-site name we will get a list of visits with detailed information including time, duration and URL.{" "}
							<br />
							{"\n\n\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/122.png?v=2021-02-03T07:25:55.438Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/122.png?v=2021-02-03T07%3A25%3A55.438Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/122.png?v=2021-02-03T07%3A25%3A55.438Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/122.png?v=2021-02-03T07%3A25%3A55.438Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/122.png?v=2021-02-03T07%3A25%3A55.438Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/122.png?v=2021-02-03T07%3A25%3A55.438Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/122.png?v=2021-02-03T07%3A25%3A55.438Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/122.png?v=2021-02-03T07%3A25%3A55.438Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					</Box>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
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
						<Strong
							hyphens="manual"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
						>
							<Strong
								hyphens="manual"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
							>
								<Strong>
									Applications in which the user works
								</Strong>
								<br />
								{"\n\n"}
							</Strong>
							{"\n\n"}
						</Strong>
						{"\n\n\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex" margin="0px 0px 18 0px">
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							User card contains a pie-chart on all the applications in which a user worked with percentage and total time for each application. If we click on the application we will get a list of visits with detailed information including time, duration and URL.{"\n\n"}
							<br />
							{"\n\n\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/123.png?v=2021-02-03T07:30:19.631Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/123.png?v=2021-02-03T07%3A30%3A19.631Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/123.png?v=2021-02-03T07%3A30%3A19.631Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/123.png?v=2021-02-03T07%3A30%3A19.631Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/123.png?v=2021-02-03T07%3A30%3A19.631Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/123.png?v=2021-02-03T07%3A30%3A19.631Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/123.png?v=2021-02-03T07%3A30%3A19.631Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/123.png?v=2021-02-03T07%3A30%3A19.631Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					</Box>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem sm-width="100%" nout-width="100%" width="80%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Text
						font="normal 700 32px/140% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
					>
						<Strong
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							overflow-wrap="normal"
							word-break="normal"
						>
							<Strong
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								overflow-wrap="normal"
							>
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									{"\n"}
									<Strong>
										Computers and accounts used by the user
									</Strong>
									{"\n\n"}
								</Strong>
								<br />
								{"\n\n"}
							</Strong>
							{"\n\n"}
						</Strong>
						{"\n\n\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex" margin="0px 0px 18 0px">
						<Text color="#555" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter">
							User card contains information on computers where the user logged in with his account, e-mail addresses and skype accounts that were used.
							<br />
							{"\n\n\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/125.png?v=2021-02-03T07:36:09.533Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/125.png?v=2021-02-03T07%3A36%3A09.533Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/125.png?v=2021-02-03T07%3A36%3A09.533Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/125.png?v=2021-02-03T07%3A36%3A09.533Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/125.png?v=2021-02-03T07%3A36%3A09.533Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/125.png?v=2021-02-03T07%3A36%3A09.533Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/125.png?v=2021-02-03T07%3A36%3A09.533Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/125.png?v=2021-02-03T07%3A36%3A09.533Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					</Box>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" align-items="center" max-width="1200px" />
			<Stack gap="--cmp-stack-gap-default" margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
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
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							<Strong
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								overflow-wrap="normal"
								word-break="normal"
							>
								<Strong
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
								>
									{"\n"}
									<Strong
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										overflow-wrap="normal"
									>
										{"\n"}
										<Strong>
											Files sent/received by the user
										</Strong>
										{"\n\n"}
									</Strong>
									{"\n\n"}
								</Strong>
								<br />
								{"\n\n"}
							</Strong>
							{"\n\n"}
						</Strong>
						{"\n\n\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex" margin="0px 0px 18 0px">
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							The user card has the list of all the files that were sent or received by the user in e-mail or messengers, recieved from USB drives or uploaded to cloud storages. Files are shadow-copied so you could open them for further investigation.
							<br />
							{"\n\n\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/126.png?v=2021-02-03T07:37:49.727Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/126.png?v=2021-02-03T07%3A37%3A49.727Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/126.png?v=2021-02-03T07%3A37%3A49.727Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/126.png?v=2021-02-03T07%3A37%3A49.727Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/126.png?v=2021-02-03T07%3A37%3A49.727Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/126.png?v=2021-02-03T07%3A37%3A49.727Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/126.png?v=2021-02-03T07%3A37%3A49.727Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/126.png?v=2021-02-03T07%3A37%3A49.727Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					</Box>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" align-items="center" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem nout-width="100%" width="80%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
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
						<Strong
							text-overflow="clip"
							hyphens="manual"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
						>
							<Strong
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
							>
								<Strong
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
								>
									{"\n"}
									<Strong
										hyphens="manual"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
									>
										{"\n"}
										<Strong
											overflow-wrap="normal"
											word-break="normal"
											white-space="normal"
											text-indent="0"
											text-overflow="clip"
											hyphens="manual"
										>
											{"\n"}
											<Strong>
												Search queries performed by the user
											</Strong>
											{"\n\n"}
										</Strong>
										{"\n\n"}
									</Strong>
									{"\n\n"}
								</Strong>
								<br />
								{"\n\n"}
							</Strong>
							{"\n\n"}
						</Strong>
						{"\n\n\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex" margin="0px 0px 18 0px">
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							User card shows the list of search queries performed by the user. It contains the search phrase and the URL.
							<br />
							{"\n\n\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/127.png?v=2021-02-03T07:40:50.908Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/127.png?v=2021-02-03T07%3A40%3A50.908Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/127.png?v=2021-02-03T07%3A40%3A50.908Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/127.png?v=2021-02-03T07%3A40%3A50.908Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/127.png?v=2021-02-03T07%3A40%3A50.908Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/127.png?v=2021-02-03T07%3A40%3A50.908Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/127.png?v=2021-02-03T07%3A40%3A50.908Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/127.png?v=2021-02-03T07%3A40%3A50.908Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					</Box>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem nout-width="100%" width="80%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
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
						<Strong
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							overflow-wrap="normal"
							word-break="normal"
						>
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								<Strong
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									overflow-wrap="normal"
								>
									{"\n"}
									<Strong
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										{"\n"}
										<Strong
											hyphens="manual"
											overflow-wrap="normal"
											word-break="normal"
											white-space="normal"
											text-indent="0"
											text-overflow="clip"
										>
											{"\n"}
											<Strong
												overflow-wrap="normal"
												word-break="normal"
												white-space="normal"
												text-indent="0"
												text-overflow="clip"
												hyphens="manual"
											>
												{"\n"}
												<Strong>
													Graph of communications
												</Strong>
												{"\n\n"}
											</Strong>
											{"\n\n"}
										</Strong>
										{"\n\n"}
									</Strong>
									{"\n\n"}
								</Strong>
								<br />
								{"\n\n"}
							</Strong>
							{"\n\n"}
						</Strong>
						{"\n\n\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex" margin="0px 0px 18 0px">
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							User card contains the graph of communications that is used to get a visual overview of the user's communications with other users. If you click an arrowm you will see the list of messages.
							<br />
							{"\n\n\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/128.png?v=2021-02-03T07:43:44.961Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/128.png?v=2021-02-03T07%3A43%3A44.961Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/128.png?v=2021-02-03T07%3A43%3A44.961Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/128.png?v=2021-02-03T07%3A43%3A44.961Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/128.png?v=2021-02-03T07%3A43%3A44.961Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/128.png?v=2021-02-03T07%3A43%3A44.961Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/128.png?v=2021-02-03T07%3A43%3A44.961Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/128.png?v=2021-02-03T07%3A43%3A44.961Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					</Box>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="0px 0 0px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -346px/3610px no-repeat">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Components.Form />
			<Components.Footer>
				<Override slot="text">
					630090 ul. Kutateladze, 4g,
					<br />
					Novosibirsk, Russia.{"\n\n"}
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