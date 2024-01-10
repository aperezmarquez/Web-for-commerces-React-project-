"use client"
import './sigin.css';
import Home from '../page.js'
import { useState } from 'react';

export default function Sig_in () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function handleFocus(event) {
        event.target.placeholder = "";
    }

    function handleUnFocusU(event) {
        event.target.placeholder = "Email";
    }

    function handleUnFocusP(event) {
        event.target.placeholder = "Password";
    }

    function setUser(data) {
        if (data.status != 404) {
            fetch("/api/user", {
                method: "POST",
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(data[0])
            }).then(setTimeout(function(){
                window.location.replace('http://localhost:3000');
            }, 500))
        } else {
            alert("User not found!");
            setEmail("");
            setPassword("");
        }
    }

    function handleClick() {
        const user = {
            email : email,
            passwd : password
        }
        
        const data = fetch("/api/signin", {
            method: "POST",
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then((res) => res.json()).then((data) => setUser(data));
    }
    
    return (
        <div className="sigin-page flex items-center justify-center h-screen w-full absolute">
            <Home className="background-page"/>
            <div className="pantalla-borrosa h-full w-full absolute"></div>
            <div className="element-holder grid grid-rows-4 grid-flow-col gap-10 p-5 h-72 justify-center filter z-10 absolute">
                <h1 className="sigin-text text-start mt-0">SIGN IN</h1>
                <input type="text" 
                       className="input text-center w-72 h-10 border rounded-sm transition-opacity" 
                       placeholder="Email"
                       value={email}
                       onFocus={handleFocus} 
                       onBlur={handleUnFocusU}
                       onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" 
                       className="input text-center w-72 h-10 border rounded-sm" 
                       placeholder="Password"
                       value={password}
                       onFocus={handleFocus}
                       onBlur={handleUnFocusP}
                       onChange={(e) => setPassword(e.target.value)}></input>
                <button className="login-button w-44 h-10 border transition ease-in place-self-end delay-100 hover:bg-slate-400 active:bg-red-600"
                       onClick={handleClick}>LOG IN</button>
                <div className='hover-background absolute'></div>
            </div>
        </div>
    );
}