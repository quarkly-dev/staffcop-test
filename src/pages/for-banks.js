import React from "react";
import theme from "theme";
import { Theme, Box, Image, Link, Section, Text, Icon, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Menu, Stack, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { GoPrimitiveDot } from "react-icons/go";
import { FaRegLifeRing } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"for-banks"} />
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
		<Box
			position="absolute"
			z-index="3"
			bottom="auto"
			sm-height="1000px"
			width="100%"
			height="1800px"
			background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonstar.png?v=2021-04-29T08:32:07.628Z) 0% 0% /cover no-repeat scroll padding-box"
			left="auto"
			right="auto"
			top="0px"
			lg-height="1500px"
		/>
		<Box
			position="absolute"
			width="100%"
			height="1300px"
			z-index="3"
			right="0px"
			left="auto"
			margin="350px 0px 0px 0px"
			background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonbuble.png?v=2021-04-29T08:29:19.945Z) center center/90% no-repeat"
			bottom="auto"
			filter="blur(154px)"
			sm-height="600px"
		/>
		<Section
			position="fixed"
			z-index="6"
			opacity=".98"
			background="linear-gradient(180deg,rgba(0, 0, 0, 0.98) 60.5%,rgba(0, 0, 0, 0) 100%)"
			padding="15px 0 10px 0"
			sm-padding="12px 0 12px 0"
			lg-padding="15px 0 15px 0"
		>
			<Override slot="SectionContent" max-width="1170px" position="relative" z-index="5" />
			<Stack gap="0px" width="100%">
				<StackItem
					width="20%"
					display="flex"
					nout-width="18%"
					lg-width="40%"
					sm-width="70%"
				>
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						sm-align-items="center"
						sm-justify-content="flex-start"
					/>
					<Link href="/" sm-margin="4px 0px 0px 0px">
						<Image width="100%" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/logo_white%20%281%29.svg?v=2023-08-25T08:28:35.300Z" padding="2px 0px 0px 0px" />
					</Link>
				</StackItem>
				<StackItem
					nout-width="64%"
					lg-display="none"
					sm-width="32%"
					width="60%"
					display="flex"
				>
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					<Components.MyNav />
					<Link
						color="#ffffff"
						padding="30px 15px 30px 15px"
						hover-color="--primary"
						href="/features/"
						text-decoration-line="initial"
						font="--menu"
					>
						Features
					</Link>
					<Link
						font="--menu"
						color="#ffffff"
						padding="30px 15px 30px 15px"
						hover-color="--primary"
						href="/solutions/"
						text-decoration-line="initial"
					>
						Cases
					</Link>
					<Link
						color="#ffffff"
						padding="30px 15px 30px 15px"
						hover-color="--primary"
						href="/purchase/"
						text-decoration-line="initial"
						font="--menu"
					>
						Purchase
					</Link>
					<Components.MyNav2 />
				</StackItem>
				<StackItem
					width="20%"
					display="flex"
					nout-width="18%"
					lg-width="50%"
					sm-width="50%"
					sm-display="none"
				>
					<Override slot="StackItemContent" justify-content="flex-end" align-items="center" />
					<Link
						color="--primary"
						lg-margin="0px 8px 0px 0px"
						border-color="--color-primary"
						href="/request-demo/"
						font="600 18px/22px --fontFamily-googleInter"
						border-width="2px"
						border-style="solid"
						border-radius="40px"
						hover-color="#ffffff"
						nout-padding="13px 15px 13px 15px"
						sm-display="none"
						text-align="center"
						text-decoration-line="initial"
						padding="13px 29px 13px 29px"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						hover-background="--color-primary"
					>
						Request demo
					</Link>
				</StackItem>
				<StackItem
					display="none"
					width="100%"
					nout-width="18%"
					lg-width="10%"
					sm-width="30%"
					lg-display="flex"
				>
					<Override slot="StackItemContent" justify-content="flex-end" align-items="center" lg-justify-content="center" />
					<Components.MobileSide2
						sm-align-items="center"
						sm-justify-content="flex-end"
						flex="1 1 auto"
						lg-position="relative"
						lg-z-index="5"
						lg-display="flex"
						lg-justify-content="center"
						lg-align-items="center"
					>
						<Override
							slot="Button Line1 :open"
							lg-width="70%"
							lg-left="auto"
							lg-right="auto"
							lg-bottom="auto"
							lg-top="9px"
							lg-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/krestiiki.svg?v=2020-12-01T12:34:09.363Z) center center/cover no-repeat scroll padding-box"
							lg-height="80%"
						/>
						<Override
							slot="Button :open"
							lg-top="18px"
							lg-width="32.99px"
							lg-display="flex"
							lg-align-items="center"
							lg-justify-content="center"
							lg-padding="10px 6px 9px 6px"
							lg-height="25.986px"
							lg-position="fixed"
						/>
						<Override
							slot="Content"
							align-items="center"
							lg-left={0}
							lg-z-index="1"
							lg-width="100%"
							lg-flex-direction="column"
							display="flex"
							lg-position="fixed"
							lg-top={0}
							lg-height="100%"
							lg-background="white"
							lg-overflow-y="scroll"
						/>
						<Override
							slot="Button"
							lg-position="relative"
							lg-z-index="6"
							lg-box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							lg-display="block"
							lg-height="28px"
							lg-background="--color-primary"
							lg-padding="9px 10px 10px 10px"
							lg-top="4px"
							lg-border-radius="1000%"
							display="none"
							lg-width="28px"
						/>
						<Override slot="Button Line2" lg-top="12px" lg-right="0px" />
						<Override slot="Button Line3" lg-top="24px" lg-right="0px" lg-width="100%" />
						<Override
							slot="Button Line3 :closed"
							lg-display="none"
							lg-width="50%"
							lg-background="#ffffff"
							lg-left="auto"
							lg-right="auto"
							lg-bottom="auto"
							lg-top="30px"
						/>
						<Override slot="Content :closed" lg-transition="transform --transitionDuration-normal step-end 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut" lg-transform="translateY(-100%)" lg-opacity="0" />
						<Override
							slot="Button Line1 :closed"
							lg-width="80%"
							lg-top="12px"
							lg-bottom="auto"
							lg-left="auto"
							lg-right="auto"
							lg-height="30.99px"
						/>
						<Override
							slot="Button Line2 :closed"
							lg-width="50%"
							lg-background="#ffffff"
							lg-left="auto"
							lg-right="auto"
							lg-bottom="auto"
							lg-top="21px"
							lg-display="none"
						/>
						<Override
							slot="Button Line3 :open"
							lg-top="35px"
							lg-bottom="auto"
							lg-display="none"
							lg-width="36px"
							lg-transform="translateY(-12px) rotate(135deg)"
							lg-left="auto"
							lg-right="auto"
						/>
						<Override
							slot="Content :open"
							lg-opacity="1"
							lg-position="fixed"
							lg-transform="translateY(0%)"
							lg-transition="transform --transitionDuration-normal step-start 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut"
						/>
						<Override
							slot="Button :closed"
							lg-top="0px"
							lg-display="flex"
							lg-padding="9px 9px 9px 9px"
							lg-align-items="center"
							lg-justify-content="center"
							md-top="0px"
						/>
						<Override
							slot="Button Line"
							lg-top="22px"
							lg-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/palki.svg?v=2020-12-01T12:31:09.963Z) center center/cover no-repeat scroll padding-box"
							lg-width="100%"
							lg-left="auto"
							lg-right="auto"
							lg-bottom="auto"
						/>
						<Override slot="Button Line1" lg-width="44px" lg-top="0px" lg-right="0px" />
						<Override slot="Button Line2 :open" lg-opacity="0" lg-width="32px" lg-display="none" />
						<Components.NestedMenu
							lg-margin="16px 0px 0px 0px"
							collapse
							depth="2"
							lg-width="100%"
							lg-right="auto"
							lg-left="auto"
							lg-flex-direction="column"
							lg-align-items="center"
						>
							<Override
								slot="Sub"
								lg-width="100%"
								lg-left="auto"
								lg-right="auto"
								lg-bottom="auto"
								lg-padding="1px 0px 1px 0px"
							/>
							<Override slot="Item-404" lg-display="none" />
							<Override slot="Link-index">
								Home
							</Override>
							<Override
								slot="Item"
								lg-width="100%"
								lg-text-align="center"
								lg-display="flex"
								lg-align-items="center"
								lg-justify-content="center"
								lg-padding="14px 0px 14px 0px"
								lg-box-shadow="none"
							/>
							<Override
								slot="Link"
								sm-padding="5px 5px 5px 5px"
								white-space="pre-wrap"
								lg-box-shadow="none"
								lg-font="--menu"
								lg-color="--darkL1"
								lg-text-decoration-line="initial"
								lg-padding="5px 0px 5px 0px"
								lg-text-align="center"
							/>
							<Override slot="Icon" lg-box-shadow="none" lg-padding="4px 0px 0px 4px" />
						</Components.NestedMenu>
						<Menu
							lg-margin="80px 0px 0px 0px"
							lg-display="none"
							flex="1 1 auto"
							display="none"
							align-items="center"
							justify-content="center"
							lg-flex="0 1 auto"
							lg-flex-direction="column"
						>
							<Override slot="item" lg-padding="14px 12px 14px 12px" />
							<Override slot="item-404" display="none" />
							<Override slot="item-index" display="none" />
							<Override
								slot="link"
								lg-font="500 20px/24px --fontFamily-googleInter"
								lg-text-decoration-line="initial"
								lg-color="#020202"
								lg-padding="6px 6px 6px 6px"
							/>
							<Override slot="link-active" lg-color="--primary" />
						</Menu>
					</Components.MobileSide2>
				</StackItem>
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section
			padding="170px 0 0px 0"
			hd-background="#020202 url() center -693px/2060px repeat"
			width="100%"
			background="#000"
			sm-padding="140px 0 0px 0"
		>
			<Override
				slot="SectionContent"
				z-index="5"
				max-width="1200px"
				align-items="center"
				position="relative"
			/>
			<Text font="--menu" color="#1767FF" margin="0px 0px 17px 0px" text-align="center">
				StaffCop Enterprise
			</Text>
			<Text
				margin="0px 0px 10px 0px"
				text-align="center"
				lg-font="normal bold 52px/1.2 --fontFamily-googleInter"
				sm-font="normal bold 32px/1.2 --fontFamily-googleInter"
				font="normal bold 66px/1.2 --fontFamily-googleInter"
				color="#ffffff"
			>
				For the banking and
				<br />
				{" "}financial sectors
			</Text>
			<Text
				md-width="80%"
				sm-font="normal 400 16px/140% --fontFamily-googleInter"
				font="normal 300 18px/160% --fontFamily-googleInter"
				color="#9B9FAA"
				letter-spacing="-0.01em"
				margin="8px 0px 63px 0px"
				text-align="center"
				width="49%"
			>
				A software package for
		monitoring information,
		user actions and system events on workcomputers
		and terminal servers
			</Text>
			<Image
				display="none"
				loading="lazy"
				src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/videoimg.png?v=2021-04-05T12:06:12.324Z"
				md-width="80%"
				position="relative"
				z-index="5"
				margin="0px 0px 141px 0px"
				sm-width="100%"
				width="100%"
				height="auto"
				srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/videoimg.png?v=2021-04-05T12%3A06%3A12.324Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/videoimg.png?v=2021-04-05T12%3A06%3A12.324Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/videoimg.png?v=2021-04-05T12%3A06%3A12.324Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/videoimg.png?v=2021-04-05T12%3A06%3A12.324Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/videoimg.png?v=2021-04-05T12%3A06%3A12.324Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/videoimg.png?v=2021-04-05T12%3A06%3A12.324Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/videoimg.png?v=2021-04-05T12%3A06%3A12.324Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
			/>
		</Section>
		<Section background="#000" padding="0px 0 30px 0" hd-background="#020202 url() center -693px/2060px repeat" width="100%">
			<Override
				slot="SectionContent"
				max-width="1200px"
				align-items="center"
				position="relative"
				z-index="5"
			/>
			<Components.Video width="100%" videoId="ClICMvGh5bI">
				<Override slot="YouTubePlayer" md-margin="0px 0px 60px 0px" width="100%" margin="0px 0px 140px 0px" />
			</Components.Video>
			<Image
				loading="lazy"
				sm-width="100%"
				width="100%"
				height="auto"
				display="none"
				src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/videoimg.png?v=2021-04-05T12:06:12.324Z"
				md-width="80%"
				position="relative"
				z-index="5"
				margin="0px 0px 141px 0px"
				srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/videoimg.png?v=2021-04-05T12%3A06%3A12.324Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/videoimg.png?v=2021-04-05T12%3A06%3A12.324Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/videoimg.png?v=2021-04-05T12%3A06%3A12.324Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/videoimg.png?v=2021-04-05T12%3A06%3A12.324Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/videoimg.png?v=2021-04-05T12%3A06%3A12.324Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/videoimg.png?v=2021-04-05T12%3A06%3A12.324Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/videoimg.png?v=2021-04-05T12%3A06%3A12.324Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
			/>
			<Text
				margin="0px 0px 10px 0px"
				text-align="center"
				lg-font="normal bold 52px/1.2 --fontFamily-googleInter"
				md-font="normal bold 48px/1.2 --fontFamily-googleInter"
				sm-font="normal bold 26px/1.2 --fontFamily-googleInter"
				font="normal bold 66px/1.2 --fontFamily-googleInter"
				color="#ffffff"
			>
				Monitoring. Analysis.
				<br />
				Notification. Blocking.
			</Text>
			<Text
				letter-spacing="-0.01em"
				margin="8px 0px 83px 0px"
				width="49%"
				sm-font="normal 400 16px/140% --fontFamily-googleInter"
				font="normal 300 18px/160% --fontFamily-googleInter"
				color="#9B9FAA"
				text-align="center"
				md-width="80%"
				sm-margin="8px 0px 23px 0px"
			>
				To ensure integrity of business flows and information
				<br />
				security for banks and financial organizations
			</Text>
			<Text
				font="normal 700 34px/45px --fontFamily-googleInter"
				color="#ffffff"
				letter-spacing="-0.01em"
				margin="8px 0px 0px 0px"
				text-align="center"
				md-width="80%"
				sm-font="normal 400 16px/140% --fontFamily-googleInter"
				lg-font="normal 700 30px/35px --fontFamily-googleInter"
			>
				A software package for monitoring information,
				<br />
				user actions and system events on work
				<br />
				computers and terminal servers
			</Text>
		</Section>
		<Section border-color="#161616" padding="48px 0 110px 0" background="#000000 url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonchik2.png?v=2021-04-29T08:30:36.568Z) center center/80% no-repeat">
			<Override slot="SectionContent" max-width="1200px" position="relative" />
			<Stack justify-content="center" margin="0px 0px 0px 0px">
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					<Box
						height="100%"
						border-style="solid"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						border-radius="24px"
						sm-padding="10px 0px 20px 0px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
						md-flex-direction="column"
						border-width="1px"
						background="#030303"
						hover-transform="translateY(-10px)"
						md-display="flex"
						padding="0px 0px 0px 0px"
					>
						<Link href="/features/productivity-monitoring" padding="42px 42px 42px 42px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/search-radar-location.2%203.svg?v=2021-04-05T16:16:38.983Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Early detection of information security threats
							</Text>
							<Text
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
							>
								Protect Your Data and IP with StaffCop's Insider Threat Monitoring, Detection and Prevention Solution
							</Text>
						</Link>
					</Box>
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					<Box
						display="flex"
						border-radius="24px"
						height="100%"
						flex-direction="column"
						border-width="1px"
						background="#030303"
						hover-transform="translateY(-10px)"
						border-color="rgba(255, 255, 255, 0.05)"
						md-flex-direction="column"
						sm-padding="10px 0px 20px 0px"
						padding="0px 0px 0px 0px"
						border-style="solid"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
					>
						<Link href="/features/productivity-monitoring" padding="42px 42px 42px 42px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/search.5%201.svg?v=2021-04-07T01:20:06.389Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
							>
								Investigation of incidents
							</Text>
							<Text
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
								font="normal 400 18px/160% --fontFamily-googleInter"
							>
								StaffCop is a me machine! At any me, you can go back and see what this or that employee was doing in the
					specified period of time
							</Text>
						</Link>
					</Box>
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					<Box
						md-flex-direction="column"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						sm-padding="10px 0px 20px 0px"
						border-radius="24px"
						border-width="1px"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="0px 0px 0px 0px"
						hover-transform="translateY(-10px)"
						md-display="flex"
						display="flex"
						flex-direction="column"
						background="#030303"
					>
						<Link href="/features/productivity-monitoring" padding="42px 42px 42px 42px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/timer-clock-fast%201.svg?v=2021-04-07T01:20:14.866Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Work time tracking Monitoring user activity on a PC
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								To ensure integrity of business flows and information security for banks and financial organizations.
							</Text>
						</Link>
					</Box>
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					<Box
						flex-direction="column"
						border-width="1px"
						height="100%"
						sm-padding="10px 0px 20px 0px"
						border-radius="24px"
						padding="0px 0px 0px 0px"
						background="#030303"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						md-display="flex"
						md-flex-direction="column"
						border-style="solid"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
					>
						<Link href="/features/productivity-monitoring" padding="42px 42px 42px 42px" height="100%">
							<Image
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/statistics-analytics-square%201.svg?v=2021-04-07T01:20:27.505Z"
							/>
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								User behavior analysis
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								To ensure integrity of business flows and information security for banks and financial organizations.
							</Text>
						</Link>
					</Box>
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					<Box
						padding="0px 0px 0px 0px"
						height="100%"
						md-flex-direction="column"
						sm-padding="10px 0px 20px 0px"
						border-color="rgba(255, 255, 255, 0.05)"
						flex-direction="column"
						border-radius="24px"
						border-width="1px"
						background="#030303"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						border-style="solid"
						hover-transform="translateY(-10px)"
						md-display="flex"
						display="flex"
					>
						<Link href="/features/productivity-monitoring" padding="42px 42px 42px 42px" height="100%">
							<Image
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/programming-code-monitor%201.svg?v=2021-04-07T01:20:40.099Z"
							/>
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Remote administration with or without
								<br />
								notice to the user Remote PC control
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								StaffCop is a powerful remote assistance software that enables businesses of all sizes to provide exceptional
					customer service and fast problem-solving solutions from any location.
							</Text>
						</Link>
					</Box>
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					<Box
						height="100%"
						border-radius="24px"
						padding="0px 0px 0px 0px"
						border-style="solid"
						background="#030303"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						border-width="1px"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						sm-padding="10px 0px 20px 0px"
						display="flex"
						flex-direction="column"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
					>
						<Link height="100%" href="/features/productivity-monitoring" padding="42px 42px 42px 42px">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/User,Profile.13%202.svg?v=2021-04-07T01:20:47.899Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
								font="normal 700 24px/140% --fontFamily-googleInter"
							>
								Assessment of employee productivity
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								To ensure integrity of business flows and informaon security for banks and financial organizations.
							</Text>
						</Link>
					</Box>
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					<Box
						border-color="rgba(255, 255, 255, 0.05)"
						border-radius="24px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						display="flex"
						height="100%"
						border-width="1px"
						border-style="solid"
						md-display="flex"
						md-flex-direction="column"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						sm-padding="10px 0px 20px 0px"
						background="#030303"
					>
						<Link href="/features/productivity-monitoring" padding="42px 42px 42px 42px" height="100%">
							<Image
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/input-password-protection%201.svg?v=2021-04-05T16:39:40.231Z"
							/>
							<Text
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
							>
								Keylogger and registering bash commands
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								StaffCop supports intercepon of keystrokes at the core level to control the terminal of servers, as well as
					intercepon of X-sessions keyboard.
							</Text>
						</Link>
					</Box>
				</StackItem>
				<StackItem display="flex" lg-width="50%" md-width="100%" width="33.3333%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					<Box
						border-radius="24px"
						border-width="1px"
						md-display="flex"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-flex-direction="column"
						display="flex"
						background="#030303"
						hover-transform="translateY(-10px)"
						border-style="solid"
						height="100%"
						sm-padding="10px 0px 20px 0px"
						border-color="rgba(255, 255, 255, 0.05)"
					>
						<Link href="/features/productivity-monitoring" padding="42px 42px 42px 42px" height="100%">
							<Image
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/business-chart-search%201.svg?v=2021-04-05T16:39:53.468Z"
								object-position="0% 0%"
							/>
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Monitoring configurable log files usage
							</Text>
							<Text
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
							>
								Registraon of facts and duraon of calls, intercepon of SMS-messages.
							</Text>
						</Link>
					</Box>
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					<Box
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-flex-direction="column"
						display="flex"
						border-radius="24px"
						padding="0px 0px 0px 0px"
						hover-transform="translateY(-10px)"
						md-display="flex"
						border-width="1px"
						border-style="solid"
						height="100%"
						sm-padding="10px 0px 20px 0px"
						border-color="rgba(255, 255, 255, 0.05)"
						background="#030303"
						flex-direction="column"
					>
						<Link href="/features/productivity-monitoring" padding="42px 42px 42px 42px" height="100%">
							<Image
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mic-rec%201.svg?v=2021-04-05T16:40:07.054Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
							/>
							<Text
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
								font="normal 700 24px/140% --fontFamily-googleInter"
							>
								Microphone recording
							</Text>
							<Text
								sm-font="normal 400 16px/140% Inter, sans-serif"
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
							>
								Environment recording from microphones, desktop video, screenshots of screens and snapshots from webcam.
							</Text>
						</Link>
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="70px 0 70px 0" background="#000000" md-padding="30px 0 30px 0">
			<Override slot="SectionContent" max-width="none" align-items="center" width="90%" />
			<Text
				md-font="normal 700 30px/40px Inter, sans-serif"
				color="#ffffff"
				letter-spacing="-2%"
				display="inline-block"
				text-align="center"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 48px/72px --fontFamily-googleInter"
				font="normal 700 72px/72px --fontFamily-googleInter"
				margin="0px 0px 18px 0px"
			>
				Compliance
			</Text>
			<Text
				color="#9B9FAA"
				letter-spacing="-0.01em"
				margin="8px 0px 60px 0px"
				text-align="center"
				width="55%"
				md-width="80%"
				sm-font="normal 400 16px/140% --fontFamily-googleInter"
				font="normal 400 18px/160% --fontFamily-googleInter"
			>
				Compliance is an increasingly complex task, requiring organizations to manage multiple riskfactors across
		an evolving technology landscape, while also ensuring appropriate user behavior to meet the stringent requirements
		of today’s widely-accepted regulatory standards, such as GDPR, HIPAA, PCI DSS, ISO 27001, NIST and others.
			</Text>
		</Section>
		<Section padding="70px 0 20px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonchikblue-min.png?v=2021-04-29T08:47:28.245Z) no-repeat,#000000" md-padding="30px 0 30px 0" md-background="#000,url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonchikblue.png?v=2021-04-06T00:09:01.506Z) center center no-repeat">
			<Override slot="SectionContent" max-width="1300px" align-items="center" width="90%" />
			<Text
				font="normal 700 72px/72px --fontFamily-googleInter"
				color="#ffffff"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				lg-font="normal 700 48px/72px --fontFamily-googleInter"
				margin="0px 0px 18px 0px"
				display="inline-block"
				letter-spacing="-2%"
			>
				Information security
			</Text>
			<Text
				md-width="80%"
				sm-font="normal 400 16px/140% --fontFamily-googleInter"
				font="normal 300 18px/160% --fontFamily-googleInter"
				color="#9B9FAA"
				letter-spacing="-0.01em"
				margin="8px 0px 60px 0px"
				text-align="center"
				width="49%"
			>
				StaffCop is built on modern data
				<br />
				interception and analysis technologies
			</Text>
			<Stack margin="0px 0px 0px 0px" width="100%">
				<StackItem width="45%" display="flex" lg-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						justify-content="space-between"
						sm-padding="20px 0px 42px 0px"
						sm-justify-content="flex-start"
						sm-align-items="flex-start"
						border-radius="8px"
						align-items="flex-start"
						padding="20px 42px 42px 42px"
						lg-align-items="center"
						flex-direction="column"
					/>
					<Text
						sm-width="100%"
						font="normal 600 36px/45px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="#ffffff"
						lg-text-align="center"
						sm-font="normal 600 24px/30px --fontFamily-googleInter"
					>
						Remote administration with or without notice to the user Remote PC control
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
						<Icon size="16px" category="go" icon={GoPrimitiveDot} color="--primary" />
						<Text
							font="--lead"
							margin="0px 0px 0px 12px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
							sm-text-align="left"
						>
							Document search by digital prints
						</Text>
					</Box>
					<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
						<Icon category="go" icon={GoPrimitiveDot} color="--primary" size="16px" />
						<Text
							sm-text-align="left"
							font="--lead"
							margin="0px 0px 0px 12px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
						>
							Content analysis of documents
						</Text>
					</Box>
					<Box align-items="center" margin="0px 0px 9px 0px" display="flex">
						<Icon category="go" icon={GoPrimitiveDot} color="--primary" size="16px" />
						<Text
							font="--lead"
							margin="0px 0px 0px 12px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
							sm-text-align="left"
						>
							Searching through words and regular phrases
						</Text>
					</Box>
					<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
						<Icon category="go" icon={GoPrimitiveDot} color="--primary" size="16px" />
						<Text
							margin="0px 0px 0px 12px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
							sm-text-align="left"
							font="--lead"
						>
							Morphology support
						</Text>
					</Box>
					<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
						<Icon category="go" icon={GoPrimitiveDot} color="--primary" size="16px" />
						<Text
							margin="0px 0px 0px 12px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
							sm-text-align="left"
							font="--lead"
						>
							OCR – text recognion on images
						</Text>
					</Box>
					<Box align-items="center" margin="0px 0px 9px 0px" display="flex">
						<Icon category="go" icon={GoPrimitiveDot} color="--primary" size="16px" />
						<Text
							font="--lead"
							margin="0px 0px 0px 12px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
							sm-text-align="left"
						>
							Built-in and custom user dictionaries
						</Text>
					</Box>
					<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
						<Icon icon={GoPrimitiveDot} color="--primary" size="16px" category="go" />
						<Text
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
							sm-text-align="left"
							font="--lead"
							margin="0px 0px 0px 12px"
						>
							Definition of encrypted archives
						</Text>
					</Box>
					<Box align-items="center" margin="0px 0px 9px 0px" display="flex">
						<Icon category="go" icon={GoPrimitiveDot} color="--primary" size="16px" />
						<Text
							font="--lead"
							margin="0px 0px 0px 12px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
							sm-text-align="left"
						>
							Document search by digital prints
						</Text>
					</Box>
					<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
						<Icon size="16px" category="go" icon={GoPrimitiveDot} color="--primary" />
						<Text
							font="--lead"
							margin="0px 0px 0px 12px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
							sm-text-align="left"
						>
							Multilevel interactive reports
						</Text>
					</Box>
					<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
						<Icon category="go" icon={GoPrimitiveDot} color="--primary" size="16px" />
						<Text
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
							sm-text-align="left"
							font="--lead"
							margin="0px 0px 0px 12px"
							display="inline-block"
						>
							Event Relationship Graphs
						</Text>
					</Box>
				</StackItem>
				<StackItem lg-width="100%" md-width="100%" width="55%" display="flex">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="space-between"
						padding="0px 0px 0px 0px"
						lg-align-items="center"
						position="relative"
						border-radius="8px"
					/>
					<Box
						right="auto"
						width="100%"
						height="100%"
						position="absolute"
						top="0px"
						left="auto"
						bottom="auto"
						background="linear-gradient(278.48deg,#000000 22.4%,rgba(0, 0, 0, 0.75) 41.4%,rgba(196, 196, 196, 0) 86.67%,rgba(126, 126, 126, 0.08) 116.62%)"
					/>
					<Image
						max-height="592px"
						loading="lazy"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mokap1.png?v=2021-04-29T08:35:58.235Z"
						width="100%"
						height="auto"
						margin="0px 0px 0px -2px"
						padding="0px 0px 0px 0px"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mokap1.png?v=2021-04-29T08%3A35%3A58.235Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mokap1.png?v=2021-04-29T08%3A35%3A58.235Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mokap1.png?v=2021-04-29T08%3A35%3A58.235Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mokap1.png?v=2021-04-29T08%3A35%3A58.235Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mokap1.png?v=2021-04-29T08%3A35%3A58.235Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mokap1.png?v=2021-04-29T08%3A35%3A58.235Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mokap1.png?v=2021-04-29T08%3A35%3A58.235Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
				</StackItem>
			</Stack>
		</Section>
		<Section md-padding="30px 0 30px 0" lg-padding="70px 0 70px 0" padding="10px 0 70px 0" background="#000000">
			<Override slot="SectionContent" max-width="none" align-items="center" width="90%" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				<StackItem display="flex" lg-width="50%" md-width="100%" width="40%">
					<Override
						slot="StackItemContent"
						justify-content="center"
						padding="0px 0px 0px 0px"
						lg-align-items="center"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-end"
					/>
					<Box
						border-color="rgba(255, 255, 255, 0.04)"
						border-width="1px"
						border-style="solid"
						border-radius="50%"
						position="relative"
						margin="0px -18px 0px 0px"
						padding="35px 35px 35px 35px"
					>
						<Box
							width="100%"
							height="100%"
							bottom="0px"
							margin="0px 0px 0px 0px"
							position="absolute"
							right="0px"
							top="0px"
							background="rgba(28, 99, 248, 0.1)"
							filter="blur(24px)"
							transform="matrix(-0.03, 1, 1, 0.03, 0, 0)"
							border-radius="50%"
							left="0px"
						/>
						<Box
							padding="28px 28px 28px 28px"
							border-color="rgba(255, 255, 255, 0.1)"
							border-width="1px"
							border-style="solid"
							border-radius="50%"
						>
							<Box background="#1C63F8" border-radius="50%">
								<Image
									padding="26px 27px 26px 27px"
									border-radius="60px"
									loading="lazy"
									width="64px"
									height="64px"
									src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Bell.svg?v=2021-04-07T01:09:17.281Z"
								/>
							</Box>
						</Box>
					</Box>
				</StackItem>
				<StackItem display="flex" lg-width="50%" md-width="100%" width="60%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						padding="0px 0px 0px 0px"
						lg-align-items="center"
					/>
					<Text
						sm-font="normal 400 16px/140% --fontFamily-googleInter"
						md-text-align="center"
						font="normal 400 18px/160% --fontFamily-googleInter"
						color="#9B9FAA"
						letter-spacing="-0.01em"
						margin="0px 0px 0px -18px"
						md-width="100%"
					>
						StaffCop can notify of violation of security policies in the
						<br />
						admin panel and by e-mail. Analycal tables and graphs
						<br />
						Using the Filter Builder, it is easy to create a wide range
						<br />
						of bespoke policies that match your organizaon’s security
						<br />
						policies and assign alerts when they are triggered.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section background="#000000 url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonchik2.png?v=2021-04-29T08:30:36.568Z) center center/80% no-repeat" border-color="#161616" padding="24px 0 90px 0">
			<Override slot="SectionContent" max-width="1200px" position="relative" align-items="center" />
			<Text
				margin="0px 0px 18px 0px"
				display="inline-block"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				font="normal 700 72px/72px --fontFamily-googleInter"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				lg-font="normal 700 48px/72px --fontFamily-googleInter"
				color="#ffffff"
			>
				interception of all
				<br />
				channels and events
			</Text>
			<Text
				letter-spacing="-0.01em"
				margin="8px 0px 60px 0px"
				text-align="center"
				md-width="80%"
				sm-font="normal 400 16px/140% --fontFamily-googleInter"
				width="55%"
				font="normal 400 18px/160% --fontFamily-googleInter"
				color="#9B9FAA"
			>
				on workstations and terminal servers
			</Text>
			<Stack margin="0px 0px 0px 0px" justify-content="center">
				<StackItem md-width="100%" width="33.3333%" display="flex" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					<Box
						border-radius="24px"
						border-style="solid"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="10px 20px 20px 20px"
						display="flex"
						border-width="1px"
						background="#030303"
						height="100%"
						hover-transform="translateY(-10px)"
						padding="42px 42px 60px 42px"
						md-display="flex"
						md-flex-direction="column"
						flex-direction="column"
						align-items="flex-start"
					>
						<Image
							margin="10px 0px 30px -9px"
							filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							loading="lazy"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Server,%20Databases,%20Connect.1%201.svg?v=2021-04-07T14:18:05.786Z"
							object-position="0% 0%"
						/>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="#ffffff"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Postal protocols
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							IMAP, SMTP, MAPI, POP3 and their encrypted analogues. Control the sending of messages and transferring of
					files through web-based e-mail services.
						</Text>
					</Box>
				</StackItem>
				<StackItem lg-width="50%" md-width="100%" width="33.3333%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					<Box
						border-width="1px"
						background="#030303"
						sm-padding="10px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						padding="42px 42px 60px 42px"
						md-flex-direction="column"
						flex-direction="column"
						align-items="flex-start"
						border-radius="24px"
						border-style="solid"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
					>
						<Image
							loading="lazy"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Skype%201.svg?v=2021-04-07T14:21:17.624Z"
							object-position="0% 0%"
							margin="10px 0px 30px -9px"
							filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
						/>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="#ffffff"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Messengers
						</Text>
						<Text
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
						>
							Skype, ICQ, Jabber (XMPP), MSN and others.Using the keylogger – applicaon/site – screenshot link, you can
					track the correspondence of any instant messengers, chats and other communicaons over the Internet.
						</Text>
					</Box>
				</StackItem>
				<StackItem lg-width="50%" md-width="100%" width="33.3333%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					<Box
						background="#030303"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 20px 20px 20px"
						border-radius="24px"
						border-style="solid"
						height="100%"
						border-color="rgba(255, 255, 255, 0.05)"
						border-width="1px"
						hover-transform="translateY(-10px)"
						flex-direction="column"
						align-items="flex-start"
						padding="42px 42px 60px 42px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						display="flex"
					>
						<Image
							loading="lazy"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/monitor-camera%201.svg?v=2021-04-07T15:13:35.532Z"
							object-position="0% 0%"
							margin="10px 0px 30px -9px"
							filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
						/>
						<Text
							color="#ffffff"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
						>
							Applications
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Facts about installing and launching applicaons, duraon of use, screenshots of the screen when changing the
					window focus. Blocking the launch of processes and applicaons
						</Text>
					</Box>
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					<Box
						padding="42px 42px 60px 42px"
						border-width="1px"
						flex-direction="column"
						align-items="flex-start"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
						hover-transform="translateY(-10px)"
						sm-padding="10px 20px 20px 20px"
						display="flex"
						border-radius="24px"
						height="100%"
						md-flex-direction="column"
						border-color="rgba(255, 255, 255, 0.05)"
						border-style="solid"
						background="#030303"
					>
						<Image
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Folder,%20Eye%201.svg?v=2021-04-07T15:14:44.811Z"
							object-position="0% 0%"
							margin="10px 0px 30px -9px"
							filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							loading="lazy"
						/>
						<Text
							display="inline-block"
							color="#ffffff"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
						>
							Files
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Registration of all operations with files and folders, including network files. Creation of shadow copies of
					files sent outside the organization.
						</Text>
					</Box>
				</StackItem>
				<StackItem lg-width="50%" md-width="100%" width="33.3333%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					<Box
						flex-direction="column"
						hover-transform="translateY(-10px)"
						sm-padding="10px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						border-radius="24px"
						background="#030303"
						height="100%"
						md-display="flex"
						md-flex-direction="column"
						align-items="flex-start"
						border-style="solid"
						border-width="1px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						display="flex"
						padding="42px 42px 60px 42px"
					>
						<Image
							loading="lazy"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/usb-cable%201.svg?v=2021-04-07T20:46:03.028Z"
							object-position="0% 0%"
							margin="10px 0px 30px -9px"
							filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
						/>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="#ffffff"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							USB ports
						</Text>
						<Text
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
						>
							Monitoring of operations with removable media. Blocking USB devices by class and Hardware ID. Restricting
					recording on USB and CD.
						</Text>
					</Box>
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					<Box
						md-display="flex"
						md-flex-direction="column"
						border-radius="24px"
						border-width="1px"
						height="100%"
						align-items="flex-start"
						border-style="solid"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						display="flex"
						padding="42px 42px 60px 42px"
						sm-padding="10px 20px 20px 20px"
						flex-direction="column"
						background="#030303"
						hover-transform="translateY(-10px)"
						border-color="rgba(255, 255, 255, 0.05)"
					>
						<Image
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/document-printer%201.svg?v=2021-04-07T15:14:34.584Z"
							object-position="0% 0%"
							margin="10px 0px 30px -9px"
							filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							loading="lazy"
						/>
						<Text
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="#ffffff"
						>
							Printing
						</Text>
						<Text
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
						>
							Registration of print facts: user, me, computer, number of pages, etc. Creation of shadow copies of printed
					files.
						</Text>
					</Box>
				</StackItem>
				<StackItem display="flex" lg-width="50%" md-width="100%" width="33.3333%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					<Box
						border-width="1px"
						background="#030303"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						padding="42px 42px 60px 42px"
						md-flex-direction="column"
						height="100%"
						hover-transform="translateY(-10px)"
						md-display="flex"
						sm-padding="10px 20px 20px 20px"
						border-radius="24px"
						border-style="solid"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						border-color="rgba(255, 255, 255, 0.05)"
					>
						<Image
							loading="lazy"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Servers,%20Databases,%20Network%201.svg?v=2021-04-07T20:55:21.807Z"
							object-position="0% 0%"
							margin="10px 0px 30px -9px"
							filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
						/>
						<Text
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="#ffffff"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
						>
							Network acvity
						</Text>
						<Text
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
						>
							Registration of network connections and control of encrypted traffic, website visits, and user searches.
						</Text>
					</Box>
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					<Box
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-flex-direction="column"
						border-color="rgba(255, 255, 255, 0.05)"
						background="#030303"
						hover-transform="translateY(-10px)"
						md-display="flex"
						sm-padding="10px 20px 20px 20px"
						flex-direction="column"
						height="100%"
						border-width="1px"
						border-style="solid"
						padding="42px 42px 60px 42px"
						display="flex"
						align-items="flex-start"
						border-radius="24px"
					>
						<Image
							loading="lazy"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Phone,%20Call.3%201.svg?v=2021-04-07T20:55:43.837Z"
							object-position="0% 0%"
							margin="10px 0px 30px -9px"
							filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
						/>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="#ffffff"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							SIP telephony
						</Text>
						<Text
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
						>
							Registration of facts and duration of calls, interception of SMS-messages.
						</Text>
					</Box>
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					<Box
						padding="42px 42px 60px 42px"
						height="100%"
						align-items="flex-start"
						background="#030303"
						md-display="flex"
						md-flex-direction="column"
						border-color="rgba(255, 255, 255, 0.05)"
						flex-direction="column"
						border-radius="24px"
						border-style="solid"
						hover-transform="translateY(-10px)"
						sm-padding="10px 20px 20px 20px"
						display="flex"
						border-width="1px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
					>
						<Image
							filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							loading="lazy"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Webcam%201.svg?v=2021-04-07T20:56:08.549Z"
							object-position="0% 0%"
							margin="10px 0px 30px -9px"
						/>
						<Text
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="#ffffff"
						>
							Audio and video registration
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Environment recording from microphones, desktop video, screenshots of screens and snapshots from webcam.
						</Text>
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<Section background="#000000" padding="36px 0 68px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text
				margin="0px 0px 0px 0px"
				width="50%"
				lg-font="normal 700 48px/73px --fontFamily-googleInter"
				font="normal 700 72px/73px --fontFamily-googleInter"
				color="#ffffff"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				display="inline-block"
			>
				Investigation of incidents
			</Text>
		</Section>
		<Section background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonleft-min.png?v=2021-04-29T08:46:33.454Z) left 20%/35% no-repeat,#000000" md-padding="30px 0 30px 0" padding="90px 0 90px 0">
			<Override slot="SectionContent" max-width="1300px" align-items="center" width="90%" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				<StackItem width="45%" display="flex" lg-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						lg-align-items="center"
						sm-padding="20px 0px 42px 0px"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						padding="20px 42px 42px 42px"
					/>
					<Text
						font="normal 600 36px/45px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#ffffff"
						lg-text-align="center"
						sm-font="normal 600 32px/35px --fontFamily-googleInter"
					>
						StaffCop is a time machine!
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-text-align="center"
					>
						You can refer back to any point in time, to view the actions of an employee at the specified time and what
				events led to the possibility of an incident
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-text-align="center"
						font="--lead"
					>
						The multilevel report designer allows you to get the required data set “on the go”. Searching for keywords and
				regular phrases will reduce the investigation me from the computer microphone to a minimum and will also allow
				you to hear what was happening at the right moment.
					</Text>
				</StackItem>
				<StackItem width="55%" display="flex" lg-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="space-between"
						padding="0px 0px 0px 0px"
						lg-align-items="center"
						position="relative"
					/>
					<Box
						top="0px"
						left="auto"
						bottom="auto"
						background="linear-gradient(278.48deg,#000000 22.4%,rgba(0, 0, 0, 0.75) 41.4%,rgba(196, 196, 196, 0) 86.67%,rgba(126, 126, 126, 0.08) 116.62%)"
						right="auto"
						height="100%"
						width="100%"
						position="absolute"
					/>
					<Image
						height="auto"
						margin="0px 0px 0px -2px"
						padding="0px 0px 0px 0px"
						max-height="592px"
						loading="lazy"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/staticphoto.png?v=2021-04-29T08:36:55.625Z"
						width="100%"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/staticphoto.png?v=2021-04-29T08%3A36%3A55.625Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/staticphoto.png?v=2021-04-29T08%3A36%3A55.625Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/staticphoto.png?v=2021-04-29T08%3A36%3A55.625Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/staticphoto.png?v=2021-04-29T08%3A36%3A55.625Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/staticphoto.png?v=2021-04-29T08%3A36%3A55.625Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/staticphoto.png?v=2021-04-29T08%3A36%3A55.625Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/staticphoto.png?v=2021-04-29T08%3A36%3A55.625Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="90px 0 90px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonright-min.png?v=2021-04-29T08:46:23.538Z) right 20%/35% no-repeat,#000000" md-padding="30px 0 30px 0">
			<Override slot="SectionContent" max-width="1300px" align-items="center" width="90%" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				<StackItem
					md-width="100%"
					lg-order="1"
					width="55%"
					display="flex"
					lg-width="100%"
				>
					<Override
						slot="StackItemContent"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-end"
						justify-content="flex-end"
						padding="0px 0px 0px 0px"
						lg-align-items="center"
						position="relative"
					/>
					<Box
						right="auto"
						height="100%"
						width="100%"
						position="absolute"
						top="0px"
						left="0px"
						bottom="auto"
						background="linear-gradient(278.46deg,rgba(126, 126, 126, 0) 0%,rgba(196, 196, 196, 0) 47.1%,rgba(0, 0, 0, 0.75) 69.5%,#000000 85.2%)"
					/>
					<Image
						loading="lazy"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/quisc.png?v=2021-04-29T08:36:44.700Z"
						width="100%"
						height="auto"
						margin="0px -2px 0px 0px"
						padding="0px 0px 0px 0px"
						max-height="592px"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/quisc.png?v=2021-04-29T08%3A36%3A44.700Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/quisc.png?v=2021-04-29T08%3A36%3A44.700Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/quisc.png?v=2021-04-29T08%3A36%3A44.700Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/quisc.png?v=2021-04-29T08%3A36%3A44.700Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/quisc.png?v=2021-04-29T08%3A36%3A44.700Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/quisc.png?v=2021-04-29T08%3A36%3A44.700Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/quisc.png?v=2021-04-29T08%3A36%3A44.700Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
				</StackItem>
				<StackItem width="45%" display="flex" lg-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						padding="20px 42px 42px 42px"
						lg-align-items="center"
						sm-padding="20px 0px 42px 0px"
					/>
					<Text
						lg-text-align="center"
						font="normal 600 36px/45px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#ffffff"
					>
						Quick! Even with big data
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-text-align="center"
					>
						You can refer back to any point in time, to view the actions of an employee at the specified time and what
				events led to the possibility of an incident
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-text-align="center"
					>
						The unique combination of PostgreSQL and ClickHouse provides tremendous data processing speed. You don’t need to
				set the report generation overnight, only to find out that there was nothing you need – invesgate here and now!
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="90px 0 90px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonleft-min.png?v=2021-04-29T08:46:33.454Z) left 20%/35% no-repeat,#000000" md-padding="30px 0 30px 0">
			<Override slot="SectionContent" align-items="center" width="90%" max-width="1300px" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				<StackItem md-width="100%" width="45%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						padding="20px 42px 42px 42px"
						lg-align-items="center"
						sm-padding="20px 0px 42px 0px"
						border-radius="8px"
					/>
					<Text
						font="normal 600 36px/45px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#ffffff"
						lg-text-align="center"
					>
						Relaonship graphs
					</Text>
					<Text
						color="rgba(255, 255, 255, 0.6)"
						lg-text-align="center"
						font="--lead"
						margin="0px 0px 42px 0px"
						display="inline-block"
					>
						A clear view of the communications between employees and their nature. A scheme for migrating files within an
				organization and transferring them outside.
					</Text>
					<Text
						lg-text-align="center"
						font="normal 600 36px/45px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#ffffff"
					>
						Anomaly detection
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-text-align="center"
					>
						Linear, pie, histograms and analycal tables, to help present the data in a convenient form.
					</Text>
				</StackItem>
				<StackItem width="55%" display="flex" lg-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="space-between"
						padding="0px 0px 0px 0px"
						lg-align-items="center"
						position="relative"
					/>
					<Box
						left="auto"
						bottom="auto"
						background="linear-gradient(278.48deg,#000000 22.4%,rgba(0, 0, 0, 0.75) 41.4%,rgba(196, 196, 196, 0) 86.67%,rgba(126, 126, 126, 0.08) 116.62%)"
						right="auto"
						height="100%"
						width="100%"
						position="absolute"
						top="0px"
					/>
					<Image
						padding="0px 0px 0px 0px"
						max-height="592px"
						loading="lazy"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mokap1.png?v=2021-04-29T08:35:58.235Z"
						width="100%"
						height="auto"
						margin="0px 0px 0px -2px"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mokap1.png?v=2021-04-29T08%3A35%3A58.235Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mokap1.png?v=2021-04-29T08%3A35%3A58.235Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mokap1.png?v=2021-04-29T08%3A35%3A58.235Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mokap1.png?v=2021-04-29T08%3A35%3A58.235Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mokap1.png?v=2021-04-29T08%3A35%3A58.235Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mokap1.png?v=2021-04-29T08%3A35%3A58.235Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mokap1.png?v=2021-04-29T08%3A35%3A58.235Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="90px 0 90px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonright-min.png?v=2021-04-29T08:46:23.538Z) right 20%/35% no-repeat,#000000" md-padding="30px 0 30px 0">
			<Override slot="SectionContent" max-width="1300px" align-items="center" width="90%" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				<StackItem
					display="flex"
					lg-width="100%"
					md-width="100%"
					lg-order="1"
					width="55%"
				>
					<Override
						slot="StackItemContent"
						justify-content="flex-end"
						padding="0px 0px 0px 0px"
						lg-align-items="center"
						position="relative"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-end"
					/>
					<Box
						left="0px"
						bottom="auto"
						background="linear-gradient(278.46deg,rgba(126, 126, 126, 0) 0%,rgba(196, 196, 196, 0) 47.1%,rgba(0, 0, 0, 0.75) 69.5%,#000000 85.2%)"
						right="auto"
						height="100%"
						width="100%"
						position="absolute"
						top="0px"
					/>
					<Image
						height="auto"
						margin="0px -2px 0px 0px"
						padding="0px 0px 0px 0px"
						max-height="592px"
						loading="lazy"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/diagrama.png?v=2021-04-29T08:35:43.745Z"
						width="100%"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/diagrama.png?v=2021-04-29T08%3A35%3A43.745Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/diagrama.png?v=2021-04-29T08%3A35%3A43.745Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/diagrama.png?v=2021-04-29T08%3A35%3A43.745Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/diagrama.png?v=2021-04-29T08%3A35%3A43.745Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/diagrama.png?v=2021-04-29T08%3A35%3A43.745Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/diagrama.png?v=2021-04-29T08%3A35%3A43.745Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/diagrama.png?v=2021-04-29T08%3A35%3A43.745Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
				</StackItem>
				<StackItem md-width="100%" width="45%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						padding="20px 42px 42px 42px"
						lg-align-items="center"
						sm-padding="20px 0px 42px 0px"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
					/>
					<Text
						font="normal 600 36px/45px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#ffffff"
						lg-text-align="center"
					>
						Thermal diagrams
					</Text>
					<Text
						margin="0px 0px 47px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-text-align="center"
						font="--lead"
					>
						Convenient for determining the intensity of activity and events concerning employees.
					</Text>
					<Text
						color="#ffffff"
						lg-text-align="center"
						font="normal 600 36px/45px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						display="inline-block"
					>
						Dimension cards
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 42px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-text-align="center"
					>
						Summary reports displaying the characteriscs of the subject and the events associated with it. Employee, file,
				site cards, etc
					</Text>
					<Text
						display="inline-block"
						color="#ffffff"
						lg-text-align="center"
						font="normal 600 36px/45px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
					>
						Data export and pricing
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-text-align="center"
					>
						Summary reports displaying the characteriscs of the subject and the events associated with it. Employee, file,
				site cards, etc
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section background="#000000" md-padding="30px 0 30px 0" padding="70px 0 52px 0">
			<Override slot="SectionContent" max-width="none" align-items="center" width="90%" />
			<Text
				margin="0px 0px 18px 0px"
				display="inline-block"
				color="#ffffff"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				font="normal 700 72px/72px --fontFamily-googleInter"
				width="65%"
				lg-font="normal 700 48px/52px --fontFamily-googleInter"
				letter-spacing="-2%"
			>
				Remote administration and it audit
			</Text>
			<Text
				color="#9B9FAA"
				letter-spacing="-0.01em"
				margin="8px 0px 0px 0px"
				text-align="center"
				width="50%"
				md-width="80%"
				sm-font="normal 400 16px/140% --fontFamily-googleInter"
				font="normal 400 18px/160% --fontFamily-googleInter"
			>
				Monitoring processes and applications, system events and connecting to a remote desktop make StaffCop Enterprise an
		indispensable assistant for an IT specialist.
			</Text>
		</Section>
		<Section padding="0px 0 0px 0" background="#000000">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Section padding="30px 0 90px 0" lg-padding="70px 0 70px 0">
				<Override slot="SectionContent" max-width="1200px" align-items="center" />
				<Stack
					align-items="center"
					justify-content="center"
					gap="0px"
					border-radius="30px"
					border-color="rgba(255, 255, 255, 0.05"
					width="100%"
					background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/greenfonm-min.png?v=2021-04-29T08:46:12.583Z) center/cover no-repeat,#030303"
					position="relative"
					border-width="1px"
					margin="0px 0px 0px 0px"
					overflow-y="hidden"
					border-style="solid"
				>
					<Box
						bottom="0px"
						height="100%"
						left="auto"
						right="auto"
						z-index="5"
						border-radius="15px 0px 0px 0px"
						lg-display="none"
						width="100%"
						position="absolute"
						top="auto"
						background="linear-gradient(20deg,#000000 0%,rgba(0, 0, 0, 0.75) 43.8%,rgba(196, 196, 196, 0) 79.1%,rgba(126, 126, 126, 0) 111.17%)"
						max-height="285px"
						max-width="768px"
					/>
					<StackItem width="100%" display="flex" padding="16px 16px 16px 16px">
						<Override
							slot="StackItemContent"
							padding="60px 0px 0px 0px"
							sm-padding="20px 0px 0px 0px"
							md-padding="50px 0px 0px 0px"
							lg-width="100%"
							border-radius="6px"
							position="relative"
							z-index="2"
							flex-direction="column"
							border-width="0px"
							align-items="center"
							justify-content="center"
							lg-padding="80px 0px 0px 0px"
						/>
						<Text
							md-font="normal 700 30px/40px Inter, sans-serif"
							lg-font="normal 700 40px/46px --fontFamily-googleInter"
							sm-margin="0px 0px 24px 0px"
							font="normal 700 45px/56px --fontFamily-googleInter"
							margin="0px 0px 54px 0px"
							display="inline-block"
							lg-width="90%"
							sm-font="normal 700 20px/30px Inter, sans-serif"
							color="#ffffff"
							text-align="center"
							width="70%"
						>
							All data is consolidated in one place, no more wasted time with logs and proxies
						</Text>
						<Box
							display="flex"
							sm-flex-direction="column"
							sm-align-items="center"
							sm-justify-content="center"
							sm-margin="0px 0px 27px 0px"
							margin="0px 0px 67px 0px"
						>
							<Link
								text-decoration-line="initial"
								hover-background="#409EEB"
								transition="-webkit-transition: all .3s;  transition: all .3s"
								sm-padding="16px 12px 16px 12px"
								sm-font="500 15px/22px Inter, sans-serif"
								sm-margin="0px 0px 18px 0px"
								border-radius="40px"
								margin="0px 18px 0px 0px"
								box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
								md-padding="16px 20px 16px 20px"
								z-index="4"
								padding="16px 38px 16px 38px"
								border-color="--color-primary"
								border-style="solid"
								background="--color-primary"
								position="relative"
								href="/request-demo/"
								border-width="1px"
								color="#ffffff"
								font="--menu"
							>
								Request demo
							</Link>
							<Link
								font="--menu"
								text-align="center"
								sm-font="500 15px/22px Inter, sans-serif"
								transition="-webkit-transition: all .3s;  transition: all .3s"
								sm-padding="16px 34px 16px 34px"
								padding="16px 68px 16px 68px"
								border-color="--color-primary"
								border-width="2px"
								hover-background="--color-primary"
								border-radius="40px"
								position="relative"
								z-index="4"
								md-padding="16px 40px 16px 40px"
								href="/pricing/"
								border-style="solid"
								text-decoration-line="initial"
								color="#ffffff"
							>
								Pricing
							</Link>
						</Box>
						<Text
							color="#ffffff"
							letter-spacing="-0.01em"
							text-align="center"
							sm-margin="0px 0px 55px 0px"
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="8px 0px 55px 0px"
							width="50%"
							md-width="80%"
							sm-font="normal 300 16px/140% --fontFamily-googleInter"
						>
							Register and block the connection of USB devices by device class. Control of file  operations and shadow
					copies of files copied to USB, read-only mode for removable
						</Text>
						<Image
							nout-width="70%"
							loading="lazy"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/bottomimg.png?v=2021-04-07T22:06:29.089Z"
							srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/bottomimg.png?v=2021-04-07T22%3A06%3A29.089Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/bottomimg.png?v=2021-04-07T22%3A06%3A29.089Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/bottomimg.png?v=2021-04-07T22%3A06%3A29.089Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/bottomimg.png?v=2021-04-07T22%3A06%3A29.089Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/bottomimg.png?v=2021-04-07T22%3A06%3A29.089Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/bottomimg.png?v=2021-04-07T22%3A06%3A29.089Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/bottomimg.png?v=2021-04-07T22%3A06%3A29.089Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
						/>
					</StackItem>
				</Stack>
			</Section>
			<Section background="#000000 url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonchikgren.png?v=2021-04-29T08:29:09.007Z) center center/cover no-repeat" border-color="#161616" padding="48px 0 90px 0">
				<Override slot="SectionContent" max-width="1200px" position="relative" align-items="center" />
				<Text
					margin="0px 0px 60px 0px"
					color="#ffffff"
					letter-spacing="-2%"
					text-align="center"
					lg-font="normal 700 48px/73px --fontFamily-googleInter"
					font="normal 700 72px/73px --fontFamily-googleInter"
					md-font="normal 700 30px/40px Inter, sans-serif"
					sm-font="normal 700 24px/30px Inter, sans-serif"
					display="inline-block"
				>
					Controlling employees on GNU/Linux
				</Text>
				<Stack margin="0px 0px 0px 0px" justify-content="center">
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						<Box
							hover-transform="translateY(-10px)"
							padding="42px 42px 42px 42px"
							border-style="solid"
							background="#030303"
							flex-direction="column"
							border-width="1px"
							md-flex-direction="column"
							display="flex"
							align-items="flex-start"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							border-color="rgba(255, 255, 255, 0.05)"
							border-radius="24px"
							md-display="flex"
							sm-padding="10px 20px 20px 20px"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrow-circle-login%201.svg?v=2021-04-07T23:15:44.596Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Login registration
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Users are registered by the system each me they log in and log out. The log includes users who log in
						locally and remotely, including SSH connections.
							</Text>
						</Box>
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						<Box
							border-radius="24px"
							background="#030303"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							align-items="flex-start"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							padding="42px 42px 42px 42px"
							md-flex-direction="column"
							display="flex"
							height="100%"
							sm-padding="10px 20px 20px 20px"
							flex-direction="column"
						>
							<Image object-position="0% 0%" margin="10px 0px 30px -9px" loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/usb-flash-drive-1%201.svg?v=2021-04-07T23:17:03.245Z" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Registering USB Devices
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Flash drives, printers and any other peripheral devices are registered into the log. The administrator can
						analyze where and when the media was connected and track which computers the devices of interest were
						connected to.
							</Text>
						</Box>
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						<Box
							md-flex-direction="column"
							border-radius="24px"
							border-style="solid"
							height="100%"
							display="flex"
							padding="42px 42px 42px 42px"
							hover-transform="translateY(-10px)"
							md-display="flex"
							flex-direction="column"
							align-items="flex-start"
							border-width="1px"
							background="#030303"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Panorama,%20Photo,%20Image%201.svg?v=2021-04-07T23:17:38.631Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
								font="normal 700 24px/140% --fontFamily-googleInter"
							>
								Screenshots
							</Text>
							<Text
								sm-font="normal 400 16px/140% Inter, sans-serif"
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
							>
								To ensure integrity of business flows and information security for banks and financial organizations.
							</Text>
						</Box>
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						<Box
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							sm-padding="10px 20px 20px 20px"
							border-radius="24px"
							height="100%"
							display="flex"
							align-items="flex-start"
							border-width="1px"
							background="#030303"
							md-flex-direction="column"
							border-color="rgba(255, 255, 255, 0.05)"
							flex-direction="column"
							padding="42px 42px 42px 42px"
							border-style="solid"
							md-display="flex"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Chrome%201.svg?v=2021-04-07T23:24:47.950Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
							>
								History and times of website visits
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								The system registers website visits in tabs of Chrome, Firefox and browsers based on them. In addition, the
						system calculates the time spent on websites.
							</Text>
						</Box>
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						<Box
							border-style="solid"
							md-display="flex"
							align-items="flex-start"
							border-radius="24px"
							border-width="1px"
							padding="42px 42px 42px 42px"
							height="100%"
							border-color="rgba(255, 255, 255, 0.05)"
							background="#030303"
							sm-padding="10px 20px 20px 20px"
							md-flex-direction="column"
							display="flex"
							flex-direction="column"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/programming-code-folder%201.svg?v=2021-04-07T23:25:03.065Z" object-position="0% 0%" margin="10px 0px 30px -9px" loading="lazy" />
							<Text
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
								font="normal 700 24px/140% --fontFamily-googleInter"
							>
								File operations
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								StaffCop registers file operations: read, write, delete, create and rename. Creation of shadow copies.
							</Text>
						</Box>
					</StackItem>
					<StackItem md-width="100%" width="33.3333%" display="flex" lg-width="50%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						<Box
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
							border-radius="24px"
							border-style="solid"
							sm-padding="10px 20px 20px 20px"
							height="100%"
							hover-transform="translateY(-10px)"
							padding="42px 42px 42px 42px"
							border-width="1px"
							background="#030303"
							md-display="flex"
							md-flex-direction="column"
							border-color="rgba(255, 255, 255, 0.05)"
						>
							<Image margin="10px 0px 30px -9px" loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/clock-time%201.svg?v=2021-04-07T23:25:16.779Z" object-position="0% 0%" />
							<Text
								sm-font="normal 600 20px/140% Inter, sans-serif"
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
							>
								Application Activity Time
							</Text>
							<Text
								sm-font="normal 400 16px/140% Inter, sans-serif"
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
							>
								The system records the user’s time in applications. From the collected data, a report on the productivity of
						employees is generated according to the specified criteria. The report data is compared with screenshots by
						time stamps.
							</Text>
						</Box>
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						<Box
							hover-transform="translateY(-10px)"
							flex-direction="column"
							border-radius="24px"
							padding="42px 42px 42px 42px"
							background="#030303"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							border-width="1px"
							border-style="solid"
							md-display="flex"
							md-flex-direction="column"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							align-items="flex-start"
						>
							<Image
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/input-password-protectionnnn.svg?v=2021-04-07T23:27:24.867Z"
								object-position="0% 0%"
							/>
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Keylogger and registering bash commands
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								StaffCop supports interception of keystrokes at the core level to control the terminal of servers, as well
						as interception of X-sessions keyboard.
							</Text>
						</Box>
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
						<Box
							md-flex-direction="column"
							flex-direction="column"
							background="#030303"
							height="100%"
							md-display="flex"
							border-radius="24px"
							display="flex"
							align-items="flex-start"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							hover-transform="translateY(-10px)"
							sm-padding="10px 20px 20px 20px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
						>
							<Image
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/business-chart-searchhhh.svg?v=2021-04-07T23:27:48.920Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
							/>
							<Text
								sm-font="normal 600 20px/140% Inter, sans-serif"
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
							>
								Monitoring configurable log files usage
							</Text>
							<Text
								sm-font="normal 400 16px/140% Inter, sans-serif"
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
							>
								Registration of facts and duration of calls, interception of SMS-messages.
							</Text>
						</Box>
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						<Box
							hover-transform="translateY(-10px)"
							md-display="flex"
							padding="42px 42px 42px 42px"
							background="#030303"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="flex-start"
							border-style="solid"
							border-width="1px"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							md-flex-direction="column"
							border-radius="24px"
							display="flex"
							flex-direction="column"
							sm-padding="10px 20px 20px 20px"
						>
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mic-recccccc.svg?v=2021-04-07T23:27:35.842Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Microphone recording
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Environment recording from microphones, desktop video, screenshots of screens and snapshots from webcam.
							</Text>
						</Box>
					</StackItem>
				</Stack>
			</Section>
			<Section padding="70px 0 70px 0">
				<Override slot="SectionContent" background="#FAFCFF" border-radius="30px" max-width="1200px" />
				<Stack margin="0px 0px 0px 0px" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/backborder-min.png?v=2021-04-29T08:55:12.041Z) right/auto no-repeat scroll padding-box">
					<StackItem width="56%" display="flex" md-width="80%" sm-width="100%">
						<Override
							slot="StackItemContent"
							align-items="center"
							padding="0px 0px 0px 90px"
							md-padding="0px 0px 0px 20px"
							sm-padding="0px 0px 0px 0px"
						/>
						<Text
							font="normal 700 24px/28px --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							md-font="normal 700 20px/28px --fontFamily-googleInter"
							sm-text-align="center"
						>
							<Span
								white-space="normal"
								hyphens="manual"
								color="#E87F1F"
								word-break="normal"
								text-indent="0"
								text-overflow="clip"
								overflow-wrap="normal"
							>
								Astra Linux Special Editon
							</Span>
							special purpose operating system compability cerficate Included in The Unified Register of Russian Soware
					under No. 3337
						</Text>
					</StackItem>
					<StackItem display="flex" md-width="20%" sm-width="100%" width="44%">
						<Override slot="StackItemContent" justify-content="center" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/lunix.svg?v=2021-04-07T23:50:08.727Z" margin="0px 0px 0px -10px" />
					</StackItem>
				</Stack>
			</Section>
			<Section background="#000000 url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/redbakcground.png?v=2021-04-29T08:31:38.223Z) center center/80% no-repeat" border-color="#161616" padding="70px 0 70px 0">
				<Override slot="SectionContent" max-width="1200px" position="relative" align-items="center" />
				<Text
					display="inline-block"
					md-font="normal 700 30px/40px Inter, sans-serif"
					sm-font="normal 700 24px/30px Inter, sans-serif"
					font="normal 700 72px/73px --fontFamily-googleInter"
					margin="0px 0px 21px 0px"
					color="#ffffff"
					letter-spacing="-2%"
					text-align="center"
					lg-font="normal 700 48px/52px --fontFamily-googleInter"
				>
					9 important reasons
					<br />
					to choose StaffCop
				</Text>
				<Text
					width="50%"
					md-width="80%"
					sm-font="normal 400 16px/140% --fontFamily-googleInter"
					font="normal 400 18px/160% --fontFamily-googleInter"
					color="#9B9FAA"
					letter-spacing="-0.01em"
					margin="8px 0px 70px 0px"
					text-align="center"
				>
					To ensure integrity of business flows and information
					<br />
					security for banks and financial organizations
				</Text>
				<Stack margin="0px 0px 0px 0px" justify-content="center">
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						<Box
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							align-items="flex-start"
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-style="solid"
							height="100%"
							border-width="1px"
							background="#030303"
							md-display="flex"
							flex-direction="column"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/media-library-folder%203.svg?v=2021-04-08T00:08:36.544Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Users are registered by the system each me they log in and log out. The log includes users who log in
						locally and remotely, including SSH connections.
							</Text>
						</Box>
					</StackItem>
					<StackItem md-width="100%" width="33.3333%" display="flex" lg-width="50%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						<Box
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							height="100%"
							background="#030303"
							flex-direction="column"
							align-items="flex-start"
							border-width="1px"
							hover-transform="translateY(-10px)"
							border-style="solid"
							padding="42px 42px 42px 42px"
							md-display="flex"
							display="flex"
							border-radius="24px"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Speedometer%202.svg?v=2021-04-08T00:08:44.977Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Fast work on large amounts of data using modern ClickHouse and PostgreSQL databases based on OLAP cubes
						technology
							</Text>
						</Box>
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						<Box
							height="100%"
							sm-padding="10px 20px 20px 20px"
							flex-direction="column"
							border-width="1px"
							border-style="solid"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							border-radius="24px"
							md-flex-direction="column"
							border-color="rgba(255, 255, 255, 0.05)"
							md-display="flex"
							background="#030303"
							display="flex"
							align-items="flex-start"
							padding="42px 42px 42px 42px"
						>
							<Image object-position="0% 0%" margin="10px 0px 30px -9px" loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/monitor-list-hand-select%201.svg?v=2021-04-08T00:08:53.758Z" />
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Monitoring and managing workplaces from a single web interface, the ability to simply and safely organize
						access from anywhere on the Internet.
							</Text>
						</Box>
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" justify-content="flex-start" flex-direction="column" align-items="flex-start" />
						<Box
							background="#030303"
							md-display="flex"
							border-color="rgba(255, 255, 255, 0.05)"
							flex-direction="column"
							border-width="1px"
							height="100%"
							hover-transform="translateY(-10px)"
							padding="42px 42px 42px 42px"
							border-radius="24px"
							border-style="solid"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							display="flex"
							align-items="flex-start"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/headphones-support%201.svg?v=2021-04-08T00:19:43.953Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Detailed documentation, prompt and competent technical support. The project team provides full support from
						the initial testing phase.
							</Text>
						</Box>
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						<Box
							border-style="solid"
							align-items="flex-start"
							background="#030303"
							height="100%"
							hover-transform="translateY(-10px)"
							display="flex"
							flex-direction="column"
							border-width="1px"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							border-radius="24px"
							padding="42px 42px 42px 42px"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
						>
							<Image object-position="0% 0%" margin="10px 0px 30px -9px" loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Servers,%20Databases,%20Computer%201.svg?v=2021-04-08T00:19:55.231Z" />
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Work in any network infrastructure – suitable for monitoring a distributed branch network, remote offices
						and employees.
							</Text>
						</Box>
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						<Box
							md-flex-direction="column"
							flex-direction="column"
							align-items="flex-start"
							border-width="1px"
							height="100%"
							hover-transform="translateY(-10px)"
							md-display="flex"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-style="solid"
							background="#030303"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/settings-select%201.svg?v=2021-04-08T00:20:04.915Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
								font="normal 400 18px/160% --fontFamily-googleInter"
							>
								Possibility of customization to specific requirements, integration with other systems and customer’s
						business processes.
							</Text>
						</Box>
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
						<Box
							border-radius="24px"
							border-style="solid"
							flex-direction="column"
							padding="42px 42px 42px 42px"
							border-width="1px"
							height="100%"
							hover-transform="translateY(-10px)"
							md-display="flex"
							display="flex"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							md-flex-direction="column"
							background="#030303"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="flex-start"
						>
							<Image
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/linux%201.svg?v=2021-04-08T00:24:59.937Z"
								object-position="0% 0%"
							/>
							<Text
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
							>
								Unique monitoring functions of workstations and terminals of servers running MacOS, GNU/Linux systems –
						expands the control capabilies.
							</Text>
						</Box>
					</StackItem>
					<StackItem display="flex" lg-width="50%" md-width="100%" width="33.3333%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						<Box
							md-display="flex"
							flex-direction="column"
							align-items="flex-start"
							border-width="1px"
							background="#030303"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							border-radius="24px"
							height="100%"
							hover-transform="translateY(-10px)"
							md-flex-direction="column"
							padding="42px 42px 42px 42px"
							border-style="solid"
						>
							<Image
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Servers,%20Databases,%20Computer%201.svg?v=2021-04-08T00:19:55.231Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
								loading="lazy"
							/>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Work in any network infrastructure – suitable for monitoring a distributed branch network, remote offices
						and employees.
							</Text>
						</Box>
					</StackItem>
					<StackItem md-width="100%" width="33.3333%" display="flex" lg-width="50%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						<Box
							background="#030303"
							hover-transform="translateY(-10px)"
							md-flex-direction="column"
							border-color="rgba(255, 255, 255, 0.05)"
							border-radius="24px"
							border-style="solid"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							md-display="flex"
							flex-direction="column"
							align-items="flex-start"
							padding="42px 42px 42px 42px"
							border-width="1px"
							height="100%"
							sm-padding="10px 20px 20px 20px"
							display="flex"
						>
							<Image
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/money-bag-percent%201.svg?v=2021-04-08T00:25:13.688Z"
							/>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Minimal hardware requirements, reasonable cost, and perpetual licenses, resulting in low acquision,
						implementation and operating costs.
							</Text>
						</Box>
					</StackItem>
				</Stack>
			</Section>
			<Section border-color="#161616" padding="70px 0 70px 0" background="#000000">
				<Override slot="SectionContent" max-width="1200px" position="relative" align-items="center" />
				<Text
					margin="0px 0px 70px 0px"
					letter-spacing="-2%"
					text-align="center"
					lg-font="normal 700 48px/73px --fontFamily-googleInter"
					font="normal 700 72px/73px --fontFamily-googleInter"
					display="inline-block"
					color="#ffffff"
					md-font="normal 700 30px/40px Inter, sans-serif"
					sm-font="normal 700 24px/30px Inter, sans-serif"
				>
					Pilot project
				</Text>
				<Stack justify-content="center" margin="0px 0px 0px 0px">
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
						<Box
							hover-transform="translateY(-10px)"
							md-flex-direction="column"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							sm-padding="10px 20px 20px 20px"
							align-items="flex-start"
							border-radius="24px"
							md-display="flex"
							border-color="rgba(255, 255, 255, 0.05)"
							padding="42px 42px 42px 42px"
							border-style="solid"
							display="flex"
							flex-direction="column"
							border-width="1px"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Speedometer%202.svg?v=2021-04-08T00:08:44.977Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Fast
							</Text>
							<Text
								sm-font="normal 400 16px/140% Inter, sans-serif"
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
							>
								Users are registered by the system each me they log in
								<br />
								and log out. The log includes users who log in locally and
								<br />
								remotely, including SSH connections.
							</Text>
						</Box>
					</StackItem>
					<StackItem md-width="100%" width="33.3333%" display="flex" lg-width="50%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						<Box
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="flex-start"
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							background="#030303"
							md-flex-direction="column"
							md-display="flex"
							hover-transform="translateY(-10px)"
							border-style="solid"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							display="flex"
							flex-direction="column"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Cursor,%20Select,%20Hand,%20Double%20Click%201.svg?v=2021-04-08T00:30:56.465Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
							>
								Easy
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Skype, ICQ, Jabber (XMPP), MSN and others. Using the keylogger – application/site – screenshot link, you can
						track the correspondence of any instant messengers, chats and other communications over the Internet.
							</Text>
						</Box>
					</StackItem>
					<StackItem lg-width="50%" md-width="100%" width="33.3333%" display="flex">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						<Box
							border-radius="24px"
							border-style="solid"
							height="100%"
							align-items="flex-start"
							hover-transform="translateY(-10px)"
							md-flex-direction="column"
							border-color="rgba(255, 255, 255, 0.05)"
							border-width="1px"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							display="flex"
							flex-direction="column"
							padding="42px 42px 42px 42px"
							background="#030303"
							md-display="flex"
							sm-padding="10px 20px 20px 20px"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/group-elements-ticket%201.svg?v=2021-04-08T00:31:05.109Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Empowering
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								You will be able to immediately evaluate the whole range of tasks to be solved and make the right decision.
							</Text>
						</Box>
					</StackItem>
				</Stack>
			</Section>
			<Section padding="30px 0 112px 0" lg-padding="70px 0 70px 0">
				<Override slot="SectionContent" max-width="1200px" align-items="center" />
				<Stack
					overflow-y="hidden"
					gap="0px"
					border-radius="30px"
					border-width="1px"
					width="100%"
					margin="0px 0px 0px 0px"
					position="relative"
					border-color="rgba(255, 255, 255, 0.05"
					border-style="solid"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonrainbow-min.webp?v=2021-04-29T08:55:34.005Z) 0% 0% /auto repeat scroll padding-box"
					lg-overflow-x="hidden"
				>
					<StackItem padding="16px 16px 16px 16px" lg-width="100%" width="50%" display="flex">
						<Override
							slot="StackItemContent"
							sm-text-align="center"
							z-index="2"
							flex-direction="column"
							lg-padding="40px 0px 40px 40px"
							sm-padding="30px 30px 30px 30px"
							md-padding="40px 0px 40px 26px"
							border-radius="6px"
							border-width="0px"
							align-items="flex-start"
							justify-content="center"
							position="relative"
							padding="108px 0px 108px 78px"
							lg-width="100%"
						/>
						<Text
							md-font="normal 700 30px/40px Inter, sans-serif"
							sm-width="100%"
							margin="0px 0px 24px 0px"
							color="#ffffff"
							lg-width="90%"
							sm-text-align="center"
							font="normal 700 45px/56px --fontFamily-googleInter"
							display="inline-block"
							sm-font="normal 700 20px/30px Inter, sans-serif"
						>
							Test for free for up to 3 months on any number of stations
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							md-width="80%"
							sm-text-align="center"
							sm-margin="8px 0px 24px 0px"
							color="#9B9FAA"
							letter-spacing="-0.01em"
							margin="8px 0px 48px 0px"
							sm-font="normal 300 16px/140% --fontFamily-googleInter"
							lg-margin="8px 0px 98px 0px"
							md-margin="8px 0px 55px 0px"
							sm-width="100%"
						>
							Fully functional version. Technical support throughout the full project duration
						</Text>
						<Box
							margin="0px 0px 0px 0px"
							display="flex"
							sm-flex-direction="column"
							sm-align-items="center"
							sm-justify-content="center"
						>
							<Link
								text-decoration-line="initial"
								hover-background="#409EEB"
								margin="0px 18px 0px 0px"
								position="relative"
								sm-font="500 15px/22px Inter, sans-serif"
								z-index="4"
								sm-margin="0px 0px 18px 0px"
								border-radius="40px"
								font="600 18px/22px --fontFamily-googleInter"
								transition="-webkit-transition: all .3s;  transition: all .3s"
								md-padding="16px 20px 16px 20px"
								sm-padding="16px 12px 16px 12px"
								href="/request-demo/"
								padding="16px 38px 16px 38px"
								color="#111111"
								background="#ffffff"
							>
								Request demo
							</Link>
							<Link
								color="#ffffff"
								text-align="center"
								position="relative"
								hover-background="--color-primary"
								transition="-webkit-transition: all .3s;  transition: all .3s"
								z-index="4"
								href="/purchase"
								padding="16px 68px 16px 68px"
								border-radius="40px"
								border-color="#ffffff"
								text-decoration-line="initial"
								sm-padding="16px 34px 16px 34px"
								border-width="2px"
								border-style="solid"
								md-padding="16px 40px 16px 40px"
								font="600 18px/22px --fontFamily-googleInter"
								sm-font="500 15px/22px Inter, sans-serif"
							>
								Pricing
							</Link>
						</Box>
					</StackItem>
					<StackItem
						lg-position="absolute"
						lg-right="-8px"
						lg-left="auto"
						display="flex"
						lg-width="40%"
						lg-bottom="0px"
						lg-top="auto"
						sm-width="60%"
						width="50%"
						padding="16px 16px 16px 16px"
					>
						<Override
							slot="StackItemContent"
							border-radius="6px"
							height="100%"
							z-index="2"
							padding="0px 0px 0px 0px"
							sm-padding="50px 0px 0px 0px"
							md-padding="50px 0px 0px 0px"
							lg-width="100%"
							border-width="0px"
							align-items="flex-end"
							justify-content="flex-end"
							position="relative"
							flex-direction="column"
							lg-padding="80px 0px 0px 0px"
						/>
						<Image
							loading="lazy"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/lastimg.png?v=2021-04-08T00:44:51.033Z"
							width="100%"
							nout-width="70%"
							margin="0px 7px 0px 0px"
							srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/lastimg.png?v=2021-04-08T00%3A44%3A51.033Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/lastimg.png?v=2021-04-08T00%3A44%3A51.033Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/lastimg.png?v=2021-04-08T00%3A44%3A51.033Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/lastimg.png?v=2021-04-08T00%3A44%3A51.033Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/lastimg.png?v=2021-04-08T00%3A44%3A51.033Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/lastimg.png?v=2021-04-08T00%3A44%3A51.033Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/lastimg.png?v=2021-04-08T00%3A44%3A51.033Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
						/>
					</StackItem>
				</Stack>
			</Section>
			<Section padding="50px 0 60px 0" lg-padding="50px 0 20px 0">
				<Override slot="SectionContent" max-width="1200px" align-items="center" />
				<Stack width="100%" margin="0px 0px 0px 0px">
					<StackItem
						width="36%"
						display="flex"
						lg-width="100%"
						lg-align-items="center"
						lg-justify-content="center"
					>
						<Override slot="StackItemContent" lg-align-items="center" flex-direction="column" />
						<Image loading="lazy" width="250px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/logo_white%20%281%29.svg?v=2023-08-25T08:28:35.300Z" />
						<Text
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="31px 0px 24px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							md-text-align="center"
						>
							630090 ul. Kutateladze, 4g,
							<br />
							Novosibirsk, Russia.
							<br />
						</Text>
						<SocialMedia
							lg-justify-content="center"
							twitter="https://twitter.com/quarklyapp"
							youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
							telegram="https://t.me/StaffCop"
							justify-content="flex-start"
							background="rgba(0, 0, 0, 0)"
							facebook="https://www.facebook.com/quarklyapp/"
							vkontakte="https://vk.com/staffcop"
							align-items="center"
						>
							<Override slot="link-twitter" display="none" />
							<Override
								slot="link"
								color="#ffffff"
								hover-background="--color-primary"
								hover-border-radius="40px"
								background="rgba(237, 242, 246, 0)"
							/>
							<Override slot="link-facebook" display="none" />
							<Override slot="link-youtube" display="none" />
						</SocialMedia>
					</StackItem>
					<StackItem display="flex" lg-width="33.333%" md-width="100%" width="21.3%">
						<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" />
						<Text display="inline-block" color="rgba(255, 255, 255,1)" font="normal 700 18px/160% --fontFamily-googleInter" margin="0px 0px 27px 0px">
							ABOUT
						</Text>
						<Link
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 21px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
							href="/about-us/"
							color="rgba(255, 255, 255, 0.6)"
						>
							Company
						</Link>
						<Link
							href="/pricing/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 21px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
						>
							Pricing
						</Link>
					</StackItem>
					<StackItem
						width="21.3%"
						display="flex"
						lg-width="33.333%"
						md-width="50%"
						sm-width="100%"
					>
						<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" />
						<Text font="normal 700 18px/160% --fontFamily-googleInter" margin="0px 0px 27px 0px" display="inline-block" color="rgba(255, 255, 255,1)">
							LEARN
						</Text>
						<Link
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 21px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
							target="_blank"
							href="https://docs.staffcop.com"
							color="rgba(255, 255, 255, 0.6)"
						>
							Documentation
						</Link>
						<Link
							href="/white-papers/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 21px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
						>
							White Papers
						</Link>
					</StackItem>
					<StackItem
						display="flex"
						lg-width="33.333%"
						md-width="50%"
						sm-width="100%"
						width="21.3%"
					>
						<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" />
						<Text font="normal 700 18px/160% --fontFamily-googleInter" margin="0px 0px 27px 0px" display="inline-block" color="rgba(255, 255, 255,1)">
							SUPPORT
						</Text>
						<Link
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 21px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
							href="/partners/"
						>
							Our Partners
						</Link>
						<Box display="flex" align-items="center">
							<Icon icon={FaRegLifeRing} color="rgba(255, 255, 255, 0.6)" margin="0px 10px 0px 0px" category="fa" />
							<Link
								margin="0px 0px 0px 0px"
								hover-color="#ffffff"
								transition="all 1s ease 0s"
								href="/support/"
								color="rgba(255, 255, 255, 0.6)"
								text-decoration-line="initial"
								font="normal 300 18px/160% --fontFamily-googleInter"
							>
								Support Center
							</Link>
						</Box>
					</StackItem>
				</Stack>
			</Section>
		</Section>
		<Components.CopyrightBlack />
		<Components.ShowBox />
		<Components.GoogleAnalytics1 />
		<Components.GoogleAnalytics2 />
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
			<style place={"endOfHead"} rawKey={"606b01d8eaad287b684319f3"}>
				{".arrow-menu {\ncolor: #fff !important;\n}\n.menu-trigger {\ncolor: #fff !important;\n}"}
			</style>
			<script place={"endOfBody"} rawKey={"608468b60e18e2b62399f34c"} />
		</RawHtml>
	</Theme>;
});