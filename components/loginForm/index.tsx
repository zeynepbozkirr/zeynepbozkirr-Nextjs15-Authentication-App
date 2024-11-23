'use client'

import React from 'react'
import { TextField, Button, Typography } from '@mui/material'
import styles from './styles.module.css'

interface LoginFormProps {
  onLogin: (email: string, password: string) => void
  email: string
  password: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
  errorMessage?: string
}

const LoginForm: React.FC<LoginFormProps> = ({
  onLogin,
  email,
  password,
  setEmail,
  setPassword,
  errorMessage,
}) => {
  return (
    <form className={styles.form} onSubmit={onLogin}>
      <Typography variant="h4" align="center" className={styles.title}>
        Login
      </Typography>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMessage && (
        <Typography color="error" className={styles.error}>
          {errorMessage}
        </Typography>
      )}
      <Button variant="contained" color="primary" fullWidth type="submit">
        Login
      </Button>

      <Typography>email: zeynep@test.com </Typography>
      <Typography> password: 12345</Typography>
    </form>
  )
}

export default LoginForm
