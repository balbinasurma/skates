import React, {useEffect, useRef, useState} from 'react'

import FilterFront from './FilterFront'
import FilterOptions from './filterOptions/FilterOptions'
import styled from 'styled-components'

const FilterSingleArticle = styled.article`
	display: flex;
	flex-direction: column;
	position: relative;
	min-width: 150px;

	@media only screen and (max-width: ${process.env.BREAKPOINT_TWO}) {
		min-width: 265px;
		margin-bottom: 10px;
	}

	@media only screen and (max-width: ${process.env.BREAKPOINT_ONE}) {
		min-width: 300px;
	}
`

const FilterSingle = ({filterIcon, filterTitle, valuesArray, filterKey, setFiltersApplied, filtersApplied}) => {
	const [ isFilterOptionsOpen, setIsFilterOptionsOpen ] = useState(false),
		thisFilterSingleRef = useRef()

	useEffect(() => {
		const handleClickOutsideFilter = ({target}) => {
			if (!thisFilterSingleRef.current.contains(target)) {
				setIsFilterOptionsOpen(false)
			}
		}

		window.addEventListener('click', handleClickOutsideFilter)

		return () => window.removeEventListener('click', handleClickOutsideFilter)
	}, [])

	return (
		<FilterSingleArticle ref={thisFilterSingleRef}>
			<FilterFront
				filterIcon={filterIcon}
				filterTitle={filterTitle}
				setIsFilterOptionsOpen={setIsFilterOptionsOpen}
				isFilterOptionsOpen={isFilterOptionsOpen}
				filtersApplied={filtersApplied}
				filterKey={filterKey}
				setFiltersApplied={setFiltersApplied}
			/>
			<FilterOptions
				setFiltersApplied={setFiltersApplied}
				filterKey={filterKey}
				valuesArray={valuesArray}
				setIsFilterOptionsOpen={setIsFilterOptionsOpen}
				isFilterOptionsOpen={isFilterOptionsOpen}
			/>
		</FilterSingleArticle>
	)
}

export default FilterSingle
