import React from 'react'
import { Radar } from 'react-chartjs-2'
import '../App.css'
import 'chart.js/auto'

const labels=['Jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
const options={
  plugins:{
    legend:{
      position:'bottom'
    },
    title:{
      display:true,
      text:"Radar Chart Expense Tracker"
    }
  }
}
const data={
  labels,
  datasets:[
    {
      label:'2021 Expenses',
      data:[100,200,300,400,500,600,700,800,900,1000,1100,1200],
      backgroundColor:'lightgreen'
    },
    {
      label:'2022 Expenses',
      data:[700,800,900,1000,1100,1200,1300,200,300,400,500,600],
      backgroundColor:'pink'
    }
  ]
}
const Radarchart = () => {
  return (
    <div className='chart'>
      <Radar data={data} options={options}/>
    </div>
  )
}

export default Radarchart