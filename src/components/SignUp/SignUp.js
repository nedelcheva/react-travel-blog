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
        setLoading(false)


    }


    return (
        <div className="signUp">
            <form className="signUp-form" onSubmit={handleSubmit}>
                <h1 className="title">Sign Up</h1>

                <div className="add-container">

                    <label for="email">Email</label>
                    <input type="email" placeholder="Enter E-Mail" ref={emailRef} name="email" required />

                    <label for="psw">Password</label>
                    <input type="password" placeholder="Enter Password" ref={passwordRef} name="psw" required />

                    <button disabled={loading} class="button-submit" type="submit">Sing Up</button>
                </div>
            </form>
        </div>
    )
}
