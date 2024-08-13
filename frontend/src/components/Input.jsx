import PropTypes from 'prop-types'
import '../styles/Input.css'

const Input = ({type, name, placeholder}) => {
  return (
    <div className="input-field">
        <label>{placeholder}</label>
        <input type={type} name={name}/>
    </div>
  )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}

export default Input
