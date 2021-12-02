import React, { useRef, useState} from 'react'
import './register.css'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from "react-router-dom"

export default function Register() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)


    }

    return (
        <div className="register">
            <form className="register-form" onSubmit={handleSubmit}>
                <h1 className="title">Register</h1>

                <div className="add-container">

                    <label for="email">Email</label>
                    <input type="email" ref={emailRef} placeholder="Enter E-Mail" name="email" required />

                    <label for="psw">Password</label>
                    <input type="password" ref={passwordRef} placeholder="Enter Password" name="psw" required />

                    <label for="repeat-psw">Repeat Password</label>
                    <input type="password" ref={passwordConfirmRef} placeholder="Repeat Password" name="repeat-psw" required />

                    <button disabled={loading} class="button-submit" type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}
