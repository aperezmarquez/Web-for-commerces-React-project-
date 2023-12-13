import './Commerces.css'
import { useRef } from 'react';
import Link from 'next/link';

const commerce = ({ id, tittle, text }) => {

    const tittleInput = useRef();
    const textInput = useRef();

    return (
        <div className="commerce">
            <div className='commerce-info'>
                <div className="commerce-footer absolute" id='footer'>
                    <Link className='commerce-visit rounded-xl' id={id + 'boton'} href=''>Visit Commerce</Link>
                </div>

                <div className="commerce-header" id={id + 'header'}>
                    <h2 className="commerce-tittle">{tittle}</h2>
                    <div className="commerce-small-description ml-2 mt-3">{text}</div>
                    <div className='commerce-description ml-2 mt-3'>Descripcion de tienda de arcade machines</div>
                </div>
            </div>
        </div>
    );
}

export default commerce;