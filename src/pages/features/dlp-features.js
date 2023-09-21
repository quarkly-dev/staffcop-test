import React from "react";
import theme from "theme";
import { Theme, Strong, Text, Icon, Box, Link, Image, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { BsFillCircleFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"features/dlp-features"} />
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
			background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)"
			lg-padding="100px 0 30px 0"
			md-padding="100px 0 0px 0"
			sm-padding="80px 0 0px 0"
			padding="180px 0 140px 0"
		>
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem
					lg-width="100%"
					width="50%"
					display="flex"
					sm-align-items="center"
					sm-width="100%"
				>
					<Override
						slot="StackItemContent"
						padding="0px 10px 0px 0px"
						flex-direction="column"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
						lg-align-items="center"
					/>
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 16px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
						lg-text-align="center"
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
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								overflow-wrap="normal"
								word-break="normal"
							>
								DLP features
								<br />
								{"\n\n"}
							</Strong>
						</Strong>
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Icon
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							category="bs"
						/>
						<Text sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" color="#555" font="400 18px/160% --fontFamily-googleInter">
							Block USB and CD drives
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
						<Text color="#555" font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px">
							Block applications
							<br />
							{"\n\n"}
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
							Block web-sites
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
						<Text sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" color="#555" font="400 18px/160% --fontFamily-googleInter">
							Block connection to Wi-Fi networks
							<br />
							{"\n\n"}
						</Text>
					</Box>
					<Box align-items="center" display="flex">
						<Icon
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							category="bs"
							icon={BsFillCircleFill}
						/>
						<Text margin="9px 0px 9px 18px" color="#555" font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter">
							Block PC
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"    "}
					<Link
						md-padding="16px 26px 16px 26px"
						z-index="2"
						border-radius="40px"
						border-style="solid"
						hover-background="#409EEB"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						sm-font="600 16px/22px --fontFamily-googleInter"
						sm-padding="16px 20px 16px 20px"
						href="/demo-request"
						color="#ffffff"
						padding="16px 38px 16px 38px"
						box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						background="--color-primary"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						position="relative"
						font="600 18px/22px --fontFamily-googleInter"
						border-width="1px"
						text-decoration-line="initial"
						margin="36px 0px 0px 0px"
					>
						Request demo
					</Link>
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%" lg-width="100%">
					<Override slot="StackItemContent" position="relative" lg-align-items="center" lg-justify-content="center" />
					{"        "}
					<Image
						lg-left="auto"
						md-bottom="auto"
						md-width="400px"
						right="-115px"
						lg-width="500px"
						lg-position="relative"
						lg-right="auto"
						lg-bottom="auto"
						width="803px"
						left="auto"
						lg-top="0px"
						md-top="0px"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15:07:09.010Z"
						top="-60px"
						md-right="auto"
						md-left="auto"
						position="absolute"
						bottom="auto"
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
						sm-font="normal 700 24px/30px Inter, sans-serif"
						font="normal 700 32px/140% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
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
								text-overflow="clip"
								hyphens="manual"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
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
									<Strong>
										Block USB devices by IDs or classes
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
					<Text
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
					>
						StaffCop provides flexible options for blocking USB devices on the basis of black and white lists. If you need to block particular devices, add their IDs to the "Block" list. All the other devices can be accessed. If you need to use only particular USB devices, add their IDs to the "Allow" list. ALL other devices will be blocked. The same principle can be applied for devices classes, for example, we can forbid usage of all external video/audio devices or to allow usage only of printers, keyboards and mouses.
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/113.png?v=2021-02-03T09:55:34.370Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/113.png?v=2021-02-03T09%3A55%3A34.370Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/113.png?v=2021-02-03T09%3A55%3A34.370Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/113.png?v=2021-02-03T09%3A55%3A34.370Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/113.png?v=2021-02-03T09%3A55%3A34.370Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/113.png?v=2021-02-03T09%3A55%3A34.370Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/113.png?v=2021-02-03T09%3A55%3A34.370Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/113.png?v=2021-02-03T09%3A55%3A34.370Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack width="100%" gap="--cmp-stack-gap-default" margin="0px 0px 0px 0px">
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
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
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
											Read-only mode for USB devices
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
					<Text
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
					>
						Besides full blocking of USB devices, you can allow usage them in the Read-only mode. In this case, users will be able to open files on USB drives, but will not be able to change anything there or write any information.
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/114.png?v=2021-02-03T09:58:04.949Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/114.png?v=2021-02-03T09%3A58%3A04.949Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/114.png?v=2021-02-03T09%3A58%3A04.949Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/114.png?v=2021-02-03T09%3A58%3A04.949Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/114.png?v=2021-02-03T09%3A58%3A04.949Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/114.png?v=2021-02-03T09%3A58%3A04.949Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/114.png?v=2021-02-03T09%3A58%3A04.949Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/114.png?v=2021-02-03T09%3A58%3A04.949Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
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
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
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
										<Strong
											text-overflow="clip"
											hyphens="manual"
											overflow-wrap="normal"
											word-break="normal"
											white-space="normal"
											text-indent="0"
										>
											{"\n"}
											<Strong>
												Block CD-drives
											</Strong>
											{"\n\n"}
										</Strong>
									</Strong>
								</Strong>
								<br />
								{"\n\n"}
							</Strong>
							{"\n\n"}
						</Strong>
						{"\n\n\n\n"}
					</Text>
					<Text
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
					>
						StaffCop can block usage of all CD-drives
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/115.png?v=2021-02-03T09:23:39.033Z" width="448px" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/115.png?v=2021-02-03T09%3A23%3A39.033Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/115.png?v=2021-02-03T09%3A23%3A39.033Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/115.png?v=2021-02-03T09%3A23%3A39.033Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/115.png?v=2021-02-03T09%3A23%3A39.033Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/115.png?v=2021-02-03T09%3A23%3A39.033Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/115.png?v=2021-02-03T09%3A23%3A39.033Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/115.png?v=2021-02-03T09%3A23%3A39.033Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
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
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
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
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
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
														Block prohibited applications
													</Strong>
													{"\n\n"}
												</Strong>
												{"\n\n"}
											</Strong>
											{"\n\n"}
										</Strong>
									</Strong>
								</Strong>
								<br />
								{"\n\n"}
							</Strong>
							{"\n\n"}
						</Strong>
						{"\n\n\n\n"}
					</Text>
					<Text
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
					>
						StaffCop can not only track application activity but also prevent specified applications from launching. For example, corporate policy forbids usage of torrent clients on workstations. We can add uTorrent to the black list of applications. In this case, if a user tries clicking the shortcut or the .exe file itself nothing will happen. On the other hand, we can specify a list of applications that can be accessed, while ALL that are not in the white list will not work. For example, we add Word, Excel and Thunderbird to the list - the user will be able to launch ONLY them.
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem nout-width="100%" width="80%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/78.png?v=2021-02-03T10:05:28.377Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/78.png?v=2021-02-03T10%3A05%3A28.377Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/78.png?v=2021-02-03T10%3A05%3A28.377Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/78.png?v=2021-02-03T10%3A05%3A28.377Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/78.png?v=2021-02-03T10%3A05%3A28.377Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/78.png?v=2021-02-03T10%3A05%3A28.377Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/78.png?v=2021-02-03T10%3A05%3A28.377Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/78.png?v=2021-02-03T10%3A05%3A28.377Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack gap="--cmp-stack-gap-default" margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
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
												<Strong
													overflow-wrap="normal"
													word-break="normal"
													white-space="normal"
													text-indent="0"
													text-overflow="clip"
													hyphens="manual"
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
															overflow-wrap="normal"
															word-break="normal"
															white-space="normal"
															text-indent="0"
															text-overflow="clip"
															hyphens="manual"
														>
															<Strong>
																Block particular websites
															</Strong>
														</Strong>
													</Strong>
												</Strong>
											</Strong>
										</Strong>
									</Strong>
								</Strong>
								<br />
								{"\n\n"}
							</Strong>
							{"\n\n"}
						</Strong>
						{"\n\n\n\n"}
					</Text>
					<Text
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
					>
						Black list. Add domains or URLs of web-sites that will be blocked. In this example we blocked aceess to Facebook, Pornhub and Casino-online. All other web-sites can still be accessed.
						<br />
						{"\n\n"}
					</Text>
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/31.png?v=2021-02-03T10:16:46.865Z" width="571px" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/31.png?v=2021-02-03T10%3A16%3A46.865Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/31.png?v=2021-02-03T10%3A16%3A46.865Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/31.png?v=2021-02-03T10%3A16%3A46.865Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/31.png?v=2021-02-03T10%3A16%3A46.865Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/31.png?v=2021-02-03T10%3A16%3A46.865Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/31.png?v=2021-02-03T10%3A16%3A46.865Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/31.png?v=2021-02-03T10%3A16%3A46.865Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					{"    "}
				</StackItem>
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
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									overflow-wrap="normal"
									word-break="normal"
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
											text-overflow="clip"
											hyphens="manual"
											overflow-wrap="normal"
											word-break="normal"
											white-space="normal"
											text-indent="0"
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
																<Strong>
																	Allow only particular websites
																</Strong>
															</Strong>
														</Strong>
													</Strong>
												</Strong>
											</Strong>
										</Strong>
									</Strong>
								</Strong>
								<br />
								{"\n\n"}
							</Strong>
							{"\n\n"}
						</Strong>
						{"\n\n\n\n"}
					</Text>
					<Text
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
					>
						White list. Add domains or URLs of web-sites that will be allowed. In this example, we allowed access to StaffCop.com, Bitrix24 and Capterra. ALL other web-sites will be blocked. White lists are useful in case corporate policy allows working ONLY with a narrow range of web-sites.
						<br />
						{"\n\n"}
					</Text>
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/32.png?v=2021-02-03T10:20:39.473Z" width="575px" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/32.png?v=2021-02-03T10%3A20%3A39.473Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/32.png?v=2021-02-03T10%3A20%3A39.473Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/32.png?v=2021-02-03T10%3A20%3A39.473Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/32.png?v=2021-02-03T10%3A20%3A39.473Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/32.png?v=2021-02-03T10%3A20%3A39.473Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/32.png?v=2021-02-03T10%3A20%3A39.473Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/32.png?v=2021-02-03T10%3A20%3A39.473Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					{"    "}
				</StackItem>
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Text
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
						font="normal 700 32px/140% --fontFamily-googleInter"
					>
						<Strong>
							Block Wi-Fi connections
						</Strong>
						{"\n\n"}
					</Text>
					<Text
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
					>
						StaffCop will show you the Wi-Fi connection with SSID (network name). Wi-Fi networks can be blocked on the basis on white and black lists. It's useful in case employees are allowed to use only corporate networks due to the security issues.
						<br />
						{"\n\n"}
					</Text>
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/59.png?v=2021-02-03T10:25:14.808Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/59.png?v=2021-02-03T10%3A25%3A14.808Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/59.png?v=2021-02-03T10%3A25%3A14.808Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/59.png?v=2021-02-03T10%3A25%3A14.808Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/59.png?v=2021-02-03T10%3A25%3A14.808Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/59.png?v=2021-02-03T10%3A25%3A14.808Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/59.png?v=2021-02-03T10%3A25%3A14.808Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/59.png?v=2021-02-03T10%3A25%3A14.808Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					{"    "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" nout-width="100%" width="80%">
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
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							overflow-wrap="normal"
						>
							{"\n"}
							<Strong>
								Block PC
							</Strong>
							{"\n\n"}
						</Strong>
						{"\n\n"}
					</Text>
					<Text
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
						font="400 18px/160% --fontFamily-googleInter"
					>
						With StaffCop you can block PC with an agent installed. It means that the user gets logged out and can’t log in, as the system prevents this automatically. All the unsaved data can be lost.
						<br />
						{"\n\n"}
					</Text>
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/132.png?v=2021-02-03T10:28:27.749Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/132.png?v=2021-02-03T10%3A28%3A27.749Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/132.png?v=2021-02-03T10%3A28%3A27.749Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/132.png?v=2021-02-03T10%3A28%3A27.749Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/132.png?v=2021-02-03T10%3A28%3A27.749Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/132.png?v=2021-02-03T10%3A28%3A27.749Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/132.png?v=2021-02-03T10%3A28%3A27.749Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/132.png?v=2021-02-03T10%3A28%3A27.749Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
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