import styled from 'styled-components'

const MainGenericMain = styled.main`
	border: 1px solid red;
	width: 100%;
	min-height: 100vh;

	& > header {
		width: 100%;
		height: 20%;
		border: 1px solid red;
	}
`

const MainGeneric = () => (
	<MainGenericMain>
		<header>header main</header>
	</MainGenericMain>
)

export default MainGeneric
