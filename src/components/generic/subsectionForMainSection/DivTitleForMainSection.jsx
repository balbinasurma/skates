import React from 'react'
import styled from 'styled-components'

const DivTitleForMainSectionH2 = styled.h2`border: 1px solid red;`

const DivTitleForMainSection = ({divTitle}) => {
	return divTitle ? (
		<DivTitleForMainSectionH2 className="div-title-for-main-section">{divTitle}</DivTitleForMainSectionH2>
	) : null
}

export default DivTitleForMainSection