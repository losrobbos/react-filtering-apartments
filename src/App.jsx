import { createContext, useState } from 'react'
import { filterDefault } from './components/Flats'
// import './App.scss'
import { Flats } from './components/Flats'
import flatsData from './data/flats.json'

export const DataContext = createContext()

function App() {

  const [flats, setFlats] = useState(flatsData)

  // filter critera of user
  const [filter, setFilter] = useState(filterDefault)

  const sharedData = { flats, filter, setFilter }

  return (
    <DataContext.Provider value={sharedData}>
      <div className="App">
        <header className="App-header">
          <h1>Bukking.com</h1>
        </header>
        <main>
          <Flats />
        </main>
      </div>
    </DataContext.Provider>
  )
}

export default App
