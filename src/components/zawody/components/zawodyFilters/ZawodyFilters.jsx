import React from 'react'
import styled from 'styled-components'
import FilterSingle from './filterSingle/FilterSingle'

const ZawodyFiltersDiv = styled.div`
	width: 100%;
	height: 200px;
	display: flex;
	align-items: flex-start;
	justify-content: space-evenly;
`

const ZawodyFilters = ({calendarData, setFiltersApplied, filtersApplied}) => {
	calendarData = calendarData.filter(({country}) => country === 'POL')

	let filters = [
		{
			filterTitle: 'województwo',
			filterKey: 'woj'
		},
		{
			filterTitle: 'dystans',
			filterKey: 'distance'
		}
	].map(({filterTitle, filterKey}) => {
		return {
			filterTitle,
			filterKey,
			valuesArray: Array.from(
				new Set(
					calendarData.map(
						(record) => Object.entries(record).filter(([ objectKey ]) => objectKey === filterKey)[0][1]
					)
				)
			)
		}
	})

	return (
		<ZawodyFiltersDiv>
			{filters.map(({filterTitle, valuesArray, filterKey}, index) => (
				<FilterSingle
					setFiltersApplied={setFiltersApplied}
					filtersApplied={filtersApplied}
					valuesArray={valuesArray}
					filterKey={filterKey}
					filterTitle={filterTitle}
					key={index}
				/>
			))}
		</ZawodyFiltersDiv>
	)
}

export default ZawodyFilters
