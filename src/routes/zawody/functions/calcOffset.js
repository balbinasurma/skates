const calcOffset = (totalWidth, totalHeight, bounds) => {
	let x, y

	if (bounds) {
		x = totalWidth - (bounds[0][0] + bounds[1][0]) / 2
		y = totalHeight - (bounds[0][1] + bounds[1][1]) / 2
	} else {
		x = totalWidth / 2
		y = totalHeight / 2
	}

	return [ x, y ]
}

export default calcOffset
