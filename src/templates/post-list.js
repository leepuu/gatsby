import React from "react"
import { Link, graphql } from "gatsby"
import Common from "../components/common"
import Tags from "../components/tags"
import RecentPost from "../components/recentPost"
import styled from "styled-components"
import classNames from "classnames"
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io"

import { Helmet } from "react-helmet"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';


// Components
const Kv = styled.div`
	background: url(/kv/main.jpg) center center no-repeat;
`
const postList = ({ pageContext, data }) => {
	const post = data.allMarkdownRemark.edges
	const { currentPage, numPages } = pageContext
	const isFirst = currentPage === 1
	const isLast = currentPage === numPages
	const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
	const nextPage = (currentPage + 1).toString()

	return (
		<>
			<Helmet title="푸다닥 개발뽀개기" defer={false} />
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
						<ul className="pagination">
							<li>
								<Link to={`/${prevPage}`} rel="prev" className={classNames("btn_arrow btn_prev", { disable: isFirst })}>
									<IoMdArrowDropleft />
								</Link>
							</li>

							{Array.from({ length: numPages }, (_, i) => (
								<li key={i + 1} className={classNames({ active: i + 1 === currentPage })}>
									<Link to={`/${i === 0 ? "" : i + 1}`}>{i + 1}</Link>
								</li>
							))}
							<li>
								<Link to={`/${nextPage}`} rel="next" className={classNames("btn_arrow btn_next", { disable: isLast })}>
									<IoMdArrowDropright />
								</Link>
							</li>
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
deckDeckGoHighlightElement();

export const listQuery = graphql`
	query($limit: Int!, $skip: Int!) {
		allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }, limit: $limit, skip: $skip) {
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
