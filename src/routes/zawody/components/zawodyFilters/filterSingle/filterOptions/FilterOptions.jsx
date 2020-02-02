import FilterOptionsItem from './FIlterOptionsItem'
import React from 'react'
import styled from 'styled-components'

const FilterOptionsDiv = styled.div`
	width: 100%;
	min-height: 30px;
	max-height: calc(4 * 30px);
	overflow-y: auto;
	box-shadow: 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12);
	position: absolute;
	background: white;
	left: 0;
	top: 40px;
	z-index: 5;
`

const FilterOptions = ({valuesArray, isFilterOptionsOpen, setIsFilterOptionsOpen, filterKey, setFiltersApplied}) => {
	return isFilterOptionsOpen ? (
		<FilterOptionsDiv>
			{valuesArray.map((value, index) => {
				return (
					<FilterOptionsItem
						setFiltersApplied={setFiltersApplied}
						setIsFilterOptionsOpen={setIsFilterOptionsOpen}
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
