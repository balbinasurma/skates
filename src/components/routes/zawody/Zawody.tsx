import React from 'react'
import styled from 'styled-components'
import {styledMainType} from 'types/styledTypes'

const ZawodyMain: styledMainType = styled.main`
	border: 1px solid red;
	width: 100%;
	height: 100%;
`

const Zawody = () => {
	return <ZawodyMain />
}
export default Zawody
