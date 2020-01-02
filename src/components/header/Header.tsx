import React, {useContext} from 'react'
import styled from 'styled-components'
import {styledHeaderType} from '../../types/styledTypes'
import HeaderMenu from './headerMenu/HeaderMenu'
import themeContext from '../../context/themeContext'
import HeaderSocial from './headerSocial/HeaderSocial'

const HeaderHeader: styledHeaderType = styled.header`
	height: 70px;
	padding: 0 30px;
	display: flex;
	background: none;
	// box-shadow: 0 2px 4px rgba(0, 0, 0, .5);
	justify-content: space-between;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 2;
`
const Header = () => {
	const {color2} = useContext(themeContext)

	return (
		//@ts-ignore
		<HeaderHeader color2={color2}>
			<HeaderMenu />
			<HeaderSocial />
		</HeaderHeader>
	)
}

export default Header
