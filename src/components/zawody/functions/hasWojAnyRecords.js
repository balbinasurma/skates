const hasWojAnyRecords = (polandData, WOJ) => {
	let thisWojRecords = polandData.filter(({woj}) => woj === WOJ)

	return thisWojRecords.length
}

export default hasWojAnyRecords
