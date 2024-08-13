import { Outlet } from "react-router-dom"
import logo from '../assets/logo.png'
import '../styles/Auth.css'

const Auth = () => {
  return (
    <div className='auth-container'>
        <div className='auth-form'>
            <img src={logo} alt='logo' />
            <Outlet />
        </div>
    </div>
  )
}

export default Auth
