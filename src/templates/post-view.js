import React from "react"
import { graphql } from "gatsby"
import Common from "../components/common"

export default ({ data }) => {
	const post = data.markdownRemark

	return (
		<div>
			<Common></Common>
			<div class="container">
				<h1>{post.frontmatter.title}</h1>
				<p>{post.excerpt}</p>
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
			}
			excerpt
		}
	}
`
