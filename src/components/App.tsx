import injectTagInHtml from 'functions/injectTagInHtml'
import Header from 'components/header/Header'
import React, {Fragment, useEffect, useState} from 'react'
import {
	faAt,
	faBars,
	faCalendarAlt,
	faClock,
	faMapMarkedAlt,
	faSkating,
	faTimes
} from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare, faLinkedin, fab} from '@fortawesome/free-brands-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'
import MainGeneric from './generic/mainGeneric/MainGeneric'
import getDataFromDB from 'functions/getDataFromDB'
import PucharPolskiItem from './main/pucharPolski/PucharPolskiItem'
import PucharPolskiDivider from './main/pucharPolski/PucharPolskiDivider'
import SectionForMainGeneric from './generic/sectionForMain/SectionForMainGeneric'
import FerieUpper from './main/ferie/FerieUpper'
import FerieLower from './main/ferie/FerieLower'

library.add(fab, faFacebookSquare, faLinkedin, faAt, faBars, faTimes, faSkating, faCalendarAlt, faClock, faMapMarkedAlt)

const App = () => {
	//injection meta data to index.html
	useEffect(() => {
		injectTagInHtml('meta', process.env.DATABASE_HTML_META_DATA_PATH)
	}, [])

	const [ ferieData, setFerieData ] = useState(),
		[ pucharPolskiData, setPucharPolskiData ] = useState()

	// get partially ferieData from DB and local
	useEffect(() => {
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
	}, [])

	return (
		// app doesn't have styled, becuase doesn't need additional main tag
		<Fragment>
			<Header />
			<MainGeneric
				title="Balbina Surma"
				isHeroFullSize={true}
				heroBackgroundImage="ddd"
				content={
					<Fragment>
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
					</Fragment>
				}
			/>
		</Fragment>
	)
}

export default App
