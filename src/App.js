import { Container } from 'App.css'
import { GlobalStyle } from 'App.styles'
import { AllCoins } from 'pages'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from 'utils'

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Container>
        <Routes>
          <Route path='/' element={<AllCoins /> } />
        </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App