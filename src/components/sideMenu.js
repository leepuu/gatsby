import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const SideMenu = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    input {
        display: none;

        &:checked {
            & ~ label {
                span {
                    &:first-child {
                        transform: rotate(45deg) translate(5px, 5px);
                    }
                    &:nth-child(2) {
                        opacity: 0;
                    }
                    &:last-child {
                        transform: rotate(-45deg) translate(5px, -5px);
                    }
                }
            }

            & ~ #menubox {
                left: 0;
            }

            & ~ #menubg {
                opacity: 1;
                display: block;
            }
        }
    }
    label {
        display: flex;
        flex-direction: column;
        width: 26px;
        height: 16px;
        justify-content: space-between;
        padding: 10px;
        box-sizing: content-box;
        position: fixed;
        top: 20px;
        left: 33px;
        position: relative;
        z-index: 2;
        cursor: pointer;
        span {
            transition: all 0.2s ease-out, opacity 0.1s ease;
            width: 26px;
            height: 2px;
            background: #999;
            display: inline-block;
        }
    }
`

const MenuBox = styled.div`
    width: 348px;
    height: 100%;
    background: #fff;
    position: absolute;
    left: -348px;
    top: 0;
    transition: all 0.5s ease-out;
    padding: 150px 40px;
    box-sizing: border-box;
    z-index: 1;
`

const MenuBg = styled.div`
    width: 100%;
    height: 100%;
    display: none;
    opacity: 0;
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    left: 0;
    top: 0;
    transition: display 0.1s ease-out, opacity 0.5s ease-out;
`

const Nav = styled.nav`
    li {
        margin-bottom: 30px;

        a {
            font-family: "Crimson Text";
            font-size: 25px;
            color: #333;
            /* font-weight: 600; */
            text-decoration: none;
        }
    }
`

const ListItem = ({ name, id }) => {
    const query = useStaticQuery(graphql`
        {
            allDirectory(filter: { absolutePath: { regex: "/posts//" } }, sort: { order: ASC, fields: absolutePath }) {
                edges {
                    node {
                        id
                        name
                        absolutePath
                    }
                }
            }
        }
    `)
    return (
        <div>
            {query.allDirectory.edges.map(({ node }) => (
                <li key={node.id}>
                    <Link to={`/${node.name}/`}>{node.name}</Link>
                </li>
            ))}
        </div>
    )
}

const Menu = () => {
    return (
        <SideMenu>
            <input type="checkbox" name="menu" id="menu" />
            <label htmlFor="menu">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <MenuBox id="menubox">
                <Nav>
                    <ul>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                        <ListItem></ListItem>
                    </ul>
                </Nav>
            </MenuBox>
            <MenuBg id="menubg"></MenuBg>
        </SideMenu>
    )
}

export default Menu
