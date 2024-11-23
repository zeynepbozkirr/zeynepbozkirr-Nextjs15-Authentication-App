'use client'
import React from 'react'
import Link from 'next/link'
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material'
import { useAuth } from '@/service/useAuth'
import { useRouter } from 'next/navigation'
import styles from './styles.module.css'

function Navbar() {
  const { logout } = useAuth()
  const router = useRouter()

  const handleLogout = (e: React.FormEvent) => {
    logout()
    router.push('/login')
  }
  return (
    <AppBar position="fixed" className={styles.navbar}>
      <Toolbar className={styles.toolbar}>
        <Container
          maxWidth="lg"
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Link href="/" passHref>
            <Button
              color="inherit"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <Typography variant="h6">Home</Typography>
            </Button>
          </Link>

          <div>
            <Link href="/dashboard/abouth" passHref>
              <Button color="inherit">Abouth</Button>
            </Link>
            <Link href="/dashboard/contact" passHref>
              <Button color="inherit">Contact</Button>
            </Link>

            <Button color="inherit" onClick={handleLogout}>
              LOGOUT
            </Button>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
