import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'
import Hero from './Hero'
import SectionForMainGeneric from '../generic/SectionForMainGeneric'
import FerieLower from './ferie/FerieLower'
import FerieUpper from './ferie/FerieUpper'
import getDataFromDB from 'functions/getDataFromDB'
import PucharPolskiItem from './pucharPolski/PucharPolskiItem'
import PucharPolskiDivider from './pucharPolski/PucharPolskiDivider'

const MainMain = styled.main`height: auto;`

const Main = () => {
	const [ ferieData, setFerieData ] = useState(),
		[ pucharPolskiData, setPucharPolskiData ] = useState()

	// get partially ferieData from DB and local
	useEffect(() => {
		;(async () => {
			let ferieData = await getDataFromDB(process.env.DATABASE_FERIE)

			ferieData.components = (
				<Fragment>
					<FerieUpper data={ferieData.sectionContent.up.subsectionContent} />
					<FerieLower data={ferieData.sectionContent.down} />
				</Fragment>
			)
			setFerieData(ferieData)
		})()
	}, [])

	// get partially pucharPolski from DB and local
	useEffect(() => {
		;(async () => {
			let pucharPolskiData = await getDataFromDB(process.env.DATABASE_PUCHAR_POLSKI)

			pucharPolskiData.components = (
				<Fragment>
					{pucharPolskiData.sectionContent.map(({ subsectionTitle, comment, date, imageLink }, index) => (
						<Fragment>
							<PucharPolskiItem
								key={index}
								title={subsectionTitle}
								comment={comment}
								date={date}
								picture={imageLink}
							/>
							<PucharPolskiDivider />
						</Fragment>
					))}
				</Fragment>
			)
			setPucharPolskiData(pucharPolskiData)
		})()
	}, [])

	useEffect(
		() => {
			console.log(pucharPolskiData)
		},
		[ pucharPolskiData ]
	)

	return (
		<MainMain id="main">
			<Hero />
			{ferieData && (
				<SectionForMainGeneric
					mainSectionTitle={ferieData.sectionTitle}
					mainSectionBackgroundImage={ferieData.backgroundImage}
					mainSectionContent={ferieData.components}
				/>
			)}

			{pucharPolskiData && (
				<SectionForMainGeneric
					mainSectionTitle={pucharPolskiData.sectionTitle}
					mainSectionContent={pucharPolskiData.components}
				/>
			)}
		</MainMain>
	)
}

export default Main
