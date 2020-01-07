import React, {useEffect} from 'react'
import styled from 'styled-components'
import {styledMainType} from 'types/styledTypes'

const ZawodyMain: styledMainType = styled.main`
	border: 1px solid red;
	width: 100%;
	height: 100%;
`

const Zawody = () => {
	useEffect(() => {
		run()
	}, [])

	const run = async () => {
		console.log('run')

		// let aaa = await fetch(
		// 	'https://maps.googleapis.com/maps/api/js?key=AIzaSyDyvK1-DbhdWI6CXi2i_0ejD2CrHpqPb1U&callback=initMap',
		// 	{
		// 		mode: 'no-cors'
		// 	}
		// )
		// console.log(aaa)
	}

	// const initMap = () => console.log('initmap')

	return (
		<ZawodyMain>
			<script
				src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDyvK1-DbhdWI6CXi2i_0ejD2CrHpqPb1U&callback=initMap'
				onLoad={() => console.log('aaa')}
				async
				defer
			/>
		</ZawodyMain>
	)
}
export default Zawody
