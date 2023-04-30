import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Welcome from '@/components/Welcome'
import About from './About'
import Experience from './Experience'
import Projects from './Project'
import Contact from './Contact'
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material'


const customTheme = createTheme({
  palette: {
    primary: {
      main: '#0E8388'
    },
    secondary: {
      main: '#2E4F4F'
    }
  }
});

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={customTheme}>
        <Welcome/>
        <Header/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
