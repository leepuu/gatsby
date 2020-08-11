import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { css } from "@emotion/core"

export default (data) => {
	const listData = useStaticQuery(
		graphql`
			query {
				allMarkdownRemark {
					group(field: frontmatter___tags) {
						totalCount
						tag: fieldValue
						edges {
							node {
								id
								fields {
									slug
								}
							}
						}
					}
					edges {
						node {
							id
							frontmatter {
								categories
								title
							}
							excerpt
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
		<div class="container">
			{listData.allMarkdownRemark.edges
				.filter(({ node }) => {
					return data.children.substring(1) == node.frontmatter.categories
				})
				.map(({ node }) => (
					<div key={node.id} className="post_list">
						<Link to={node.fields.slug}>
							<h3
								css={css`
									margin-bottom: 20px;
								`}
							>
								{node.frontmatter.title}{" "}
								<span
									css={css`
										color: #bbb;
									`}
								>
									— {node.frontmatter.date}
								</span>
							</h3>
						</Link>
						<p>{node.excerpt}</p>
					</div>
				))}
			{listData.allMarkdownRemark.group.map(({ fieldValue }) => (
				<div>{fieldValue}</div>
			))}
		</div>
	)
}
