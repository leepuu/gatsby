import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Common from "../components/common"
import Tags from "../components/tags"
import RecentPost from "../components/recentPost"
import { Helmet } from "react-helmet"
import "../scss/posts.scss"

const PostTitle = styled.div`
	background: url(/kv/${(props) => props.img || "default"}.jpg) center center no-repeat;
`

export default ({ data }) => {
	const post = data.markdownRemark

	return (
		<div>
			<Helmet title={post.frontmatter.title} defer={false} />
			<Common></Common>

			<div className="container">
				<PostTitle className="kv_title" img={post.frontmatter.image}>
					<div className="title">
						<h3>{post.frontmatter.title}</h3>
						<p>{post.frontmatter.date}</p>
					</div>
				</PostTitle>
				<div className="inner_content">
					<div className="content">
						<div className="post_content" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
					</div>
					<div className="sidebar">
						<RecentPost></RecentPost>
						<Tags></Tags>
					</div>
				</div>
			</div>
		</div>
	)
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				date
				image
			}
			id
		}
	}
`
