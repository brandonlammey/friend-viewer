import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html,
body,
#__next {
  width: 100%;
  height: 100%;

}
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', 'Avenir Next W00', 'Avenir Next', 'Avenir',
    'Helvetica Neue', sans-serif;
}
`

export const AppWrapper = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
`
