import React from "react";
import theme from "theme";
import { Theme, Text, Icon, Box, Link, Image, Section, Strong, Em } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { BsFillCircleFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"features/custom-reports"} />
		<Helmet>
			<title>
				Configurable Monitoring Profiles
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
					display="flex"
					sm-align-items="center"
					sm-width="100%"
					lg-width="100%"
					width="50%"
				>
					<Override
						slot="StackItemContent"
						sm-align-items="center"
						lg-align-items="center"
						padding="0px 10px 0px 0px"
						flex-direction="column"
						justify-content="center"
						align-items="flex-start"
					/>
					{"        "}
					<Text
						lg-text-align="center"
						font="--headline2"
						margin="0px 0px 16px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
					>
						Custom reports
					</Text>
					<Box align-items="center" margin="0px 0px 0px 0px" display="flex">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Text font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" color="#555">
							Dashboards{"\n\n"}
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
							Data visualization
							<br />
							{"\n\n"}
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
						<Text margin="9px 0px 9px 18px" color="#555" font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter">
							Complex logic
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"    "}
					<Link
						position="relative"
						text-decoration-line="initial"
						padding="16px 38px 16px 38px"
						background="--color-primary"
						border-style="solid"
						sm-padding="16px 20px 16px 20px"
						href="/demo-request"
						border-width="1px"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						sm-font="600 16px/22px --fontFamily-googleInter"
						color="#ffffff"
						font="600 18px/22px --fontFamily-googleInter"
						margin="36px 0px 0px 0px"
						hover-background="#409EEB"
						md-padding="16px 26px 16px 26px"
						z-index="2"
						box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						border-radius="40px"
						transition="-webkit-transition: all .3s;  transition: all .3s"
					>
						Request demo
					</Link>
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%" lg-width="100%">
					<Override slot="StackItemContent" lg-justify-content="center" position="relative" lg-align-items="center" />
					{"        "}
					<Image
						width="803px"
						right="-115px"
						lg-width="500px"
						sm-position="relative"
						lg-left="auto"
						lg-bottom="auto"
						sm-bottom="auto"
						sm-left="auto"
						left="auto"
						lg-position="relative"
						lg-right="auto"
						md-top="0px"
						md-left="auto"
						sm-right="auto"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15:07:09.010Z"
						md-width="400px"
						lg-top="0px"
						md-bottom="auto"
						position="absolute"
						top="-60px"
						bottom="auto"
						md-right="auto"
						sm-top="0px"
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
				<StackItem sm-width="100%" nout-width="100%" width="80%" display="flex">
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
						Configurable Monitoring Profiles{"\n\n"}
					</Text>
					<Text
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
					>
						The ability to create fully-cutomized reports is the unique feature of StaffCop that is possible due to the usage of OLAP-cube data model. This technology allows to apply any amount of filtration criteria to collected data (including anti-fitlers). For each report a number of data visualization modes is available. Then, a number of reports can be united into a dashboard.
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
			<Stack gap="--cmp-stack-gap-default" margin="0px 0px 0px 0px" width="100%">
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
						<Strong>
							Event types
						</Strong>
						{"\n\n\n\n"}
					</Text>
					<Text
						sm-text-align="center"
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
					>
						Filtration by event types is the fastest way to get a report related to a certain function (screenshots, web-sites visiting, file operation, etc). Each data type represents a corresponding module that is enabled in the configuration.
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem sm-width="100%" nout-width="100%" width="80%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/142.png?v=2021-02-02T12:28:35.310Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/142.png?v=2021-02-02T12%3A28%3A35.310Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/142.png?v=2021-02-02T12%3A28%3A35.310Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/142.png?v=2021-02-02T12%3A28%3A35.310Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/142.png?v=2021-02-02T12%3A28%3A35.310Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/142.png?v=2021-02-02T12%3A28%3A35.310Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/142.png?v=2021-02-02T12%3A28%3A35.310Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/142.png?v=2021-02-02T12%3A28%3A35.310Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
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
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
						font="normal 700 32px/140% --fontFamily-googleInter"
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
								Filtering dimensions
							</Strong>
							{"\n\n"}
						</Strong>
						{"\n\n\n\n"}
					</Text>
					<Text
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
					>
						Filtering dimensions can be applied together with Event types or separately. Each event recorded by StaffCop contains details related to its type. For example, "Web" events can be filtered by domain, subdomain, URL, application used for web-browsing. File operations contain details on file operation type, file path, information about the disk drive where this file is located, name of the application used for working with this file. Some details are common for all event types: time of event, computer and user account who initiated the event.{"\n\n"}
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/143.png?v=2021-02-03T05:26:12.533Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/143.png?v=2021-02-03T05%3A26%3A12.533Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/143.png?v=2021-02-03T05%3A26%3A12.533Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/143.png?v=2021-02-03T05%3A26%3A12.533Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/143.png?v=2021-02-03T05%3A26%3A12.533Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/143.png?v=2021-02-03T05%3A26%3A12.533Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/143.png?v=2021-02-03T05%3A26%3A12.533Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/143.png?v=2021-02-03T05%3A26%3A12.533Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
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
						sm-text-align="center"
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
					>
						To apply filtration according to a particular parameter, the left panel of dimensions is used. When we chose "Web" event type we got the list of all web-site visiting events. We can further narrow the output by applying any filtration criterion available for this event type. For example, we are interested in visiting particular web-sites. Usage of dimension panel will give us the list of all website domains that were visited. In this example we choose "tmyzer.com" and "utorrent.com" and the output contains only events related to these two domains.
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/144.png?v=2021-02-03T05:32:38.505Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/144.png?v=2021-02-03T05%3A32%3A38.505Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/144.png?v=2021-02-03T05%3A32%3A38.505Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/144.png?v=2021-02-03T05%3A32%3A38.505Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/144.png?v=2021-02-03T05%3A32%3A38.505Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/144.png?v=2021-02-03T05%3A32%3A38.505Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/144.png?v=2021-02-03T05%3A32%3A38.505Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/144.png?v=2021-02-03T05%3A32%3A38.505Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					{"    "}
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
						sm-text-align="center"
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
					>
						It's possible to apply anti-filters by reverting the currently applied ones. If we revert "tmyzer.com" and "utorrent.com" fitlers, the output will contain web-site visiting evetnts related to all registered domains EXCEPT "tmyzer.com" and "utorrent.com". In the bottom panel you can see all currently applied filters (blue for filters, red for anti-filters).
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/145.png?v=2021-02-03T05:35:46.734Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/145.png?v=2021-02-03T05%3A35%3A46.734Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/145.png?v=2021-02-03T05%3A35%3A46.734Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/145.png?v=2021-02-03T05%3A35%3A46.734Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/145.png?v=2021-02-03T05%3A35%3A46.734Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/145.png?v=2021-02-03T05%3A35%3A46.734Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/145.png?v=2021-02-03T05%3A35%3A46.734Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/145.png?v=2021-02-03T05%3A35%3A46.734Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
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
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
					>
						We can apply filters from other dimensions available for this event type. In this example we applied filtering by offices (or departments) so only activities performed by users of "support" department are displayed.
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/146.png?v=2021-02-03T05:40:41.586Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/146.png?v=2021-02-03T05%3A40%3A41.586Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/146.png?v=2021-02-03T05%3A40%3A41.586Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/146.png?v=2021-02-03T05%3A40%3A41.586Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/146.png?v=2021-02-03T05%3A40%3A41.586Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/146.png?v=2021-02-03T05%3A40%3A41.586Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/146.png?v=2021-02-03T05%3A40%3A41.586Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/146.png?v=2021-02-03T05%3A40%3A41.586Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="0px 0 0px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -346px/3610px no-repeat">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Section background="#FFFFFF" padding="24px 0 24px 0">
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
								hyphens="manual"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
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
										Complex logic
									</Strong>
									{"\n\n"}
								</Strong>
								{"\n\n"}
							</Strong>
							{"\n\n\n\n"}
						</Text>
						<Text
							sm-text-align="center"
							font="400 18px/160% --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="#555"
							letter-spacing="-1%"
						>
							The easiest way to create filters is to use Constructor and the currently collected data - in this case you can just "Save" the applied filtration criteria as a filter. But quite often, it's required to create a filter for things that haven't yet happend, or to create a filter with the usage of substring (part of word) or to create a filter triggered by a complex chain of conditions. In this case, we can use "Complex request" option for creating filters. The example below contains a filter which will show when members of "Support" department use torrents during their working days (suppose that they work MO-FR). For this we set a filter with 3 conditions:
							<br />
							<br />
							1. "Office" parameter equals to "Support"
							<br />
							2. Web-site URL contains "torrent" OR applications name contains "torrent"
							<br />
							3. Weekdays are not equal to Saturday AND not equal to Sunday{"\n\n"}
						</Text>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
				<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
					{"    "}
					<StackItem display="flex" sm-width="100%" nout-width="100%" width="80%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Image
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/156.png?v=2021-02-03T06:05:08.186Z"
							width="667px"
							height="649px"
							srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/156.png?v=2021-02-03T06%3A05%3A08.186Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/156.png?v=2021-02-03T06%3A05%3A08.186Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/156.png?v=2021-02-03T06%3A05%3A08.186Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/156.png?v=2021-02-03T06%3A05%3A08.186Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/156.png?v=2021-02-03T06%3A05%3A08.186Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/156.png?v=2021-02-03T06%3A05%3A08.186Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/156.png?v=2021-02-03T06%3A05%3A08.186Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
						/>
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
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
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
											Data visualization
										</Strong>
										{"\n\n"}
									</Strong>
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
							StaffCop features 12 customized data view modes that can be applied to any report that you created by following the previous steps. They are found in menus "Facts" and "Analysis" and they include tables and various types of graphs and charts. View modes from "Facts" menu represent output of the events already set by the currently applied filters. View modes from "Analytics" menu allow changing (add new or remove existing) currently applied number of fitlers in order to get the desired output.
						</Text>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
				<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
					{"    "}
					<StackItem display="flex" sm-width="100%" nout-width="100%" width="80%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Image
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/147.png?v=2021-02-03T06:09:18.831Z"
							width="229px"
							height="175px"
							srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/147.png?v=2021-02-03T06%3A09%3A18.831Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/147.png?v=2021-02-03T06%3A09%3A18.831Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/147.png?v=2021-02-03T06%3A09%3A18.831Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/147.png?v=2021-02-03T06%3A09%3A18.831Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/147.png?v=2021-02-03T06%3A09%3A18.831Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/147.png?v=2021-02-03T06%3A09%3A18.831Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/147.png?v=2021-02-03T06%3A09%3A18.831Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
						/>
						{"    "}
					</StackItem>
					<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Image
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/148.png?v=2021-02-03T06:12:51.849Z"
							width="264px"
							height="254px"
							srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/148.png?v=2021-02-03T06%3A12%3A51.849Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/148.png?v=2021-02-03T06%3A12%3A51.849Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/148.png?v=2021-02-03T06%3A12%3A51.849Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/148.png?v=2021-02-03T06%3A12%3A51.849Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/148.png?v=2021-02-03T06%3A12%3A51.849Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/148.png?v=2021-02-03T06%3A12%3A51.849Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/148.png?v=2021-02-03T06%3A12%3A51.849Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
						/>
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
							font="400 18px/160% --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="#555"
							letter-spacing="-1%"
							sm-text-align="center"
						>
							StaffCop features 12 customized data view modes that can be applied to any report that you created by following the previous steps. They are found in menus "Facts" and "Analysis" and they include tables and various types of graphs and charts. View modes from "Facts" menu represent output of the events already set by the currently applied filters. View modes from "Analytics" menu allow changing (add new or remove existing) currently applied number of fitlers in order to get the desired output.
						</Text>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
				<Stack gap="--cmp-stack-gap-default" margin="0px 0px 0px 0px" width="100%">
					{"    "}
					<StackItem display="flex" sm-width="100%" nout-width="100%" width="80%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Image
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/149.png?v=2021-02-03T06:17:10.955Z"
							width="735px"
							height="706px"
							srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/149.png?v=2021-02-03T06%3A17%3A10.955Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/149.png?v=2021-02-03T06%3A17%3A10.955Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/149.png?v=2021-02-03T06%3A17%3A10.955Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/149.png?v=2021-02-03T06%3A17%3A10.955Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/149.png?v=2021-02-03T06%3A17%3A10.955Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/149.png?v=2021-02-03T06%3A17%3A10.955Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/149.png?v=2021-02-03T06%3A17%3A10.955Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
						/>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
				<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
					{"    "}
					<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Image
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/150.png?v=2021-02-03T06:18:18.640Z"
							width="744px"
							height="702px"
							srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/150.png?v=2021-02-03T06%3A18%3A18.640Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/150.png?v=2021-02-03T06%3A18%3A18.640Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/150.png?v=2021-02-03T06%3A18%3A18.640Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/150.png?v=2021-02-03T06%3A18%3A18.640Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/150.png?v=2021-02-03T06%3A18%3A18.640Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/150.png?v=2021-02-03T06%3A18%3A18.640Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/150.png?v=2021-02-03T06%3A18%3A18.640Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
						/>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
				<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
					{"    "}
					<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Image
							height="698px"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/151.png?v=2021-02-03T06:19:37.659Z"
							width="745px"
							srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/151.png?v=2021-02-03T06%3A19%3A37.659Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/151.png?v=2021-02-03T06%3A19%3A37.659Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/151.png?v=2021-02-03T06%3A19%3A37.659Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/151.png?v=2021-02-03T06%3A19%3A37.659Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/151.png?v=2021-02-03T06%3A19%3A37.659Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/151.png?v=2021-02-03T06%3A19%3A37.659Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/151.png?v=2021-02-03T06%3A19%3A37.659Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
						/>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
				<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
					{"    "}
					<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Image
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/152.png?v=2021-02-03T06:21:16.646Z"
							width="748px"
							height="697px"
							srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/152.png?v=2021-02-03T06%3A21%3A16.646Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/152.png?v=2021-02-03T06%3A21%3A16.646Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/152.png?v=2021-02-03T06%3A21%3A16.646Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/152.png?v=2021-02-03T06%3A21%3A16.646Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/152.png?v=2021-02-03T06%3A21%3A16.646Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/152.png?v=2021-02-03T06%3A21%3A16.646Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/152.png?v=2021-02-03T06%3A21%3A16.646Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
						/>
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
									<Strong
										hyphens="manual"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
									>
										{"\n"}
										<Strong>
											E-mail reports
										</Strong>
										{"\n\n"}
									</Strong>
									{"\n\n"}
								</Strong>
								{"\n\n"}
							</Strong>
							{"\n\n\n\n"}
						</Text>
						<Text
							sm-text-align="center"
							font="400 18px/160% --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="#555"
							letter-spacing="-1%"
						>
							When you have specified filtration criteria and chosen the most approapriate data view mode, you can set-up e-mail scheduled reports.{" "}
							<Em>
								For some parts of complex reports PDF-format of e-mail reports can be unavailable.
							</Em>
							{"\n\n"}
							<br />
						</Text>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
				<Stack gap="--cmp-stack-gap-default" margin="0px 0px 0px 0px" width="100%">
					{"    "}
					<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/153.png?v=2021-02-03T06:32:49.949Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/153.png?v=2021-02-03T06%3A32%3A49.949Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/153.png?v=2021-02-03T06%3A32%3A49.949Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/153.png?v=2021-02-03T06%3A32%3A49.949Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/153.png?v=2021-02-03T06%3A32%3A49.949Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/153.png?v=2021-02-03T06%3A32%3A49.949Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/153.png?v=2021-02-03T06%3A32%3A49.949Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/153.png?v=2021-02-03T06%3A32%3A49.949Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
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
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								{"\n"}
								<Strong
									text-overflow="clip"
									hyphens="manual"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
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
												Dashboards
											</Strong>
											{"\n\n"}
										</Strong>
										{"\n\n"}
									</Strong>
									{"\n\n"}
								</Strong>
								{"\n\n"}
							</Strong>
							{"\n\n\n\n"}
						</Text>
						<Text
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="#555"
							letter-spacing="-1%"
							sm-text-align="center"
							font="400 18px/160% --fontFamily-googleInter"
						>
							Dashboards represent a number of filters combined together for a handier representation of information related to a particular object or task. On the screenshot below there is a dashboard containg the data view modes used in the previous example placed on a single page.
						</Text>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
				<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
					{"    "}
					<StackItem nout-width="100%" width="80%" display="flex" sm-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/155.png?v=2021-02-03T06:40:07.428Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/155.png?v=2021-02-03T06%3A40%3A07.428Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/155.png?v=2021-02-03T06%3A40%3A07.428Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/155.png?v=2021-02-03T06%3A40%3A07.428Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/155.png?v=2021-02-03T06%3A40%3A07.428Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/155.png?v=2021-02-03T06%3A40%3A07.428Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/155.png?v=2021-02-03T06%3A40%3A07.428Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/155.png?v=2021-02-03T06%3A40%3A07.428Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
			</Section>
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