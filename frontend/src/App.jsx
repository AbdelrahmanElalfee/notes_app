import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import NoteList from './components/NoteList'

function App() {

  return (
    <Routes>
        <Route path="/" element={<MainPage />}>
            <Route path="" element={<NoteList />}/>
        </Route>
    </Routes>
  )
}

export default App
