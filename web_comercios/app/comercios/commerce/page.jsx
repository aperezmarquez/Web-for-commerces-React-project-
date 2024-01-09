"use client"

import { useState } from "react";
import EditCommerce from "./edit/edit-commerce";

export default function Commerce() {
    const [notCheck, setNotCheck] = useState(true);
    const [commerce, setCommerce] = useState([]);

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
        if(user[0].role != "commerce") {
            window.location.replace('http://localhost:3000/comercios')
        } else {
            fetch('/api/commerces', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => res.json()).then((commerces) => getCommerce(commerces, user))
        }
    }

    function getCommerce(commerces, user) {
        const temp = commerces.filter((commerce) => commerce.title == user[0].email)[0]
        setCommerce(temp)
    }

    return (
        <>
            <EditCommerce commerce={commerce} setCommerce={setCommerce}></EditCommerce>
        </>
    );
}