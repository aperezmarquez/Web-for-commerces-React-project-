"use client"
import './sigin.css';
import Home from '../page.js'

export default function Sig_in () {
    function handleFocus(event) {
        event.target.placeholder = "";
    }

    function handleUnFocusU(event) {
        event.target.placeholder = "Email";
    }

    function handleUnFocusP(event) {
        event.target.placeholder = "Password";
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
                       onFocus={handleFocus} 
                       onBlur={handleUnFocusU}></input>
                <input type="password" 
                       className="input text-center w-72 h-10 border rounded-sm" 
                       placeholder="Password"
                       onFocus={handleFocus}
                       onBlur={handleUnFocusP}></input>
                <button className="login-button w-44 h-10 border transition ease-in place-self-end delay-100 hover:bg-slate-400 active:bg-red-600">LOG IN</button>
                <div className='hover-background absolute'></div>
            </div>
        </div>
    );
}