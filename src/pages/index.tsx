import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Welcome from '@/components/Welcome'
import About from './About'
import Experience from './Experience'
import Projects from './Project'
import Contact from './Contact'
import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import createMyTheme from '@/styles/theme'

const StyledPageContainer = styled.div`
  background-color: ${(props) => props.theme.palette.background.default};
`;

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const theme = createMyTheme(themeMode);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledPageContainer>
        <Welcome/>
        <Header onThemeToggle={toggleTheme}/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </StyledPageContainer>
    </ThemeProvider>
  )
}
