import styled from 'styled-components'

export const StyledNavItem = styled.li`
color: white;
padding: 0 15px;
font-size: 16px;
line-height: 20px;
text-transform: uppercase;
height: 65px;
display: flex;
align-items: center;

&:hover {
    background-color: ${props => props.theme.colors.darkGray};
    border-bottom: 3px solid ${props => props.theme.colors.red};
}
}
`
