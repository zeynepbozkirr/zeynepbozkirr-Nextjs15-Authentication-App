// hooks/useAuth.ts
import { useState, useEffect } from 'react'

export const loginService = (email: string, password: string): boolean => {
  if (email === 'zeynep@test.com' && password === '12345') {
    localStorage.setItem('auth-token', 'mock-token-123')
    return true
  }
  return false
}

export const logoutService = (): void => {
  localStorage.removeItem('auth-token')
}

export const checkAuthService = (): boolean => {
  const token = localStorage.getItem('auth-token')
  return token !== null
}

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const isLoggedIn = checkAuthService()
    console.log(isLoggedIn, 'isLoggedIn')
    setIsAuthenticated(isLoggedIn)
  }, [])

  const login = (email: string, password: string) => {
    const success = loginService(email, password)
    if (success) {
      setIsAuthenticated(true)
    }
  }

  const logout = () => {
    logoutService()
    setIsAuthenticated(false)
  }

  return { isAuthenticated, login, logout }
}
