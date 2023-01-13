import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import {
  StyledHeader,
  Title,
  StyledAddButton,
  TopElements,
  BottomElements,
  StyledSearchButton,
  StyledSearchInput
} from './Header.styled'

const placeholder = 'What do you want to watch?'

function Header () {
  const [searchValue, setSearchValue] = useState('')

  const handleAddMovieClick = () => {
    console.log('clicked add movie button')
  }

  const handleSearch = (e) => {
    const { value } = e.target
    setSearchValue(value)
  }

  const handleSearchClick = () => {
    console.log('searchValue', searchValue)
    setSearchValue('')
  }

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      console.log('searchValue', searchValue)
      setSearchValue('')
    }
  }

  return (
    <StyledHeader>
      <TopElements>
        <Logo />
        <StyledAddButton onClick={handleAddMovieClick}>+ Add Movie</StyledAddButton>
      </TopElements>
      <Title>FIND YOUR MOVIE</Title>
      <BottomElements>
        <StyledSearchInput placeholder={placeholder} value={searchValue} onChange={handleSearch} onKeyPress={handleEnterPress}/>
        <StyledSearchButton onClick={handleSearchClick}>
            Search
        </StyledSearchButton>
      </BottomElements>
    </StyledHeader>
  )
}

export default Header
