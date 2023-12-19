"use client"

import { useState } from 'react';
import './admin.css'

export default function Admin() {
    const [title, setTitle] = useState('');
    const [smDesc, setSmDesc] = useState('');
    const [desc, setDesc] = useState('');
    const [url, setUrl] = useState('');

    function handleFocus(event) {
        event.target.placeholder = "";
    }

    function handleUnFocusT(event) {
        event.target.placeholder = "Title";
    }

    function handleUnFocusSD(event) {
        event.target.placeholder = "Small Description";
    }

    function handleUnFocusD(event) {
        event.target.placeholder = "Description";
    }

    async function handleSubmit(e) {
        const submitData = {title, smDesc, desc, url}
        
        try {
            const res = await fetch('http://localhost:3000/api/commerces', {
                method: 'POST',
                body: JSON.stringify(submitData)
            });
            console.log(res);
        } catch (e) {
            console.log(e);
        }

        setTitle('');
        setSmDesc('');
        setDesc('');
        setUrl('');
    }
    
    return (
        <div className="admin-bg flex w-full h-full absolute justify-center">
            <form className='admin-form grid grid-flow-row grid-rows-6 gap-10 items-center justify-center mt-16 p-10 pb-8'
                        onSubmit={handleSubmit}>
                <h1 className='admin-form-title'>CREATE COMMERCE</h1>
                <input type='text' className='admin-form-object admin-tittle rounded-sm' placeholder='Title'
                        onFocus={handleFocus} 
                        onBlur={handleUnFocusT}
                        onChange={e => setTitle(e.target.value)}></input>
                <input type='text' className='admin-form-object admin-small-desc mb-5 rounded-sm' placeholder='Small Description'
                        onFocus={handleFocus} 
                        onBlur={handleUnFocusSD}
                        onChange={e => setSmDesc(e.target.value)}></input>
                <textarea className='admin-form-object admin-desc rounded-sm' placeholder='Description'
                        onFocus={handleFocus}
                        onBlur={handleUnFocusD}
                        onChange={e => setDesc(e.target.value)}></textarea>
                <input type='file' className='admin-img-selector block w-full rounded-sm' 
                        accept="image/png, image/jpeg"
                        onChange={e => setUrl(e.target.value)}></input>
                <input type='submit' className='admin-submit place-self-end rounded-sm mt-2' value='CREATE'></input>
                <div className='admin-form-bar absolute place-self-end'></div>
            </form>
        </div>
    );
}