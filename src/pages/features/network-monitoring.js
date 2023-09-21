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
		<GlobalQuarklyPageStyles pageUrl={"features/network-monitoring"} />
		<Helmet>
			<title>
				App usage/application  monitoring 
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
			padding="180px 0 140px 0"
			background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)"
			lg-padding="100px 0 30px 0"
			md-padding="100px 0 0px 0"
			sm-padding="80px 0 0px 0"
		>
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem
					display="flex"
					sm-align-items="center"
					sm-width="100%"
					lg-width="100%"
					width="50%"
				>
					<Override
						slot="StackItemContent"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
						lg-align-items="center"
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
						Network activity monitoring
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Text margin="9px 0px 9px 18px" color="#555" font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter">
							Usage of protocols (https, http)
							<br />
							{"\n\n"}
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
							Connections to certain IP addresses{"\n\n"}
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
						<Text sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" color="#555" font="400 18px/160% --fontFamily-googleInter">
							FTP connections
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"    "}
					<Link
						z-index="2"
						font="600 18px/22px --fontFamily-googleInter"
						sm-padding="16px 20px 16px 20px"
						padding="16px 38px 16px 38px"
						box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						border-radius="40px"
						background="--color-primary"
						border-width="1px"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						color="#ffffff"
						text-decoration-line="initial"
						border-style="solid"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						sm-font="600 16px/22px --fontFamily-googleInter"
						md-padding="16px 26px 16px 26px"
						href="/demo-request"
						position="relative"
						margin="36px 0px 0px 0px"
						hover-background="#409EEB"
					>
						Request demo
					</Link>
				</StackItem>
				{"    "}
				<StackItem sm-width="100%" lg-width="100%" width="50%" display="flex">
					<Override slot="StackItemContent" position="relative" lg-align-items="center" lg-justify-content="center" />
					{"        "}
					<Image
						lg-width="500px"
						sm-position="relative"
						width="803px"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15:07:09.010Z"
						bottom="auto"
						lg-top="-35px"
						lg-right="-50px"
						md-top="0px"
						md-right="-70px"
						sm-right="auto"
						position="absolute"
						right="-115px"
						left="auto"
						md-width="400px"
						top="-50px"
						sm-top="0px"
						lg-position="static"
						sm-bottom="auto"
						sm-left="auto"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section padding="24px 0 24px 0" background="#FFFFFF">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
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
						Application Monitoring{"\n\n"}
					</Text>
					<Text
						letter-spacing="-1%"
						sm-text-align="center"
						sm-margin="30px 0px 0px 0px"
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 20px 0px"
						display="inline-block"
						color="#555"
					>
						StaffCop can get info on network connections, with such fitering criteria as IP and ports. This ability can be useful for system administrators in case corporate policy has a specification for using certain ports. FTP connections are tracked with the ability to see the sent/recieved files. Activity in cloud storages (e.g. Google Drive) is monitored.
						<br />
						{"\n\n"}
					</Text>
					{"    "}
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
						font="normal 700 32px/140% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
					>
						<Strong>
							Usage of ports
						</Strong>
						{"\n\n"}
					</Text>
					<Text
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 20px 0px"
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
						sm-margin="30px 0px 0px 0px"
					>
						For example, we need to understand which ports are used by which applications and check if all of them are allowed by the corporate policy. The piechart presented on screenshot below will show us the share of each applications in total amount of usage of ports.
						<br />
						{"\n\n"}
					</Text>
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/51.png?v=2021-02-02T11:41:38.831Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/51.png?v=2021-02-02T11%3A41%3A38.831Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/51.png?v=2021-02-02T11%3A41%3A38.831Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/51.png?v=2021-02-02T11%3A41%3A38.831Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/51.png?v=2021-02-02T11%3A41%3A38.831Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/51.png?v=2021-02-02T11%3A41%3A38.831Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/51.png?v=2021-02-02T11%3A41%3A38.831Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/51.png?v=2021-02-02T11%3A41%3A38.831Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					{"    "}
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
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
						font="normal 700 32px/140% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
					>
						<Strong
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							overflow-wrap="normal"
							word-break="normal"
						>
							{"\n"}
							<Strong>
								Usage of protocols
							</Strong>
							{"\n\n"}
						</Strong>
						{"\n\n"}
					</Text>
					<Text
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
						sm-margin="30px 0px 0px 0px"
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 20px 0px"
						display="inline-block"
					>
						StaffCop tracks traffic sent/recieved throught encrypted https connections. We can see what websites were visited through encrypted https protocol, and if any of them seems suspecious we can see all the web visiting details by clicking the corresponding item of the pie chart.
						<br />
						{"\n\n"}
					</Text>
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/52.png?v=2021-02-02T11:44:46.639Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/52.png?v=2021-02-02T11%3A44%3A46.639Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/52.png?v=2021-02-02T11%3A44%3A46.639Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/52.png?v=2021-02-02T11%3A44%3A46.639Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/52.png?v=2021-02-02T11%3A44%3A46.639Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/52.png?v=2021-02-02T11%3A44%3A46.639Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/52.png?v=2021-02-02T11%3A44%3A46.639Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/52.png?v=2021-02-02T11%3A44%3A46.639Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					{"    "}
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
								<Strong>
									FTP connections
								</Strong>
								{"\n\n"}
							</Strong>
							{"\n\n"}
						</Strong>
						{"\n\n"}
					</Text>
					<Text
						margin="30px 0px 20px 0px"
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
						sm-margin="30px 0px 0px 0px"
						font="400 18px/160% --fontFamily-googleInter"
					>
						With StaffCop you can track FTP connections including info on the IP address, login/pasword pair and the applications used for connection. In case shadow-copying option is enabled StaffCop allows to see all the files sent/receive through FTP.
						<br />
						{"\n\n"}
					</Text>
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/53.png?v=2021-02-02T11:51:26.604Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/53.png?v=2021-02-02T11%3A51%3A26.604Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/53.png?v=2021-02-02T11%3A51%3A26.604Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/53.png?v=2021-02-02T11%3A51%3A26.604Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/53.png?v=2021-02-02T11%3A51%3A26.604Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/53.png?v=2021-02-02T11%3A51%3A26.604Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/53.png?v=2021-02-02T11%3A51%3A26.604Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/53.png?v=2021-02-02T11%3A51%3A26.604Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem display="flex" sm-width="100%" nout-width="100%" width="80%">
					<Override slot="StackItemContent" flex-direction="column" />
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
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								overflow-wrap="normal"
							>
								{"\n"}
								<Strong
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
								>
									{"\n"}
									<Strong>
										Cloud storages
									</Strong>
									{"\n\n"}
								</Strong>
								{"\n\n"}
							</Strong>
							{"\n\n"}
						</Strong>
						{"\n\n"}
					</Text>
					<Text
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
						sm-margin="30px 0px 0px 0px"
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 20px 0px"
					>
						With StaffCop you can track connections to cloud storages (e.g Google Drive) as well as to your corporate network discs. If the shadow-copying option is enabled you will be able to see the files uploaded to cloud storages.
						<br />
						{"\n\n"}
					</Text>
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/56.png?v=2021-02-02T11:54:34.018Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/56.png?v=2021-02-02T11%3A54%3A34.018Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/56.png?v=2021-02-02T11%3A54%3A34.018Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/56.png?v=2021-02-02T11%3A54%3A34.018Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/56.png?v=2021-02-02T11%3A54%3A34.018Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/56.png?v=2021-02-02T11%3A54%3A34.018Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/56.png?v=2021-02-02T11%3A54%3A34.018Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/56.png?v=2021-02-02T11%3A54%3A34.018Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack width="100%" gap="--cmp-stack-gap-default" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem display="flex" sm-width="100%" nout-width="100%" width="80%">
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
							hyphens="manual"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
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
									<Strong
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										overflow-wrap="normal"
										word-break="normal"
									>
										{"\n"}
										<Strong>
											Wi-Fi connections
										</Strong>
										{"\n\n"}
									</Strong>
									{"\n\n"}
								</Strong>
								{"\n\n"}
							</Strong>
							{"\n\n"}
						</Strong>
						{"\n\n"}
					</Text>
					<Text
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 20px 0px"
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
						sm-margin="30px 0px 0px 0px"
					>
						StaffCop will show you the Wi-Fi connection with SSID (network name). Wi-Fi networks can be blocked on the basis on white and black lists. It's useful in case employees are allowed to use only corporate networks due to the security issues.
						<br />
						{"\n\n"}
					</Text>
					<Image
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/58.png?v=2021-02-02T11:59:35.482Z"
						width="322px"
						height="210px"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/58.png?v=2021-02-02T11%3A59%3A35.482Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/58.png?v=2021-02-02T11%3A59%3A35.482Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/58.png?v=2021-02-02T11%3A59%3A35.482Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/58.png?v=2021-02-02T11%3A59%3A35.482Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/58.png?v=2021-02-02T11%3A59%3A35.482Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/58.png?v=2021-02-02T11%3A59%3A35.482Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/58.png?v=2021-02-02T11%3A59%3A35.482Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/59.png?v=2021-02-02T12:01:41.026Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/59.png?v=2021-02-02T12%3A01%3A41.026Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/59.png?v=2021-02-02T12%3A01%3A41.026Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/59.png?v=2021-02-02T12%3A01%3A41.026Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/59.png?v=2021-02-02T12%3A01%3A41.026Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/59.png?v=2021-02-02T12%3A01%3A41.026Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/59.png?v=2021-02-02T12%3A01%3A41.026Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/59.png?v=2021-02-02T12%3A01%3A41.026Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
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