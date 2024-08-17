import '../styles/Button.css';
import add from '../assets/add.png';
import PropTypes from 'prop-types';

const Button = ({type, onClick}) => {
  return (
    <button className='btn' onClick={onClick}>
        <img src={add} alt='icon' />
        <p>{type} note</p>
    </button>
  )
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button;
