import Navbar from '@/components/navbar'
import ProtectedRoute from '@/route/route'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
