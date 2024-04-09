import './global.css'
import { ThemeProvider } from './components/ThemeProvider'
import { LanguageProvider } from './components/LanguageProvider'
import { Content } from './Content'

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Content />
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
