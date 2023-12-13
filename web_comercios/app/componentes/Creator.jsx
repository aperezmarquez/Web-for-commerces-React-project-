import { useState, useRef, useEffect } from 'react';
import './Creator.css'

const Creator = ({ createNote }) => {
    const tittleInput = useRef();
    const textInput = useRef();

    useEffect(() => {
        tittleInput.current.focus();
    }, []);

    const createNewNote = () => {
        createNote(tittleInput.current.value, textInput.current.value);
        tittleInput.current.value = "";
        textInput.current.value = "";
        document.getElementById('words').innerHTML = "120 Restantes";
    }

    const textCounter = () => {
        document.getElementById('words').innerHTML = (120 - textInput.current.value.length) + " Restantes";

        if (textInput.current.value.length > 120) {
            document.getElementById('words').innerHTML = 0 + " Restantes";
            textInput.current.value = textInput.current.value.substring(0, textInput.current.value.length - 1);
        }
    }

    const tittleCounter = () => {
        if (tittleInput.current.value.length > 20) {
            tittleInput.current.value = tittleInput.current.value.substring(0, tittleInput.current.value.length - 1);
        }
    }

    return (
        <div className='creator'>
            <div className='creator-header'>
                <input type='text' ref={tittleInput} className='creator-tittle' placeholder='Título...' onChange={tittleCounter}></input>
                <textarea className='creator-text' ref={textInput} placeholder='Contenido de la Nota...' onChange={textCounter}></textarea>
            </div>

            <div className='creator-footer btn-group'>
                <p className='creator-word-counter' id='words'>120 Restantes</p>
                <button className='creator-create btn' onClick={createNewNote}>CREAR</button>
            </div>
        </div>
    );
}

export default Creator;