import React from "react"
import Common from "../components/common"
import Tags from "../components/tags"
import RecentPost from "../components/recentPost"
import Posts from "../components/posts"

import styled from "styled-components"
import { Helmet } from "react-helmet"

const Kv = styled.div`
	background: url(/kv/main.jpg) center center no-repeat;

	h3 {
		font-size: 56px;
	}

	&.on {
		background: #fff;
		& > * {
			color: #fff;
		}
	}
`

export default () => {
	return (
		<>
			<Helmet title="푸다닥 개발뽀개기" defer={false} />
			<Common></Common>
			<div className="container">
				<Kv className="kv_title">
					<div className="title">
						<h3>Blog</h3>
					</div>
				</Kv>
				<div className="inner_content">
					<div className="content">
						<Posts></Posts>
					</div>
					<div className="sidebar">
						<RecentPost></RecentPost>
						<Tags></Tags>
					</div>
				</div>
			</div>
		</>
	)
}
