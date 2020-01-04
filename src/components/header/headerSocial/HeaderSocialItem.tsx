import React, {useContext} from 'react'
import styled from 'styled-components'
import {styledButtonType} from '../../../types/styledTypes'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconDefinition} from '@fortawesome/free-solid-svg-icons'
import themeContext from '../../../context/themeContext'

const HeaderSocialItemButton: styledButtonType = styled.button`
	width: 80px;
	height: ${({headerItemHeight}) => headerItemHeight};
	background: none;
	border: none;
	cursor: pointer;
`

type propsType = {icon: IconDefinition}

const HeaderSocialItem = ({icon}: propsType) => {
	const {headerItemHeight} = useContext(themeContext)

	return (
		// @ts-ignore
		<HeaderSocialItemButton headerItemHeight={headerItemHeight}>
			<FontAwesomeIcon icon={icon} color='white' size='3x' />
		</HeaderSocialItemButton>
	)
}

export default HeaderSocialItem
