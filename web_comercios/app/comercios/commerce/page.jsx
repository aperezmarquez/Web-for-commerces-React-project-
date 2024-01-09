"use client"

import { useState } from "react";

export default function Commerce() {
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
        if(user[0].role != "commerce") {
            window.location.replace('http://localhost:3000/comercios')
        } else {

        }
    }

    return (
        <>

        </>
    );
}