import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import kebabCase from "lodash/kebabCase"

const Tag = styled.div`
	ul {
		display: flex;
		flex-wrap: wrap;
		li {
			a {
				display: inline-block;
				padding: 0 10px;
				line-height: 1.7;
				font-size: 13px;
				background: #ecedf1;
				color: #767a90;
				margin: 5px 5px 0 0;
				transition: all 0.2s ease-in-out;
				&:hover {
					background: #767a90;
					color: #ecedf1;
				}
			}
		}
	}
`

const TagsPage = ({ name, id }) => {
	const tagQuery = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					title
				}
			}
			allMarkdownRemark(limit: 2000) {
				group(field: frontmatter___tags) {
					fieldValue
					totalCount
				}
			}
		}
	`)
	return (
		<Tag>
			<h3>Tags</h3>
			<ul>
				{tagQuery.allMarkdownRemark.group.map((tag, idx) => (
					<li key={idx}>
						<Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>#{tag.fieldValue}</Link>
					</li>
				))}
			</ul>
		</Tag>
	)
}

TagsPage.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			group: PropTypes.arrayOf(
				PropTypes.shape({
					fieldValue: PropTypes.string.isRequired,
					totalCount: PropTypes.number.isRequired,
				}).isRequired
			),
		}),
		site: PropTypes.shape({
			siteMetadata: PropTypes.shape({
				title: PropTypes.string.isRequired,
			}),
		}),
	}),
}

export default TagsPage
