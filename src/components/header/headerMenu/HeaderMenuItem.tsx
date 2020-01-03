import React from 'react'
import styled from 'styled-components'
import {styledLinkType} from '../../../types/styledTypes'
import {Link} from 'react-router-dom'

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
	transition: 0.8s;

	&:first-child {
		border-bottom: 3px solid white;
	}

	&:hover {
		border-color: white;
	}

`

type propsType = {title: string; path: string}

const HeaderMenuItem = ({title, path}: propsType) => <HeaderMenuItemLink to={path}>{title}</HeaderMenuItemLink>

export default HeaderMenuItem
