import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {headerMenuItemTitleType, headerMenuItemPathType} from 'types/globalTypes'

const HeaderMenuItemNavLink = styled(NavLink)`
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

	&:hover {
		border-color: white;
	}

	&.active {
		border-bottom: 3px solid white;
	}

	@media only screen and (max-width: ${process.env.BREAKPOINT_TWO}) {
		height: 70px;
		border-color: transparent !important;
		align-items: center;
	}
`

const HeaderMenuItem = ({headerMenuItemTitle, headerMenuItemPath}) => (
	<HeaderMenuItemNavLink exact to={headerMenuItemPath}>
		{headerMenuItemTitle}
	</HeaderMenuItemNavLink>
)

HeaderMenuItem.propTypes = {
	headerMenuItemTitle: headerMenuItemTitleType,
	headerMenuItemPath: headerMenuItemPathType
}

export default HeaderMenuItem
