import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import ZawodyFilters from './zawodyFilters/ZawodyFilters'
import ZawodyChart from './ZawodyChart'
import dataBackup from './data/dataBackup'
import calendarData from './data/calendarData'
const ZawodyDiv = styled.div``

const Zawody = () => {
	const [ filtersApplied, setFiltersApplied ] = useState()

	return (
		<ZawodyDiv>
			<ZawodyFilters
				setFiltersApplied={setFiltersApplied}
				filtersApplied={filtersApplied}
				calendarData={calendarData}
			/>
			<ZawodyChart calendarData={calendarData} />
		</ZawodyDiv>
	)
}

export default Zawody
