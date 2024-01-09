import { useState } from 'react';
import './edit-commerce.css'

export default function EditCommerce ({ commerce, setCommerce }) {
    const [tempCommerce, setTempCommerce] = useState(commerce)
    
    function handleChange(e) {
        const newComm = {
            title : e.target.value,
            smDesc : tempCommerce.smDesc,
            desc : tempCommerce.desc,
            url : tempCommerce.url,
        }

        setTempCommerce(newComm)
    }

    return (
        <div className="fondo w-full h-screen flex mx-auto">
            <div className="left-zone w-1/2 p-8">
                <input type='text' onChange={handleChange}></input>
                <h1>{commerce.title}</h1>
            </div>

            <div className="right-zone w-1/2 p-8">
                <p>{commerce.desc}</p>
            </div>
        </div>
    );
}