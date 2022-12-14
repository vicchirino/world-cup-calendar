import "../styles/globals.css"
import type { AppProps } from "next/app"
import NavBar from "../components/NavBar"
import Head from "next/head"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import { useRouter } from "next/router"
import { IntlProvider } from "react-intl"
import english from "../translations/en-US.json"
import spanish from "../translations/es.json"

const MainContainer = styled.div`
  padding: 60px 50px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
  @media (max-width: 700px) {
    padding: 60px 20px;
  }

  @media (max-width: 500px) {
    padding: 60px 10px;
  }
`

export const COLORS = {
  white: "#FFFFFF",
  background: "#EEEEE5",
  oceanBlue: "#1077C3",
  pictonBlue: "#49BCE3",
  mikado: "#FEC310",
  scarlet: "#56042C",
  black: "#181818",
}

const theme = {
  colors: COLORS,
}

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()
  return (
    <IntlProvider locale="es" messages={locale === "es" ? spanish : english}>
      <ThemeProvider theme={theme}>
        <NavBar />
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
      </ThemeProvider>
    </IntlProvider>
  )
}
