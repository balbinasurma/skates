import React from 'react'
import styled from 'styled-components'
import HeroMainGeneric from './HeroMainGeneric'
import {
	mainTitleType,
	mainContentType,
	heroBackgroundImageType,
	isHeroFullSizeType,
	isHeroShadedType,
	heroImagePOsitionTopType,
	isHeroBrightType
} from 'types/globalTypes'

const MainGenericMain = styled.main`height: auto;`

const MainGeneric = ({
	mainTitle,
	mainContent,
	heroBackgroundImage,
	isHeroFullSize,
	isHeroShaded,
	heroImagePositionTop,
	isHeroBright
}) => (
	<MainGenericMain className="main-generic">
		<HeroMainGeneric
			heroTitle={mainTitle}
			heroImagePositionTop={heroImagePositionTop}
			heroBackgroundImage={heroBackgroundImage}
			isHeroBright={isHeroBright}
			isHeroShaded={isHeroShaded}
			isHeroFullSize={isHeroFullSize}
		/>
		{mainContent}
	</MainGenericMain>
)

MainGeneric.propTypes = {
	mainTitle: mainTitleType,
	mainContent: mainContentType,
	heroBackgroundImage: heroBackgroundImageType,
	isHeroFullSize: isHeroFullSizeType,
	isHeroShaded: isHeroShadedType,
	heroImagePositionTop: heroImagePOsitionTopType,
	isHeroBright: isHeroBrightType
}

export default MainGeneric
