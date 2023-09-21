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
		<GlobalQuarklyPageStyles pageUrl={"features/employee-internet-monitoring"} />
		<Helmet>
			<title>
				Employee Internet Monitoring
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
			padding="180px 0 120px 0"
			background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)"
			lg-padding="100px 0 30px 0"
			md-padding="100px 0 0px 0"
			sm-padding="80px 0 0px 0"
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
						Employee Internet Monitoring{"\n\n"}
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Icon
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
						/>
						<Text margin="9px 0px 9px 18px" color="#555" font="400 18px/22px --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter">
							Block or allow access to certain websites{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" align-items="center">
						<Icon
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							category="bs"
						/>
						<Text margin="9px 0px 9px 18px" color="#555" font="400 18px/22px --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter">
							Monitor all web activity, including file uploads
						</Text>
					</Box>
					<Box display="flex" align-items="center">
						<Icon
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
						/>
						<Text margin="9px 0px 9px 18px" color="#555" font="400 18px/22px --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter">
							Allows companies to keep track of employee internet usage across departments
						</Text>
					</Box>
					{"    "}
					<Link
						md-padding="16px 26px 16px 26px"
						href="/demo-request"
						background="--color-primary"
						border-style="solid"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						margin="36px 0px 0px 0px"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						color="#ffffff"
						text-decoration-line="initial"
						padding="16px 38px 16px 38px"
						hover-background="#409EEB"
						sm-font="600 16px/22px --fontFamily-googleInter"
						sm-padding="16px 20px 16px 20px"
						z-index="2"
						font="600 18px/22px --fontFamily-googleInter"
						border-radius="40px"
						position="relative"
						box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						border-width="1px"
					>
						Request demo
					</Link>
				</StackItem>
				{"    "}
				<StackItem display="flex" sm-width="100%" lg-width="100%" width="50%">
					<Override slot="StackItemContent" position="relative" lg-align-items="center" lg-justify-content="center" />
					{"        "}
					<Image
						lg-top="-35px"
						lg-right="-50px"
						md-right="-70px"
						sm-position="relative"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15:07:09.010Z"
						position="absolute"
						bottom="auto"
						lg-width="500px"
						sm-right="auto"
						md-width="400px"
						lg-position="static"
						sm-bottom="auto"
						sm-top="0px"
						width="803px"
						right="-115px"
						left="auto"
						sm-left="auto"
						top="-65px"
						md-top="0px"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" align-items="center" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem display="flex" sm-width="100%" nout-width="100%" width="100%">
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
						<Strong>
							Scheduled reports on web-sites activity
						</Strong>
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex">
						<Text font="400 18px/22px --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px">
							You can get a scheduled report on all web-sites visited for a day (week, month) to your e-mail. Each event from the list will contain details including duration of the visit and URL. If we consider enterprise-size usage, we can set separate reports for the head of each department containing the list of web-site activities only of the employees of the corresponding department.
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
			<Image
				src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/43.png?v=2021-02-01T06:47:43.653Z"
				width="100%"
				padding="0px 24px 0px 24px"
				srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/43.png?v=2021-02-01T06%3A47%3A43.653Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/43.png?v=2021-02-01T06%3A47%3A43.653Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/43.png?v=2021-02-01T06%3A47%3A43.653Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/43.png?v=2021-02-01T06%3A47%3A43.653Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/43.png?v=2021-02-01T06%3A47%3A43.653Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/43.png?v=2021-02-01T06%3A47%3A43.653Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/43.png?v=2021-02-01T06%3A47%3A43.653Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
			/>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="100%" display="flex" sm-width="100%" nout-width="100%">
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
							Take screenshots for specific web-sites
						</Strong>
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex">
						<Text font="400 18px/22px --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px">
							You can get aa list of screenshots related to a web-sites visiting to see the exact picture of employee activity there, in case URLs don't suffice (e.g. the webpages have been deleted). Moreover, we can get a specific web-site (or a group of websites on special monitoring) to take screenshot with a higher frequency when a user has it open. This can be useful in case you have some corporate resourece with snsitive data (e.g. customers database).
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
			<Image
				src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/44.png?v=2021-02-01T06:52:34.974Z"
				width="100%"
				padding="0px 16px 0px 16px"
				srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/44.png?v=2021-02-01T06%3A52%3A34.974Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/44.png?v=2021-02-01T06%3A52%3A34.974Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/44.png?v=2021-02-01T06%3A52%3A34.974Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/44.png?v=2021-02-01T06%3A52%3A34.974Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/44.png?v=2021-02-01T06%3A52%3A34.974Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/44.png?v=2021-02-01T06%3A52%3A34.974Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/44.png?v=2021-02-01T06%3A52%3A34.974Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
			/>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem sm-width="100%" nout-width="100%" width="100%" display="flex">
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
						Block access to websites
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex" margin="0px 0px 18 0px">
						<Text color="#555" font="400 18px/22px --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px">
							<Strong>
								Block particular websites
							</Strong>
							<br />
							{"\n\n"}
						</Text>
					</Box>
					<Box margin="0px 0px 18 0px" display="flex">
						<Text margin="9px 0px 9px 18px" font="400 18px/22px --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							Black list. Add domains or URLs of web-sites that will be blocked. In this example we blocked aceess to Facebook, Pornhub and Casino-online. All other web-sites can still be accessed.
							<br />
							{"\n\n"}
						</Text>
					</Box>
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/31.png?v=2021-02-01T06:59:25.570Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/31.png?v=2021-02-01T06%3A59%3A25.570Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/31.png?v=2021-02-01T06%3A59%3A25.570Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/31.png?v=2021-02-01T06%3A59%3A25.570Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/31.png?v=2021-02-01T06%3A59%3A25.570Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/31.png?v=2021-02-01T06%3A59%3A25.570Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/31.png?v=2021-02-01T06%3A59%3A25.570Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/31.png?v=2021-02-01T06%3A59%3A25.570Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					{"            "}
				</StackItem>
				<StackItem width="50%" display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" />
					<Box display="flex" margin="0px 0px 18 0px">
						<Text color="#555" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" font="400 18px/22px --fontFamily-googleInter">
							<Strong>
								Allow only particular websites
							</Strong>
							<br />
							{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Text margin="9px 0px 9px 18px" font="400 18px/22px --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							White list. Add domains or URLs of web-sites that will be allowed. In this example, we allowed access to StaffCop.com, Bitrix24 and Capterra. ALL other web-sites will be bloked. White lists are useful in case corporate policy allows working ONLY with a narrow range of web-sites.
							<br />
							{"\n\n"}
						</Text>
					</Box>
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/32.png?v=2021-02-01T07:27:57.685Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/32.png?v=2021-02-01T07%3A27%3A57.685Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/32.png?v=2021-02-01T07%3A27%3A57.685Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/32.png?v=2021-02-01T07%3A27%3A57.685Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/32.png?v=2021-02-01T07%3A27%3A57.685Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/32.png?v=2021-02-01T07%3A27%3A57.685Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/32.png?v=2021-02-01T07%3A27%3A57.685Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/32.png?v=2021-02-01T07%3A27%3A57.685Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem display="flex" sm-width="100%" nout-width="100%" width="100%">
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
						Track search queries
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex">
						<Text sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" font="400 18px/22px --fontFamily-googleInter" color="#555">
							Do you want to know what your employees search for on the Web during their working day? Are they interested in getting answers on job-related issues or in the funny videos on youtube? You can understand this easily with StaffCop. First of all, we can get a piechart of search engines showing the amount of searches for each user. In the example below we see that a user named "serge terekhov" used DuckDuckGo 5 times. If we click it, we will see the list of events as shown below.
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
			<Image
				src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/41.png?v=2021-02-01T08:00:44.857Z"
				width="100%"
				padding="0px 16px 0px 16px"
				srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/41.png?v=2021-02-01T08%3A00%3A44.857Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/41.png?v=2021-02-01T08%3A00%3A44.857Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/41.png?v=2021-02-01T08%3A00%3A44.857Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/41.png?v=2021-02-01T08%3A00%3A44.857Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/41.png?v=2021-02-01T08%3A00%3A44.857Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/41.png?v=2021-02-01T08%3A00%3A44.857Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/41.png?v=2021-02-01T08%3A00%3A44.857Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
			/>
			<Stack gap="--cmp-stack-gap-default" margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex">
						<Text font="400 18px/22px --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px">
							If we choose an event from the list we will see the details of the search query including date, time, browser application, page title and URL.
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
			<Image
				src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/42.png?v=2021-02-01T08:06:13.150Z"
				width="100%"
				padding="0px 16px 0px 16px"
				srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/42.png?v=2021-02-01T08%3A06%3A13.150Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/42.png?v=2021-02-01T08%3A06%3A13.150Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/42.png?v=2021-02-01T08%3A06%3A13.150Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/42.png?v=2021-02-01T08%3A06%3A13.150Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/42.png?v=2021-02-01T08%3A06%3A13.150Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/42.png?v=2021-02-01T08%3A06%3A13.150Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/42.png?v=2021-02-01T08%3A06%3A13.150Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
			/>
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