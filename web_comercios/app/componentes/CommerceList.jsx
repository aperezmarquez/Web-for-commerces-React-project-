import Note from './Commerces.jsx'
import Creator from './Creator.jsx'
import './CommerceList.css'

const NoteList = ({ notes, createNote, handleDelete, handleEdit }) => {
    return (
        <div className='notes-list row'>
            <Creator createNote={createNote}/>
            {notes.map((note)=><Note key={note.id} id={note.id} tittle={note.tittle} text={note.text} handleDelete={handleDelete} handleEdit={handleEdit}/>)}
        </div>
    );
}

export default NoteList;