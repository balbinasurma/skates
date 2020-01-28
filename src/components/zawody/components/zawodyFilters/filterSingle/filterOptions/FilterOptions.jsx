import React from 'react'
import styled from 'styled-components'
import FilterOptionsItem from './FIlterOptionsItem'

const FilterOptionsDiv = styled.div`
	width: 100%;
	height: 150px;
	overflow-y: auto;
	box-shadow: 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12);
	position: absolute;
	left: 0;
	top: 40px;
`

const FilterOptions = ({
	valuesArray,
	isFilterOptionsOpen,
	setIsFilterOptionsOpen,
	filterKey,
	setFiltersApplied,
	filtersApplied
}) => {
	return isFilterOptionsOpen ? (
		<FilterOptionsDiv>
			{valuesArray.map((value, index) => {
				return (
					<FilterOptionsItem
						setFiltersApplied={setFiltersApplied}
						filtersApplied={filtersApplied}
						filterKey={filterKey}
						value={value}
						key={index}
					/>
				)
			})}
		</FilterOptionsDiv>
	) : null
}

export default FilterOptions
