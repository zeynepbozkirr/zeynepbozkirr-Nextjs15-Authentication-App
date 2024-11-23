import React, { useEffect, useState } from 'react'
import { XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area } from 'recharts'
import { useRandomLineData } from '../../../utils/data'

const AreaChartComp: React.FC = () => {
  const { data: lineData, isLoading: isLineDataLoading } = useRandomLineData()
  if (isLineDataLoading) {
    return <div>Loading...</div>
  }
  return (
    <AreaChart
      width={400}
      height={400}
      data={lineData}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      <Area
        type="monotone"
        dataKey="pv"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
  )
}
export default AreaChartComp
