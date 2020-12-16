import React from "react"
import { graphql } from "gatsby"
import Common from "../components/common"
import styled from "styled-components"

const AboutTitle = styled.div`
	background: url(/kv/about.jpg) center bottom 15% no-repeat;
	.title {
		text-align: center;
		h3 {
			font-size: 48px;
			text-transform: uppercase;
			letter-spacing: 5px;
		}
	}
`

const ProfileBox = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	.profile_img {
		width: 250px;
		height: 250px;
		overflow: hidden;
		border-radius: 50%;
		border: 10px solid #eb4c4b;
		box-sizing: content-box;
		margin-right: 40px;
		img {
			width: 100%;
		}
	}

	.profile_text {
		display: flex;
		align-items: center;
		ul {
			li {
				font-size: 14px;
				& + li {
					margin-top: 8px;
				}
			}
		}
	}
`

export default ({ data }) => {
	return (
		<>
			<Common></Common>
			<AboutTitle className="kv_title">
				<div className="title">
					<h3>About</h3>
				</div>
			</AboutTitle>
			<div class="inner_content">
				<ProfileBox>
					<div class="profile_img">
						<img src="/common/profile.gif" alt="프로필 이미지" />
					</div>
					<div class="profile_text">
						<ul>
							<li>이푸름</li>
							<li>leepuu001@naver.com</li>
							<li>아직 단장중이니 감안하고 보시길 바랍니다ㅎ</li>
						</ul>
					</div>
				</ProfileBox>
			</div>
		</>
	)
}

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`
