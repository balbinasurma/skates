import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {styledButtonType} from '../../types/styledTypes'

const MobileMenuIconButton: styledButtonType = styled.button`
	background: none;
	border: none;
	width: 80px;
	height: 70px;
	cursor: pointer;
`

const MobileMenuIcon = () => (
	<MobileMenuIconButton>
		<FontAwesomeIcon icon={faBars} color='white' size='3x' />
	</MobileMenuIconButton>
)

export default MobileMenuIcon
