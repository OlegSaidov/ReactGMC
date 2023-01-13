import React from 'react'
import { StyledMenu } from './Menu.styled'
import Nav from '../Nav/Nav'
import ResultCount from '../ResultCount/ResultCount'

function Menu () {
  return (
    <StyledMenu>
        <Nav />
        <ResultCount />
    </StyledMenu>
  )
}

export default Menu
