import { Flats } from './components/Flats'
import { FlatContextProvider } from './contexts/FlatContext'

function App() {

  return (
    <FlatContextProvider>
      <div className="App">
        <header className="App-header">
          <h1>Bukking.com</h1>
        </header>
        <main>
          <Flats />
        </main>
      </div>
    </FlatContextProvider>
  )
}

export default App
