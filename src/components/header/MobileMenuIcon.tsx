import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {useContext} from 'react'
import styled from 'styled-components'
import {MobileMenuIconPropsType} from 'types/propsTypes'
import {MobileMenuIconButtonStyledType} from 'types/styledTypes'
import themeContext from '../../context/themeContext'

const MobileMenuIconButton =
	styled.button <
	MobileMenuIconButtonStyledType >
	`
	background: none;
	border: none;
	width: 80px;
	height: ${({headerItemHeight}) => headerItemHeight};
	cursor: pointer;
	display: none;

	@media only screen and (max-width: 900px) {
		display: block;
	}
`

const MobileMenuIcon = ({mobileMenuOpen, setMobileMenuOpen}: MobileMenuIconPropsType) => {
	// @ts-ignore
	const {headerItemHeight} = useContext(themeContext)

	return (
		<MobileMenuIconButton headerItemHeight={headerItemHeight} aria-label='menu'>
			<FontAwesomeIcon
				onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				icon={mobileMenuOpen ? faTimes : faBars}
				color='white'
				size='3x'
			/>
		</MobileMenuIconButton>
	)
}

export default MobileMenuIcon
