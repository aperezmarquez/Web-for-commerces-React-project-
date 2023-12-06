"use client"

import { useRouter } from "next/router";
import { useState } from "react";

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
            <div className="h-full w-full bg-black bg-opacity-10 filter blur-lg -z-10 absolute"></div>
            <div className="grid grid-rows-4 grid-flow-col place-items-center gap-10 p-5 bg-white h-80 justify-center filter z-10 absolute">
                <h1 className="text-center mt-3">SIGN UP</h1>
                <input type="text" 
                       className="text-center w-72 h-12 border rounded-full transition-opacity" 
                       placeholder="Email" 
                       onFocus={handleFocus} 
                       onBlur={handleUnFocusU}
                       onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" 
                       className="text-center w-72 h-12 border rounded-full" 
                       placeholder="Password"
                       onFocus={handleFocus}
                       onBlur={handleUnFocusP}
                       onChange={(e) => setPassword(e.target.value)}></input>
                <button className="w-44 h-10 border transition ease-in delay-100 hover:bg-slate-400 active:bg-red-600">REGISTER</button>
            </div>
        </div>
    );
}