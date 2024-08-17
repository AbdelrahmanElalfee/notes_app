import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import NoteList from './pages/NoteList'
import Form from './components/Form'
import Auth from './pages/Auth'
import NoteForm from './pages/NoteForm'

function App() {
  return (
    <Routes>
        <Route path="/" element={<MainPage />}>
            <Route path="" element={<NoteList />}/>
            <Route path="create" element={<NoteForm />}/>
            <Route path="details/:id" element={<h1>Update</h1>}/>
        </Route>
        <Route path="/" element={<Auth />}>
            <Route path="register" element={<Form type={'register'} />}/>
            <Route path="login" element={<Form type={'login'} />}/>
        </Route>
        <Route path="*" element={<h1>Not Found</h1>}/>
    </Routes>
  )
}

export default App
