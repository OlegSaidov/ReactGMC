import React, { useState } from 'react'
import { StyledNav, StyledNavContainer } from './Nav.styled'
import NavItem from '../NavItem/NavItem'
import Sort from '../Sort/Sort'

const menuItems = {
  all: 'All',
  documentary: 'Documentary',
  comedy: 'Comedy',
  horror: 'Horror',
  crime: 'Crime'
}

function Nav () {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <StyledNavContainer>
    <StyledNav>
        {
            Object.values(menuItems).map((item, index) => {
              return <NavItem
               key={index}
               item={item}
               index={index}
               activeIndex={activeIndex}
               setActiveIndex={setActiveIndex}/>
            })
        }
    </StyledNav>
    <Sort />
    </StyledNavContainer>

  )
}

export default Nav
