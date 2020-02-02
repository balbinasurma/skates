import FilterSingle from './filterSingle/FilterSingle'
import React from 'react'
import styled from 'styled-components'

const ZawodyFiltersDiv = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: space-evenly;
	flex-wrap: wrap;
	padding: 10px;
`

const ZawodyFilters = ({dataArray, setFiltersApplied, filtersApplied}) => {
	dataArray = dataArray && dataArray.filter(({country}) => country === 'POL')

	let filters = [
		{
			filterIcon: 'map-signs',
			filterTitle: 'województwo',
			filterKey: 'wojFullName'
		},
		{
			filterIcon: 'road',
			filterTitle: 'dystans',
			filterKey: 'distance'
		},
		{
			filterIcon: 'calendar',
			filterTitle: 'miesiąc',
			filterKey: 'monthFullName'
		},
		{
			filterIcon: 'shield-alt',
			filterTitle: 'ranga',
			filterKey: 'rangaFullName'
		}
	].map(({filterIcon, filterTitle, filterKey}) => ({
		filterIcon,
		filterTitle,
		filterKey,
		valuesArray: Array.from(
			new Set(
				Array.from(
					new Set(
						dataArray &&
							dataArray.map((record) => {
								let alfa = Object.entries(record).filter(([ objectKey ]) => {
									return objectKey === filterKey
								})[0][1]

								return alfa
							})
					)
				).flat()
			)
		).sort((prev, next) => (prev < next ? -1 : 1))
	}))

	return (
		<ZawodyFiltersDiv>
			{filters.map(({filterTitle, valuesArray, filterIcon, filterKey}, index) => (
				<FilterSingle
					setFiltersApplied={setFiltersApplied}
					filtersApplied={filtersApplied}
					valuesArray={valuesArray}
					filterKey={filterKey}
					filterTitle={filterTitle}
					filterIcon={filterIcon}
					key={index}
				/>
			))}
		</ZawodyFiltersDiv>
	)
}

export default ZawodyFilters
