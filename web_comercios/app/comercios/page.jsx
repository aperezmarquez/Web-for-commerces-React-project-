"use client"

import Searcher from "../componentes/Searcher";
import CommerceList from "../componentes/CommerceList";
import Commerces from "../componentes/Commerces";
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import './commercesPage.css';

export default function Comercios () {
    const [commerces, setCommerces] = useState([
      {
        id: nanoid(),
        tittle: "Arcade",
        text: "text",
        url: '../imgs/arcade_machine.jpg'
      },
      {
        id: nanoid(),
        tittle: "Vinils",
        text: "text"
      },
      {
        id: nanoid(),
        tittle: "Clocks",
        text: "text"
      },
      {
        id: nanoid(),
        tittle: "Objects",
        text: "text"
      }
    ])

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