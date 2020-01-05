import React, {useContext} from 'react'
import styled from 'styled-components'
import {styledAType} from 'types/styledTypes'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import themeContext from '../../../context/themeContext'
import {headerSocialItemPropsType} from 'types/propsTypes'

const HeaderSocialItemA: styledAType = styled.a`
	width: 80px;
	// @ts-ignore
	height: ${({headerItemHeight}) => headerItemHeight};
	background: none;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
`

const HeaderSocialItem = ({icon, link}: headerSocialItemPropsType) => {
	// @ts-ignore
	const {headerItemHeight} = useContext(themeContext)

	return (
		// @ts-ignore
		<HeaderSocialItemA headerItemHeight={headerItemHeight} href={link} target='_blank'>
			<FontAwesomeIcon icon={icon} color='white' size='3x' />
		</HeaderSocialItemA>
	)
}

export default HeaderSocialItem
