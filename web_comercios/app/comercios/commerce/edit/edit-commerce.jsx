import { useState } from 'react';
import './edit-commerce.css'

export default function EditCommerce ({ commerce, setCommerce }) {
    const [tempCommerce, setTempCommerce] = useState(commerce)
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
            </div>

            <div className="right-zone w-1/2 p-8">
                <div className='desc-label p-2'>
                    <label for='desc' className='desc-label'>Description</label>
                    <textarea id='desc' value={desc} onChange={(e) => setDesc(e.target.value)} className='desc-input p-2'></textarea>
                </div>
                <div className='url-label p-2 mt-10'>
                    <input type='file' id='url' accept="image/png, image/jpeg" className='url-button mt-1' onChange={(e) => setUrl(e.target.value)}></input>
                </div>
            </div>
        </div>
    );
}