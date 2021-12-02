import React from 'react'
import {Route, Navigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function privateRoute({ children}) {
    const currentUser= useAuth()

    return currentUser ? children : <Navigate to="/login"/>
}
