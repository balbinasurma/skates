import React from 'react'
import styled from 'styled-components'
import {styledButtonType} from '../../../types/styledTypes'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconDefinition} from '@fortawesome/free-solid-svg-icons'

const HeaderSocialItemButton: styledButtonType = styled.button`
	width: 80px;
	height: 70px;
	background: none;
	border: none;
	cursor: pointer;
`

type propsType = {icon: IconDefinition}

const HeaderSocialItem = ({icon}: propsType) => (
	<HeaderSocialItemButton>
		<FontAwesomeIcon icon={icon} color='white' size='3x' />
	</HeaderSocialItemButton>
)

export default HeaderSocialItem
