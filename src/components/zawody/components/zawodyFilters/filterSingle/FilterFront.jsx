import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const FilterFrontDiv = styled.div`
	padding: 0 8px;
	display: flex;
	align-items: center;
	height: 40px;
	justify-content: space-between;
	border-bottom: 0.5px solid lightgray;

	& > svg {
		margin-left: 8px;
		transform: ${({isFilterOptionsOpen}) => isFilterOptionsOpen && 'rotate(180deg)'};
	}
`

const FilterFront = ({filterTitle, isFilterOptionsOpen, setIsFilterOptionsOpen}) => {
	return (
		<FilterFrontDiv
			isFilterOptionsOpen={isFilterOptionsOpen}
			onClick={() => setIsFilterOptionsOpen(!isFilterOptionsOpen)}>
			{filterTitle}
			<FontAwesomeIcon icon={[ 'fas', 'sort-down' ]} />
		</FilterFrontDiv>
	)
}

export default FilterFront
