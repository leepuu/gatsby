import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const TitleBox = styled.header`
    padding: 30px;
    position: fixed;
    background: #fff;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    box-sizing: border-box;
`

const Title = styled.span`
    color: #333;
    font-size: 20px;
    letter-spacing: 1px;
`

const Nav = styled.nav`
    position: absolute;
    right: 0;
    top: 0;
    padding: 30px;
    li {
        display: inline-block;
        a {
            font-size: 18px;
            color: #333;
            font-weight: 600;
            text-decoration: none;
        }
    }
`

const Header = ({ children }) => {
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
        <TitleBox>
            <h1>
                <Link
                    to="/"
                    style={{
                        display: `inline`,
                        textDecoration: `none`,
                    }}
                >
                    <Title>{data.site.siteMetadata.title}</Title>
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
