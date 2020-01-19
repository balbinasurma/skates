import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderMenuItemLink = styled(Link)`
	height: 50%;
	display: flex;
	background: none;
	color: white;
	border: none;
	text-align: center;
	padding: 0 10px;
	justify-content: center;
	cursor: pointer;
	text-transform: uppercase;
	font-family: Roboto, sans-serif;
	font-size: 20px;
	font-weight: bold;
	margin: 0 10px;
	border-bottom: 3px solid transparent;
	text-decoration: none;
	transition: border 0.8s;
	text-shadow: 1px 1px 1px gray;

	&:first-child {
		border-bottom: 3px solid white;
	}

	&:hover {
		border-color: white;
	}

	@media only screen and (max-width: ${process.env.BREAKPOINT_TWO}) {
		height: 70px;
		border-color: transparent !important;
		align-items: center;
	}
`

const HeaderMenuItem = ({ title, path }) => <HeaderMenuItemLink to={path}>{title}</HeaderMenuItemLink>

export default HeaderMenuItem
