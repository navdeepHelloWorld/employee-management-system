import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        try {
            // Initialize localStorage with default data
            setLocalStorage()
            
            // Get data after initialization
            const data = getLocalStorage()
            
            if (data && data.employees && data.admin) {
                setUserData(data)
            } else {
                throw new Error('Failed to load user data')
            }
        } catch (err) {
            setError(err.message)
            console.error('Error initializing auth data:', err)
        } finally {
            setIsLoading(false)
        }
    }, [])
    
    if (isLoading) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>
    }
    
    if (error) {
        return <div className="flex items-center justify-center h-screen text-red-500">Error: {error}</div>
    }

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider