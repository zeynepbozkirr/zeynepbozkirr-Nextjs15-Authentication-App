import { useRandomPieData } from '@/utils/data'
import React from 'react'
import { PieChart, Pie } from 'recharts'

const PieChartComp: React.FC = () => {
  const { data: pieData, isLoading: isPieDataLoading } = useRandomPieData()

  if (isPieDataLoading) {
    return <div>Loading...</div>
  }

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        startAngle={360}
        endAngle={0}
        data={pieData}
        outerRadius={80}
        fill="#8884d8"
        label
      />
    </PieChart>
  )
}

export default PieChartComp
