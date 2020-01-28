import React from 'react'
import styled from 'styled-components'
import DivTitleForMainSection from './DivTitleForMainSection'

const DivForMainSectionDiv = styled.div`
	border: 1px solid red;
	height: 95vh;
`

const DivForMainSection = ({divTitle, content}) => {
	return (
		<DivForMainSectionDiv className="div-for-main-section">
			<DivTitleForMainSection divTitle={divTitle} />
			{content}
		</DivForMainSectionDiv>
	)
}

export default DivForMainSection