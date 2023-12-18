"use client"

import './admin.css'

export default function Admin() {
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
    
    return (
        <div className="admin-bg flex w-full h-full absolute justify-center">
            <form className='admin-form grid grid-flow-row grid-rows-6 gap-10 items-center justify-center mt-16 p-10'>
                <h1 className='admin-form-title'>CREATE COMMERCE</h1>
                <input type='text' className='admin-form-object admin-tittle rounded-sm' placeholder='Title'
                        onFocus={handleFocus} 
                        onBlur={handleUnFocusT}></input>
                <input type='text' className='admin-form-object admin-small-desc mb-5 rounded-sm' placeholder='Small Description'
                        onFocus={handleFocus} 
                        onBlur={handleUnFocusSD}></input>
                <textarea className='admin-form-object admin-desc rounded-sm' placeholder='Description'
                            onFocus={handleFocus} 
                            onBlur={handleUnFocusD}></textarea>
                <input type='file' className='admin-img-selector block w-full rounded-sm' accept="image/png, image/jpeg"></input>
                <input type='submit' className='admin-submit place-self-end rounded-sm' value='CREATE'></input>
                <div className='admin-form-bar absolute place-self-end'></div>
            </form>
        </div>
    );
}