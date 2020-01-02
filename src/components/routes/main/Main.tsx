import React from 'react'
import styled from 'styled-components'
import {styledMainType} from 'types/styledTypes'
import Hero from './hero/Hero'

const MainMain: styledMainType = styled.main`height: 100%;`

const Main = () => {
	return (
		<MainMain>
			<Hero />
		</MainMain>
	)
}

export default Main
