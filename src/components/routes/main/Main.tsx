import React from 'react'
import styled from 'styled-components'
import {styledMainType} from 'types/styledTypes'
import Hero from './hero/Hero'

const MainMain: styledMainType = styled.main`
	height: 100%;

	& > div {
		height: 1500px;
	}
`

const Main = () => {
	return (
		<MainMain id='main'>
			<Hero />
			<div>aaa</div>
		</MainMain>
	)
}

export default Main
