import React from 'react'
import styled from 'styled-components'

const FilterOptionsItemArticle = styled.article`
	display: flex;
	align-items: center;
	min-height: 30px;
	padding: 5px 16px;
	cursor: pointer;
	text-transform: capitalize;

	&:hover {
		background: gray;
		color: white;
	}
`

const FilterOptionsItem = ({value, filterKey, setFiltersApplied, setIsFilterOptionsOpen}) => {
	return (
		<FilterOptionsItemArticle
			onClick={() => {
				setFiltersApplied([ filterKey, value ])
				setIsFilterOptionsOpen(false)
			}}>
			{value}
		</FilterOptionsItemArticle>
	)
}

export default FilterOptionsItem
