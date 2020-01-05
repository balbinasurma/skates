import React, {useContext} from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import {styledButtonType} from '../../types/styledTypes'
import {MobileMenuIconPropsType} from 'types/propsTypes'
import themeContext from '../../context/themeContext'

const MobileMenuIconButton: styledButtonType = styled.button`
	background: none;
	border: none;
	width: 80px;
	// @ts-ignore
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
		// @ts-ignore
		<MobileMenuIconButton headerItemHeight={headerItemHeight}>
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
