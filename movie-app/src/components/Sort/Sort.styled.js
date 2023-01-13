import styled from 'styled-components'
import { FormSelect } from 'react-bootstrap'
import caretDownRed from '../../assets/images/caret_down_red.png'

export const StyledSort = styled.div`
min-width: 250px;
height: 65px;
display: flex;
align-items: center;
justify-content: center;

span {
   text-transform: uppercase;
   color: white;
   min-width: 120px;
   text-align: right;
}
`

export const StyledSelect = styled(FormSelect)`
 background-color: ${props => props.theme.colors.black};
 border-color: ${props => props.theme.colors.black};
 color: #ffffff;
 text-transform: uppercase;
 background-image: url(${caretDownRed});
 background-size: 12px 7px;

 &:focus {
    border-color: ${props => props.theme.colors.black};
    box-shadow: none;
 }

`
