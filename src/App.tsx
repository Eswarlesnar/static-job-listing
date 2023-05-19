import Header from './components/Header/Header'
import Jobs from './components/Jobs/Jobs'
import { JobContextProvider } from './context/jobsContext'
import './App.css'

function App() {
  
  return (
    <JobContextProvider>
      <Header />
      <Jobs />
    </JobContextProvider>
  )
}

export default App
