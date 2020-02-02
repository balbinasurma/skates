const calcScale = (totalWidth, totalHeight, bounds) => {
	if (totalWidth && totalHeight && bounds) {
		let hscale = totalWidth / (bounds[1][0] - bounds[0][0]),
			vscale = totalHeight / (bounds[1][1] - bounds[0][1])

		return hscale < vscale ? hscale : vscale
	} else {
		return 1
	}
}

export default calcScale
