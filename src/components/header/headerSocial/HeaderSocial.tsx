import React from 'react'
import styled from 'styled-components'
import {styledSectionType} from '../../../types/styledTypes'
import HeaderSocialItem from './HeaderSocialItem'
import {faAt} from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons'

const HeaderSocialSection: styledSectionType = styled.section`
	display: flex;
	border: 1px solid red;
	min-height: 70px;

	@media only screen and (max-width: 900px) {
		flex-direction: column-reverse;
	}
`
const HeaderSocial = () => {
	let socialMedia = [faAt, faFacebookSquare, faInstagram]

	return (
		<HeaderSocialSection>
			{socialMedia.map((item, index) => <HeaderSocialItem icon={item} key={index} />)}
		</HeaderSocialSection>
	)
}

export default HeaderSocial
