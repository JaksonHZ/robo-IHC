import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/routes'
import { FontSizeProvider } from './context/ContextFontSize'
function App() {

  return (
    <FontSizeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </FontSizeProvider>
  )
}

export default App
