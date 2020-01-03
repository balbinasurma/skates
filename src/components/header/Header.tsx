import React, {useState} from 'react'
import styled from 'styled-components'
import {styledHeaderType} from '../../types/styledTypes'
import HeaderMenu from './headerMenu/HeaderMenu'
import HeaderSocial from './headerSocial/HeaderSocial'
import MobileMenuIcon from './MobileMenuIcon'

const HeaderHeader: styledHeaderType = styled.header`
	height: auto;
	padding: 0 1vw;
	display: flex;
	background: none;
	// box-shadow: 0 2px 4px rgba(0, 0, 0, .5);
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
		}

		& > span {
			display: block;
		}
	}
`
const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState()

	return (
		//@ts-ignore
		<HeaderHeader mobileMenuOpen={mobileMenuOpen}>
			<HeaderMenu />
			<span>
				<MobileMenuIcon />
			</span>
			<HeaderSocial />
		</HeaderHeader>
	)
}

export default Header
