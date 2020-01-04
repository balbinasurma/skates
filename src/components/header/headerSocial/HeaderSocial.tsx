import React, {useContext} from 'react'
import styled from 'styled-components'
import {styledSectionType} from '../../../types/styledTypes'
import HeaderSocialItem from './HeaderSocialItem'
import {faAt} from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons'
import themeContext from '../../../context/themeContext'

const HeaderSocialSection: styledSectionType = styled.section`
	display: flex;
	border: 1px solid red;
	// @ts-ignore
	min-height: ${({headerItemHeight}) => headerItemHeight};

	@media only screen and (max-width: 900px) {
		flex-direction: column-reverse;
	}
`
const HeaderSocial = () => {
	const {headerItemHeight} = useContext(themeContext)

	let socialMedia = [faAt, faFacebookSquare, faInstagram]

	return (
		// @ts-ignore
		<HeaderSocialSection headerItemHeight={headerItemHeight}>
			{socialMedia.map((item, index) => <HeaderSocialItem icon={item} key={index} />)}
		</HeaderSocialSection>
	)
}

export default HeaderSocial
