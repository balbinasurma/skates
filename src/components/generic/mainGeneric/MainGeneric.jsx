import {
	heroBackgroundImageType,
	heroImagePOsitionTopType,
	isHeroBrightType,
	isHeroFullSizeType,
	isHeroShadedType,
	mainContentType,
	mainTitleType
} from 'types/globalTypes'

import HeroMainGeneric from './HeroMainGeneric'
import React from 'react'
import styled from 'styled-components'

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
