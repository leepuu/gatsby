const path = require("path")
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions

	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: "pages" })
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
	}
}

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions

	const blogPostTemplate = path.resolve("./src/templates/post-view.js")
	const tagTemplate = path.resolve("./src/templates/tags-list.js")
	const blogListTemplate = path.resolve("./src/templates/post-list.js")

	const result = await graphql(`
		{
			postsRemark: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 2000) {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							tags
						}
					}
				}
			}
			tagsGroup: allMarkdownRemark(limit: 2000) {
				group(field: frontmatter___tags) {
					fieldValue
				}
			}
		}
	`)

	// handle errors
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}

	const posts = result.data.postsRemark.edges
	const postsPerPage = 10
	const numPages = Math.ceil(posts.length / postsPerPage)

	Array.from({length: numPages}).forEach((_, i) => {
		createPage({
			path: i === 0 ? `/` : `/${i + 1}`,
			component: blogListTemplate,
			context: {
				limit: postsPerPage,
				skip: i * postsPerPage,
				numPages,
				currentPage: i + 1,
			}
		})
	})

	// Create post detail pages
	posts.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: blogPostTemplate,
			context: {
				slug: node.fields.slug,
			},
		})
	})

	// Extract tag data from query
	const tags = result.data.tagsGroup.group

	// Make tag pages
	tags.forEach((tag) => {
		createPage({
			path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
			component: tagTemplate,
			context: {
				tag: tag.fieldValue,
			},
		})
	})
}
