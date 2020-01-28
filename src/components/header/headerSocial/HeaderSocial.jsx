import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import HeaderSocialItem from './HeaderSocialItem'
import getDataFromDB from '../../../functions/getDataFromDB'

const HeaderSocialSection = styled.section`
	display: flex;
	min-height: 70px;
`
const HeaderSocial = () => {
	const [ socialMedia, setSocialMedia ] = useState()

	useEffect(() => {
		;(async () => {
			setSocialMedia(await getDataFromDB(process.env.DATABASE_SOCIAL_MEDIA))
		})()
	}, [])

	return (
		<HeaderSocialSection>
			{socialMedia &&
				socialMedia.map(({icon, link, label}, index) => (
					<HeaderSocialItem
						headerSocialItemLabel={label}
						headerSocialItemIcon={[ icon ]}
						headerSocialItemLink={link}
						key={index}
					/>
				))}
		</HeaderSocialSection>
	)
}

export default HeaderSocial
