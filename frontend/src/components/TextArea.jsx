import '../styles/TextArea.css'

const TextArea = () => {
  return (
    <div className='textarea-container'>
        <label>Take a note...</label>
        <textarea rows='20' name='content'/>
    </div>
  )
}

export default TextArea
