import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { DarkTheme } from './DarkTheme'
import { StyledApp } from './App.styled'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Menu from './Menu/Menu'
import MovieList from './MovieList/MovieList'
import './../styles.css'
import { store } from './app/store'
import { Provider } from 'react-redux'

function App () {
  return (
    <Provider store={store}>
       <ThemeProvider theme={DarkTheme}>
          <StyledApp>
              <Header/>
              <Menu />
              <MovieList/>
              <Footer/>
          </StyledApp>
        </ThemeProvider>
    </Provider>
  )
}

export default App
