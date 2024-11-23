import React, { useEffect, useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { useRandomLineData } from '../../../utils/data'

const LineChartComp: React.FC = () => {
  const { data: lineData, isLoading: isLineDataLoading } = useRandomLineData()

  if (isLineDataLoading) {
    return <div>Loading...</div>
  }

  return (
    <LineChart data={lineData} width={400} height={400}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      <Line type="monotone" dataKey="amt" stroke="#ffc658" />
    </LineChart>
  )
}
export default LineChartComp
