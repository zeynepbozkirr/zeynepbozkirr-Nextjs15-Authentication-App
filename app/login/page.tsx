'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import LoginForm from '../../components/loginForm/index'
import { Container } from '@mui/material'
import { useAuth } from '@/service/useAuth'
import ProtectedRoute from '../../route/route'

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    login(email, password)
    router.push('/dashboard')
  }

  return (
    <ProtectedRoute>
      <Container maxWidth="sm" style={{ marginTop: '5rem' }}>
        <LoginForm
          onLogin={handleSubmit}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      </Container>
    </ProtectedRoute>
  )
}

export default LoginPage
