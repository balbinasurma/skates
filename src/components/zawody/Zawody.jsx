import React, {useEffect, useState} from 'react'

import ZawodyChart from './components/zawodyChart/ZawodyChart'
import ZawodyFilters from './components/zawodyFilters/ZawodyFilters'
import firebase from 'functions/firebase'
import styled from 'styled-components'

const ZawodyDiv = styled.div``

const Zawody = ({dataArray}) => {
	const [ filtersApplied, setFiltersApplied ] = useState()

	useEffect(() => {
		const getDataFromDB = async (child) => {
			let ref = firebase.database().ref('country'),
				snapshot = await ref

			// let aaa = await snapshot.val()

			console.log(ref)
		}

		getDataFromDB('zawody')
	})

	return (
		<ZawodyDiv>
			<ZawodyFilters
				setFiltersApplied={setFiltersApplied}
				filtersApplied={filtersApplied}
				dataArray={dataArray}
			/>
			<ZawodyChart dataArray={dataArray} />
		</ZawodyDiv>
	)
}

export default Zawody
