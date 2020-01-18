import React from 'react'
import styled from 'styled-components'
import HeroMainGeneric from './HeroMainGeneric'

const MainGenericMain = styled.main`
	border: 3px solid red;
	height: auto;
`

const MainGeneric = ({title, content, heroBackgroundImage, isHeroFullSize}) => (
	<MainGenericMain>
		<HeroMainGeneric heroTitle={title} heroBackgroundImage={heroBackgroundImage} isHeroFullSize={isHeroFullSize} />
		{content}
	</MainGenericMain>
)

export default MainGeneric
