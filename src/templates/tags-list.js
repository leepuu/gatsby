import React from "react"
import PropTypes from "prop-types"
import Common from "../components/common"
import Tags from "../components/tags"
import RecentPost from "../components/recentPost"
import styled from "styled-components"

// Components
import { Link, graphql } from "gatsby"
const Kv = styled.div`
	background: url(/kv/main.jpg) center center no-repeat;
`

const TagList = ({ pageContext, data }) => {
	const { tag } = pageContext
	const { edges, totalCount } = data.allMarkdownRemark

	return (
		<>
			<Common></Common>
			<div className="container">
				<Kv className="kv_title">
					<div className="title">
						<h3>#{tag}</h3>
						<p>
							{totalCount} post{totalCount === 1 ? "" : "s"}
						</p>
					</div>
				</Kv>
				<div className="inner_content">
					<div className="content">
						{edges.map(({ node }) => {
							const { slug } = node.fields

							return (
								<div class="post_list" key={slug}>
									<Link to={slug}>
										<h4>
											{node.frontmatter.title}
											<span>{node.frontmatter.date}</span>
										</h4>
										<p>{node.excerpt}</p>
									</Link>
								</div>
							)
						})}
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

TagList.propTypes = {
	pageContext: PropTypes.shape({
		tag: PropTypes.string.isRequired,
	}),
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			totalCount: PropTypes.number.isRequired,
			edges: PropTypes.arrayOf(
				PropTypes.shape({
					node: PropTypes.shape({
						frontmatter: PropTypes.shape({
							title: PropTypes.string.isRequired,
						}),
						fields: PropTypes.shape({
							slug: PropTypes.string.isRequired,
						}),
					}),
				}).isRequired
			),
		}),
	}),
}

export default TagList

export const pageQuery = graphql`
	query($tag: String) {
		allMarkdownRemark(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { tags: { in: [$tag] } } }) {
			totalCount
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
						date
					}
					excerpt(pruneLength: 200)
				}
			}
		}
	}
`
