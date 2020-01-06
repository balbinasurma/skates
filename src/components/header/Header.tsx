import React from 'react'
// {useState}
import styled from 'styled-components'
import {styledHeaderType} from '../../types/styledTypes'
// import HeaderMenu from './headerMenu/HeaderMenu'
import HeaderSocial from './headerSocial/HeaderSocial'
// import MobileMenuIcon from './MobileMenuIcon'
// import {mobileMenuOpenStateType} from 'types/hooksTypes'

const HeaderHeader: styledHeaderType = styled.header`
	height: auto;
	padding: 0 1vw;
	display: flex;
	flex-direction: row-reverse;
	background: none;
	justify-content: space-between;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 2;

	& > span {
		display: none;
	}

	@media only screen and (max-width: 600px) {
		padding: 0;
	}

	@media only screen and (max-width: 900px) {
		padding: 0;
	}
`
const Header = () => {
	// const [mobileMenuOpen, setMobileMenuOpen]: mobileMenuOpenStateType = useState(false)

	return (
		<HeaderHeader>
			{/* <HeaderMenu mobileMenuOpen={mobileMenuOpen} /> */}
			{/* <MobileMenuIcon mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} /> */}
			<HeaderSocial />
		</HeaderHeader>
	)
}

export default Header
