import React, {Fragment, useState} from 'react'

import HeaderMenu from './headerMenu/HeaderMenu'
import HeaderSocial from './headerSocial/HeaderSocial'
import MobileMenuIcon from './MobileMenuIcon'
import isDevelopment from '../../functions/isDevelopment'
import styled from 'styled-components'

const HeaderHeader = styled.header`
	height: auto;
	padding: 0 1vw;
	display: flex;
	flex-direction: ${isDevelopment() ? 'row' : 'row-reverse'};
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

	@media only screen and (max-width: ${process.env.BREAKPOINT_ONE}) {
		padding: 0;
		border-color: blue;
	}
`
const Header = () => {
	const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false)

	return (
		<HeaderHeader className="header">
			<HeaderMenu mobileMenuOpen={mobileMenuOpen} />
			<MobileMenuIcon mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
			<HeaderSocial />
		</HeaderHeader>
	)
}

export default Header
