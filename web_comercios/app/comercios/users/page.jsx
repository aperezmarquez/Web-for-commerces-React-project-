"use client"

import Searcher from "../../componentes/Searcher";
import CommerceList from "../../componentes/CommerceList";

import { nanoid } from 'nanoid'
import './commercesPage.css';
import { useState } from "react";

export default function Comercios () {
    const [commerces, setCommerces] = useState([])

    try {
      const res = fetch('/api/commerces', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      });
      console.log(res.data);
      // setCommerces(JSON.parse(res));
    } catch (e) {
      console.log(e);
    }

    const createNewNote = (tittle, text) => {
      const newCommerce = {
        id: nanoid(),
        tittle: tittle,
        text: text
      }
  
      const newCommerces = [...commerces, newCommerce];
      setCommerces(newCommerces);
    }
  
    const [commerceName, setCommerceName] = useState('');

    return (
        <div className="page-commerces w-full p-10 absolute">
            <Searcher setCommerceName={setCommerceName}/>
            <CommerceList
                commerces={commerces.filter((commerce) => commerce.tittle.toLowerCase().includes(commerceName.toLowerCase()))} 
                createNote={createNewNote}
            />
        </div>
    );
}