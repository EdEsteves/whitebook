import styled from 'styled-components'

export const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	
	@media screen and (min-width: 1025px) {
		padding: 32px 68px;
  }

	a {
		position: absolute;
    top: 50%;
    left: 68px;
    transform: translateY(-50%);
		
		@media screen and (min-width: 1025px) {
			left: 68px;
  	}
	}
`

export const HeaderLogo = styled.div`
	display: flex;
`
