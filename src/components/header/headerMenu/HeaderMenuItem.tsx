import React from 'react'
import styled from 'styled-components'
import {styledButtonType} from 'types/styledTypes'

const HeaderMenuItemButton: styledButtonType = styled.button`
	height: 100%;
	display: flex;
	background: none;
	color: #9e9e9e;
	border: none;
	text-align: center;
	padding: 0 20px;
	justify-content: center;
	cursor: pointer;
	text-transform: uppercase;
	font-family: Roboto, sans-serif;
	font-size: 16px;
	font-weight: 600;

	&:hover {
		color: white;
	}
`
const HeaderMenuItem = ({title}) => <HeaderMenuItemButton>{title}</HeaderMenuItemButton>

export default HeaderMenuItem
