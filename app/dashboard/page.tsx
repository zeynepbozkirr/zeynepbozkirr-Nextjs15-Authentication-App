'use client'

import { Grid2 } from '@mui/material'
import LineChartComp from '@/components/charts/lineCharts'
import PieChartComp from '@/components/charts/piecharts.tsx'
import AreaChartComp from '@/components/charts/areaCharts'
import ProtectedRoute from '@/route/route'
import { useEffect, useState } from 'react'
import LoginPage from '@/components/loading'

const DashboardPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh',
        }}
      >
        <LoginPage />
      </div>
    )
  }
  return (
    <ProtectedRoute>
      <Grid2
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: '15vh' }}
      >
        <Grid2 size={{ xs: 8, md: 6 }} display="flex" justifyContent="center">
          <LineChartComp />
        </Grid2>
        <Grid2 size={{ xs: 8, md: 6 }} display="flex" justifyContent="center">
          <AreaChartComp />
        </Grid2>
        <Grid2 size={{ xs: 8, md: 6 }} display="flex" justifyContent="center">
          <PieChartComp />
        </Grid2>
      </Grid2>
    </ProtectedRoute>
  )
}

export default DashboardPage
