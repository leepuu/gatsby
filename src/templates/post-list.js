import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Common from "../components/common"
import PostList from "../components/postList"

export default (data) => {
	return (
		<div>
			<Common></Common>
			<PostList>{data.path}</PostList>
		</div>
	)
}

export const query = graphql`
	query postList($skip: Int!, $limit: Int!) {
		allMarkdownRemark(limit: $limit, skip: $skip) {
			totalCount
			edges {
				node {
					frontmatter {
						categories
						title
						date
					}
					id
					excerpt
					fields {
						slug
					}
				}
			}
		}
	}
`
