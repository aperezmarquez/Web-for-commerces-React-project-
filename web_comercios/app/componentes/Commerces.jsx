import './Commerces.css'
import Link from 'next/link';

const commerce = ({ id, title, smDesc, desc, url }) => {
    const web_commerce = {
        title : title,
        smDesc : smDesc,
        desc : desc,
        url : url,
    }

    return (
        <div>
            <div className="commerce" id='comercio_x'>
                <div className='commerce-info'>
                    <div className="commerce-footer absolute" id='footer'>
                        <Link className='commerce-visit rounded-xl' id={id + 'boton'} 
                                href={{
                                    pathname: '/comercios/users/commerce_web',
                                    query: {data: JSON.stringify(web_commerce)}
                                }}>Visit Commerce</Link>
                    </div>

                    <div className="commerce-header" id={id + 'header'}>
                        <h2 className="commerce-tittle">{title}</h2>
                        <div className="commerce-small-description ml-2 mt-3">{smDesc}</div>
                        <div className='commerce-description ml-2 mt-3'>{desc}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default commerce;