import React, {Fragment, lazy, useEffect, useState} from 'react'
import styled from 'styled-components'
import {styledSectionType} from 'types/styledTypes'
import getDataFromDB from '../../../../functions/getDataFromDB'

const PucharPolskiDivider = lazy(() => import('./PucharPolskiDivider')),
	PucharPolskiItem = lazy(() => import('./PucharPolskiItem'))

const PucharPolskiSection: styledSectionType = styled.section`
	& > h1 {
		font-size: 35px;
		text-transform: uppercase;
		text-align: center;
		font-weight: 700;
		letter-spacing: 5px;
		margin-top: 0;
	}
`

const PucharPolski = () => {
	const [pucharPolskiDataArray, setPucharPolskiDataArray] = useState()

	useEffect(() => {
		;(async () => {
			setPucharPolskiDataArray(await getDataFromDB('pucharPolski2'))
		})()
	}, [])

	return (
		<PucharPolskiSection>
			{/* <h1>puchar polski 2019</h1> */}
			{pucharPolskiDataArray &&
				pucharPolskiDataArray.sectionContent.map(({title, date, picture, comment}, index) => (
					<Fragment key={index}>
						<PucharPolskiItem comment={comment} picture={picture} date={date} title={title} />
						<PucharPolskiDivider />
					</Fragment>
				))}
		</PucharPolskiSection>
	)
}

export default PucharPolski
