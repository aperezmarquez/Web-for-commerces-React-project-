"use client"

import Searcher from "../../componentes/Searcher";
import CommerceList from "../../componentes/CommerceList";

import { nanoid } from 'nanoid'
import './commercesPage.css';
import { useState } from "react";

export default function Comercios () {
    const [commerces, setCommerces] = useState([])

    function setData(data) {
      if (data.status != 404) {
        setCommerces(data)
      }
    }

    try {
      const res = fetch('/api/commerces/', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      }).then((res) => res.json()).then((data) => setData(data));
    } catch (e) {
      console.log(e);
    }
  
    const [commerceName, setCommerceName] = useState('');

    return (
        <div className="page-commerces w-full p-10 absolute">
            <Searcher setCommerceName={setCommerceName}/>
            <CommerceList
                commerces={commerces.filter((commerce) => commerce.title.toLowerCase().includes(commerceName.toLowerCase()))}
            />
        </div>
    );
}