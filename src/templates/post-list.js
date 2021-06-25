import React from "react"
import { Link, graphql } from "gatsby"
import Common from "../components/common"
import Tags from "../components/tags"
import RecentPost from "../components/recentPost"
import styled from "styled-components"

// Components
const Kv = styled.div`
	background: url(/kv/main.jpg) center center no-repeat;
`
const postList = ({ pageContext, data }) => {
	const post = data.allMarkdownRemark.edges
	const { currentPage, numPages } = pageContext
	const isFirst = currentPage === 1
	const isLast = currentPage === numPages
	const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString()
	const nextPage = (currentPage + 1).toString()

	return (
		<>
			<Common></Common>
			<div className="container">
				<Kv className="kv_title">
					<div className="title">
						<h3>Blog</h3>
					</div>
				</Kv>
				<div className="inner_content">
					<div className="content">
						{post.map(({ node }) => {
							const { slug } = node.fields

							return (
								<div className="post_list" key={slug}>
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
						<ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {!isFirst && (
							<Link to={`/${prevPage}`} rel="prev">
								← Previous Page
							</Link>
						)}
						{Array.from({ length: numPages }, (_, i) => (
							<li
								key={`pagination-number${i + 1}`}
								style={{
									margin: 0,
								}}
							>
								<Link
									to={`/${i === 0 ? '' : i + 1}`}
									style={{
										textDecoration: 'none',
										color: i + 1 === currentPage ? '#ffffff' : '',
										background: i + 1 === currentPage ? '#007acc' : '',
									}}
								>
									{i + 1}
								</Link>
							</li>
						))}
						{!isLast && (
							<Link to={`/${nextPage}`} rel="next">
								Next Page →
							</Link>
						)}
					</ul>
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

export default postList;

export const listQuery = graphql`
		query($limit: Int!, $skip: Int! ){
			allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }, limit: $limit ,skip: $skip) {
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
