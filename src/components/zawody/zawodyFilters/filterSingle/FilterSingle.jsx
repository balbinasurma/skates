import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import FilterFront from './FilterFront'
import FilterOptions from './filterOptions/FilterOptions'

const FilterSingleArticle = styled.article`
	display: flex;
	flex-direction: column;
	position: relative;
	min-width: 120px;
`

const FilterSingle = ({filterTitle, valuesArray, filterKey, setFiltersApplied, filtersApplied}) => {
	const [ isFilterOptionsOpen, setIsFilterOptionsOpen ] = useState(false),
		thisFilterSingleRef = useRef()

	useEffect(() => {
		const handleClickOutsideFilter = (event) => {
			const {target} = event

			if (!thisFilterSingleRef.current.contains(target)) {
				setIsFilterOptionsOpen(false)
			}
		}

		window.addEventListener('click', handleClickOutsideFilter)
	}, [])

	return (
		<FilterSingleArticle ref={thisFilterSingleRef}>
			<FilterFront
				filterTitle={filterTitle}
				setIsFilterOptionsOpen={setIsFilterOptionsOpen}
				isFilterOptionsOpen={isFilterOptionsOpen}
			/>
			<FilterOptions
				setFiltersApplied={setFiltersApplied}
				filtersApplied={filtersApplied}
				filterKey={filterKey}
				valuesArray={valuesArray}
				setIsFilterOptionsOpen={setIsFilterOptionsOpen}
				isFilterOptionsOpen={isFilterOptionsOpen}
			/>
		</FilterSingleArticle>
	)
}

export default FilterSingle
