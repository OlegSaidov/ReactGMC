import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { StyledNavItem } from './NavItem.styled'

function NavItem ({ item, activeIndex, setActiveIndex, index }) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (activeIndex === index) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [activeIndex, index])

  return (
    <StyledNavItem
      className={isActive ? 'active' : ''}
      onClick={() => setActiveIndex(index)}
    >
      {item}
    </StyledNavItem>
  )
}

NavItem.propTypes = {
  item: PropTypes.string,
  activeIndex: PropTypes.number,
  index: PropTypes.number,
  setActiveIndex: PropTypes.func
}

export default NavItem
