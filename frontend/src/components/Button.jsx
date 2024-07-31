import '../styles/Button.css';
import add from '../assets/add.png';

const Button = () => {
  return (
    <button className='btn'>
        <img src={add} alt='icon' />
        <p>Add note</p>
    </button>
  )
}

export default Button;