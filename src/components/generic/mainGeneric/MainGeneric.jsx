import React from 'react'
import styled from 'styled-components'
import HeroMainGeneric from './HeroMainGeneric'

const MainGenericMain = styled.main`
	border: 3px solid red;
	height: auto;
`

const MainGeneric = ({title, mainContent, heroBackgroundImage, isHeroFullSize}) => (
	<MainGenericMain className="main-generic">
		<HeroMainGeneric heroTitle={title} heroBackgroundImage={heroBackgroundImage} isHeroFullSize={isHeroFullSize} />
		{mainContent}
	</MainGenericMain>
)

export default MainGeneric
