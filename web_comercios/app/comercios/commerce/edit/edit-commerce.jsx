import { useState } from 'react';
import './edit-commerce.css'

export default function EditCommerce ({ commerce }) {
    const [changedComm, setChangedComm] = useState(false)

    const [title, setTitle] = useState("")
    const [smDesc, setSmDesc] = useState("")
    const [desc, setDesc] = useState("")
    const [url, setUrl] = useState("")

    if (commerce.title != undefined) {
        if (!changedComm) {
            console.log(commerce)
            setTitle(commerce.title)
            setSmDesc(commerce.smDesc)
            setDesc(commerce.desc)
            setUrl(commerce.url)
            setChangedComm(true)
        }
    }

    function refreshUser(data) {
        console.log(data)
        fetch("/api/user", {
            method: "POST",
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(setTimeout(() => {
            window.location.replace('http://localhost:3000/comercios')
          }, "500"))
    }

    function changeEmail(changeUser) {
        fetch('/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(changeUser)
        }).then((res) => (res.json())).then((data) => refreshUser(data))
    }

    function changeCommerce(commerceChange) {
        fetch('/api/commerces', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commerceChange)
        })
    }

    function handleSubmit() {
        const newCommerce = {
            commerceChange : commerce.title,
            title : title,
            smDesc : smDesc,
            desc : desc,
            url : url, 
        }

        if (title != commerce.title) {
            const changeUser = {
                changeEmail : commerce.title,
                email : title,
            }
            changeCommerce(newCommerce)
            changeEmail(changeUser)
        }

        if (smDesc != commerce.smDesc) {
            changeCommerce(newCommerce)
        }

        if (desc != commerce.desc) {
            changeCommerce(newCommerce)
        }

        if (url != commerce.url) {
            changeCommerce(newCommerce)
        }
    }

    return (
        <div className="fondo w-full h-screen flex mx-auto">
            <div className="left-zone w-1/2 p-8">
                <div className='title-label p-2 mb-10'>
                    <label for='title'>Title</label>
                
                    <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} className='title-input p-2 mb-7'></input>
                </div>
                <div className='title-label p-2'>
                    <label for='smDesc'>Small Description</label>
                    <textarea id='smDesc' value={smDesc} onChange={(e) => setSmDesc(e.target.value)} className='smDesc-input p-2'></textarea>
                </div>
                <div className='url-label p-2 mt-10'>
                    <input type='file' id='url' accept="image/png, image/jpeg" className='url-button mt-1' onChange={(e) => setUrl(e.target.value)}></input>
                </div>
            </div>

            <div className="right-zone w-1/2 p-8">
                <div className='desc-label p-2'>
                    <label for='desc' className='desc-label'>Description</label>
                    <textarea id='desc' value={desc} onChange={(e) => setDesc(e.target.value)} className='desc-input p-2'></textarea>
                </div>
                <button className='save-button mt-10' onClick={handleSubmit}>Save</button>
            </div>
        </div>
    );
}