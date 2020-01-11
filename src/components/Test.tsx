import React, {useRef} from 'react'
import styled, {keyframes} from 'styled-components'

const bounce = keyframes`
from,
20%,
53%,
80%,
to {
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translate3d(0, 0, 0);
}

40%,
43% {
  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  transform: translate3d(0, -30px, 0);
}

70% {
  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  transform: translate3d(0, -15px, 0);
}

90% {
  transform: translate3d(0, -4px, 0);
}`

const TestSection = styled.section`
	border: 1px solid red;
	position: absolute;
	width: 750px;
	height: 750px;
	background: white;
	z-index: 10;
	display: none;

	& > svg {
		width: 100%;
		height: 100%;

		& > circle {
			stroke: red;
		}
	}
`

const Test = () => {
	const testSVGRef = useRef()

	return (
		<TestSection>
			<svg />
		</TestSection>
	)
}

export default Test
