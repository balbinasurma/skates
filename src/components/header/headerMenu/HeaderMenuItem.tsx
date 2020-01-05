import React, {useContext} from 'react'
import styled from 'styled-components'
import {styledLinkType} from 'types/styledTypes'
import {Link} from 'react-router-dom'
import {headerMenuItemPropsType} from 'types/propsTypes'
import themeContext from '../../../context/themeContext'

const HeaderMenuItemLink: styledLinkType = styled(Link)`
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

	&:first-child {
		border-bottom: 3px solid white;
	}

	&:hover {
		border-color: white;
	}

	@media only screen and (max-width: 900px) {
		// @ts-ignore
		height: ${({headerItemHeight}) => headerItemHeight};
		border-color: transparent !important;
		align-items: center;
	}

`

const HeaderMenuItem = ({title, path}: headerMenuItemPropsType) => {
	// @ts-ignore
	const {headerItemHeight} = useContext(themeContext)

	return (
		// @ts-ignore
		<HeaderMenuItemLink headerItemHeight={headerItemHeight} to={path}>
			{title}
		</HeaderMenuItemLink>
	)
}

export default HeaderMenuItem
