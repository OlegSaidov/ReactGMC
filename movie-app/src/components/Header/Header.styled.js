import styled from 'styled-components'
import headerBg from '../../assets/images/header_bg.png'
import { Button, FormControl } from 'react-bootstrap'

export const StyledHeader = styled.div`
width: 1200px;
height: 396px;
background-image: url(${headerBg});
background-repeat: no-repeat;
margin-top: 54px;
padding: 20px 60px;
box-shadow: inset 0 0 0 1000px rgba(0,0,0,.4);
align-self: center;
`

export const TopElements = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const Title = styled.h2`
  margin-left: 60px;
  margin-top: 80px;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
`

export const StyledAddButton = styled(Button)`
width: 177px;
height: 46px;
text-transform: uppercase;
background: ${props => props.theme.colors.darkGray};
border-radius: 4px;
border-color: ${props => props.theme.colors.darkGray};
color: ${props => props.theme.colors.red};

&:hover {
    background-color: ${props => props.theme.colors.lightGray};
    border-color: ${props => props.theme.colors.lightGray};
    color: ${props => props.theme.colors.red};
}
`

export const BottomElements = styled.div`
display: flex;
flex-direction: row;
margin-left: 60px;
margin-top: 38px;
`

export const StyledSearchButton = styled(Button)`
width: 233px;
height: 57px;
margin-left: 14px;
text-transform: uppercase;
background: ${props => props.theme.colors.red};
border-radius: 4px;
border-color: ${props => props.theme.colors.red};
color: ${props => props.theme.colors.white};

&:hover {
    background-color: ${props => props.theme.colors.lightGray};
    border-color: ${props => props.theme.colors.lightGray};
    color: ${props => props.theme.colors.white};
}
`

export const StyledSearchInput = styled(FormControl)`
width: 713px;
height: 57px;
background: rgba(50, 50, 50, 0.8);
mix-blend-mode: normal;
opacity: 0.7;
border-radius: 4px;
font-size: 20px;
line-height: 24px;
border-color: ${props => props.theme.colors.darkGray}
`
