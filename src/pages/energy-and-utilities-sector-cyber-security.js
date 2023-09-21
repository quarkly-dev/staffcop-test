import React from "react";
import theme from "theme";
import { Theme, Image, Link, Section, Text, Hr, Icon, Box, Span, Em } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Menu, Stack } from "@quarkly/components";
import * as Components from "components";
import { BsFillCircleFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"energy-and-utilities-sector-cyber-security"} />
		<Helmet>
			<title>
				Energy & Utilities Sector Cyber Security
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
		<Section
			border-color="#EDEDED"
			background="#ffffff"
			padding="0px 0 0px 0"
			sm-padding="12px 0 12px 0"
			lg-padding="15px 0 15px 0"
			border-style="solid"
			border-width="0px 0px 1px 0px"
			position="fixed"
			z-index="9"
		>
			<Override slot="SectionContent" max-width="1170px" />
			<Stack gap="0px" width="100%">
				{"    "}
				<StackItem
					nout-width="18%"
					lg-width="40%"
					sm-width="70%"
					width="20%"
					display="flex"
				>
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						sm-align-items="center"
						sm-justify-content="flex-start"
					/>
					<Link href="/" sm-margin="4px 0px 0px 0px">
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9%20%D1%81%20%D0%BA%D0%BE%D0%BF%D0%BE%D0%BC%20CMYK%20%281%29%20%281%29.svg?v=2023-08-25T08:25:06.042Z" padding="2px 0px 0px 0px" width="100%" />
						{"     "}
					</Link>
					{"       "}
				</StackItem>
				<StackItem
					width="60%"
					display="flex"
					nout-width="64%"
					lg-display="none"
					sm-width="32%"
				>
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Components.MyNav />
					<Link
						text-decoration-line="initial"
						font="--menu"
						color="#020202"
						padding="30px 15px 30px 15px"
						hover-color="--primary"
						href="/features/"
					>
						Features
					</Link>
					<Link
						font="--menu"
						color="#020202"
						padding="30px 15px 30px 15px"
						hover-color="--primary"
						href="/cases/"
						text-decoration-line="initial"
					>
						Cases
					</Link>
					<Link
						text-decoration-line="initial"
						font="--menu"
						color="#020202"
						padding="30px 15px 30px 15px"
						hover-color="--primary"
						href="/purchase/"
					>
						Purchase
					</Link>
					<Components.MyNav2 />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem
					nout-width="18%"
					lg-width="50%"
					sm-width="50%"
					sm-display="none"
					width="20%"
					display="flex"
				>
					<Override slot="StackItemContent" justify-content="flex-end" align-items="center" />
					<Link
						border-style="solid"
						hover-background="--color-primary"
						hover-color="#ffffff"
						sm-display="none"
						font="600 18px/22px --fontFamily-googleInter"
						border-width="2px"
						text-align="center"
						nout-padding="13px 15px 13px 15px"
						lg-margin="0px 8px 0px 0px"
						text-decoration-line="initial"
						padding="13px 29px 13px 29px"
						border-color="--color-primary"
						border-radius="40px"
						href="/request-demo/"
						color="--primary"
						transition="-webkit-transition: all .3s;  transition: all .3s"
					>
						Request demo
					</Link>
				</StackItem>
				<StackItem
					width="100%"
					nout-width="18%"
					lg-width="10%"
					sm-width="30%"
					lg-display="flex"
					display="none"
				>
					<Override slot="StackItemContent" lg-justify-content="center" justify-content="flex-end" align-items="center" />
					<Components.MobileSide2
						lg-z-index="5"
						lg-display="flex"
						lg-justify-content="center"
						lg-align-items="center"
						sm-align-items="center"
						sm-justify-content="flex-end"
						flex="1 1 auto"
						lg-position="relative"
					>
						<Override slot="Button Line2" lg-top="12px" lg-right="0px" />
						<Override
							slot="Button Line1 :closed"
							lg-width="80%"
							lg-top="12px"
							lg-bottom="auto"
							lg-left="auto"
							lg-right="auto"
							lg-height="30.99px"
						/>
						<Override slot="Content :closed" lg-transition="transform --transitionDuration-normal step-end 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut" lg-transform="translateY(-100%)" lg-opacity="0" />
						<Override
							slot="Button Line3 :closed"
							lg-width="50%"
							lg-background="#ffffff"
							lg-left="auto"
							lg-right="auto"
							lg-bottom="auto"
							lg-top="30px"
							lg-display="none"
						/>
						<Override slot="Button Line2 :open" lg-opacity="0" lg-width="32px" lg-display="none" />
						<Override
							slot="Button Line3 :open"
							lg-display="none"
							lg-width="36px"
							lg-transform="translateY(-12px) rotate(135deg)"
							lg-left="auto"
							lg-right="auto"
							lg-top="35px"
							lg-bottom="auto"
						/>
						<Override
							slot="Button"
							lg-background="--color-primary"
							display="none"
							lg-width="28px"
							lg-position="relative"
							lg-z-index="6"
							lg-box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							lg-display="block"
							lg-height="28px"
							lg-padding="9px 10px 10px 10px"
							lg-top="4px"
							lg-border-radius="1000%"
						/>
						<Override
							slot="Button Line"
							lg-bottom="auto"
							lg-top="22px"
							lg-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/palki.svg?v=2020-12-01T12:31:09.963Z) center center/cover no-repeat scroll padding-box"
							lg-width="100%"
							lg-left="auto"
							lg-right="auto"
						/>
						<Override slot="Button Line1" lg-width="44px" lg-top="0px" lg-right="0px" />
						<Override
							slot="Button Line2 :closed"
							lg-bottom="auto"
							lg-top="21px"
							lg-display="none"
							lg-width="50%"
							lg-background="#ffffff"
							lg-left="auto"
							lg-right="auto"
						/>
						<Override
							slot="Content"
							display="flex"
							align-items="center"
							lg-top={0}
							lg-overflow-y="scroll"
							lg-background="white"
							lg-flex-direction="column"
							lg-position="fixed"
							lg-left={0}
							lg-z-index="1"
							lg-width="100%"
							lg-height="100%"
						/>
						<Override
							slot="Button Line1 :open"
							lg-bottom="auto"
							lg-top="9px"
							lg-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/krestiiki.svg?v=2020-12-01T12:34:09.363Z) center center/cover no-repeat scroll padding-box"
							lg-height="80%"
							lg-width="70%"
							lg-left="auto"
							lg-right="auto"
						/>
						<Override
							slot="Button :open"
							lg-justify-content="center"
							lg-padding="10px 6px 9px 6px"
							lg-height="25.986px"
							lg-position="fixed"
							lg-top="18px"
							lg-width="32.99px"
							lg-display="flex"
							lg-align-items="center"
						/>
						<Override slot="Button Line3" lg-top="24px" lg-right="0px" lg-width="100%" />
						<Override
							slot="Content :open"
							lg-transform="translateY(0%)"
							lg-transition="transform --transitionDuration-normal step-start 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut"
							lg-opacity="1"
							lg-position="fixed"
						/>
						<Override
							slot="Button :closed"
							lg-align-items="center"
							lg-justify-content="center"
							md-top="0px"
							lg-top="0px"
							lg-display="flex"
							lg-padding="9px 9px 9px 9px"
						/>
						<Components.NestedMenu
							collapse
							depth="2"
							lg-width="100%"
							lg-right="auto"
							lg-left="auto"
							lg-flex-direction="column"
							lg-align-items="center"
							lg-margin="16px 0px 0px 0px"
						>
							<Override slot="Item-404" lg-display="none" />
							<Override slot="Link-index">
								Home
							</Override>
							<Override
								slot="Item"
								lg-box-shadow="none"
								lg-width="100%"
								lg-text-align="center"
								lg-display="flex"
								lg-align-items="center"
								lg-justify-content="center"
								lg-padding="14px 0px 14px 0px"
							/>
							<Override
								slot="Link"
								lg-color="--darkL1"
								lg-text-decoration-line="initial"
								lg-padding="5px 0px 5px 0px"
								lg-text-align="center"
								sm-padding="5px 5px 5px 5px"
								white-space="pre-wrap"
								lg-box-shadow="none"
								lg-font="--menu"
							/>
							<Override slot="Icon" lg-box-shadow="none" lg-padding="4px 0px 0px 4px" />
							<Override
								slot="Sub"
								lg-right="auto"
								lg-bottom="auto"
								lg-padding="1px 0px 1px 0px"
								lg-width="100%"
								lg-left="auto"
							/>
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
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="103px 0 18px 0" sm-padding="80px 0 18px 0">
			<Override slot="SectionContent" border-radius="6px" max-width="1170px" background="linear-gradient(0deg, rgba(0, 9, 27, 0.5), rgba(0, 9, 27, 0.5)),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectanglasdasdsaytre.png?v=2020-11-02T01:20:52.044Z) 0% 0% /auto repeat scroll padding-box" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="100%" display="flex" sm-align-items="center" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
						padding="40px 0px 40px 80px"
						md-padding="40px 20px 40px 20px"
						md-align-items="center"
					/>
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 30px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
						color="#ffffff"
						md-text-align="center"
					>
						Energy & Utilities Sector
						<br />
						Cyber Security
					</Text>
					<Text
						font="normal 300 18px/160% --fontFamily-googleInter"
						margin="0px 0px 16px 0px"
						display="inline-block"
						color="#ffffff"
						md-text-align="center"
					>
						Identify, Protect, Detect, Respond & Report on Healthcare Data Breaches
					</Text>
					{"    "}
					<Link
						background="--color-primary"
						hover-background="#409EEB"
						md-padding="16px 26px 16px 26px"
						href="/request-demo/"
						font="600 18px/22px --fontFamily-googleInter"
						border-radius="40px"
						padding="16px 38px 16px 38px"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						z-index="2"
						color="#ffffff"
						text-decoration-line="initial"
						sm-font="600 16px/22px --fontFamily-googleInter"
						sm-padding="16px 20px 16px 20px"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						position="relative"
						box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						margin="36px 0px 0px 0px"
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
				<StackItem sm-width="100%" nout-width="100%" width="70%" display="flex">
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
						StaffCop for the Energy & Utilities Sector
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="70%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						color="#555"
						md-font="400 14px/20px --fontFamily-googleInter"
						sm-text-align="center"
						text-align="justify"
						margin="0px 0px 30px 0px"
						display="inline-block"
						width="100%"
						md-width="100%"
					>
						In the past, the energy and utilities industry was mainly plagued by threats from external actors - a challenge it addressed by adopting better security measures. Now, it is difficult for outsider attackers to penetrate critical energy and utilities systems.
					</Text>
					<Text
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						margin="0px 0px 30px 0px"
						display="inline-block"
						width="100%"
						text-align="justify"
						font="400 18px/28px --fontFamily-googleInter"
						color="#555"
						sm-text-align="center"
					>
						Unfortunately, these criminals are adapting and have found a new way to carry out their attacks – they now recruit insiders, employees and contractors in these organizations to gain access. These insider attacks cost the energy industry tens of millions on average.
					</Text>
					<Text
						text-align="justify"
						font="400 18px/28px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						md-width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						sm-text-align="center"
						display="inline-block"
						color="#555"
						width="100%"
					>
						What’s more, large utilities often utilize contractors, outsourcing partners and suppliers for offshore operations, exploration, distribution, analysis and legal matters. These third-parties can easily expose the company to great financial, IP and other risks either accidentally or intentionally.
					</Text>
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						display="inline-block"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
						margin="0px 0px 30px 0px"
						color="#555"
					>
						In an industry where employees, vendors, and contractors have access to critical infrastructures and sensitive data on a regular basis, securing the resources and information is crucial for the industry as well as for the safety of the citizens utilizing their products and services.
					</Text>
					<Hr width="98%" margin="40px 0px 40px 0px" border-color="rgba(237, 237, 237, 1)" />
					<Text
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
						font="normal 700 32px/140% --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
					>
						StaffCop Combines Insider Threat Detection and Data Loss Prevention into a Single Integrated Solution for Energy & Utilities Companies
					</Text>
					<Text
						margin="30px 0px 30px 0px"
						color="#555"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						text-align="justify"
						font="400 18px/28px --fontFamily-googleInter"
						display="inline-block"
						width="100%"
						sm-text-align="center"
					>
						With StaffCop, energy and utility companies can monitor and protect critical infrastructure from malicious or accidental insider threats and meet compliance goals for NERC, FISMA, ISO 27001 with its powerful policy and rules engine, forensic audit, and reporting features.
					</Text>
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
							Offers operation-wide visibility into the user activity of critical infrastructure assets for both OT and IT systems.
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
							Prevents stealing of high value intellectual property like survey and testing data, drilling and logistics and so on.
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
						<Text sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555">
							Extends monitoring and control to all third-parties for secure collaboration on joint-venture projects.
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
							Limits the modification of system software, access elevation and other potential harmful activity by privileged users.
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
						<Text sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555">
							Defend customer information, employee privacy and corporate data.
						</Text>
					</Box>
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
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						padding="42px 37px 42px 37px"
						background="#FFFFFF"
						md-display="flex"
						flex-direction="column"
						justify-content="flex-start"
						border-radius="6px"
						border-width="1px"
						border-style="solid"
						md-flex-direction="column"
						border-color="rgba(255, 255, 255, 0.05)"
						align-items="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							border-radius="40px"
							border-width="1px"
							border-color="rgba(255, 255, 255, 0.05)"
							justify-content="center"
							width="48px"
							background="--color-primary"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							align-items="center"
							display="block"
							color="#ffffff"
							padding="13px 0px 13px 0px"
							border-style="solid"
							text-align="center"
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
							Monitor Critical Systems and Users
						</Text>
						<Text
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
						>
							StaffCop monitors all user activity over IT and OT systems and cloud for 22+ system objects.
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
						align-items="flex-start"
						justify-content="flex-start"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						border-radius="6px"
						md-display="flex"
						display="flex"
						padding="42px 37px 42px 37px"
						hover-transform="translateY(-10px)"
						border-color="rgba(255, 255, 255, 0.05)"
						flex-direction="column"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
					>
						<Text
							background="--color-primary"
							align-items="center"
							text-align="center"
							font="700 18px/22px --fontFamily-googleInter"
							border-radius="40px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							display="block"
							margin="0px 0px 0px 0px"
							color="#ffffff"
							padding="13px 0px 13px 0px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							justify-content="center"
							width="48px"
						>
							2
						</Text>
						<Text
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
						>
							Detect Insider Threats
						</Text>
						<Text
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
						>
							StaffCop detects malicious activities and anomalies and takes immediate actions like warn, lockout user or take remote control of a system when rule violation is detected.
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
						padding="42px 37px 42px 37px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						justify-content="flex-start"
						border-width="1px"
						background="#FFFFFF"
						height="100%"
						md-display="flex"
						border-radius="6px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						align-items="flex-start"
						flex-direction="column"
						border-style="solid"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
					>
						<Text
							text-align="center"
							background="--color-primary"
							border-width="1px"
							width="48px"
							margin="0px 0px 0px 0px"
							display="block"
							align-items="center"
							justify-content="center"
							border-radius="40px"
							border-color="rgba(255, 255, 255, 0.05)"
							padding="13px 0px 13px 0px"
							border-style="solid"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						>
							3
						</Text>
						<Text
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
						>
							Discover & Categorize Sensitive Data Automatically
						</Text>
						<Text
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
						>
							Deep content inspection in both structured and unstructured data accurately and identifies classified and confidential information.
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
						padding="42px 37px 42px 37px"
						border-style="solid"
						hover-transform="translateY(-10px)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						justify-content="flex-start"
						border-radius="6px"
						border-width="1px"
						background="#FFFFFF"
						height="100%"
						sm-padding="20px 20px 20px 20px"
						md-display="flex"
						md-flex-direction="column"
						flex-direction="column"
						align-items="flex-start"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						border-color="rgba(255, 255, 255, 0.05)"
					>
						<Text
							font="700 18px/22px --fontFamily-googleInter"
							background="--color-primary"
							border-radius="40px"
							justify-content="center"
							margin="0px 0px 0px 0px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="block"
							text-align="center"
							color="#ffffff"
							padding="13px 0px 13px 0px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-style="solid"
							align-items="center"
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
							Safeguard Data and IP
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							StaffCop protects confidential design, production and exploration plans, IP and other sensitive information from falling into the wrong hands.
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
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						height="100%"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						border-radius="6px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						hover-transform="translateY(-10px)"
						display="flex"
						padding="42px 37px 42px 37px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
					>
						<Text
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-color="rgba(255, 255, 255, 0.05)"
							width="48px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							background="--color-primary"
							border-radius="40px"
							margin="0px 0px 0px 0px"
							align-items="center"
							text-align="center"
							padding="13px 0px 13px 0px"
							display="block"
							justify-content="center"
							border-width="1px"
							border-style="solid"
						>
							5
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Enable Secure Collaboration
						</Text>
						<Text
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
						>
							Leverages a combination of terminal servers, VMWare or Citrix servers to allow collaboration with partners in a secure sandbox.
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
						md-display="flex"
						md-flex-direction="column"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						padding="42px 37px 42px 37px"
						background="#FFFFFF"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						align-items="flex-start"
						border-width="1px"
						border-radius="6px"
						border-style="solid"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						flex-direction="column"
						justify-content="flex-start"
					>
						<Text
							color="#ffffff"
							padding="13px 0px 13px 0px"
							border-width="1px"
							margin="0px 0px 0px 0px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							background="--color-primary"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							align-items="center"
							display="block"
							justify-content="center"
							text-align="center"
							font="700 18px/22px --fontFamily-googleInter"
							width="48px"
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
							Conduct Cybersecurity Risk Assessment
						</Text>
						<Text
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
						>
							With StaffCop’s dynamic risk scoring and vulnerabilities scanning ability, companies can identify at risk employees, policies, and system resources.
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
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						justify-content="flex-start"
						border-style="solid"
						sm-padding="20px 20px 20px 20px"
						align-items="flex-start"
						border-width="1px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-flex-direction="column"
						display="flex"
						height="100%"
						md-display="flex"
						background="#FFFFFF"
						hover-transform="translateY(-10px)"
						border-color="rgba(255, 255, 255, 0.05)"
						flex-direction="column"
						border-radius="6px"
						padding="42px 37px 42px 37px"
					>
						<Text
							background="--color-primary"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							display="block"
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							border-radius="40px"
							border-style="solid"
							justify-content="center"
							width="48px"
							color="#ffffff"
							padding="13px 0px 13px 0px"
							border-width="1px"
							text-align="center"
						>
							7
						</Text>
						<Text
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
						>
							Coordinate Security Orchestration for Rapid Response
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							By utilizing StaffCop, you can create a cybersecurity perimeter across your stores, supply chain network and corporate offices and much more.
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
						border-style="solid"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						display="flex"
						md-display="flex"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						border-radius="6px"
						padding="42px 37px 42px 37px"
						height="100%"
						background="#FFFFFF"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							font="700 18px/22px --fontFamily-googleInter"
							padding="13px 0px 13px 0px"
							border-width="1px"
							justify-content="center"
							margin="0px 0px 0px 0px"
							color="#ffffff"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-color="rgba(255, 255, 255, 0.05)"
							background="--color-primary"
							border-style="solid"
							display="block"
							text-align="center"
							border-radius="40px"
							align-items="center"
							width="48px"
						>
							8
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Protect Your Operations from 3rd-Party Threats
						</Text>
						<Text
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
						>
							Monitor all third party entities who have access to your critical systems to prevent sabotage or data theft.
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
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						justify-content="flex-start"
						padding="42px 37px 42px 37px"
						border-style="solid"
						height="100%"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						border-radius="6px"
						border-width="1px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
					>
						<Text
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							background="--color-primary"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							justify-content="center"
							color="#ffffff"
							padding="13px 0px 13px 0px"
							text-align="center"
							width="48px"
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							border-style="solid"
							display="block"
						>
							9
						</Text>
						<Text
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
						>
							Investigate Incidents with Forensics and Audit
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
						>
							Enforce training and awareness programs with Session Recording & Playback and customized rule violation messages.
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
				margin="0px 0px 45px 0px"
				color="#13212A"
				text-align="center"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				font="--headline2"
				display="inline-block"
				letter-spacing="-2%"
				md-font="normal 700 30px/40px Inter, sans-serif"
				lg-font="normal 700 36px/40px Inter, sans-serif"
			>
				Industry Statistics Show the Need for Privileged User Activity Monitoring
			</Text>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
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
						sm-padding="20px 20px 20px 20px"
						align-items="flex-start"
						border-style="solid"
						height="100%"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						padding="36px 36px 36px 36px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						md-flex-direction="column"
						justify-content="flex-start"
						background="#FFFFFF"
						hover-transform="translateY(-10px)"
						display="flex"
						flex-direction="column"
						border-radius="6px"
						border-width="1px"
					>
						<Text
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
						>
							Security is top priority for utilities
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Cyber and physical security were the most pressing concerns for utility companies, says UtilityDive.{" \n\n"}
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
						>
							<Span
								text-overflow="clip"
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
								white-space="normal"
								text-indent="0"
								hyphens="manual"
								overflow-wrap="normal"
								word-break="normal"
							>
								72%
							</Span>
							{" "}Agree Cyber & Physical Security is imperative
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
						md-display="flex"
						border-radius="6px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						justify-content="flex-start"
						background="#FFFFFF"
						border-width="1px"
						md-flex-direction="column"
						flex-direction="column"
						padding="36px 36px 36px 36px"
						height="100%"
						hover-transform="translateY(-10px)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						align-items="flex-start"
						border-style="solid"
					>
						<Text
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
						>
							Energy is one of the most targeted critical sectors
						</Text>
						<Text
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
						>
							According to a report by DHS, the U.S. energy sector, is one of the most highly targeted critical infrastructure sectors.
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							<Span
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
							>
								59%
							</Span>
							{" "}Cyber Incidents are Related to U.S. Energy Sector
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem display="flex" lg-width="50%" md-width="100%" width="50%">
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
						align-items="flex-start"
						border-style="solid"
						height="100%"
						md-flex-direction="column"
						border-width="1px"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						justify-content="flex-start"
						border-radius="6px"
						padding="36px 36px 36px 36px"
						hover-transform="translateY(-10px)"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
					>
						<Text
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
						>
							Insiders are the biggest security threat in the oil and gas industry
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							In a Ponemon & Symantec survey, 65% of OT experts identified careless insiders as the top cybersecurity threat, while 15% said malicious insiders.
						</Text>
						<Text
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
						>
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
							>
								65%{" "}
							</Span>
							{" "}Negligent Insider
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
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font="700 18px/28.8px Inter, sans-serif"
							>
								15%{" "}
							</Span>
							{" "}Malicious Insider
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem display="flex" lg-width="50%" md-width="100%" width="50%">
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
						background="#FFFFFF"
						align-items="flex-start"
						justify-content="flex-start"
						border-width="1px"
						height="100%"
						hover-transform="translateY(-10px)"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						flex-direction="column"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						border-radius="6px"
						padding="36px 36px 36px 36px"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
					>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Insider threats cost energy and utilities companies millions
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Utilities incurred an average cost of $10.23 million due to insider threat related incidents in 2018, according to Ponemon & ObserveIT.
						</Text>
						<Text
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
						>
							<Span
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
								overflow-wrap="normal"
								hyphens="manual"
							>
								$10M+
							</Span>
							{" "}Cost of Insider Threats for Energy & Utilities Companies
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
				lg-font="normal 700 36px/40px Inter, sans-serif"
				margin="0px 0px 45px 0px"
				color="#13212A"
				letter-spacing="-2%"
				text-align="center"
				font="--headline2"
				display="inline-block"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
			>
				StaffCop Helps Energy and Utilities Companies Protect Confidential Data
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
						border-radius="6px"
						border-width="1px"
						height="100%"
						md-display="flex"
						justify-content="flex-start"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						sm-padding="20px 20px 20px 20px"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						border-style="solid"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						padding="36px 36px 36px 36px"
						md-flex-direction="column"
						border-color="rgba(255, 255, 255, 0.05)"
					>
						<Text
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 16px 0px"
						>
							Energy{"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							– Exploration, seismic, survey and other research data.
							<br />
							– Process flow, pipeline flow diagram, engineering designs.
							<br />
							– Oil/gas drilling data like prospecting related terms, confidential/CB well list, Coalbed data etc.{" \n"}
							<br />
							– Business plans, legal data.
							<br />
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem display="flex" lg-width="50%" md-width="100%" width="50%">
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
						md-flex-direction="column"
						border-color="rgba(255, 255, 255, 0.05)"
						flex-direction="column"
						md-display="flex"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						align-items="flex-start"
						justify-content="flex-start"
						border-radius="6px"
						padding="36px 36px 36px 36px"
						border-width="1px"
						height="100%"
						background="#FFFFFF"
						sm-padding="20px 20px 20px 20px"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						display="flex"
					>
						<Text
							margin="0px 0px 16px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
						>
							Critical infrastructure / utilities{"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							– Software design documents, SCADA terms, distribution plans{" \n"}
							<br />
							– Vendor Contracts.{" \n"}
							<br />
							– Business plans, legal data.{" \n"}
							<br />
							– Customer Data, Personally identifiable information (PII), Customer proprietary network information (CPNI).{"\n\n"}
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
						border-radius="6px"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						padding="36px 36px 36px 36px"
						border-color="rgba(255, 255, 255, 0.05)"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						justify-content="flex-start"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						border-width="1px"
						border-style="solid"
					>
						<Text
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 16px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
						>
							Corporate data{"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							– Strategic plans and business processes.{" \n"}
							<br />
							– Price/cost/supplier/customer lists.{" \n"}
							<br />
							– Source code, formulas, and other type of IPs.
							<br />
							{" \n"}- Consumer-specific Energy Usage Data (CEUD).
							<br />
							- Acquisition plans, M&A announcements, legal documents and other sensitive matters.
							<br />
							– Payroll, accounting and financial data.
							<br />
							<br />
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section md-padding="30px 0 10px 0" padding="40px 0 70px 0" background="#F8F8F9" lg-padding="30px 0 30px 0">
			<Override
				slot="SectionContent"
				border-width="1px"
				border-color="#ffffff"
				border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
				background="#ffffff"
				border-radius="6px"
				border-style="solid"
				box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
				max-width="1170px"
				align-items="center"
				padding="60px 0px 0px 0px"
			/>
			<Stack
				gap="--cmp-stack-gap-default"
				border-width="0px 0px 1px 0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
				margin="0px 0px 0px 0px"
				width="100%"
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
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						padding="0px 60px 0px 20px"
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
						Real-Time Visibility and Control{"\n\n"}
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
						StaffCop visually records every action that a user makes on your OT and IT systems and cloud, DMZ for 22+ system objects. Each object can be programmed to take into consideration what needs to be monitored and who has access to the monitored records. You can specify who you want to monitor, how much you want to monitor, when and for how long.
					</Text>
					{"  "}{"  "}
				</StackItem>
				{"        "}
			</Stack>
			<Stack
				gap="--cmp-stack-gap-default"
				border-width="0px 0px 1px 0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
				margin="0px 0px 0px 0px"
				width="100%"
			>
				<StackItem md-width="100%" md-order="1" width="50%" display="flex">
					<Override
						slot="StackItemContent"
						border-radius="0px"
						border-width="0px"
						padding="0px 20px 0px 60px"
						flex-direction="column"
						align-items="flex-start"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						justify-content="center"
						md-order="1"
					/>
					{"        "}
					<Text
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						text-align="right"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
					>
						Automated Data Discovery and Classification{"\n\n"}
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
						StaffCop has built-in templates for many classified and unclassified data types to protect your customer data, IP and other sensitive information.
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" md-width="100%" width="50%">
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
				width="100%"
				gap="--cmp-stack-gap-default"
				border-width="0px 0px 1px 0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
				margin="0px 0px 0px 0px"
			>
				<StackItem display="flex" md-width="100%" width="50%">
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
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						padding="20px 60px 0px 20px"
						border-radius="0px"
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
						<Em>
							Powerful Policies and Rules Engine{"\n\n"}
						</Em>
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
						<Em>
							The core of the StaffCop platform is its automation. StaffCop comes with hundreds of pre-defined policies and rules. For example: block email containing sensitive keywords, stop uploading of a confidential document, detect screen capture, prevent the use of external drives etc. The templates cover virtually every use case of data loss prevention, insider threat detection and compliance requirements. Just pick a policy or rule template and all the data definition, content source, condition will be set automatically for you to edit.{"\n\n"}
						</Em>
					</Text>
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
				<StackItem md-width="100%" md-order="1" width="50%" display="flex">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						justify-content="center"
						padding="0px 0px 0px 50px"
						border-radius="0px"
						border-width="0px"
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
						Endpoint Data Loss Prevention & Egress Control{"\n\n"}
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
						StaffCop’s exfiltration and egress controls allow you to monitor and prevent illicit sharing of information. For instance, File Transfer rules to prevent the use of removable media.
					</Text>
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
				gap="--cmp-stack-gap-default"
				border-width="0px 0px 1px 0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
				margin="0px 0px 0px 0px"
				width="100%"
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
						Behavioral Anomaly Detection{"\n\n"}
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
						StaffCop allows you to define what constitutes dangerous user behavior, then uses its sophisticated anomaly engine to automatically detect when a user, department, or group deviates from their normal parameters or exceeds acceptable risk levels. Once a threat is detected, it notifies appropriate authorities, locks out the user or takes remote control of the compromised system.
					</Text>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
			<Stack
				gap="--cmp-stack-gap-default"
				border-width="0px 0px 1px 0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
				margin="0px 0px 0px 0px"
				width="100%"
			>
				<StackItem width="50%" display="flex" md-width="100%" md-order="1">
					<Override
						slot="StackItemContent"
						border-width="0px"
						flex-direction="column"
						align-items="flex-end"
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
						lg-font="normal 700 30px/43px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						text-align="right"
					>
						Privileged User and Third-Party Monitoring{"\n\n"}
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
						StaffCop allows organizations to create profiles for employees and third parties and define what information and system resources each profile can access. Further rules can be established by behavior policies so that access to sensitive information is segregated by the organization’s security policy, or on a need-to-know basis.{"\n\n"}
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
						md-width="80%"
						width="90%"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%207.png?v=2020-10-19T22:40:56.844Z"
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
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
					>
						Digital Forensics and Auditing
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
						Detailed alerts including any security incidents and what actions were taken can be viewed. Warning messages can be programmed to inform the users about nonconformity and influence corrective behavior. Session recordings and history playback can be leveraged to view user’s desktop for audit and evidence gathering purposes
					</Text>
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
				border-width="0px"
			>
				<StackItem width="50%" display="flex" md-width="100%" md-order="1">
					<Override
						slot="StackItemContent"
						border-width="0px"
						flex-direction="column"
						align-items="flex-end"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						justify-content="center"
						padding="0px 0px 0px 50px"
						border-radius="0px"
					/>
					{"        "}
					<Text
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 30px/43px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						text-align="right"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
					>
						Risk Assessment and Treatment
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
						CSO and security analysts can conduct organization-wide risk assessment using StaffCop dedicated Risk dashboard. Risk can be profiled by users, departments, or by system objects, reports can be derived by severity of risks or by how many times security violations occurred, and Unique Risk Scores helps you identify high-risk users or policies so that plans can be created for treating the risks.
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
			<Stack
				border-color="rgba(19, 33, 42, 0.05)"
				margin="0px 0px 0px 0px"
				width="100%"
				gap="--cmp-stack-gap-default"
				border-width="0px 0px 1px 0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
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
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
					>
						Compliance Management
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
						Compliance is an increasingly challenging task:  requiring organizations to manage multiple risk factors across an evolving technology landscape, while also ensuring appropriate user behavior to fulfil the stringent requirements of today’s widely-accepted regulatory standards, such as GDPR, HIPAA, PCI DSS, ISO 27001, NIST and others.  Organizations that fail to remain compliant risk severe financial and reputational consequences. Regardless of the industry you are in, you need a solid compliance management solution that can help you attain compliance and then assists you in staying compliant with continuous oversight. Additionally, the solution should provide you with a burden of proof in case of an audit.
					</Text>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Components.BlockNeed>
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
				View remote desktop without being notices. Take control over a workstation. Full picture of software and hardware usage. Intensity of usage and registry of states..
			</Override>
			<Override slot="text6">
				Employee Monitoring
			</Override>
			<Override slot="text7">
				Categorize applications and web-sites into productive and unproductive. Set up different configurations for particular users, groups and departments. Compare results.
			</Override>
		</Components.BlockNeed>
		<Section
			sm-padding="24px 0 0px 0"
			background="#ffffff"
			padding="70px 0 20px 0"
			md-padding="24px 0 40px 0"
			border-width="0px 0px 1px 0px"
			border-style="solid"
			border-color="rgba(255, 255, 255, 0.05)"
		>
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				margin="0px 0px 70px 0px"
				color="#13212A"
				letter-spacing="-2%"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 36px/58px Inter, sans-serif"
				font="--headline2"
				text-align="center"
				md-margin="0px 0px 20px 0px"
				display="inline-block"
			>
				<Span
					color="--primary"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Flexible
				</Span>
				{" "}Deployment Options
			</Text>
			<Stack width="100%" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem md-width="100%" width="33.3333%" display="flex" lg-width="50%">
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
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						justify-content="flex-start"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						border-width="1px"
						border-style="solid"
						md-display="flex"
						md-flex-direction="column"
						align-items="flex-start"
						background="#FFFFFF"
						height="100%"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						flex-direction="column"
					>
						<Image width="60px" height="60px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/papaplo.svg?v=2020-10-19T23:24:47.217Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Bare Metal{"\n\n"}
						</Text>
						<Text
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
							margin="0px 0px 0px 0px"
						>
							Install on bare metal from our ISO image containing Ubuntu 18.04 and StaffCop or install StaffCop packages on existing Ubuntu 18.04.{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem md-width="100%" width="33.3333%" display="flex" lg-width="50%">
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
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						border-radius="6px"
						border-style="solid"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						padding="42px 37px 42px 37px"
						md-display="flex"
						flex-direction="column"
						justify-content="flex-start"
						border-width="1px"
						background="#FFFFFF"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						align-items="flex-start"
					>
						<Image width="60px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/zamolk.svg?v=2020-10-19T23:25:24.891Z" height="60px" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Virtual Machine{"\n\n"}
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							font="--lead"
						>
							Install on any OS as a virtual machine from our ISO image, use Virtual Box, VMWare, Hyper-V or any other virtualization system. Easy administrating without risking the host machine.{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="100%" md-width="100%">
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
						border-radius="6px"
						border-style="solid"
						display="flex"
						justify-content="flex-start"
						padding="42px 37px 42px 37px"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						align-items="flex-start"
						height="100%"
						md-display="flex"
						border-color="rgba(255, 255, 255, 0.05)"
						hover-transform="translateY(-10px)"
						border-width="1px"
						background="#FFFFFF"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
					>
						<Image width="60px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/cloudd.svg?v=2020-10-19T23:25:21.625Z" height="60px" />
						<Text
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 18px 0px"
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
			<Components.Feature />
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