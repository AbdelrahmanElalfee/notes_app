import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import NoteList from './components/NoteList'
import Form from './components/Form'
import Auth from './pages/Auth'

function App() {

  return (
    <Routes>
        <Route path="/" element={<MainPage />}>
            <Route path="" element={<NoteList />}/>
            <Route path="create" element={<h1>Create</h1>} />
            <Route path="update" element={<h1>Update</h1>} />
        </Route>
        <Route path="/" element={<Auth />}>
            <Route path="register" element={<Form type={'register'}/>}/>
            <Route path="login" element={<Form type={'login'}/>} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default App
