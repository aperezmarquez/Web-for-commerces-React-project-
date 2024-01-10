"use client"

import { useState } from 'react';
import './admin.css'

export default function Admin() {
    const [notCheck, setNotCheck] = useState(true);

    if (notCheck) {
        fetch('/api/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json()).then((user) => checkUser(user))
        setNotCheck(false)
    }

    function checkUser(user) {
        if(user[0].role != 'admin'){
            window.location.replace('http://localhost:3000/comercios')
        }
    }

    const [title, setTitle] = useState('');
    const [smDesc, setSmDesc] = useState('');
    const [desc, setDesc] = useState('');
    const [url, setUrl] = useState('');
    const [password, setPassword] = useState('');

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

    function handleUnFocusP(event) {
        event.target.placeholder = "Password";
    }
    

    async function handleSubmit(e) {
        e.preventDefault();
        const submitData = { 
            title : title, 
            smDesc: smDesc, 
            desc : desc, 
            url : url };
        console.log(submitData)

        const newUser = {
            role : "commerce",
            email : title,
            passwd : password,
        }
        
        try {
            const res = fetch('/api/commerces', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(submitData)
            });
            console.log(res);
        } catch (e) {
            console.log(e);
        }

        try {
            const res = fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            }).then(setTimeout(() => {
                window.location.replace('http://localhost:3000/comercios')
              }, "500"))
        } catch (e) {
            console.log(e);
        }

        // try {
        //     const res = fetch('/api/user', {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     });
        //     console.log(res);
        // } catch (e) {
        //     console.log(e);
        // }
    }
    
    return (
        <div className="admin-bg flex w-full h-full absolute justify-center">
            <form className='admin-form grid grid-flow-row grid-rows-8 gap-4 items-center justify-center mt-16 p-10 pb-8'
                        onSubmit={handleSubmit}>
                <h1 className='admin-form-title'>CREATE COMMERCE</h1>
                <input type='text' className='admin-form-object admin-tittle rounded-sm' placeholder='Title'
                        onFocus={handleFocus} 
                        onBlur={handleUnFocusT}
                        onChange={e => setTitle(e.target.value)}></input>
                <input type='text' className='admin-form-object admin-small-desc rounded-sm' placeholder='Small Description'
                        onFocus={handleFocus} 
                        onBlur={handleUnFocusSD}
                        onChange={e => setSmDesc(e.target.value)}></input>
                <input type='password' className='admin-form-object admin-password mb-5 rounded-sm' placeholder='Password'
                        onFocus={handleFocus}
                        onBlur={handleUnFocusP}
                        onChange={e => setPassword(e.target.value)}></input>
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