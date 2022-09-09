import { Container } from 'App.css'
import { GlobalStyle } from 'App.styles'
import { NavUnder } from 'components'
import NavBar  from 'components/NavBar/NavBar'
import { AllCoins, Coin } from 'pages'
import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from 'utils'

const App = () => {
  const { themeOn } = useSelector(state => state.config)
  const theme = themeOn ? darkTheme : lightTheme
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
      <Container>
        <NavBar />
        <NavUnder />
        <Routes>
          <Route path='/' element={<AllCoins /> } />
          <Route path='/coin/:coinId' element={<Coin />} />
        </Routes>
      </Container>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App