import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('auth-token')

    if (token) {
      changeStatus(false)
      router.push('/dashboard')
    } else {
      changeStatus(false)
      router.push('/login')
    }
  }, [])

  const changeStatus = (value: boolean) => {
    setTimeout(() => setLoading(value), 500)
  }

  return loading ? <></> : <>{children}</>
}

export default ProtectedRoute
