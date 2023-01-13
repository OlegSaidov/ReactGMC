import styled from 'styled-components'

export const StyledLogo = styled.h2`
font-style: normal;
font-weight: 900;
font-size: 20px;
line-height: 24px;
color: ${props => props.theme.colors.red};
span {
    font-weight: 200;
}
`
