import React, {useContext} from 'react'
import styled from 'styled-components'
import {styledSectionType} from 'types/styledTypes'
import HeaderSocialItem from './HeaderSocialItem'
import {faAt} from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import themeContext from '../../../context/themeContext'
import {socialMediaArrayType} from 'types/allTypes'

const HeaderSocialSection: styledSectionType = styled.section`
	display: flex;
	// @ts-ignore
	min-height: ${({headerItemHeight}) => headerItemHeight};
`
const HeaderSocial = () => {
	// @ts-ignore
	const {headerItemHeight} = useContext(themeContext)

	let socialMedia: socialMediaArrayType = [
		{icon: faAt, link: 'mailto:balbina.surma@gmail.gmail?subject=Kontakt ze strony internetowej'},
		{icon: faLinkedin, link: 'https://pl.linkedin.com/in/balbina-surma-5a78a8171'},
		{icon: faFacebookSquare, link: 'http://facebook.com/balbina.surma.1'}
	]

	return (
		// @ts-ignore
		<HeaderSocialSection headerItemHeight={headerItemHeight}>
			{socialMedia.map(({icon, link}, index) => <HeaderSocialItem icon={icon} link={link} key={index} />)}
		</HeaderSocialSection>
	)
}

export default HeaderSocial
