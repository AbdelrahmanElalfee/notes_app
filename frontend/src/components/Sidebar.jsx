import '../styles/Sidebar.css';
import note_icon from '../assets/note.png';
import folder from '../assets/folder.png';
import logo from '../assets/logo.png';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
        <div className="sidebar-logo">
            <img src={logo} alt="logo"/>
        </div>
        <div className="sidebar-menu">
            <ul className='sidebar-menu-list'>
                <li>
                    <img src={note_icon} alt="note"/>
                    <p>All notes</p>
                </li>
                <li>
                    <p>Create</p>
                </li>
                <li>
                    <p>Logout</p>
                </li>
            </ul>
        </div>
        <div className="sidebar-footer">
            <p>Copyright © {new Date().getFullYear()} AE</p>
        </div>
    </div>
  )
}

export default Sidebar;
