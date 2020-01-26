import React from 'react'
import styled from 'styled-components'
import HeroMainGeneric from './HeroMainGeneric'

const MainGenericMain = styled.main`height: auto;`

const MainGeneric = ({
	title,
	mainContent,
	heroBackgroundImage,
	isHeroFullSize,
	isHeroShaded,
	heroImagePositionTop,
	isHeroBright
}) => (
	<MainGenericMain className="main-generic">
		<HeroMainGeneric
			heroTitle={title}
			heroImagePositionTop={heroImagePositionTop}
			heroBackgroundImage={heroBackgroundImage}
			isHeroBright={isHeroBright}
			isHeroShaded={isHeroShaded}
			isHeroFullSize={isHeroFullSize}
		/>
		{mainContent}
	</MainGenericMain>
)

export default MainGeneric
