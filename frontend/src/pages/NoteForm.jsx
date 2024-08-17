import Button from '../components/Button'
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import '../styles/NoteForm.css';

const NoteForm = () => {

    const onClick = (e) => {
        e.preventDefault();
        console.log('Add note button clicked');
    }

  return (
    <div className="note-form-container">
        <form className="note-form">
            <Input type="text" placeholder="Title" name='title'/>
            <TextArea />
            <div className='note-form-footer'>
                <Button type='Add' onClick={onClick}/>
            </div>
        </form>
    </div>
  )
}

export default NoteForm
