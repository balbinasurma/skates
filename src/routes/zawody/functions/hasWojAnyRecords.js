const hasWojAnyRecords = (polandData, WOJ) => {
	if (polandData) {
		let thisWojRecords = polandData.filter(({woj}) => woj === WOJ)

		return thisWojRecords.length
	}
}

export default hasWojAnyRecords
