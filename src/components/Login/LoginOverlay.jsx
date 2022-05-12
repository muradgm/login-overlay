import { useState, useRef } from 'react'
import Login from './Login'
import Signup from './Signup'

import './LoginOverlay.scss'

export default function LoginOverlay({ open, setOpen }) {
    if (!open) {
        return null;
    }
    const [change, setChange] = useState(false)
    
    const handleFormChange = (e) => {
        setChange(!change)
    }


    return (
        <div className="LoginOverlay" onClick={(e) => setOpen(false)}>
            {!change ? <Login handleFormChange={handleFormChange}/> : <Signup handleFormChange={handleFormChange}/>}
        </div>
    )
}
