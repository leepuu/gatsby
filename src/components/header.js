import React, {useEffect, useState} from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import classNames from "classnames"

const TitleBox = styled.header`
	padding: 25px 30px;
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 100.1%;
	box-sizing: border-box;
	z-index: 100;
	transition: all 0.2s ease-in-out;
	h1 {
		a {
			color: #fff;
			font-size: 20px;
			letter-spacing: 1px;
		}
	}

	&.on {
		background: #fff;
		box-shadow: 0px 13px 50px -15px rgba(0, 0, 0, 0.05);
		* {
			color: #222;
		}
	}
`

const Nav = styled.nav`
	position: absolute;
	right: 0;
	top: 0;
	padding: 25px 30px;
	li {
		display: inline-block;
		a {
			font-size: 18px;
			color: #fff;
			font-weight: 600;
			text-decoration: none;
		}
	}
`

const Header = () => {
	const [on, setOn] = useState(false);
	useEffect(() => {
		scrollEvent()	
	}, []);

	const scrollEvent = () => {
		window.addEventListener("scroll", () => {
			let scrollTop = document.documentElement.scrollTop;
			scrollTop > 350 ? setOn(true) : setOn(false);
		})
	}
	
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)
	

	return (
		<TitleBox className={classNames({on})}>
			<h1>
				<Link
					to="/"
					style={{
						display: `inline`,
						textDecoration: `none`,
					}}
				>
					{data.site.siteMetadata.title}
				</Link>
			</h1>

			<Nav>
				<ul>
					<li>
						<Link to="/about/">About</Link>
					</li>
				</ul>
			</Nav>
		</TitleBox>
	)
}

export default Header
