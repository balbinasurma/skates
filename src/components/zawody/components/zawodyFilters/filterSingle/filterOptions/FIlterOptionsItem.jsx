import React from 'react'

import styled from 'styled-components'

const FilterOptionsItemArticle = styled.article`
	display: flex;
	align-items: center;
	height: 30px;
	padding: 0 16px;
	cursor: pointer;

	&:hover {
		background: gray;
		color: white;
	}
`

const FilterOptionsItem = ({value, filterKey, setFiltersApplied, filtersApplied}) => {
	return (
		<FilterOptionsItemArticle
			onClick={() => {
				if (filtersApplied) {
					// copy of filtersApplied
					let filtersAppliedCache = [ ...filtersApplied ]

					// if filtersApplied has already this key applied
					let thisFilterKeyPrevFilter = filtersAppliedCache.find(({appliedKey}) => appliedKey === filterKey)

					if (thisFilterKeyPrevFilter) {
						let {valuesArray} = thisFilterKeyPrevFilter,
							// if this value is in use
							isThisValueAlreadyApplied = valuesArray.includes(value),
							newValuesArray

						if (isThisValueAlreadyApplied) {
							newValuesArray = valuesArray.filter((option) => option !== value)
						} else {
							newValuesArray = [ ...valuesArray, value ]
						}

						thisFilterKeyPrevFilter.valuesArray = [ ...newValuesArray ]

						setFiltersApplied(thisFilterKeyPrevFilter)
					} else {
						filtersAppliedCache.push({
							appliedKey: filterKey,
							valuesArray: [ value ]
						})
						setFiltersApplied(filtersAppliedCache)
					}

					///////////////////////////////////
					//////////////////////////////////////
				} else {
					let newFilter = {
							appliedKey: filterKey,
							valuesArray: [ value ]
						},
						filtersArray = [ newFilter ]

					setFiltersApplied(filtersArray)
				}
			}}>
			{value}
		</FilterOptionsItemArticle>
	)
}

export default FilterOptionsItem
