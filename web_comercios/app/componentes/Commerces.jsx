import './Commerces.css'
import { useRef } from 'react';

const commerce = ({ id, tittle, text, handleDelete, handleEdit }) => {
    /*const [value, setValue] = useState({
        tittle: tittle,
        text: text
    });*/

    const tittleInput = useRef();
    const textInput = useRef();

    const changeToEditMode = () => {
        const header = document.getElementById(id + 'header');
        const editor = document.getElementById(id + 'editor');
        const boton = document.getElementById(id + 'boton');

        const hidden = header.getAttribute('hidden');

        if (hidden) {
            editor.setAttribute('hidden', 'hidden');
            header.removeAttribute('hidden');
            boton.innerHTML = 'EDITAR';
            handleEdit(id, tittleInput.current.value, textInput.current.value);
        } else {
            tittleInput.current.value = tittle;
            textInput.current.value = text;
            document.getElementById(id + 'text').innerHTML = "Texto || " + (120 - textInput.current.value.length) + " Restantes";
            header.setAttribute('hidden', 'hidden');
            editor.removeAttribute('hidden');
            boton.innerHTML = 'GUARDAR';
        }
    }

    const textCounter = () => {
        document.getElementById(id + 'text').innerHTML = "Texto || " + (120 - textInput.current.value.length) + " Restantes";

        if (textInput.current.value.length > 120) {
            document.getElementById(id + 'text').innerHTML = "Texto || " + 0 + " Restantes";
            textInput.current.value = textInput.current.value.substring(0, textInput.current.value.length - 1);
        }
    }

    const tittleCounter = () => {
        if (tittleInput.current.value.length > 20) {
            tittleInput.current.value = tittleInput.current.value.substring(0, tittleInput.current.value.length - 1);
        }
    }

    return (
        <div className="commerce">
            <div className='commerce-info'>
                <div className="commerce-header" id={id + 'header'}>
                    <h2 className="commerce-tittle">Comercio 1</h2>
                    <div className="commerce-small-description ml-2 mt-3">Descripcion pequeña</div>
                    <div className='commerce-description ml-2 mt-3'>Descripcion</div>
                </div>

                <div className="commerce-footer absolute" id='footer'>
                    <button className='commerce-visit rounded-xl' id={id + 'boton'} onClick={changeToEditMode}>Visit Commerce</button>
                </div>
            </div>
        </div>
    );
}

export default commerce;