import React from "react"
import styled from "styled-components"
import { useStaticQuery, Link, graphql } from "gatsby"

const RecentPost = styled.div`
	padding-bottom: 64px;
`

const PostList = styled.ul`
	li {
		&:not(:last-child) {
			padding-bottom: 8px;
		}
		a {
			font-size: 15px;
			opacity: 0.6;
			&:hover {
				opacity: 1;
			}
		}
	}
`

export default (data) => {
	const listQuery = useStaticQuery(
		graphql`
			{
				allMarkdownRemark(limit: 5, sort: { fields: frontmatter___date, order: DESC }) {
					edges {
						node {
							frontmatter {
								title

								tags
							}
							id
							fields {
								slug
							}
						}
					}
				}
			}
		`
	)

	return (
		<RecentPost>
			<h3>Recent Posts</h3>
			<PostList>
				{listQuery.allMarkdownRemark.edges.map(({ node }) => (
					<li key={node.id}>
						<Link to={node.fields.slug}>{node.frontmatter.title}</Link>
					</li>
				))}
			</PostList>
		</RecentPost>
	)
}
