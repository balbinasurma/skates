import React from 'react'
import styled from 'styled-components'
import {styledMainType} from 'types/styledTypes'
import Hero from './hero/Hero'
import PucharPolski from './pucharPolski/PucharPolski'

const MainMain: styledMainType = styled.main`height: 100%;`

const Main = () => {
	return (
		<MainMain id='main'>
			<Hero />
			<PucharPolski />
		</MainMain>
	)
}

export default Main
