"use client"

import './register.css';
import { useState } from "react";
import Home from '../page.js';

export default function Register () {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    function handleFocus(event) {
        event.target.placeholder = "";
    }

    function handleUnFocusU(event) {
        event.target.placeholder = "Email";
    }

    function handleUnFocusP(event) {
        event.target.placeholder = "Password";
    }

    function handleUnFocusRP(event) {
        event.target.placeholder = "Repeat Password";
    }

    const handleClick = (event) => {
        event.preventDefault();
        const user = {
            email: email,
            password: password,
        }


        fetch("/api/register", {
            method: "POST",
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
        
        
        router.push("/")
    }

    return (
        <div className="flex items-center justify-center h-screen w-full absolute">
            <Home className="background-page"/>
            <div className="pantalla-borrosa h-full w-full absolute"></div>
            <div className="element-holder grid grid-rows-4 grid-flow-col gap-10 p-5 h-72 justify-center filter z-10 absolute">
                <h1 className="signup-text text-start mt-0">SIGN UP</h1>
                <input type="text" 
                       className="input text-center w-72 h-10 border rounded-sm transition-opacity" 
                       placeholder="Email" 
                       onFocus={handleFocus} 
                       onBlur={handleUnFocusU}
                       onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" 
                       className="input text-center w-72 h-10 border rounded-sm" 
                       placeholder="Password"
                       onFocus={handleFocus}
                       onBlur={handleUnFocusP}
                       onChange={(e) => setPassword(e.target.value)}></input>
                <button className="login-button-register w-44 h-10 border transition ease-in delay-100 place-self-end hover:bg-slate-400 active:bg-red-600">REGISTER</button>
                <div className='hover-background-register absolute'></div>
            </div>
        </div>
    );
}