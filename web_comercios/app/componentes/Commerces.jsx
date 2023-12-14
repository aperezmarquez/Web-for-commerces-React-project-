import './Commerces.css'
import Link from 'next/link';
import Image from 'next/image';

const commerce = ({ id, tittle, text, url }) => {
    return (
        <div>
            <div className="commerce">
                <Image src='../imgs/arcade_machine.jpg' className='commerce-img'/>
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
        </div>
    );
}

export default commerce;