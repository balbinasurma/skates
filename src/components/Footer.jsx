import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import * as d3 from 'd3'

const FooterFooter = styled.footer`
	width: 100%;
	height: 400px;
	position: relative;
	background: rgba(240, 241, 242, 1);

	& > svg {
		width: 50%;
		height: 50%;
		border: 1px solid red;

		& > circle {
			&.active {
				fill: green;
			}
		}
	}

	& > P {
		color: red;

		& > aside {
			border: 1px solid red;
			position: absolute;
			width: 150px;
			display: none;
			left: 100px;
		}

		&:hover {
			color: blue;
		}
	}
`

const Footer = () => {
	// HOOKS
	const d3Ref = useRef()

	useEffect(() => {
		let svg = d3.select(d3Ref.current),
			data = [
				{
					r: 5,
					id: 'alfa'
				},
				{
					r: 10,
					id: 'beta'
				},
				{
					r: 15,
					id: 'gamma'
				},
				{
					r: 20,
					id: 'zeta'
				}
			],
			circles = svg
				.selectAll('circle')
				.data(data)
				.enter()
				.append('circle')
				.attr('id', (d) => d.id)
				.attr('r', (d) => d.r * 2)
				.attr('cx', (d, i) => (i + 1) * 100)
				.attr('cy', (d, i) => 30 * (i + 1))

		const handleClickOnCircle = (e) => {
			let thisCircle = d3.select(`#${e.id}`)

			if (thisCircle.classed('active')) {
				thisCircle.classed('active', false)
			} else {
				thisCircle.classed('active', true)
			}

			let g = svg.append('g')

			const zoomed = () => {
				g.style('stroke-width', 1.5 / d3.event.scale + 'px')
			}

			svg.call(d3.zoom().translate([ 0, 0 ]).scale(1).scaleExtent([ 1, 8 ]).on('zoom', zoomed))
		}

		circles.on('click', handleClickOnCircle)
	}, [])

	return (
		<FooterFooter>
			<p
				onMouseOver={({target}) => {
					let childrenArray = Array.from(target.children),
						lastChild = childrenArray && childrenArray[0]

					lastChild.style.display = 'block'
				}}
				onMouseLeave={({target}) => {
					let childrenArray = Array.from(target.children),
						lastChild = childrenArray && childrenArray[0]

					lastChild.style.display = 'none'
				}}
				onMouseMove={(event) => {
					// let childrenArray = Array.from(target.children)
					// let lastChild = childrenArray && childrenArray[0]
					// lastChild.style.display = 'none'

					console.log(event.movementX)
				}}>
				Balbina
				<aside>this is tooltip</aside>
			</p>

			<svg ref={d3Ref} />
		</FooterFooter>
	)
}

export default Footer
