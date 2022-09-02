import { Container } from 'App.css'
import { GlobalStyle } from 'App.styles'
import { NavBar } from 'components'
import { AllCoins } from 'pages'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from 'utils'

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
      <Container>
        <NavBar />
        <Routes>
          <Route path='/' element={<AllCoins /> } />
        </Routes>
      </Container>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App