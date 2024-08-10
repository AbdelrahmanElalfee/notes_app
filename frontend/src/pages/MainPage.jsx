import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NoteList from "../components/NoteList";
import '../styles/Main.css';


export default function MainPage() {
  return (
    <div className="main-container">
        <Navbar />
        <Sidebar />
        <div className="content-container">
            <NoteList />
        </div>
    </div>
  )
}
