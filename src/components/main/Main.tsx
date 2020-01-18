import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'
import Hero from './Hero'
import SectionForMainGeneric from '../generic/SectionForMainGeneric'
import FerieLower from './ferie/FerieLower'
import FerieUpper from './ferie/FerieUpper'
import getDataFromDB from 'functions/getDataFromDB'

const MainMain = styled.main`height: auto;`

const Main = () => {
	const [ ferieData, setFerieData ] = useState()

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
		</MainMain>
	)
}

export default Main
