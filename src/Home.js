import React from 'react'
import { useNavigate } from 'react-router'
import './Home.css'
export default function Home() {
    const nav = useNavigate();
    const navigate = () => {
        nav("/Login")
    }
    return (
        <>
        <div className='homepage'>
            <><h1> WELCOME TO SHOPPY </h1>
                
            <p style={{ 'color': 'red' }}>
                '''we always gives the first priority to our ("Quality")''''  </p>
                <button onClick={navigate}>Start</button></><br></br><br></br><br></br><br></br>
          
        </div>
        
        </>
    )
}
