import React from 'react'
import { StyledSort, StyledSelect } from './Sort.styled'

function Sort () {
  return (
    <StyledSort>
      <span>Sort By</span>
      <StyledSelect>
      <option value="1">Release Date</option>
      </StyledSelect>
    </StyledSort>
  )
}

export default Sort
