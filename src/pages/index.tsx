import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Welcome from '@/components/Welcome'
import About from './About'
import Experience from './Experience'
import Projects from './Project'
import Contact from './Contact'
import styled, { ThemeProvider } from 'styled-components'
import createMyTheme from '@/styles/theme'
import { useThemeContext } from '@/context/ThemeContext'

const StyledPageContainer = styled.div`
  background-color: ${(props) => props.theme.palette.background.default};
`;

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { themeMode } = useThemeContext();
  const theme = createMyTheme(themeMode);

  return (
    <ThemeProvider theme={theme}>
      <StyledPageContainer>
        <Welcome/>
        <Header/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </StyledPageContainer>
    </ThemeProvider>
  )
}
