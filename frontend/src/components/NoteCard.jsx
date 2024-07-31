import { useState } from "react";
import '../styles/NoteCard.css';
import pin from '../assets/pin.png';
import options from '../assets/options.png';

const NoteCard = () => {
    const [menu, setMenu] = useState(false);

    return (
        <div className="note-container">
            <div className="note-header">
                <img src={pin} className="note-pin-icon" alt="pin-icon" />
                <p className="note-title">TODO</p>
                <div className="note-menu-icon">
                    <img src={options} alt="menu-icon" onClick={() => setMenu(!menu)} />
                </div>
                {menu && (
                    <div className="note-menu">
                        <p>Pin/Unpin</p>
                        <p>Edit</p>
                        <p>Delete</p>
                    </div>
                )}
            </div>
            <div className="note-body">
                <p className="note-date">30 Jul 2024</p>
                <p className="note-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla beatae quos rem eligendi, pariatur saepe possimus ullam. Modi dolores labore earum sapiente magni accusamus recusandae, perspiciatis, excepturi, possimus eaque fuga.</p>
            </div>
        </div>
    );
}

export default NoteCard;