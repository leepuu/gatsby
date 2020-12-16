import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

export default (data) => {
	const listQuery = useStaticQuery(
		graphql`
			{
				allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
					edges {
						node {
							frontmatter {
								title
								date
								tags
							}
							id
							excerpt(pruneLength: 200)
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
		<>
			{listQuery.allMarkdownRemark.edges.map(({ node }) => (
				<div className="post_list" key={node.id}>
					<Link to={node.fields.slug}>
						<h4>
							{node.frontmatter.title}
							<span>{node.frontmatter.date}</span>
						</h4>
						<p>{node.excerpt}</p>
					</Link>
				</div>
			))}
		</>
	)
}
