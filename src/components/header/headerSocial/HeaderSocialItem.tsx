import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {useContext} from 'react'
import styled from 'styled-components'
import {headerSocialItemPropsType} from 'types/propsTypes'
import {HeaderSocialItemAStyledType} from 'types/styledTypes'
import themeContext from '../../../context/themeContext'

const HeaderSocialItemA =
	styled.a <
	HeaderSocialItemAStyledType >
	`
	width: 80px;
	height: ${({headerItemHeight}) => headerItemHeight};
	background: none;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`

const HeaderSocialItem = ({icon, link, label}: headerSocialItemPropsType) => {
	// @ts-ignore
	const {headerItemHeight} = useContext(themeContext)

	return (
		<HeaderSocialItemA
			headerItemHeight={headerItemHeight}
			href={link}
			target='_blank'
			rel='noopener'
			aria-label={label}
		>
			<FontAwesomeIcon icon={icon} color='white' size='3x' />
		</HeaderSocialItemA>
	)
}

export default HeaderSocialItem
