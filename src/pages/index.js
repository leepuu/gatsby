import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Common from "../components/common"
import Tags from "../components/tags"

export default ({ data }) => {
	return (
		<div>
			<Common></Common>
			<div className="container">
				<div className="post">
					{data.allMarkdownRemark.edges.map(({ node }) => (
						<div key={node.id} className="post_list">
							<Link
								to={node.fields.slug}
								css={css`
									text-decoration: none;
									color: inherit;
								`}
							>
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
				</div>
				<Tags></Tags>
			</div>
		</div>
	)
}

export const query = graphql`
	query {
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						title
						date
						tags
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
