import { faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react'
import styled from 'styled-components'
import themeContext from '../../../context/themeContext'
import HeaderSocialItem from './HeaderSocialItem'

const HeaderSocialSection = styled.section`
	display: flex;
	// @ts-ignore
	min-height: ${({ headerItemHeight }) => headerItemHeight};
`
const HeaderSocial = () => {
	// @ts-ignore
	const { headerItemHeight } = useContext(themeContext)

	let socialMedia = [
		{ label: 'email', icon: faAt, link: 'mailto:balbina.surma@gmail.com?subject=Kontakt ze strony internetowej' },
		{ label: 'LinkedIn', icon: faLinkedin, link: 'https://pl.linkedin.com/in/balbina-surma-5a78a8171' },
		{ label: 'Facebook', icon: faFacebookSquare, link: 'http://facebook.com/balbina.surma.1' }
	]

	return (
		// @ts-ignore
		<HeaderSocialSection headerItemHeight={headerItemHeight}>
			{socialMedia.map(({ icon, link, label }, index) => (
				<HeaderSocialItem label={label} icon={icon} link={link} key={index} />
			))}
		</HeaderSocialSection>
	)
}

export default HeaderSocial
