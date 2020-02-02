import React, {useMemo} from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const FilterFrontDiv = styled.div`
	padding: 0 8px;
	display: flex;
	align-items: center;
	height: 40px;
	justify-content: space-between;
	border-bottom: 0.5px solid lightgray;
	cursor: pointer;
	text-transform: capitalize;

	& > svg {
		&:first-child {
			margin-right: 8px;
		}

		&:last-child {
			margin-left: 8px;
			transform: ${({isFilterOptionsOpen}) => isFilterOptionsOpen && 'rotate(180deg)'};
		}
	}
`

const FilterFront = ({
	filterIcon,
	filterTitle,
	isFilterOptionsOpen,
	setIsFilterOptionsOpen,
	filtersApplied,
	filterKey,
	setFiltersApplied
}) => {
	const isThisFilterApplied = useMemo(() => (filtersApplied && filtersApplied[0] === filterKey ? true : false), [
		filtersApplied,
		filterKey
	])

	return (
		<FilterFrontDiv
			isFilterOptionsOpen={isFilterOptionsOpen}
			onClick={() => setIsFilterOptionsOpen(!isFilterOptionsOpen)}>
			<FontAwesomeIcon icon={[ 'fas', filterIcon ]} />
			<span>{isThisFilterApplied ? filtersApplied[1] : filterTitle}</span>
			<FontAwesomeIcon
				icon={isThisFilterApplied ? [ 'fas', 'times' ] : [ 'fas', 'sort-down' ]}
				onClick={() => {
					setFiltersApplied()
					setIsFilterOptionsOpen(false)
				}}
			/>
		</FilterFrontDiv>
	)
}

export default FilterFront
