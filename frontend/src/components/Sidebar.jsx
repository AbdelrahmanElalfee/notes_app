import '../styles/Sidebar.css';
import note_icon from '../assets/note.png';
import folder from '../assets/folder.png';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
        <div className="sidebar-logo">
            <p>Online Notes</p>
        </div>
        <div className="sidebar-menu">
            <ul className='sidebar-menu-list'>
                <li>
                    <img src={note_icon} alt="note"/>
                    <p>All notes</p>
                </li>
                <li>
                    <img src={folder} alt="note"/>
                    <p>TODOs</p>
                </li>
                <li>
                    <img src={folder} alt="note"/>
                    <p>Work</p>
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