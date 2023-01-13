import styled from 'styled-components'

export const StyledNavContainer = styled.div`
width: 100%;
height: 65px;
border-bottom: 3px solid ${props => props.theme.colors.darkGray};
display: flex;
justify-content: space-between;

.active {
    border-bottom: 3px solid ${props => props.theme.colors.red};
}
`

export const StyledNav = styled.ul`
list-style: none;
display: flex;
margin: 0;
padding: 0;
height: 65px;
`
