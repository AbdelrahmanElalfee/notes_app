import search from '../assets/search.png';
import profile from '../assets/profile.png';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar-search">
            <img src={search} alt="search" />
            <input type="text" placeholder="Search" />
        </div>
        <div className="navbar-profile">
            <img src={profile} alt="profile" />
        </div>
    </div>
  )
}

export default Navbar;