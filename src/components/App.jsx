import '@babel/polyfill'

import React, {Fragment, useEffect, useState} from 'react'
import {Route, Switch} from 'react-router-dom'

import FerieLower from 'routes/main/ferie/FerieLower'
import FerieUpper from 'routes/main/ferie/FerieUpper'
import Header from 'components/header/Header'
import MainGeneric from 'generic/mainGeneric/MainGeneric'
import PucharPolskiDivider from 'routes/osiagniecia/pucharPolski/PucharPolskiDivider'
import PucharPolskiItem from 'routes/osiagniecia/pucharPolski/PucharPolskiItem'
import SectionForMainGeneric from 'generic/sectionForMain/SectionForMainGeneric'
import Zawody from 'routes/zawody/Zawody'
import getDataFromDB from 'functions/getDataFromDB'
import injectTagInHtml from 'functions/injectTagInHtml'

const App = () => {
	// HOOKS
	const [ ferieData, setFerieData ] = useState(),
		[ pucharPolskiData, setPucharPolskiData ] = useState(),
		[ zawodyData, setZawodyData ] = useState()

	// getting data for Main
	useEffect(() => {
		//injection meta data to index.html
		injectTagInHtml('meta', process.env.DATABASE_HTML_META_DATA_PATH)
		//
		// DATA
		//

		// let dataToGetFromDB = [
		// 	{
		// 		pathOnDB: process.env.DATABASE_FERIE,
		// 		components: (
		// 			<Fragment>
		// 				<FerieUpper data={ferieData.sectionContent.up.subsectionContent} />
		// 				<FerieLower data={ferieData.sectionContent.down} />
		// 			</Fragment>
		// 		),
		// 		state: setFerieData
		// 	},
		// 	{
		// 		pathOnDB: process.env.DATABASE_ZAWODY,
		// 		components: (
		// 			<Fragment>
		// 				{pucharPolskiData.sectionContent.map(({subsectionTitle, comment, date, imageLink}, index) => (
		// 					<Fragment key={index}>
		// 						<PucharPolskiItem
		// 							title={subsectionTitle}
		// 							comment={comment}
		// 							date={date}
		// 							picture={imageLink}
		// 						/>
		// 						{index === pucharPolskiData.sectionContent.length - 2 && <PucharPolskiDivider />}
		// 					</Fragment>
		// 				))}
		// 			</Fragment>
		// 		),
		// 		state: setPucharPolskiData
		// 	},
		// 	{
		// 		pathOnDB: process.env.DATABASE_PUCHAR_POLSKI,
		// 		components: <Zawody dataArray={zawodyData.data} />,
		// 		state: setZawodyData
		// 	}
		// ]
		;(async () => {
			// getting ferieData
			let ferieData = await getDataFromDB(process.env.DATABASE_FERIE)

			ferieData.components = (
				<Fragment>
					<FerieUpper data={ferieData.sectionContent.up.subsectionContent} />
					<FerieLower data={ferieData.sectionContent.down} />
				</Fragment>
			)
			setFerieData(ferieData)
		})()

		// getting pucharPolskiData
		;(async () => {
			let pucharPolskiData = await getDataFromDB(process.env.DATABASE_PUCHAR_POLSKI)

			pucharPolskiData.components = (
				<Fragment>
					{pucharPolskiData.sectionContent.map(({subsectionTitle, comment, date, imageLink}, index) => (
						<Fragment key={index}>
							<PucharPolskiItem
								title={subsectionTitle}
								comment={comment}
								date={date}
								picture={imageLink}
							/>
							{index === pucharPolskiData.sectionContent.length - 2 && <PucharPolskiDivider />}
						</Fragment>
					))}
				</Fragment>
			)
			setPucharPolskiData(pucharPolskiData)
		})()

		// getting data for Zawody
		;(async () => {
			// getting ferieData
			let zawodyData = await getDataFromDB(process.env.DATABASE_ZAWODY)

			zawodyData.components = <Zawody dataArray={zawodyData.data} />
			setZawodyData(zawodyData)
		})()
	}, [])

	// app doesn't have styled, becuase doesn't need additional main tag
	return (
		<Fragment>
			<Header />
			<Switch>
				<Route exact path="/">
					<MainGeneric
						mainTitle="Balbina Surma"
						isHeroShaded={70}
						isHeroFullSize={true}
						heroBackgroundImage={process.env.LINKS_HERO_BACKGROUND}
						mainContent={
							ferieData && (
								<SectionForMainGeneric
									mainSectionTitle={ferieData.sectionTitle}
									mainSectionBackgroundImage={ferieData.backgroundImage}
									mainSectionContent={ferieData.components}
								/>
							)
						}
					/>
				</Route>
				{pucharPolskiData && (
					<Route exact path={pucharPolskiData.path}>
						<MainGeneric
							heroImagePositionTop={pucharPolskiData.heroImagePositionTop}
							heroBackgroundImage={pucharPolskiData.heroBackgroundImage}
							mainContent={
								<SectionForMainGeneric
									mainSectionTitle={pucharPolskiData.sectionTitle}
									mainSectionContent={pucharPolskiData.components}
								/>
							}
						/>
					</Route>
				)}
				{zawodyData && (
					<Route exact path={zawodyData.path}>
						<MainGeneric
							heroImagePositionTop={zawodyData.heroImagePositionTop}
							isHeroBright={zawodyData.isHeroBright}
							// heroBackgroundImage={zawodyData.heroBackgroundImage}
							isHeroFullSize={zawodyData.isHeroFullSize}
							mainContent={<SectionForMainGeneric mainSectionContent={zawodyData.components} />}
						/>
					</Route>
				)}
			</Switch>
		</Fragment>
	)
}

export default App
