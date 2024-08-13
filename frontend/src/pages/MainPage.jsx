import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {Outlet} from 'react-router-dom';
import '../styles/Main.css';


export default function MainPage() {
  return (
    <div className="main-container">
        <Navbar />
        <Sidebar />
        <div className="content-container">
            <Outlet />
        </div>
    </div>
  )
}
