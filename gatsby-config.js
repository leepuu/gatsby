module.exports = {
	siteMetadata: {
		title: `푸다닥 개발뽀개기`,
		description: `여기는 푸다닥의 개발 뽀개기 입니다. 아직은 계란으로 돌맹이 깨고있지만 언젠가 깨겠죠?ㅎㅎ`,
		author: `@gatsbyjs`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `static/common/profile.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,

		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-transformer-remark`,
						options: {
							plugins: [
								{
									resolve: `gatsby-remark-highlight-code`,
									options: {
										terminal: 'carbon',
										theme: 'one-dark'
									}
								},
							],
						},
					},
				],
			},
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/`,
			},
		},
		`gatsby-plugin-sass`,
		`gatsby-plugin-styled-components`,
		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				google: {
					families: ["Noto Sans KR", "Roboto", "Crimson Text"],
				},
			},
		},
	],
}
