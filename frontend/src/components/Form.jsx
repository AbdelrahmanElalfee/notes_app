import Input from "./Input"
import PropTypes from 'prop-types'
import '../styles/Form.css'

const Form = ({ type, handleForm }) => {
    return (
        <div className="form-container">
            <form method="POST">
                {type === 'register' && (
                    <>
                        <Input type="text" placeholder="First Name" name='first_name' />
                        <Input type="text" placeholder="Last Name" name='last_name' />
                        <Input type="email" placeholder="Email" name='email' />
                    </>
                )}
                <Input type="text" placeholder="Username" name='username' />
                <Input type="password" placeholder="Password" name='password' />
                <div className="form-footer">
                    <button onClick={handleForm}>{type === 'login' ? 'Login' : 'Register'}</button>
                </div>
            </form>
        </div>
    )
}

Form.propTypes = {
    type: PropTypes.string.isRequired,
    handleForm: PropTypes.func.isRequired
}

export default Form
