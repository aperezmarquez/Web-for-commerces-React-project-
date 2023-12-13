"use client"

import Searcher from "../componentes/Searcher";
import CommerceList from "../componentes/CommerceList";
import Commerces from "../componentes/Commerces";
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

export default function Comercios () {
    const [notes, setNotes] = useState([])

    const createNewNote = (tittle, text) => {
      const newNote = {
        id: nanoid(),
        tittle: tittle,
        text: text
      }
  
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
    }
  
    useEffect(() => {
      const item = JSON.parse(localStorage.getItem('notes-data'));
    
      if (item) {
        setNotes(item)
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('notes-data', JSON.stringify(notes));
    }, [notes]);
  
    const [noteName, setNoteName] = useState('');
  
    const handleDelete = (id) => {
      const newNotes = notes.filter((note) => note.id != id);
      setNotes(newNotes);
    }
  
    const handleEdit = (id, tittle, text) => {
      const changedNoteIndex = notes.findIndex((note) => note.id == id);
      
      if (changedNoteIndex != -1) {
        const changedNote = notes[changedNoteIndex];
        changedNote.tittle = tittle;
        changedNote.text = text;
  
        const newNotes = [...notes];
        newNotes[changedNoteIndex] = changedNote;
  
        setNotes(newNotes);
      }
    }

    return (
        <div className="page-commerces h-full w-full">
            <h1 className='app-tittle'>LISTA DE NOTAS</h1>
            <Searcher setNoteName={setNoteName}/>
            <CommerceList 
                notes={notes.filter((note) => note.tittle.toLowerCase().includes(noteName.toLowerCase()))} 
                createNote={createNewNote} 
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
            <Commerces />
        </div>
    );
}