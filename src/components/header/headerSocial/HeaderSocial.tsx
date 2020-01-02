import React from 'react'
import styled from 'styled-components'
import {styledSectionType} from '../../../types/styledTypes'
import HeaderSocialItem from './HeaderSocialItem'
import {faAt} from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons'

const HeaderSocialSection: styledSectionType = styled.section`height: 100%;`
const HeaderSocial = () => {
	let socialMedia = [faAt, faFacebookSquare, faInstagram]

	return (
		<HeaderSocialSection>
			{socialMedia.map((item, index) => <HeaderSocialItem icon={item} key={index} />)}
		</HeaderSocialSection>
	)
}

export default HeaderSocial
