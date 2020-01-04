import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import {styledHeaderType} from '../../types/styledTypes'
import HeaderMenu from './headerMenu/HeaderMenu'
import HeaderSocial from './headerSocial/HeaderSocial'
import MobileMenuIcon from './MobileMenuIcon'
import {mobileMenuOpenStateType} from 'types/statesTypes'
import themeContext from '../../context/themeContext'

const HeaderHeader: styledHeaderType = styled.header`
	height: auto;
	padding: 0 1vw;
	display: flex;
	background: none;
	justify-content: space-between;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 2;

	//
	border: 1px solid red;

	& > span {
		display: none;
	}

	@media only screen and (max-width: 600px) {
		padding: 0;
	}

	@media only screen and (max-width: 900px) {
		padding: 0;

		& > *:first-child {
			//@ts-ignore
			display: ${({mobileMenuOpen}) => (mobileMenuOpen ? 'block' : 'none')};
			position: absolute;
			left: 0;
			// @ts-ignore
			top: ${({headerItemHeight}) => headerItemHeight};
		}

		& > span {
			display: block;
		}
	}
`
const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen]: mobileMenuOpenStateType = useState(true),
		{headerItemHeight} = useContext(themeContext)

	return (
		//@ts-ignore
		<HeaderHeader mobileMenuOpen={mobileMenuOpen} headerItemHeight={headerItemHeight}>
			<HeaderMenu />
			<span>
				<MobileMenuIcon mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
			</span>
			<HeaderSocial />
		</HeaderHeader>
	)
}

export default Header
