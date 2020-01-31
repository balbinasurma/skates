import React, {useEffect, useState} from 'react'

import HeaderSocialItem from './HeaderSocialItem'
import getDataFromDB from '../../../functions/getDataFromDB'
import styled from 'styled-components'

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
