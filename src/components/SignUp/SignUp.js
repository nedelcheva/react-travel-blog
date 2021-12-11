import React, { useRef, useState } from 'react'
import './signUp.css'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from "react-router-dom"

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch {
            setError('Failed to login')
        }

    }


    return (
        <div className="signUp">
            <form className="signUp-form" onSubmit={handleSubmit}>
                <h1 className="title">Login</h1>

                <div className="add-container">

                    <label name="email">Email</label>
                    <input type="email" placeholder="Enter E-Mail" ref={emailRef} name="email" required />

                    <label name="psw">Password</label>
                    <input type="password" placeholder="Enter Password" ref={passwordRef} name="psw" required />

                    <button disabled={loading} className="button-submit" type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}
