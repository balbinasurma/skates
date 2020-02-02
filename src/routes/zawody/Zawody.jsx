import React, {useEffect, useState} from 'react'

import ZawodyChart from './components/zawodyChart/ZawodyChart'
import ZawodyFilters from './components/zawodyFilters/ZawodyFilters'
import firebase from 'functions/firebase'
import styled from 'styled-components'

const ZawodyDiv = styled.div``

const Zawody = ({dataArray}) => {
	const [ filtersApplied, setFiltersApplied ] = useState(),
		[ filteredData, setFilteredData ] = useState()

	useEffect(
		() => {
			if (filtersApplied) {
				;(async () => {
					let child = filtersApplied[0],
						equalTo = filtersApplied[1],
						ref = firebase.database().ref('/zawody/data'),
						snapshot = await ref.once('value'),
						data = snapshot.val(),
						dataFiltered = data.filter((row) => row[child] && row[child].includes(equalTo))

					setFilteredData(dataFiltered)
				})()
			} else {
				setFilteredData()
			}
		},
		[ filtersApplied ]
	)

	return (
		<ZawodyDiv>
			<ZawodyFilters
				setFiltersApplied={setFiltersApplied}
				filtersApplied={filtersApplied}
				dataArray={dataArray}
			/>
			<ZawodyChart dataArray={filteredData ? filteredData : dataArray} />
		</ZawodyDiv>
	)
}

export default Zawody
