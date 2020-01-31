import {mobileMenuOpenType, setMobileMenuOpenType} from 'types/globalTypes'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const MobileMenuIconButton = styled.button`
	background: none;
	border: none;
	width: 80px;
	height: 70px;
	cursor: pointer;
	display: none;

	@media only screen and (max-width: ${process.env.BREAKPOINT_TWO}) {
		display: block;
	}
`

const MobileMenuIcon = ({mobileMenuOpen, setMobileMenuOpen}) => (
	<MobileMenuIconButton aria-label="menu" className="mobile-menu-icon">
		<FontAwesomeIcon
			onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
			icon={mobileMenuOpen ? [ 'fas', 'times' ] : [ 'fas', 'bars' ]}
			color="white"
			size="3x"
		/>
	</MobileMenuIconButton>
)

MobileMenuIcon.propTypes = {
	mobileMenuOpen: mobileMenuOpenType,
	setMobileMenuOpen: setMobileMenuOpenType
}

export default MobileMenuIcon
